// Importaciones
import React from "react";
import logo from '../../../assets/img/Logo_SENAVANZA.png';
import "./NavbarAdmin.css";
import { FaMoon } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";

// Componente NavbarAdmin
function NavbarAdmin() {
    return (
        // Estructura del componente NavbarAdmin
        <div className="MainNavBarContainer">
            <div className="dashboardContainer">
                <h1 className="dashText">SENAVANZA</h1>
            </div>
            <div className="NavBarAdmin">
                <div className="logoNavBar">
                    <img src={logo} alt="Logo Senavanza" />
                </div>
                <div className="logoModoOscuro">
                    <FaMoon className="navIcon"/>
                </div>
                <div className="logoAdmin">
                    <FaCircle className="navIcon"/>
                    <p className="profileName">@Admin</p>
                </div>
            </div>
        </div>
        )
    }



export default NavbarAdmin;