import React from 'react';
import './Formulario.css';
import { BiTask } from "react-icons/bi";

const BannerHelp = () => {
    return (
        <div className='container-banner'>
            <div className='icon-banner'>
                <BiTask className='icon-banner-diagnostico' />
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
