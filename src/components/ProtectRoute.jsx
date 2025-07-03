import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiLogin } from "../api/apis";
import Loading from "./Loading/loading";
import { toast } from "react-toastify";

/**
 * Protege rutas privadas usando cookies y verify.
 * Si no hay cookie o el rol no coincide → redirige a login.
 */
function ProtectRoute({ children, rol = null }) {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    verifyAuth();
  }, []);

  const verifyAuth = async () => {
    try {
      const res = await apiLogin.get("verify/", { withCredentials: true });

      if (res.status === 200) {
        const user = res.data;

        if (rol && user.rol !== rol) {
          toast.warning("No tienes permisos para acceder a esta ruta.");
          setIsAuthorized(false);
          return;
        }

        setIsAuthorized(true);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        await handleRefresh();
      } else {
        setIsAuthorized(false);
      }
    }
  };

  const handleRefresh = async () => {
    try {
      const res = await apiLogin.post("token/refresh/", {}, { withCredentials: true });

      if (res.status === 200) {
        await verifyAuth();
      } else {
        setIsAuthorized(false);
      }
    } catch {
      toast.error("Sesión expirada, inicia sesión de nuevo.");
      setIsAuthorized(false);
    }
  };

  if (isAuthorized === null) return <Loading />;

  return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectRoute;
