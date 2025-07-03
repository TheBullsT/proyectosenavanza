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
import { toast } from "react-toastify"; // Notificaciones tipo popup
// Apis 
import { apiLogin } from "../../../api/apis" // Axios para la Login
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../api/constans"; // Claves para localStorage



function FormLogin() {
    // Hooks para capturar correo, contraseña
    const [username, setUsername] = useState("");
    const [contraseña, setContraseña] = useState("");

    // Hook para redireccionar al usuario a otras rutas
    const navigate = useNavigate();

    // Función que redirige a la página de inicio al hacer clic en el logo
    const irInicio = () => {
        navigate('/inicio');
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiLogin.post(
                "token/",
                {
                    username: username,
                    password: contraseña
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );

            // const { access, refresh } = response.data;

            // // Guardar tokens en localStorage
            // localStorage.setItem(ACCESS_TOKEN, access);
            // localStorage.setItem(REFRESH_TOKEN, refresh);

            console.log("Tokens recibidos:", response.data);

            toast.success("Inicio de sesión exitoso");
            navigate("/home");

        } catch (error) {
            console.error("Error en login:", error);
            toast.error("Datos inválidos o credenciales incorrectas");
        }
    };



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
                        <label className="usernameType" htmlFor="usernameType">
                            Usuario
                            <input
                                type="username"
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Nombre de Usuario"
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
