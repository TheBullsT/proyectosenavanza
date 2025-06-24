import axios from "axios";

// URL base
const BASE_URL = 'http://127.0.0.1:8000/api/';

// URL ADMIN crear
const EMPRESA_CREATE = `${BASE_URL}empresa/'`;

// URL login
const LOGIN_URL = 'http://127.0.0.1:8000/login/'

// URL Login Empresa
const LOGIN_URL_EMPRESA = `${LOGIN_URL}loginEmpresa/`; 


// URL admin
const LOGIN_URL_ADMIN = `${LOGIN_URL}loginAdmin/`; 
const CREATE_URL_ADMIN = `${EMPRESA_CREATE}create/`;


// LOGIN EMPRESA

export const login_empresa = async (correo_empresa, contraseña) => {
  try {
    const response = await axios.post(LOGIN_URL_EMPRESA, 
        {username: correo_empresa,  password: contraseña,}
    );

    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    return true;
  } catch (error) {
    console.error("Error al iniciar sesión", error);
    return false;
  }
};

// LOGIN ADMIN

export const login_admin = async (correo, contraseña) => {
    try{
        const response = await axios.post(LOGIN_URL_ADMIN,
            {username: correo, password: contraseña,}
        );

        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        return true;
    }catch(error){
        console.error("Error al iniciar sesión", error);
        return false
    }
};

// CREAR EMPRESA ADMIN

export const user_empresa_create = async (tipoDocumento, numeroDocumento, NickName, telefono, correo, direccion, actividad) => {
    try{
        const response = await axios.post(CREATE_URL_ADMIN,
            {documento: tipoDocumento, numero_documento:numeroDocumento, razon_social:NickName,telefono:telefono, direccion:direccion, actividad_economica:actividad }
        );

        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        return true;
    }catch(error){
        console.error("Error al crear empresa", error);
        return false;
    }
}