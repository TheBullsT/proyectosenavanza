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

    // Función que maneja el envío del formulario de inicio de sesión
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue al enviar el formulario automáticamente

        try {
            // Se realiza una petición POST a la API para obtener el token JWT
            const response = await apiLogin.post(
                "token/", // Endpoint de autenticación
                {
                    username: username,     // Se envía el nombre de usuario
                    password: contraseña,   // Se envía la contraseña
                },
                {
                    headers: { "Content-Type": "application/json" }, // Se especifica que los datos son JSON
                }
            );

            // Si la autenticación es exitosa, se muestran los tokens recibidos en consola
            console.log("Tokens recibidos:", response.data);

            // Se muestra una notificación indicando que el login fue exitoso
            toast.success("Inicio de sesión exitoso");

            // Se redirige al usuario a la página principal
            navigate("/home");

        } catch (error) {
            // Si ocurre un error en la petición, se muestra en la consola
            console.error("Error en login:", error);

            // Se valida la respuesta del servidor para mostrar mensajes específicos
            if (error.response) {
                // Si el servidor responde con 403 → el usuario está desactivado
                if (error.response.status === 403) {
                    toast.error("El usuario está desactivado");

                    // Si responde con 401 → credenciales incorrectas
                } else if (error.response.status === 401) {
                    toast.error("Credenciales incorrectas");

                    // Para otros errores desconocidos del backend
                } else {
                    toast.error("Error inesperado en el login");
                }
            } else {
                // Si no hubo respuesta del servidor (por ejemplo, servidor caído o sin conexión)
                toast.error("No se pudo conectar con el servidor");
            }
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
