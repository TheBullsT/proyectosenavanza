// Importación de React para crear el componente
import React from "react";
import './recomendacion.css'; // Importamos los estilos específicos de este componente
import { IoPeopleSharp } from "react-icons/io5"; // Importamos el ícono de personas

// Componente funcional Recomendacion
function Recomendacion() {
    return (
        <div className="recomendaciones">
            {/* Encabezado de la sección que indica el contenido de recomendaciones */}
            <h2 className="titulo-recomendacion">Recomendaciones</h2>

            <div className="conocer">
                {/* Ícono que refuerza visualmente la temática */}
                <IoPeopleSharp className="icono-recomendacion" />

                {/* Pregunta que invita al usuario a explorar más */}
                <p>¿Quieres conocer nuestros programas de formación?</p>

                {/* Botón que redirige a un enlace externo en una nueva pestaña */}
                <button
                    className="boton-recomendacion"
                    onClick={() => window.open("https://oferta.senasofiaplus.edu.co/sofia-oferta/", "_blank")}
                >
                    ¡PULSA AQUÍ!
                </button>
            </div>
        </div>
    );
}

// Exportación del componente para su uso en otras partes del proyecto
export default Recomendacion;
