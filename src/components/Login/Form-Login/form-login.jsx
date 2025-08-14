// Importar React y useState para manejar estado en componentes funcionales
import React, { useState } from "react";

// Importar el logo de la aplicación
import logoLogin from '../../../assets/img/Logo_SENAVANZA.jpg';

// Importar el CSS del formulario de login
import './form-login.css';

// Importar Link y useNavigate para navegación entre rutas sin recargar la página
import { Link, useNavigate } from "react-router-dom";

// Axios para hacer peticiones HTTP al backend
import axios from "axios";

// Importar las alertas tipo popup
import { toast } from "react-toastify"; 

// Importar las APIs y constantes de tokens
import { apiLogin } from "../../../api/apis"; // Instancia Axios para login
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../api/constans"; // Claves para localStorage

function FormLogin() {
    // Hooks para capturar los valores de usuario y contraseña
    const [username, setUsername] = useState("");
    const [contraseña, setContraseña] = useState("");

    // Hook para redireccionar a otras rutas
    const navigate = useNavigate();

    // Función para ir a la página de inicio al hacer clic en el logo
    const irInicio = () => {
        navigate('/inicio');
    };

    // Función que maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue al enviar el formulario
        try {
            // Petición POST a la API para obtener tokens
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

            // Muestra los tokens en consola (puedes guardarlos en localStorage si lo deseas)
            console.log("Tokens recibidos:", response.data);

            // Notificación de éxito
            toast.success("Inicio de sesión exitoso");

            // Redirige al usuario a la página principal después del login
            navigate("/home");

        } catch (error) {
            // En caso de error, se muestra en consola y se notifica al usuario
            console.error("Error en login:", error);
            toast.error("Datos inválidos o credenciales incorrectas");
        }
    };

    return (
        <div className="login">
            {/* Logo clickable que redirige al inicio */}
            <div onClick={irInicio} className="logoLogin">
                <img src={logoLogin} alt="Logo de SENAVANZA" />
            </div>

            {/* Contenedor del formulario de login */}
            <div className="form-login">
                <form onSubmit={handleSubmit} method="POST">
                    <h1 className="titulo">Iniciar Sesión</h1>
                    <h4 className="subtitulo">¡Vamos a Empezar!</h4>

                    {/* Contenedor de inputs */}
                    <div className="contenido">
                        {/* Input para usuario */}
                        <label className="usernameType" htmlFor="usernameType">
                            Usuario
                            <input
                                type="username"
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Nombre de Usuario"
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
                    <Link to="/forget-password" className="subtitle-password-forget">
                        ¿Olvidó su contraseña?
                    </Link> 

                    {/* Botón de inicio de sesión */}
                    <button type="submit" className="iniciar-sesion">
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormLogin;
