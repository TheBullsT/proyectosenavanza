// Importa React y useState para manejar los campos del formulario
import React, { useState } from "react";
// Importa el logo para mostrarlo en el login
import logoLogin from '../../../assets/img/Logo_SENAVANZA.jpg';
// Importa los estilos CSS específicos para este componente
import './LoginAdmin.css';
// Hook para redireccionar a otras rutas
import { useNavigate } from "react-router-dom";

// Importaciones necesarias para conectar con el backend
import {apiLogin} from "../../../api/apis" // Axios para la Login
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../api/constans"; // Claves para localStorage
import { jwtDecode } from "jwt-decode"; // Para extraer info del token
import { toast } from "react-toastify"; // Notificaciones tipo popup

// Componente funcional de login para administradores
function LoginAdmin() {
    // Hooks para capturar usuario y contraseña del formulario
    const [user, setUser] = useState("");
    const [contraseña, setContraseña] = useState("");

    // Hook para redireccionar al usuario a otras rutas
    const navigate = useNavigate();

    // Función que redirige a la página de inicio al hacer clic en el logo
    const irInicio = () => {
        navigate('/inicio');
    };

    // Función que se ejecuta al enviar el formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene que se recargue la página
        try {
            // Obtenemos el JWT de access y refresh
            const response = await apiLogin.post("token/", {
                username: user,
                password: contraseña
            });

            // Extraemos el access y refresh token
            const { access, refresh } = response.data;

            // Guardamos los tokens en el almacenamiento local
            localStorage.setItem(ACCESS_TOKEN, access);
            localStorage.setItem(REFRESH_TOKEN, refresh);


            // Decodificamos para obtener tambien su user
            const decode = jwtDecode(access);
            // Guardamos su usuario tambien
            localStorage.setItem("Username", decode.username || user);


            // Validamos si es admin ya obtenido su JWT
            const res = await apiLogin.post("loginAdmin/",
                {username: user, password: contraseña},
            );

            // Verificamos con el status por su backend, si el estatus es 200, entra sin problema
            if (res.status == 200){
                toast.success("Inición Sesión Exitoso");
                navigate("/adminhome");
            // Si la verificacion no da, salta error y devuelta al login
            }else{
                toast.error("No tienes permiso como administrador");
                navigate("/login");
            }

        } catch (error) {
            // Si ocurre un error en el login, mostramos notificación
            toast.error("Usuario o contraseña incorrectos");
            console.error(error);
        }
    };

    // Renderizado del componente
    return (
        <div className="login">
            {/* Contenedor del logo */}
            <div onClick={irInicio} className="logoLogin">
                <img onClick={irInicio} src={logoLogin} alt="Logo de SENAVANZA" />
            </div>

            {/* Contenedor del formulario de inicio de sesión */}
            <div className="form-login">
                {/* Formulario controlado con los estados de React */}
                <form onSubmit={handleSubmit} method="POST">
                    <h1 className="titulo">Iniciar Sesión</h1>
                    <h4 className="subtitulo">¡Vamos a Empezar!</h4>

                    <div className="contenido">
                        {/* Campo de usuario */}
                        <label className="textType" htmlFor="textType">
                            Usuario
                            <input
                                type="text"
                                id="textType"
                                placeholder="Usuario"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                required
                            />
                        </label>

                        {/* Campo de contraseña */}
                        <label className="passwordType" htmlFor="passwordType">
                            Contraseña
                            <input
                                type="password"
                                id="passwordType"
                                placeholder="Contraseña"
                                value={contraseña}
                                onChange={(e) => setContraseña(e.target.value)}
                                required
                            />
                        </label>
                    </div>

                    {/* Botón de envío del formulario */}
                    <button type="submit" className="iniciar-sesion">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
}

// Exportamos el componente para poder usarlo en las rutas
export default LoginAdmin;
