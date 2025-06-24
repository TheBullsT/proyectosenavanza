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
import { login_empresa } from "../../../api/apis";

function FormLogin() {
    const [selectedOption, setSelectedOption] = useState("default");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const navigate = useNavigate();


    // Verificacion de datos
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await login_empresa({
                correo_empresa: correo,
                password: contraseña
            }); 
            if (response){
                console.log(response.data);
                toast.success("Inicio de sesión exitoso");
                navigate("/home");
            }else{
                toast.error("Contraseña o Correo Electronico Incorrectos");
            }
        } catch (error) {
            console.error(error);
            toast.error("Datos invalidos");
        }
    }

    const irInicio = () => {
        navigate('/inicio');
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
