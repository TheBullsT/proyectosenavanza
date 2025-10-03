import axios from "axios";
import { toast } from "react-toastify";
// Asegúrate de que REFRESH_TOKEN también esté importado si lo usas en otros sitios
import { ACCESS_TOKEN } from "./constans";

// =======================================================
// 1. CONFIGURACIÓN BASE DINÁMICA
// =======================================================

const BASE_URL = import.meta.env.VITE_BASE_URL;

const createEndpointUrl = (path) => `${BASE_URL}${path}`;

export const apiLogin = axios.create({
    baseURL: createEndpointUrl("/login/"),
    withCredentials: true,
});

// =======================================================
// 2. FUNCIÓN CENTRAL DE INTERCEPTOR (Respuesta)
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
                    // Llamada al endpoint de refresh
                    const refreshResponse = await apiLogin.post("token/refresh/", {}, { withCredentials: true });

                    // Guardar el nuevo access token
                    const { access } = refreshResponse.data;
                    localStorage.setItem(ACCESS_TOKEN, access);

                    // Configura el encabezado del token para la petición original
                    originalRequest.headers.Authorization = `Bearer ${access}`;

                    // Se reintenta la petición original con el nuevo token
                    return apiInstancia(originalRequest);
                } catch (refreshError) {
                    // Si falla el refresco, la sesión ha terminado.
                    toast.error("Sesión expirada, inicia sesión de nuevo.");
                    window.location.href = "/login";
                    return Promise.reject(refreshError);
                }
            }
            return Promise.reject(error);
        }
    );
};

// =======================================================
// 3. FUNCIÓN FACTORÍA Y NUEVO INTERCEPTOR (Solicitud)
// =======================================================

/**
 * Añade un interceptor de SOLICITUD para inyectar el token de acceso.
 * @param {object} apiInstancia - La instancia de Axios a la que aplicar el interceptor.
 */
const setAuthRequestInterceptor = (apiInstancia) => {
    apiInstancia.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem(ACCESS_TOKEN);

            // Si el token existe, lo añade al encabezado de la solicitud
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
};

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
    setAuthRequestInterceptor(instance); // Aplicamos también el interceptor de solicitud
    return instance;
};

// =======================================================
// 4. INSTANCIAS FINALES (DRY y CONCATENADAS)
// =======================================================

// A apiLogin solo le aplicamos el interceptor de respuesta.
// No necesita el de solicitud ya que no usa un token para sus peticiones.
setAuthResponseInterceptor(apiLogin);

// Instancias de API: todas usan la función createEndpointUrl
// Ahora, la factoría createApiInstance ya les aplica AMBOS interceptores
export const apiGeneral = createApiInstance(createEndpointUrl("/api/"));
export const apiDiagnostico = createApiInstance(createEndpointUrl("/apidiagnos/"));
export const apiCreateUser = createApiInstance(createEndpointUrl("/api/user/"));
export const apiEmpresa = createApiInstance(createEndpointUrl("/api/empresa/"));
export const apiPerfil = createApiInstance(createEndpointUrl("/api/perfil/"));