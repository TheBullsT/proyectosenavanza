import React, { useState } from "react";
import logoLogin from '../../../assets/img/Logo_SENAVANZA.jpg';
import './form-login.css';
import { useNavigate } from "react-router-dom";

function FormLogin() {
    const [selectedOption, setSelectedOption] = useState("default");
    const navigate = useNavigate();

    const irInicio = () => {
        navigate('/inicio');
    };


    return (
        <div className="login">
            <div onClick={irInicio} className="logoLogin">
                <img src={logoLogin} alt="Logo de SENAVANZA" />
            </div>

            <div className="form-login">
                <form method="POST">
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
                                placeholder="Correo electrónico"
                                required
                            />
                        </label>

                        <label className="passwordType" htmlFor="passwordType">
                            Contraseña
                            <input
                                type="password"
                                id="passwordType"
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
