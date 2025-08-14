// Importa React y useState para manejar el estado del formulario
import React, { useState } from "react";
// Logo que se muestra en la interfaz de login
import logoLogin from '../../../assets/img/Logo_SENAVANZA.jpg';
// Estilos específicos para este componente
import './LoginAdmin.css';
// Hook para navegación interna
import { useNavigate } from "react-router-dom";
// Función de API para login y constantes de tokens
import { apiLogin } from "../../../api/apis";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../api/constans";
// Librerías auxiliares
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

function LoginAdmin() {
    // Estados para usuario y contraseña
    const [user, setUser] = useState("");
    const [contraseña, setContraseña] = useState("");
    const navigate = useNavigate();

    // Redirige a la página inicial al hacer clic en el logo
    const irInicio = () => {
        navigate('/inicio');
    };

    // Maneja el envío del formulario de login
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiLogin.post(
                "token/",
                { username: user, password: contraseña },
                { headers: { 'Content-Type': 'application/json' } }
            );

            // Aquí se guardan los tokens y se decodifica el usuario (comentado por ahora)
            // const { access, refresh } = response.data;
            // localStorage.setItem(ACCESS_TOKEN, access);
            // localStorage.setItem(REFRESH_TOKEN, refresh);
            // const decode = jwtDecode(access);
            // localStorage.setItem("Username", decode.username || user);

            navigate("/adminhome");
            toast.success("Inicio de sesión exitoso");

            console.log(response.data);
        } catch (error) {
            toast.error("Usuario o contraseña incorrectos");
            console.error(error);
        }
    };

    // Estructura visual del componente
    return (
        <div className="login">
            <div onClick={irInicio} className="logoLogin">
                <img onClick={irInicio} src={logoLogin} alt="Logo de SENAVANZA" />
            </div>

            <div className="form-login">
                <form onSubmit={handleSubmit} method="POST">
                    <h1 className="titulo">ADMINISTRADOR</h1>
                    <h4 className="subtitulo">LOGIN ADMINISTRADOR</h4>

                    <div className="contenido">
                        <label className="textType" htmlFor="textType">
                            Administrador
                            <input
                                type="text"
                                id="textType"
                                placeholder="Administrador"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                required
                            />
                        </label>

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

                    <button type="submit" className="iniciar-sesion">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
}

export default LoginAdmin;
