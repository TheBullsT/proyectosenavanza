// src/api/apis.js
import axios from "axios";
import { ACCESS_TOKEN } from "./constans";

// API general (/api/)
export const apiGeneral = axios.create({
  baseURL: import.meta.env.VITE_API_URL_GENERAL,
});

// API login (/login/)
export const apiLogin = axios.create({
  baseURL: import.meta.env.VITE_API_URL_LOGIN,
});

// API crear empresa
export const apiCreateEmpresa = axios.create( {
  baseURL: import.meta.env.VITE_API_URL_CREATE,
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

setAuthHeader(apiGeneral);
setAuthHeader(apiLogin);
setAuthHeader(apiCreateEmpresa);
