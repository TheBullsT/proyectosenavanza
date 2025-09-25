// Importar React y useState para manejar el estado en componentes funcionales
import React, { useState } from "react";

// Importar el logo de la aplicación
import logoLogin from '../../../assets/img/Logo_SENAVANZA.jpg';

// Importar el CSS del formulario de login
import './form-login.css';

// Importar Link y useNavigate para la navegación entre rutas sin recargar la página
import { Link, useNavigate } from "react-router-dom";

// Axios para hacer peticiones HTTP al backend
import axios from "axios";

// Importar las alertas tipo pop-up
import { toast } from "react-toastify";

// Importar las APIs y constantes de tokens
import { apiLogin } from "../../../api/apis"; // Instancia de Axios para login
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../api/constans"; // Claves para localStorage

function FormLogin() {
    // Hooks para capturar los valores de usuario y contraseña
    const [username, setUsername] = useState("");
    const [contraseña, setContraseña] = useState("");

    // Hook para redirigir a otras rutas
    const navigate = useNavigate();

    // Función para ir a la página de inicio al hacer clic en el logo
    const irInicio = () => {
        navigate('/inicio');
    };

    // Función que maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que se recargue

        const loginPerfil = {
            username: username,
            password: contraseña
        }

        const config = {
            headers: { "Content-Type": "application/json" },
        }
        
        try {
            const response = await apiLogin.post(
                "token/",
                loginPerfil,
                config,
            );

            console.log("Tokens recibidos:", response.data);
            if (response.data.rol == 'admin') {
                toast.success("Inicio de sesión exitoso");
                navigate("/adminhome");
            } else {
                toast.success("Inicio de sesión exitoso");
                navigate("/home");
            }


        } catch (error) {
            console.error("Error en login:", error);

            if (error.response) {
                if (error.response.status === 403) {
                    // Usuario desactivado (is_active=false o estado==2)
                    // Por el momento no funciona 
                    toast.error("El usuario está desactivado");
                } else if (error.response.status === 401) {
                    // El backend manda "Bad Request" si no existe
                    toast.error("El usuario no existe o está inactivo");
                } else {
                    toast.error("Error inesperado en el login");
                }
            } else {
                toast.error("No se pudo conectar con el servidor");
            }
        }
    };


    return (
        <div className="login">
            {/* Logo clickeable que redirige al inicio */}
            <div onClick={irInicio} className="logoLogin">
                <img src={logoLogin} alt="Logo de SENAVANZA" />
            </div>

            {/* Contenedor del formulario de login */}
            <div className="form-login">
                <form onSubmit={handleSubmit} method="POST">
                    <h1 className="titulo">Iniciar sesión</h1>
                    <h4 className="subtitulo">¡Vamos a empezar!</h4>

                    {/* Contenedor de inputs */}
                    <div className="contenido">
                        {/* Input para usuario */}
                        <label className="usernameType" htmlFor="usernameType">
                            Usuario
                            <input
                                type="username"
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Nombre de usuario"
                                required
                            />
                        </label>

                        {/* Input para contraseña */}
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

                    {/* Link para recuperar contraseña */}
                    <Link to="/pedir-nit" className="subtitle-password-forget">
                        ¿Olvidó su contraseña?
                    </Link>

                    {/* Botón de inicio de sesión */}
                    <button type="submit" className="iniciar-sesion">
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormLogin;
