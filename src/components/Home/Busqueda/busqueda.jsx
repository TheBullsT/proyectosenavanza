import React , { useState , useRef, useContext} from 'react';
import { ThemeContext } from '../../../layouts/Dark-Mode/temacontexto';
import './busqueda.css';
import logo from '../../../assets/img/Logo_SENAVANZA.png';
import modo from '../../../assets/img/modo.png';
import avatar from '../../../assets/img/avatar-imagen.png';
import MenuProfile from '../Menu-Profile/menu-profile';
import ClickOutMenu from '../Menu-Profile/click-out-menu';



function Busqueda() {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);

    ClickOutMenu(menuRef, () => setMenuVisible(false));

    const { darkMode, setDarkMode } = useContext(ThemeContext)
    return (
        <div className='barra-busqueda'>
            <div className='senavanza'>
                <img className='logo' src={logo} alt="Logo de SENAVANZA"  />
                <h1>SENAVANZA</h1>
            </div>
            <div className='opciones'>
                <button className='modo' onClick={() => setDarkMode(!darkMode)}>
                    <img src={modo} alt="Modo de la pagina" />
                </button>
                <button className='avatar' onClick={() => setMenuVisible(!menuVisible)} >
                    <img src={avatar} alt="Perfil y Menu desplegable" />
                </button>
            </div>
            {menuVisible && <MenuProfile ref={menuRef} />}
        </div>
    );
}

export default Busqueda;