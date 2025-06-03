import React, { useState, useRef, useContext } from 'react';
// Contexto de tema oscuro/claro
import { ThemeContext } from '../../../layouts/Dark-Mode/temacontexto';
// Estilos del componente
import './busqueda.css';
// Logo institucional
import logo from '../../../assets/img/Logo_SENAVANZA.png';
// Iconos
import { FaMoon } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
// Menú de perfil y utilidad para cerrar al hacer click fuera
import MenuProfile from '../Menu-Profile/menu-profile';
import ClickOutMenu from '../Menu-Profile/click-out-menu';

// Navegación
import { useNavigate } from 'react-router-dom';

function Busqueda() {
    // Estado para mostrar u ocultar el menú de perfil
    const [menuVisible, setMenuVisible] = useState(false);

    // Referencia al componente del menú para detectar clics fuera
    const menuRef = useRef(null);

    // Hook personalizado para cerrar el menú al hacer clic fuera
    ClickOutMenu(menuRef, () => setMenuVisible(false));

    // Acceso al contexto del modo oscuro
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    // Hook para redirección
    const navigate = useNavigate();

    // Redirige al usuario a la pantalla de inicio
    const irHome = () => {
        navigate('/home');
    };

    return (
        <div className='barra-busqueda'>
            <div onClick={irHome} className='senavanza'>
                <img
                    className='logo'
                    src={logo}
                    alt="Logo de SENAVANZA"
                />
                <h1>SENAVANZA</h1>
            </div>

            <div className='opciones'>
                {/* Botón para cambiar el modo oscuro/claro */}
                <button
                    className='modo'
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label="Cambiar tema oscuro/claro"
                >
                    <FaMoon className='luna-home' />
                </button>

                {/* Botón para mostrar/ocultar el menú de usuario */}
                <button
                    className='avatar'
                    onClick={() => setMenuVisible(!menuVisible)}
                    aria-label="Abrir menú de perfil"
                >
                    <FaCircle className='icon-perfil' />
                </button>
            </div>

            {/* Renderizado condicional del menú de perfil */}
            {menuVisible && <MenuProfile ref={menuRef} />}
        </div>
    );
}

export default Busqueda;
