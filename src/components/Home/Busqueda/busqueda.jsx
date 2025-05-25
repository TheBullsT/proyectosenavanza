import React , { useState , useRef, useContext} from 'react';
import { ThemeContext } from '../../../layouts/Dark-Mode/temacontexto';
import './busqueda.css';
import logo from '../../../assets/img/Logo_SENAVANZA.png';
import { FaMoon } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import MenuProfile from '../Menu-Profile/menu-profile';
import ClickOutMenu from '../Menu-Profile/click-out-menu';
import { useNavigate } from 'react-router-dom';



function Busqueda() {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);

    ClickOutMenu(menuRef, () => setMenuVisible(false));

    const { darkMode, setDarkMode } = useContext(ThemeContext)

    const navigate = useNavigate();

    const irHome = () =>{
        navigate('/home');
    }
    return (
        <div className='barra-busqueda'>
            <div onClick={irHome} className='senavanza'>
                <img onClick={irHome} className='logo' src={logo} alt="Logo de SENAVANZA"  />
                <h1>SENAVANZA</h1>
            </div>
            <div className='opciones'>
                <button className='modo' onClick={() => setDarkMode(!darkMode)}>
                    <FaMoon className='luna-home'/>
                </button>
                <button className='avatar' onClick={() => setMenuVisible(!menuVisible)} >
                    <FaCircle className='icon-perfil' />
                </button>
            </div>
            {menuVisible && <MenuProfile ref={menuRef} />}
        </div>
    );
}

export default Busqueda;