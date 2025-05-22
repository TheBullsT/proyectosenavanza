import React from 'react';
import person from '../../assets/img/inicio/Biblioteca.png';
import arrow from '../../assets/img/inicio/typcn_arrow-back.png';
import './Inicio.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-content'>
                <div className='hero-text'>
                    <p className='texto-ayuda'>¿Necesitas personal?</p>
                    <h1>CONSEGUIMOS LOS APRENDICES<br/>PARA TU EMRPESA</h1>
                    <p className='texto-ayuda2'>¡INICIA SESIÓN!</p>
                    <div className='apuntar-boton'>
                        <img src={arrow} alt="flecha" />
                        <button className='button-init2'>Inicia sesión</button>
                    </div>
                </div>
                <div className='image-person'>
                    <img src={person} alt="imagen-inicio" />
                </div>
            </div>    
        </div>
    )
}

export default Hero;