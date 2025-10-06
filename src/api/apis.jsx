import axios from "axios";
import { toast } from "react-toastify";

// =======================================================
// 1. CONFIGURACIÓN BASE DINÁMICA
// =======================================================

const BASE_URL = import.meta.env.VITE_BASE_URL;

const createEndpointUrl = (path) => `${BASE_URL}${path}`;

export const apiLogin = axios.create({
    baseURL: createEndpointUrl("/login/"),
    withCredentials: true, // Correcto para Cookies
});

// =======================================================
// 2. FUNCIÓN CENTRAL DE INTERCEPTOR (Respuesta)
// =======================================================

/**
 * Añade un interceptor de respuesta para manejar el error 401 
 * (No Autorizado) intentando refrescar el token de acceso con la cookie.
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
                    // ... (Intenta el refresco)
                    await apiLogin.post("token/refresh/", {}, { withCredentials: true });

                    // ... (Reintenta la petición original)
                    return apiInstancia(originalRequest);
                } catch (refreshError) {
                    toast.error("Sesión expirada, inicia sesión de nuevo.");
                    localStorage.clear();
                    // window.location.href = "/login"; // Redirección Fuerte
                    return Promise.reject(refreshError);
                }
            }
            return Promise.reject(error);
        }
    );
};
// =======================================================
// 3. FUNCIÓN FACTORÍA (Sin Interceptor de Solicitud)
// =======================================================

/**
 * Crea una nueva instancia de Axios y le aplica solo el interceptor de respuesta.
 * @param {string} baseURL - La URL base para esta API.
 * @returns {object} Una instancia de Axios configurada.
 */
const createApiInstance = (baseURL) => {
    const instance = axios.create({
        baseURL: baseURL,
        withCredentials: true, //  Correcto para Cookies
    });
    setAuthResponseInterceptor(instance);
    return instance;
};

// =======================================================
// 4. INSTANCIAS FINALES
// =======================================================

// Aplicamos el interceptor al apiLogin que creamos arriba
setAuthResponseInterceptor(apiLogin);

// Instancias de API: todas usan la función createEndpointUrl
// Ahora, la factoría createApiInstance solo aplica el interceptor de respuesta
export const apiGeneral = createApiInstance(createEndpointUrl("/api/"));
export const apiDiagnostico = createApiInstance(createEndpointUrl("/apidiagnos/"));
export const apiCreateUser = createApiInstance(createEndpointUrl("/api/user/"));
export const apiEmpresa = createApiInstance(createEndpointUrl("/api/empresa/"));
export const apiPerfil = createApiInstance(createEndpointUrl("/api/perfil/"));