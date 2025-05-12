import React from 'react';
import './Formulario.css';
import BannerHelp from './BannerHelp';
import arrow from '../../assets/img/arrow-green.png'; 
import person from '../../assets/img/person-form.png';

const FormsLayout = () => {
    return (
        <div className="forms-layout">
            <div className="title"><h1>Formulario</h1></div>
            <div className="barra2">
                <span className="linea2"></span>
            </div>
            <div className='main-section'>
                <span className='information'>
                    ¡Realiza nuestro formulario<br />
                    de diagnóstico empresarial!
                </span>
            </div>
            <BannerHelp />
            <div className='main-section'>
                <span className='information'>
                    ¡Presiona este botón <br />para conocer qué <br /> programas de formación de <br /> formación son <br /> perfectos para usted!
                </span>
            </div>
            <div className='press'>
                <div className='press-boton'>
                    <img className='imagen-flecha' src={arrow} alt="Imagen de flecha" />
                    <button className="diagnostico-button">Diagnóstico</button>
                </div>
                <img className='person-image' src={person} alt="Persona formulario" />
            </div>
        </div>
    );
}

export default FormsLayout;
