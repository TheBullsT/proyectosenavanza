import React from "react";
import './recomendacion.css'; // Importamos los estilos específicos para este componente
import { IoPeopleSharp } from "react-icons/io5"; // Importamos el ícono de personas

function Recomendacion() {
    return (
        <div className="recomendaciones">
            {/* Título principal del bloque de recomendaciones */}
            <h2 className="titulo-recomendacion">Recomendaciones</h2>

            {/* Contenedor con el icono, texto y botón */}
            <div className="conocer">
                {/* Icono representativo */}
                <IoPeopleSharp className="icono-recomendacion" />

                {/* Texto descriptivo */}
                <p>¿Quieres conocer nuestros programas de formación?</p>

                {/* Botón que abre la URL en una pestaña nueva */}
                <button
                    className="boton-recomendacion"
                    onClick={() => window.open("https://oferta.senasofiaplus.edu.co/sofia-oferta/", "_blank")}
                /* NOTA: corrigió "_blanck" por "_blank" para que funcione bien */
                >
                    ¡PULSA AQUÍ!
                </button>
            </div>
        </div>
    );
}

export default Recomendacion;
