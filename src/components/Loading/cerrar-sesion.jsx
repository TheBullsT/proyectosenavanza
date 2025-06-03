import React from 'react';
import './cerrar-sesion.css';

const CerrarSesion = ({ mensaje = "Saliendo de SENAVANZA..." }) => {
  return (
    // Contenedor principal que centra el spinner y el texto
    <div className="loading-container-cerrar-sesion">
      {/* Spinner animado que indica carga */}
      <div className="spinner-cerrar-sesion"></div>
      {/* Texto que muestra el mensaje de carga, con valor por defecto */}
      <p className="loading-text">{mensaje}</p>
    </div>
  );
};

export default CerrarSesion;
