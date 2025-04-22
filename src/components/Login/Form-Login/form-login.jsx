import React, { useState } from "react";
import logo from '../../../assets/img/Logo_SENAVANZA.jpg';
import './form-login.css';

function FormLogin() {
    const [selectedOption, setSelectedOption] = useState("default");

    return (
        <div className="login">
            <div className="logo">
                <img src={logo} alt="Logo de SENAVANZA" />
            </div>
            <div className="form-login">
                <form action="POST">
                    <h1 className="titulo">Iniciar Sesión</h1>
                    <h4 className="subtitulo">¡Vamos a Empezar!</h4>
                    <div className="contenido">
                        <label className="documentType" htmlFor="documentType">
                            Tipo de documento
                            <select 
                                id="documentType" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}
                            >
                                <option value="default" disabled>Tipo de documento</option>
                                <option value="opcion1">NIT</option>
                            </select>
                        </label>
                        <label className="numberType" htmlFor="numberType">
                            Numero de documento
                            <input type="number" placeholder="Numero de documento" required  />
                        </label>
                        <label className="emailType" htmlFor="emailType">
                            Email
                            <input type="email" placeholder="Correo Electronico" />
                        </label>
                    </div>
                    <button className="iniciar-sesion">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
}

export default FormLogin;
