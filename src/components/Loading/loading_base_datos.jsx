import React from 'react';
import './loading_base_datos.css';

const LoadingBaseDatos = ({ mensaje = "Cargando Base de Datos..." }) => {
  return (
    // Contenedor principal que centra el spinner y el texto
    <div className="loading-container">
      {/* Spinner animado que indica carga */}
      <div className="spinner"></div>
      {/* Texto que muestra el mensaje de carga, con valor por defecto */}
      <p className="loading-text">{mensaje}</p>
    </div>
  );
};

export default LoadingBaseDatos;
