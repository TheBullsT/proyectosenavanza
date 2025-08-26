import React from 'react'; // Importamos React para crear componentes
import './loading.css'; // Importamos los estilos

const Loading = ({ mensaje = "Cargando SENAVANZA..." }) => {
  return (
    // Contenedor principal del componente que centra el contenido
    <div className="loading-container">
      {/* Elemento visual: spinner animado que indica proceso de carga */}
      <div className="spinner"></div>
      {/* Texto descriptivo del estado de carga; usa un valor por defecto si no se pasa prop */}
      <p className="loading-text">{mensaje}</p>
    </div>
  );
};

// Exportamos el componente loading
export default Loading;
