import React from "react";
import logo from '../../../assets/img/Logo_SENAVANZA.jpg'
import './footer.css';

function Footer(){
    return(
        <footer className="footer">
            <div className="logo-sena">
                <img src={logo} alt="Logo senavanza" />
            </div>
            <p>Copyright - 2025 - SENA - SENAVANZA</p>
        </footer>
    );
}

export default Footer;