import React, { useState } from "react";
import imagenprograma from '../../../../assets/img/img-resultados-diagnostico/imagen-programa.png';
import recomendados from '../../../../assets/img/img-resultados-diagnostico/recomendados-programa.png';
import './programas.css';
import pregunta from '../../../../assets/img/dudas.png';

// Datos de los programas de formación (simulados)
const programasData = [
  {
    id: 1,
    nombre: "Programa A",
    duracion: "6 meses",
    nivel: "Intermedio",
    descripcion: "Descripción del programa A.",
    imagen: imagenprograma,
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
  // Estado para controlar si el popup está visible
  const [showPopup, setShowPopup] = useState(false);
  // Estado para almacenar el programa seleccionado cuya info se mostrará en el popup
  const [programaSeleccionado, setProgramaSeleccionado] = useState(null);
  const [animarPopup, setAnimarPopup] = useState(false);


  // Función que abre el popup y asigna el programa seleccionado
  const abrirPopup = (programa) => {
    setProgramaSeleccionado(programa);
    setShowPopup(true);
    setTimeout(() => setAnimarPopup(true), 10);
  };

  // Función para cerrar el popup y limpiar el programa seleccionado
const cerrarPopup = () => {
  setAnimarPopup(false); // Quita la clase 'mostrar', activa 'ocultar'
  
  // Espera que termine la animación antes de desmontar
  setTimeout(() => {
    setShowPopup(false);
    setProgramaSeleccionado(null);
  }, 300); // Este tiempo debe coincidir con la duración de la animación en CSS
};

  return (
    <div className="container-programas">
      {/* Título principal */}
      <div className="titulo-reporte-programas">
        <h1>Programa de Formación <br /> Recomendados</h1>
      </div>

      {/* Contenedor de programas y la imagen lateral */}
      <div className="programas-total">
        <div className="programas">
          {/* Mapeamos los programas para mostrarlos como tarjetas */}
          {programasData.map((programa) => (
            <div key={programa.id} className="programas-formacion">
              {/* Imagen del programa */}
              <img className="imagen-programa" src={programa.imagen} alt={`Imagen ${programa.nombre}`} />
              <div className="informacion-ficha-programas">
                {/* Nombre del programa */}
                <p>{programa.nombre}</p>
                {/* Botón para mostrar más información */}
                <button className="boton-ver-mas-programas" onClick={() => abrirPopup(programa)}>Ver más</button>
              </div>
            </div>
          ))}
        </div>

        {/* Imagen decorativa lateral */}
        <img className="imagen-recomendados-programas" src={recomendados} alt="Recomendados imagen" />
      </div>

      {/* Popup que aparece solo si showPopup es true y hay un programa seleccionado */}
      {showPopup && programaSeleccionado && (
        <div className={`popup ${animarPopup ? "mostrar" : "ocultar"}`}>
          <div className="popup-overlay-programas">
            <div className="popup-content-programas">
              {/* Parte izquierda: imagen del programa */}
              <div className="popup-imagen-programas">
                <img src={pregunta} alt={"Imagen de pregunta"} />
              </div>
              {/* Parte derecha: información detallada del programa */}
              <div className="popup-info-programas">
                <h1>{programaSeleccionado.nombre}</h1>
                <p><strong>Duración:</strong> {programaSeleccionado.duracion}</p>
                <p><strong>Nivel Formativo:</strong> {programaSeleccionado.nivel}</p>
                <p><strong>Descripción:</strong> {programaSeleccionado.descripcion}</p>
                {/* Botón para cerrar el popup */}
                <button className="boton-cerrar-programas" onClick={cerrarPopup}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Programas;
