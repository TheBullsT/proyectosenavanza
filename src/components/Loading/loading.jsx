import React from 'react';
import './loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">Cargando SENAVANZA...</p>
    </div>
  );
};

export default Loading;
