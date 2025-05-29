//Importar react
import React from "react";
// Importar imagen para el background
import mobile from '../../../assets/img/img-login/mobile.png';
import './login-background.css';
// Importar la libreria para la navegacion
import { Link } from 'react-router-dom';

// Componente principal
function LoginBackground() {
    return (
        //Caja del background
        <div className="background">
            {/*Link para ir al administrador */}
            <Link to="/login-admin" className="hidden-link">
                {/*Imagen para la imagen del lado */}
                <img className="imgage" src={mobile} alt="Imagen del login" />
            </Link>
        </div>
    );
}

export default LoginBackground;