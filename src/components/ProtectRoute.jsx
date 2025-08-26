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
            // Llama al endpoint /verify/ para validar la sesión actual
            const res = await apiLogin.get("verify/", {
                headers: { 'Content-Type': 'application/json' },
            });

            // Si la verificación es exitosa (HTTP 200)
            if (res.status === 200) {
                const user = res.data;

                // Si se requiere un rol específico y no coincide, deniega acceso
                if (rol && user.rol !== rol) {
                    toast.warning("No tienes permisos para acceder a esta ruta.");
                    navigate("/login"); // Redirige manualmente al inicio de sesión
                    return;
                }

                // Autorización concedida
                setIsAuthorized(true);
            }
        } catch (error) {
            // Si falla por token expirado, intenta refrescar el token
            if (error.response?.status === 401) {
                await handleRefresh();
            } else {
                // Si es otro error, redirige directamente al inicio de sesión
                navigate("/login");
            }
        }
    };

    // Función que intenta refrescar el token de acceso usando el refresh_token
    const handleRefresh = async () => {
        try {
            // Llama al endpoint /token/refresh/ para obtener un nuevo access_token
            const res = await apiLogin.post(
                "token/refresh/",
                {},
                { headers: { 'Content-Type': 'application/json' } }
            );

            // Si el refresh es exitoso, vuelve a verificar la autenticación
            if (res.status === 200) {
                await verifyAuth();
            } else {
                // Si falla, muestra mensaje y redirige
                toast.error("Sesión expirada, inicia sesión de nuevo.");
                navigate("/login");
            }
        } catch {
            // Si hay error en el refresh (token expirado o inválido)
            toast.error("Sesión expirada, inicia sesión de nuevo.");
            navigate("/login");
        }
    };

    // Mientras se verifica la autenticación, muestra el componente de carga
    if (isAuthorized === null) return <Loading />;

    // Si está autorizado, renderiza los hijos de la ruta protegida.
    // Si no, no muestra nada (porque ya redirigió).
    return isAuthorized ? children : null;
}

// Exporta el componente para usarlo en las rutas privadas
export default ProtectRoute;
