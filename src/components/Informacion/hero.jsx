// Importamos React para poder usar JSX y crear componentes
import React from 'react';
// Importamos los estilos CSS del hero
import './hero.css';
// Definimos el componente con PascalCase (buena práctica en React)
const HeroInfo = () => {
    return (
        // Contenedor principal del hero
        <div className="contenedor_principal">

            {/* Título principal que describe la sección */}
            <h1 className="titulo_hero">
                Detalles de Programas
                <br /> {/* Salto de línea entre frases */}
                de Formación
            </h1>

            {/* Ruta de navegación o "breadcrumb" para orientación del usuario */}
            <div className='page-select'>
                <p>Home {">"} <strong>Programas</strong></p>
            </div>

        </div>
    );
};

// Exportamos el componente para que pueda ser usado en otras partes de la app
export default HeroInfo;
