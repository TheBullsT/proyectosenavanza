import React from 'react';
import './Formulario.css'; // Importamos el archivo CSS con estilos globales y específicos
import { BiTask } from "react-icons/bi"; // Importamos el ícono BiTask de react-icons

const BannerHelp = () => {
    return (
        // Contenedor principal del banner con borde y fondo suave
        <div className='container-banner'>

            {/* Contenedor para el ícono a la izquierda */}
            <div className='icon-banner'>
                {/* Ícono que representa la tarea o diagnóstico */}
                <BiTask className='icon-banner-diagnostico' />
            </div>

            {/* Contenedor para el texto informativo */}
            <div className='banner-info'>
                {/* Título en negrita que explica el propósito del banner */}
                <p><b>¿Qué beneficios trae el diagnóstico empresarial?</b></p>

                {/* Lista con los puntos clave de los beneficios */}
                <ul>
                    <li>Identificas áreas de mejora.</li>
                    <li>Encuentras Programas de Formación adecuados.</li>
                </ul>
            </div>
        </div>
    );
}

export default BannerHelp;

