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
            // Llama al endpoint /verify/. Si el token de acceso expira, 
            // el interceptor de Axios intentará refrescarlo automáticamente.
            const res = await apiLogin.get("verify/", {
                headers: { 'Content-Type': 'application/json' },
            });

            if (res.status === 200) {
                const user = res.data;

                if (rol && user.rol !== rol) {
                    toast.warning("No tienes permisos para acceder a esta ruta.");
                    navigate("/login");
                    return;
                }

                setIsAuthorized(true);
            }
        } catch (error) {

            console.error("Fallo de autenticación o Refresh Token expirado:", error);
            toast.error("Sesión expirada, inicia sesión de nuevo.");

            localStorage.removeItem(ACCESS_TOKEN); 
            localStorage.removeItem(REFRESH_TOKEN); 

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
