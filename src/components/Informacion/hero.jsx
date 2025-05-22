import React from 'react';
import './hero.css';

const hero_info = () => {
    return(
        <div className="contenedor_principal">
            <h1 className="titulo_hero">
                Detalles de Programas 
                <br /> de Formación
            </h1>
            <div className='page-select'>
                <p>Home {">"} <strong>Programas</strong> </p>
            </div>
        </div>
    )
} 

export default hero_info;