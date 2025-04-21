import React from 'react';
import './busqueda.css';
import logo from '../../../assets/img/Logo_SENAVANZA.jpg';
import modo from '../../../assets/img/modo.png';
import notificaciones from '../../../assets/img/notificaciones.png';
import avatar from '../../../assets/img/avatar-imagen.png';


function Busqueda() {
    return (
        <div className='barra-busqueda'>
            <div className='senavanza'>
                <img className='logo' src={logo} alt="Logo de SENAVANZA" />
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
                <button className='avatar'>
                    <img src={avatar} alt="Ver perfil" />
                </button>
            </div>
        </div>
    );
}

export default Busqueda;