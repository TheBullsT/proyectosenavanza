import React from "react";
import logo from '../../../assets/img/Logo_SENAVANZA.png'
import './footer.css';

function Footer(){
    return(
        <footer className="footer">
            <div className="linea-footer"></div>
            <div className="footer-total">
                <div className="logo-sena">
                    <img src={logo} alt="Logo senavanza" />
                </div>
                <p>Copyright SENAVANZA - SENA - 2025</p>
            </div>

        </footer>

    );
}

export default Footer;