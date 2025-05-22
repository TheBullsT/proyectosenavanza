import React from 'react';
import './loading.css';

const Loading = ({ mensaje = "Cargando SENAVANZA..." }) => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">{mensaje}</p>
    </div>
  );
};

export default Loading;
