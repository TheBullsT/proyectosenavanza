// Importación de React para crear el componente
import React from "react";
import './recomendacion.css'; // Importamos los estilos específicos para este componente
import { IoPeopleSharp } from "react-icons/io5"; // Importamos el ícono de personas

function Recomendacion() {
    return (
        <div className="recomendaciones">
            {/* Encabezado de la sección que indica que se mostrarán recomendaciones */}
            <h2 className="titulo-recomendacion">Recomendaciones</h2>

            <div className="conocer">
                {/* Icono visual para reforzar el tema de la recomendación */}
                <IoPeopleSharp className="icono-recomendacion" />

                {/* Pregunta breve para invitar al usuario a interactuar */}
                <p>¿Quieres conocer nuestros programas de formación?</p>

                {/* Botón que abre un enlace externo en otra pestaña del navegador */}
                <button
                    className="boton-recomendacion"
                    onClick={() => window.open("https://oferta.senasofiaplus.edu.co/sofia-oferta/", "_blank")}
                /* "_blank" asegura que el enlace se abra en una nueva pestaña */
                >
                    ¡PULSA AQUÍ!
                </button>
            </div>
        </div>
    );
}

export default Recomendacion;
