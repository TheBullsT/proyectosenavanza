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
    // Obtener el usuario que esta guardado en localStorage
    const nombreAdmin = localStorage.getItem("Username") || "Admin";

    return (
        // Contenedor principal del navbar
        <div className="MainNavBarContainer">
            {/* Texto que indica el nombre del sistema en el dashboard */}
            <div className="dashboardContainer">
                <h1 className="dashText">SENAVANZA</h1>
            </div>

            {/* Sección que agrupa logo y nombre de usuario */}
            <div className="NavBarAdmin">
                {/* Imagen del logo institucional */}
                <div className="logoNavBar">
                    <img src={logo} alt="Logo Senavanza" />
                </div>

                {/* Sección para mostrar el nombre del admin */}
                <div className="logoAdmin">
                    {/* Muestra el nombre guardado en localStorage */}
                    <p className="profileName">@{nombreAdmin}</p>
                </div>
            </div>
        </div>
    );
}

// Exportación del componente para uso en otras partes
export default NavbarAdmin;
