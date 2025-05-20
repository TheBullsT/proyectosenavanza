import React from 'react';
import './hero.css';

const hero_info = () => {
    return(
        <div className="contenedor_principal">
            <h1 className="titulo_hero">
                Detalles de Programas 
                <br /> de Formación
            </h1>  
                <p className="ubicacion_hero">
                    Home {">"} <strong>Programas</strong> 
                </p>
        </div>
    )
} 

export default hero_info;