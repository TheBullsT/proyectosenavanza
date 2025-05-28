import React, { useState } from "react";
import logoLogin from '../../../assets/img/Logo_SENAVANZA.jpg';
import './LoginAdmin.css';
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
    const [selectedOption, setSelectedOption] = useState("default");

    const navigate = useNavigate();

    const irInicio = () => {
        navigate('/inicio');
    }

    return (
        <div className="login">
            <div onClick={irInicio} className="logoLogin">
                <img onClick={irInicio} src={logoLogin} alt="Logo de SENAVANZA" />
            </div>
            <div className="form-login">
                <form action="POST">
                    <h1 className="titulo">Iniciar Sesión</h1>
                    <h4 className="subtitulo">¡Vamos a Empezar!</h4>
                    <div className="contenido">
                        <label className="emailType" htmlFor="emailType">
                            Email
                            <input type="email" placeholder="Correo Electronico" />
                        </label>
                        <label className="passwordType" htmlFor="passwordType">
                            Contraseña
                            <input type="text" placeholder="Contraseña" required />
                        </label>
                    </div>
                    <button className="iniciar-sesion">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
}

export default LoginAdmin;
