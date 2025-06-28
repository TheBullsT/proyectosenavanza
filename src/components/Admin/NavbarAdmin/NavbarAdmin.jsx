// Importaciones necesarias para el componente
import React from "react";
// Logo importado desde assets
import logo from '../../../assets/img/Logo_SENAVANZA.png'; 
// Estilos específicos para NavbarAdmin
import "./NavbarAdmin.css"; 
// Importacion de los iconos
import { FaMoon } from "react-icons/fa"; 
import { FaCircle } from "react-icons/fa6"; 

// Componente funcional NavbarAdmin
function NavbarAdmin() {

    const nombreAdmin = localStorage.getItem("Username") || "Admin";

    return (
        // Contenedor principal del navbar
        <div className="MainNavBarContainer">
            {/* Sección para mostrar el nombre del dashboard */}
            <div className="dashboardContainer">
                <h1 className="dashText">SENAVANZA</h1>
            </div>

            {/* Contenedor de la barra de navegación del admin */}
            <div className="NavBarAdmin">
                {/* Logo de la aplicación */}
                <div className="logoNavBar">
                    <img src={logo} alt="Logo Senavanza" />
                </div>

                {/* Icono para modo oscuro */}
                <div className="logoModoOscuro">
                    <FaMoon className="navIcon" />
                </div>

                {/* Sección que muestra el icono y el nombre del usuario/admin */}
                <div className="logoAdmin">
                    <FaCircle className="navIcon" />
                    <p className="profileName">@{nombreAdmin}</p>
                </div>
            </div>
        </div>
    );
}

export default NavbarAdmin;
