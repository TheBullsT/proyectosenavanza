// Importar React y useState
import React, { useState } from "react";
// Importar el logo
import logoLogin from '../../../assets/img/Logo_SENAVANZA.jpg';
// Importar el css
import './form-login.css';
// Importar el navigate para navegar entre rutas sin hacer una carga previa
import { useNavigate } from "react-router-dom";
// Axios para Validacion de backend
import axios from "axios";
// Importar las alertas
import { toast } from "react-toastify";
// Apis 
import { apiLogin } from "../../../api/apis" // Axios para la Login
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../api/constans"; // Claves para localStorage
import { jwtDecode } from "jwt-decode"; // Para extraer info del token
import { toast } from "react-toastify"; // Notificaciones tipo popup

function FormLogin() {
    // Hooks para capturar correo, contraseña
    const [selectedOption, setSelectedOption] = useState("default");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");

    // Hook para redireccionar al usuario a otras rutas
    const navigate = useNavigate();

    // Función que redirige a la página de inicio al hacer clic en el logo
    const irInicio = () => {
        navigate('/inicio');
    };


    // Verificacion de datos
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene que se recargue la pagina
        try {
            // Obtenermos la JWT
            const response = await apiLogin.login_empresa("token/", {
                correo_empresa: correo,
                password: contraseña
            });

            // Extraemos el access y refresh token
            const { access, refresh } = response.data;

            // Guardamos los tokens en el almacenamiento local
            localStorage.setItem(ACCESS_TOKEN, access);
            localStorage.setItem(REFRESH_TOKEN, refresh);

            // Se decodifica para obetener su Nombre de Usuario
            const decoded = jwtDecode(access);
            // Guardamos su usario en el localStorage
            localStorage.setItem("Username", decoded.username || correo_empresa);

            // Validamos ya obtenidos su JWT
            const res = await apiLogin.login_empresa("loginEmpresa",
                { correo_empresa: correo, password: contraseña },
            );

            // Verificamos con el status por su backend, si el estatus es 200, entra sin problema
            if (res.status == 200) {
                toast.success("Inición Sesión Exitoso");
                navigate("/home");
                // Si la verificacion no da, salta error y devuelta al login
            } else {
                toast.error("Usuario o contraseña incorrectas");
                navigate("/login");
            }

        } catch (error) {
            console.error(error);
            toast.error("Datos invalidos");
        }
    }



    return (
        <div className="login">
            <div onClick={irInicio} className="logoLogin">
                <img src={logoLogin} alt="Logo de SENAVANZA" />
            </div>

            <div className="form-login">
                <form onSubmit={handleSubmit} method="POST">
                    <h1 className="titulo">Iniciar Sesión</h1>
                    <h4 className="subtitulo">¡Vamos a Empezar!</h4>

                    <div className="contenido">
                        <label className="documentType" htmlFor="documentType">
                            Tipo de documento
                            <select
                                id="documentType"
                                required
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                            >
                                <option value="default" disabled>Tipo de documento</option>
                                <option value="NIT">NIT</option>
                            </select>
                        </label>

                        <label className="numberType" htmlFor="numberType">
                            Número de documento
                            <input
                                type="number"
                                id="numberType"
                                placeholder="Número de documento"
                                required
                            />
                        </label>

                        <label className="emailType" htmlFor="emailType">
                            Correo electrónico
                            <input
                                type="email"
                                id="emailType"
                                onChange={(e) => setCorreo(e.target.value)}
                                placeholder="Correo electrónico"
                                required
                            />
                        </label>

                        <label className="passwordType" htmlFor="passwordType">
                            Contraseña
                            <input
                                type="password"
                                id="passwordType"
                                onChange={(e) => setContraseña(e.target.value)}
                                placeholder="Contraseña"
                                required
                            />
                        </label>
                    </div>

                    <button type="submit" className="iniciar-sesion">
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormLogin;
