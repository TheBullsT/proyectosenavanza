// Importaciones necesarias para el componente
import React, { useState, useRef } from "react";
// Logo importado desde assets
import logo from '../../../assets/img/Logo_SENAVANZA.png';
// Estilos específicos para NavbarAdmin
import "./NavbarAdmin.css";
// Importacion de los iconos
import { TiThMenu } from "react-icons/ti";
// Menú de perfil y utilidad para cerrar al hacer clic fuera
import MenuProfile from '../Menu-Profile-Admin/menu-profile';
import ClickOutMenu from '../Menu-Profile-Admin/click-out-menu';



// Componente funcional NavbarAdmin
function NavbarAdmin() {

    // Obtener el usuario que está guardado en el localStorage, por defecto "Admin"
    const nombreAdmin = localStorage.getItem("Username") || "Admin";

    // Estado para mostrar u ocultar el menú de perfil
    const [menuVisible, setMenuVisible] = useState(false);

    // Referencia al componente del menú para detectar clics fuera
    const menuRef = useRef(null);

    // Hook personalizado que detecta clic fuera del menú y lo cierra
    ClickOutMenu(menuRef, () => setMenuVisible(false));





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

                {/* opciones de administrador */}
                <div className='opciones'>
                    {/* Botón que alterna la visibilidad del menú de usuario */}
                    <button 
                        className='avatar'
                        onClick={() => setMenuVisible(!menuVisible)}
                        aria-label="Abrir menú de usuario"
                    >
                        <TiThMenu className='icon-perfil' />
                    </button>

                </div>
                {/* Renderizado condicional: si `menuVisible` es true, se muestra el menú */}
                {menuVisible && <MenuProfile ref={menuRef} />}
            </div>
        </div>
    );
}

export default NavbarAdmin;
