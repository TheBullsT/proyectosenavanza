import React, { useState } from "react";
// Importa React y useState para manejar estados dentro del componente

import imagenprograma from '../../../../assets/img/img-resultados-diagnostico/imagen-programa.png';
// Imagen genérica de los programas

import recomendados from '../../../../assets/img/img-resultados-diagnostico/recomendados-programa.png';
// Imagen lateral decorativa para la sección de programas

import './programas.css';
// Archivo CSS con estilos del componente

import pregunta from '../../../../assets/img/dudas.png';
// Imagen usada en el pop-up

// Datos simulados de programas de formación
const programasData = [
    {
        id: 1,
        nombre: "Programa A",
        duracion: "6 meses",
        nivel: "Intermedio",
        descripcion: "Descripción del Programa A.",
        imagen: imagenprograma, // Imagen asociada al programa
    },
    {
        id: 2,
        nombre: "Programa B",
        duracion: "4 meses",
        nivel: "Básico",
        descripcion: "Descripción del Programa B.",
        imagen: imagenprograma,
    },
    {
        id: 3,
        nombre: "Programa C",
        duracion: "8 meses",
        nivel: "Avanzado",
        descripcion: "Descripción del Programa C.",
        imagen: imagenprograma,
    },
];

function Programas() {
    // Estado para controlar la visibilidad del pop-up
    const [showPopup, setShowPopup] = useState(false);

    // Estado para guardar el programa seleccionado
    const [programaSeleccionado, setProgramaSeleccionado] = useState(null);

    // Estado para controlar la animación de aparición del pop-up
    const [animarPopup, setAnimarPopup] = useState(false);

    // Función para abrir el pop-up y asignar el programa seleccionado
    const abrirPopup = (programa) => {
        setProgramaSeleccionado(programa); // Guarda el programa seleccionado
        setShowPopup(true); // Muestra el pop-up
        setTimeout(() => setAnimarPopup(true), 10);
        // Pequeño retardo para activar la animación CSS
    };

    // Función para cerrar el pop-up
    const cerrarPopup = () => {
        setAnimarPopup(false); // Inicia la animación de salida
        setTimeout(() => {
            setShowPopup(false); // Oculta el pop-up
            setProgramaSeleccionado(null); // Limpia la selección
        }, 300); // El tiempo debe coincidir con la duración de la animación CSS
    };

    return (
        <div className="container-programas">
            {/* Título principal de la sección */}
            <div className="titulo-reporte-programas">
                <h1>Programas de Formación <br /> Recomendados</h1>
            </div>

            {/* Contenedor de los programas y la imagen lateral */}
            <div className="programas-total">
                <div className="programas">
                    {/* Mapeo de programas para generar tarjetas */}
                    {programasData.map((programa) => (
                        <div key={programa.id} className="programas-formacion">
                            {/* Imagen del programa */}
                            <img
                                className="imagen-programa"
                                src={programa.imagen}
                                alt={`Imagen ${programa.nombre}`}
                            />
                            <div className="informacion-ficha-programas">
                                {/* Nombre del programa */}
                                <p>{programa.nombre}</p>
                                {/* Botón para abrir el pop-up con más información */}
                                <button
                                    className="boton-ver-mas-programas"
                                    onClick={() => abrirPopup(programa)}
                                >
                                    Ver más
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Imagen decorativa lateral */}
                <img
                    className="imagen-recomendados-programas"
                    src={recomendados}
                    alt="Imagen de programas recomendados"
                />
            </div>

            {/* Pop-up visible solo si hay un programa seleccionado */}
            {showPopup && programaSeleccionado && (
                <div className={`popup ${animarPopup ? "mostrar" : "ocultar"}`}>
                    <div className="popup-overlay-programas">
                        <div className="popup-content-programas">
                            {/* Imagen del programa o ícono de duda */}
                            <div className="popup-imagen-programas">
                                <img src={pregunta} alt="Imagen de ayuda" />
                            </div>

                            {/* Información detallada del programa */}
                            <div className="popup-info-programas">
                                <h1>{programaSeleccionado.nombre}</h1>
                                <p><strong>Duración:</strong> {programaSeleccionado.duracion}</p>
                                <p><strong>Nivel formativo:</strong> {programaSeleccionado.nivel}</p>
                                <p><strong>Descripción:</strong> {programaSeleccionado.descripcion}</p>
                                {/* Botón para cerrar el pop-up */}
                                <button
                                    className="boton-cerrar-programas"
                                    onClick={cerrarPopup}
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Programas;
