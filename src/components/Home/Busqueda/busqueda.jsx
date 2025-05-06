import React , { useState , useRef} from 'react';
import './busqueda.css';
import logo from '../../../assets/img/Logo_SENAVANZA.jpg';
import modo from '../../../assets/img/modo.png';
import notificaciones from '../../../assets/img/notificaciones.png';
import avatar from '../../../assets/img/avatar-imagen.png';
import MenuProfile from '../Menu-Profile/menu-profile';
import ClickOutMenu from '../Menu-Profile/click-out-menu';



function Busqueda() {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);

    ClickOutMenu(menuRef, () => setMenuVisible(false));
    return (
        <div className='barra-busqueda'>
            <div className='senavanza'>
                <img className='logo' src={logo} alt="Logo de SENAVANZA"  />
                <h1>SENAVANZA</h1>
            </div>
            <div className='search'>
                <input className='input-buscar' type="text" placeholder='Buscar Programa de Formación' />
            </div>
            <div className='opciones'>
                <button className='modo'>
                    <img src={modo} alt="Modo de la pagina" />
                </button>
                <button className='notifiaciones'>
                    <img src={notificaciones} alt="Ver notificaciones" />
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