import React from "react";
import logo from '../../../assets/img/Logo_SENAVANZA.jpg';
import modo from '../../../assets/img/modo.png';
import notificaciones from '../../../assets/img/notificaciones.png';
import avatar from '../../../assets/img/avatar-imagen.png';
import { useNavigate } from 'react-router-dom';
import "./NavbarAdmin.css";

function NavbarAdmin() {
    const navigate = useNavigate();
    
    const IraPerfil = () => {
        navigate('/perfil');
    }

    return (
        <div className='NavbarAdmin'>
            <div className='senavanza'>
                <img className='logo' src={logo} alt="Logo de SENAVANZA"  />
            </div>
            <div className='opciones'>
                <button className='modo'>
                    <img src={modo} alt="Modo de la pagina" />
                </button>
                <button className='notifiaciones'>
                    <img src={notificaciones} alt="Ver notificaciones" />
                </button>
                <button className='avatar' onClick={IraPerfil}>
                    <img src={avatar} alt="Ver perfil" />
                </button>
            </div>
        </div>
        )
    }



export default NavbarAdmin;