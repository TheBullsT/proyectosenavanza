import { Navigate } from "react-router-dom"; // Para redirigir si el usuario no está autorizado
import { jwtDecode } from "jwt-decode"; // Para decodificar el token JWT
import { apiLogin } from "../api/apis"; // Instancia personalizada de Axios para peticiones
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../api/constans"; // Constantes para acceder a los tokens en localStorage
import { useState, useEffect } from "react"; // Hooks de React
import Loading from "./Loading/loading"; // Componente de carga mientras se verifica autorización
import { toast } from "react-toastify"; // Librería para mostrar notificaciones

/**
 * Componente que protege rutas privadas en React.
 * Verifica si hay un token JWT válido, y si se proporciona un rol, también lo valida.
 *
 * @param {JSX.Element} children - Componente hijo que se renderiza si se autoriza el acceso
 * @param {string|null} rol - Rol requerido para acceder (por ejemplo: 'admin' o 'empresa')
 */
function ProtectRoute({ children, rol = null }) {
    const [isAuthorized, setIsAuthorized] = useState(null); // Estado que indica si el usuario está autorizado

    // Se ejecuta al montar el componente
    useEffect(() => {
        auth().catch(() => setIsAuthorized(false));
    }, []);

    /**
     * Intenta refrescar el token si el de acceso ha expirado
     */
    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN); // Obtenemos el refresh token del almacenamiento

        try {
            const res = await apiLogin.post("token/refresh/", { refresh: refreshToken });

            if (res.status === 200) {
                // Si el token se refresca exitosamente, lo guardamos en localStorage
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                const decoded = jwtDecode(res.data.access);
                if (rol && decoded.role !== rol) { // Verificamos de nuevo su rol
                    toast.warning("Acceso no autorizado.");
                    setIsAuthorized(false);
                    return;
                }
                setIsAuthorized(true); // Autorizamos el acceso
            } else {
                setIsAuthorized(false); // Si no se puede refrescar, denegamos el acceso
            }
        } catch (error) {
            toast.error("Sesión expirada. Inicia sesión de nuevo.");
            setIsAuthorized(false);
        }
    };

    /**
     * Función principal de autenticación:
     * Verifica si el token existe, si no ha expirado y si el rol coincide (si se requiere)
     */
    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN); // Obtenemos el token de acceso

        if (!token) {
            setIsAuthorized(false);     // No hay token → no autorizado
            return;
        }

        const decoded = jwtDecode(token); // Decodificamos el token JWT
        const now = Date.now() / 1000;    // Hora actual en segundos (para comparar con `exp`)

        // Si el token ya expiró, intentamos renovarlo
        if (decoded.exp < now) {
            await refreshToken();
            return;
        }

        // Si se requiere un rol específico, validamos que el token lo tenga y coincida
        if (rol && decoded.role !== rol) {
            toast.warning("Acceso no autorizado."); // Rol incorrecto
            setIsAuthorized(false);
            return;
        }

        // Todo correcto → autorizado
        setIsAuthorized(true);
    };

    // Mientras aún no se sabe si está autorizado o no, mostramos el componente de carga
    if (isAuthorized === null) return <Loading />;

    // Si está autorizado, se muestra el contenido hijo. Si no, se redirige al login
    return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectRoute;
