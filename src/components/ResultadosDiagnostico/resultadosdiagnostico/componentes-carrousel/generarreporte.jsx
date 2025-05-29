import React from "react";
// Importa React para poder usar JSX y crear componentes funcionales

import './generarreporte.css';
// Importa el archivo CSS específico para los estilos de este componente

import reporte from '../../../../assets/img/img-resultados-diagnostico/reporte.png';
// Importa la imagen 'reporte.png' que se usará en el componente

function GenerarReporte() {
    // Define un componente funcional llamado GenerarReporte

    return (
        // Retorna el JSX que define la estructura visual del componente
        <div className="container-reporte">
            {/* Contenedor principal del reporte */}

            <div className="titulo-reporte">
                {/* Contenedor para el título */}
                <h1>
                    ¿Quieres tener tus resultados
                    <br /> {/* Salto de línea para mejor presentación */}
                    del diagnóstico?
                </h1>
            </div>

            <div className="generar-reporte">
                {/* Contenedor principal para el contenido y la imagen */}

                <div className="contenido-reporte">
                    {/* Sección que contiene el texto descriptivo y el botón */}
                    <p className="texto-reporte">
                        Genera un <strong> reporte </strong> del
                        <br /> {/* Saltos de línea para formato del texto */}
                        resultado del diagnóstico
                        <br />
                        para que puedas verlos
                        <br />
                        con más calma
                    </p>

                    <button className="boton-generar-reporte">
                        {/* Botón para que el usuario genere el reporte */}
                        Generar Reporte
                    </button>
                </div>

                <img src={reporte} alt="Imagen reporte" />
                {/* Imagen ilustrativa relacionada con el reporte */}
            </div>
        </div>
    );
}

export default GenerarReporte;
// Exporta el componente para que pueda ser usado en otras partes de la aplicación
