// src/api/apis.js
import axios from "axios";
import { ACCESS_TOKEN } from "./constans";

// API general (/api/)
export const apiGeneral = axios.create({
    baseURL: import.meta.env.VITE_API_URL_GENERAL,
    withCredentials: true,
});

// API login (/login/)
export const apiLogin = axios.create({
    baseURL: import.meta.env.VITE_API_URL_LOGIN,
    withCredentials: true,
});

// API crear usuario
export const apiCreateUsuario = axios.create({
    baseURL: import.meta.env.VITE_API_URL_CREATE,
    withCredentials: true,
});

// Api Empresas
export const apiEmpresa = axios.create({
    baseURL: import.meta.env.VITE_API_URL_EMPRESA,
    withCredentials: true,
});
// Api Perfil
export const apiPerfil = axios.create({
    baseURL: import.meta.env.VITE_API_URL_PERFIL,
    withCredentials: true,
});
// Interceptor para añadir el token a ambas instancias
const setAuthHeader = (api) => {
    api.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem(ACCESS_TOKEN);
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );
};

const setAuthResponseInterceptor = (api) => {
  api.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config;

      // Si ya intentó refrescar, no lo reintenta en bucle
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          // Intenta refresh usando apiLogin (asegúrate que sea la que tiene el endpoint correcto)
          await apiLogin.post("token/refresh/", {}, { withCredentials: true });

          // Si funciona, reintenta la petición original con el nuevo token
          return api(originalRequest);
        } catch (refreshError) {
          // Si falla el refresh → limpia token y redirige al login
          localStorage.removeItem(ACCESS_TOKEN);
          toast.error("Sesión expirada, por favor inicia sesión de nuevo.");
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
};
[apiGeneral, apiLogin, apiCreateUsuario, apiEmpresa, apiPerfil].forEach(api => {
  setAuthHeader(api);
  setAuthResponseInterceptor(api);
});