import React from "react";
import mobile from '../../../assets/img/img-login/mobile.png';
import './login-background.css';
import { Link } from 'react-router-dom';


function LoginBackground (){
    return (
        <div className="background">
            {/* Hacer que esta imagen sea un boton oculto */}
            <Link to="/AdminHome" className="hidden-link">
                <img className="imgage" src={mobile} alt="Imagen del login"/>
            </Link>
        </div>
    );
}

export default LoginBackground;