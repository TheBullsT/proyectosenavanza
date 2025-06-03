import React from 'react';
import './cerrar-sesion-admin.css';

const CerrarSesion = ({ mensaje = "Saliendo del Administrador..." }) => {
  return (
    // Contenedor principal que centra el spinner y el texto
    <div className="loading-container-admin">
      {/* Spinner animado que indica carga */}
      <div className="spinner-admin"></div>
      {/* Texto que muestra el mensaje de carga, con valor por defecto */}
      <p className="loading-text">{mensaje}</p>
    </div>
  );
};

export default CerrarSesion;
