// Importa el componente Navigate de react-router-dom para redirigir si no hay autorización
import { Navigate } from "react-router-dom";
// Importa hooks de React
import { useState, useEffect } from "react";
// Importa instancia de la API para login/verificación
import { apiLogin } from "../api/apis";
// Componente de carga para mostrar mientras se valida la autenticación
import Loading from "./Loading/loading";
// Importa la función toast para mostrar mensajes emergentes
import { toast } from "react-toastify";

/**
 * Componente que protege rutas privadas.
 * Solo permite el acceso si hay una cookie válida y el usuario tiene el rol adecuado (si se especifica).
 * Si no se cumple la condición, redirige al login o muestra un mensaje.
 */
function ProtectRoute({ children, rol = null }) {
  // Estado que indica si el usuario está autorizado (null: en proceso, true: permitido, false: denegado)
  const [isAuthorized, setIsAuthorized] = useState(null);

  // useEffect se ejecuta al montar el componente para verificar autenticación
  useEffect(() => {
    verifyAuth();
  }, []);

  // Función para verificar si el usuario está autenticado
  const verifyAuth = async () => {
    try {
      // Llama al endpoint /verify/ para validar la sesión del usuario usando cookies
      const res = await apiLogin.get("verify/", { withCredentials: true });

      // Si la verificación es exitosa
      if (res.status === 200) {
        const user = res.data;

        // Si se requiere un rol específico y no coincide con el del usuario, deniega acceso
        if (rol && user.rol !== rol) {
          toast.warning("No tienes permisos para acceder a esta ruta.");
          setIsAuthorized(false);
          return;
        }

        // Autorización concedida
        setIsAuthorized(true);
      }
    } catch (error) {
      // Si el token expiró (401), intenta refrescar el token
      if (error.response?.status === 401) {
        await handleRefresh();
      } else {
        // Otro tipo de error → acceso denegado
        setIsAuthorized(false);
      }
    }
  };

  // Función que intenta refrescar el token de acceso
  const handleRefresh = async () => {
    try {
      // Llama al endpoint /token/refresh/ para obtener un nuevo token
      const res = await apiLogin.post("token/refresh/", {}, { withCredentials: true });

      // Si el refresh es exitoso, vuelve a verificar la autenticación
      if (res.status === 200) {
        await verifyAuth();
      } else {
        setIsAuthorized(false);
      }
    } catch {
      // Si falla el refresh, muestra error y deniega acceso
      toast.error("Sesión expirada, inicia sesión de nuevo.");
      setIsAuthorized(false);
    }
  };

  // Mientras se verifica la autenticación, muestra componente de carga
  if (isAuthorized === null) return <Loading />;

  // Si está autorizado, muestra los hijos de la ruta (componente protegido), de lo contrario redirige al login
  return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectRoute;
