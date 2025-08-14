import React, { useState } from "react";
// Importa React y useState para manejar estados dentro del componente

import imagenprograma from '../../../../assets/img/img-resultados-diagnostico/imagen-programa.png';
// Imagen genérica para los programas

import recomendados from '../../../../assets/img/img-resultados-diagnostico/recomendados-programa.png';
// Imagen lateral decorativa para la sección de programas

import './programas.css';
// Archivo CSS con estilos del componente

import pregunta from '../../../../assets/img/dudas.png';
// Imagen usada en el popup

// Datos simulados de programas de formación
const programasData = [
    {
        id: 1,
        nombre: "Programa A",
        duracion: "6 meses",
        nivel: "Intermedio",
        descripcion: "Descripción del programa A.",
        imagen: imagenprograma, // Imagen asociada al programa
    },
    {
        id: 2,
        nombre: "Programa B",
        duracion: "4 meses",
        nivel: "Básico",
        descripcion: "Descripción del programa B.",
        imagen: imagenprograma,
    },
    {
        id: 3,
        nombre: "Programa C",
        duracion: "8 meses",
        nivel: "Avanzado",
        descripcion: "Descripción del programa C.",
        imagen: imagenprograma,
    },
];

function Programas() {
    // Estado para controlar visibilidad del popup
    const [showPopup, setShowPopup] = useState(false);

    // Estado para guardar el programa seleccionado
    const [programaSeleccionado, setProgramaSeleccionado] = useState(null);

    // Estado para controlar animación de aparición del popup
    const [animarPopup, setAnimarPopup] = useState(false);

    // Función para abrir el popup y asignar el programa seleccionado
    const abrirPopup = (programa) => {
        setProgramaSeleccionado(programa); // Guardar el programa seleccionado
        setShowPopup(true); // Mostrar popup
        setTimeout(() => setAnimarPopup(true), 10);
        // Pequeño delay para activar la animación CSS
    };

    // Función para cerrar el popup
    const cerrarPopup = () => {
        setAnimarPopup(false); // Inicia animación de salida
        setTimeout(() => {
            setShowPopup(false); // Ocultar popup
            setProgramaSeleccionado(null); // Limpiar selección
        }, 300); // Tiempo debe coincidir con duración de animación CSS
    };

    return (
        <div className="container-programas">
            {/* Título principal de la sección */}
            <div className="titulo-reporte-programas">
                <h1>Programa de Formación <br /> Recomendados</h1>
            </div>

            {/* Contenedor de programas y la imagen lateral */}
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
                                {/* Botón para abrir popup con más info */}
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
                    alt="Recomendados imagen"
                />
            </div>

            {/* Popup visible solo si hay programa seleccionado */}
            {showPopup && programaSeleccionado && (
                <div className={`popup ${animarPopup ? "mostrar" : "ocultar"}`}>
                    <div className="popup-overlay-programas">
                        <div className="popup-content-programas">
                            {/* Imagen del programa o icono de duda */}
                            <div className="popup-imagen-programas">
                                <img src={pregunta} alt="Imagen de pregunta" />
                            </div>

                            {/* Información detallada del programa */}
                            <div className="popup-info-programas">
                                <h1>{programaSeleccionado.nombre}</h1>
                                <p><strong>Duración:</strong> {programaSeleccionado.duracion}</p>
                                <p><strong>Nivel Formativo:</strong> {programaSeleccionado.nivel}</p>
                                <p><strong>Descripción:</strong> {programaSeleccionado.descripcion}</p>
                                {/* Botón para cerrar popup */}
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
