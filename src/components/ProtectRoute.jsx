// Importa el hook useNavigate de react-router-dom para redireccionar programáticamente
import { useNavigate } from "react-router-dom";

// Importa hooks de estado y efecto de React
import { useState, useEffect } from "react";

// Importa la instancia de API configurada para inicio de sesión y verificación
import { apiLogin } from "../api/apis";

// Importa un componente de carga que se muestra mientras se valida la autenticación
import Loading from "./Loading/loading";

// Importa la función toast para mostrar notificaciones emergentes
import { toast } from "react-toastify";

/**
 * Componente que protege rutas privadas.
 * Solo permite el acceso si hay una cookie JWT válida y, opcionalmente,
 * si el usuario tiene el rol correcto.
 * Si no cumple, redirige al inicio de sesión.
 *
 * @param {ReactNode} children - Componente(s) hijo(s) a renderizar.
 * @param {string | null} rol - Rol requerido para acceder a la ruta (ej: "admin" o "empresa").
 */
function ProtectRoute({ children, rol = null }) {
    // Estado que indica si el usuario está autorizado:
    // null = en proceso, true = permitido, false = denegado.
    const [isAuthorized, setIsAuthorized] = useState(null);

    // Hook de navegación para redirigir manualmente
    const navigate = useNavigate();

    // Efecto que se ejecuta una vez cuando se monta el componente
    useEffect(() => {
        verifyAuth();
    }, []);

    // Función que verifica si el usuario está autenticado (token válido)
    const verifyAuth = async () => {
        try {
            // Llama al endpoint /verify/
            const res = await apiLogin.get("verify/", {});

            if (res.status === 200) {
                const user = res.data;

                // 1. Lógica de Redirección por Rol (si rol es null)
                if (rol === null) {
                    if (user.rol === 'admin') {
                        navigate("/adminhome", { replace: true });
                    } else {
                        navigate("/home", { replace: true });
                    }
                    return;
                }

                // 2. Lógica de Verificación de Rol
                if (rol && user.rol !== rol) {
                    toast.warning("No tienes permisos para acceder a esta ruta.");
                    navigate("/login");
                    return;
                }

                // 3. Permiso Concedido
                setIsAuthorized(true);
            }
        } catch (error) {

            console.error("Fallo de autenticación o Refresh Token expirado:", error);
            toast.error("Sesión expirada, inicia sesión de nuevo.");

            // 1. Limpieza de sesión
            localStorage.clear();

            // 2. CRÍTICO: Detener la autorización.
            setIsAuthorized(false);

            // 3.CAMBIO CLAVE PARA DEPURAR:
            // Comenta o elimina la línea de redirección interna
            navigate("/login"); // <--- COMENTAR O ELIMINAR ESTA LÍNEA SOLO PARA DEPURAR

        }
    };

    // Mientras se verifica la autenticación, muestra el componente de carga
    if (isAuthorized === null) return <Loading />;

    // Si está autorizado, renderiza los hijos de la ruta protegida.
    // Si no, no muestra nada (porque ya redirigió a /login).
    return isAuthorized ? children : null;
}

// Exporta el componente para usarlo en las rutas privadas
export default ProtectRoute;