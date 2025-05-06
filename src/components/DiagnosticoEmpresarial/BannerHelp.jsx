import React from 'react';
import './Formulario.css';
import icon from '../../assets/img/icon-form.png'

const BannerHelp = () => {
    return (
    <div className='container-banner'>
        <div className='icon-banner'><img src={icon} alt="Icono de Formulario" /></div>
        <span className='banner-info'><p><b>¿Que beneficios trae el diagnostico empresarial?</b></p>
        <ul className='banner-info'>
            <li>Identificas areas de mejora.</li>
            <li>Encuentras Programas de Formacion adecuados.</li>
        </ul>
        </span>
    </div>
    );
}
export default BannerHelp;
