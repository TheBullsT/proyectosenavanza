import React, { useState, useRef, useContext } from 'react';
// Estilos del componente
import './busqueda.css';
// Logo institucional
import logo from '../../../assets/img/Logo_SENAVANZA.png';
// Iconos
import { TiThMenu } from "react-icons/ti";

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
                {/* Botón para mostrar/ocultar el menú de usuario */}
                <button
                    className='avatar'
                    onClick={() => setMenuVisible(!menuVisible)}
                    aria-label="Abrir menú de perfil"
                >
                    <TiThMenu className='icon-perfil' />
                </button>
            </div>

            {/* Renderizado condicional del menú de perfil */}
            {menuVisible && <MenuProfile ref={menuRef} />}
        </div>
    );
}

export default Busqueda;
