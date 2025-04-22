import React from "react";
import mobile from '../../../assets/img/img-login/mobile.png';
import './login-background.css';


function LoginBackground (){
    return (
        <div className="background">
            <img className="imgage" src={mobile} alt="Imagen del login"/>
        </div>
    );
}

export default LoginBackground;