import axios from "axios";
import { toast } from "react-toastify";

// =======================================================
// 1. CONFIGURACIÓN BASE DINÁMICA
// =======================================================

// CLAVE: Obtenemos la URL base única del .env
const BASE_URL = import.meta.env.VITE_BASE_URL;

/**
 * Función auxiliar para concatenar la URL base con el path específico.
 * @param {string} path - El endpoint que se añade a la URL base.
 * @returns {string} La URL completa.
 */
const createEndpointUrl = (path) => `${BASE_URL}${path}`;


// La instancia de login se crea primero porque la usa el interceptor
export const apiLogin = axios.create({
  baseURL: createEndpointUrl("/login/"),
  withCredentials: true,
});

// =======================================================
// 2. FUNCIÓN CENTRAL DE INTERCEPTOR
// =======================================================

/**
 * Añade un interceptor de respuesta para manejar el error 401 
 * (No Autorizado) intentando refrescar el token de acceso.
 * @param {object} apiInstancia - La instancia de Axios a la que aplicar el interceptor.
 */
const setAuthResponseInterceptor = (apiInstancia) => {
  apiInstancia.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      // Si es un 401 y no es un intento de reintento previo
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          // Llamada al endpoint de refresh usando apiLogin
          await apiLogin.post("token/refresh/", {}, { withCredentials: true });
          
          // Se reintenta la petición original con el nuevo token
          return apiInstancia(originalRequest); 
        } catch (refreshError) {
          // Si falla el refresco, la sesión ha terminado.
          toast.error("Sesión expirada, inicia sesión de nuevo.");
          // Redirección al login
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );
};

// =======================================================
// 3. FUNCIÓN FACTORÍA PARA CREAR INSTANCIAS
// =======================================================

/**
 * Crea una nueva instancia de Axios y le aplica el interceptor de autenticación.
 * @param {string} baseURL - La URL base para esta API (importada de .env).
 * @returns {object} Una instancia de Axios configurada.
 */
const createApiInstance = (baseURL) => {
  const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
  });
  setAuthResponseInterceptor(instance);
  return instance;
};

// =======================================================
// 4. INSTANCIAS FINALES (DRY y CONCATENADAS)
// =======================================================

// Aplicamos el interceptor al apiLogin que creamos arriba
setAuthResponseInterceptor(apiLogin); 

// Instancias de API: todas usan la función createEndpointUrl
export const apiGeneral = createApiInstance(createEndpointUrl("/api/"));
export const apiDiagnostico = createApiInstance(createEndpointUrl("/apidiagnos/"));
export const apiCreateUser = createApiInstance(createEndpointUrl("/api/user/"));
export const apiEmpresa = createApiInstance(createEndpointUrl("/api/empresa/"));
export const apiPerfil = createApiInstance(createEndpointUrl("/api/perfil/"));