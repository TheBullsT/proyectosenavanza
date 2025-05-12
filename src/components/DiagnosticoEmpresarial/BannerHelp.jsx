import React from 'react';
import './Formulario.css';
import icon from '../../assets/img/icon-form.png'

const BannerHelp = () => {
    return (
        <div className='container-banner'>
            <div className='icon-banner'>
                <img src={icon} alt="Icono de Formulario" />
            </div>
            <div className='banner-info'>
                <p><b>¿Qué beneficios trae el diagnóstico empresarial?</b></p>
                <ul>
                    <li>Identificas áreas de mejora.</li>
                    <li>Encuentras Programas de Formación adecuados.</li>
                </ul>
            </div>
        </div>
    );
}

export default BannerHelp;
