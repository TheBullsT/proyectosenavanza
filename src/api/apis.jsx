import axios from "axios";
import { toast } from "react-toastify";

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

// API Empresas
export const apiEmpresa = axios.create({
  baseURL: import.meta.env.VITE_API_URL_EMPRESA,
  withCredentials: true,
});

// API Perfil
export const apiPerfil = axios.create({
  baseURL: import.meta.env.VITE_API_URL_PERFIL,
  withCredentials: true,
});

// Interceptor solo para refrescar con cookies
const setAuthResponseInterceptor = (api) => {
  api.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          await apiLogin.post("token/refresh/", {}, { withCredentials: true });
          return api(originalRequest);
        } catch (refreshError) {
          toast.error("Sesión expirada, inicia sesión de nuevo.");
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );
};

[apiGeneral, apiLogin, apiEmpresa, apiPerfil].forEach(api => {
  setAuthResponseInterceptor(api);
});
