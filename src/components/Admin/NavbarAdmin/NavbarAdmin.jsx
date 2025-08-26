// Importaciones necesarias para el componente
import React from "react";
// Logo importado desde assets
import logo from '../../../assets/img/Logo_SENAVANZA.png';
// Estilos específicos para NavbarAdmin
import "./NavbarAdmin.css";
// Importacion de los iconos
import { FaCircle } from "react-icons/fa6";

// Componente funcional NavbarAdmin
function NavbarAdmin() {
    // Obtener el usuario que está guardado en el localStorage, por defecto "Admin"
    const nombreAdmin = localStorage.getItem("Username") || "Admin";

    return (
        // Contenedor principal del navbar
        <div className="MainNavBarContainer">
            {/* Título del dashboard */}
            <div className="dashboardContainer">
                <h1 className="dashText">SENAVANZA</h1>
            </div>

            {/* Barra de navegación para la sección de administración */}
            <div className="NavBarAdmin">
                {/* Contenedor del logo */}
                <div className="logoNavBar">
                    <img src={logo} alt="Logo Senavanza" />
                </div>

                {/* Información del usuario administrador */}
                <div className="logoAdmin">
                    {/* Nombre de perfil mostrado con @ */}
                    <p className="profileName">@{nombreAdmin}</p>
                </div>
            </div>
        </div>
    );
}

export default NavbarAdmin;
