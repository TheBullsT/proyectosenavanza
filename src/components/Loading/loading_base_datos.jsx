import React from 'react'; // Importamos React para crear componentes
import './loading_base_datos.css'; // Importamos los estilos

const LoadingBaseDatos = ({ mensaje = "Cargando Base de Datos..." }) => {
    return (
        // Contenedor principal que organiza y centra todos los elementos de carga
        <div className="loading-container">
            {/* Elemento visual: spinner circular animado */}
            <div className="spinner"></div>
            {/* Texto dinámico que muestra el estado o mensaje de carga */}
            <p className="loading-text">{mensaje}</p>
        </div>
    );
};

// Exporta el componente para ser usado en otras partes de la app
export default LoadingBaseDatos;
