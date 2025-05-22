import React from 'react';
import './loading.css';
import logo from '../../assets/img/Logo_SENAVANZA.jpg'; 

const Loading = ({ mensaje = "Cargando SENAVANZA..." }) => {
  return (
    <div className="loading-container">
      {logo && <img src={logo} alt="Logo SENAVANZA" className="loading-logo" />}
      <div className="spinner"></div>
      <p className="loading-text">{mensaje}</p>
    </div>
  );
};

export default Loading;
