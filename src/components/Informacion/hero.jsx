// Importamos React para poder usar JSX y crear componentes
import React from 'react';
// Importamos los estilos CSS del hero
import './hero.css';

// Definimos el componente funcional HeroInfo
const HeroInfo = () => {
    return (
        // Contenedor principal que envuelve el contenido del hero
        <div className="contenedor_principal">

            {/* Título principal que describe la sección */}
            <h1 className="titulo_hero">
                Detalles de Programas
                <br /> {/* Salto de línea para separar visualmente el texto */}
                de Formación
            </h1>

            {/* Breadcrumb que indica la ubicación actual en la navegación */}
            <div className='page-select'>
                <p>Home {">"} <strong>Programas</strong></p>
            </div>

        </div>
    );
};

// Exportamos el componente para su uso en otras partes del proyecto
export default HeroInfo;
