import React from 'react'; // Importamos React para crear componentes
import './loading.css'; // Importamos los estilos

const LoadingDatos = ({ mensaje = "Cargando Datos del usuario..." }) => {
    return (
        // Contenedor principal que agrupa y centra el spinner junto con el mensaje
        <div className="loading-container">
            {/* Elemento visual: círculo giratorio que indica proceso en curso */}
            <div className="spinner"></div>
            {/* Texto informativo que muestra el mensaje, puede cambiarse por props */}
            <p className="loading-text">{mensaje}</p>
        </div>
    );
};

// Exportación del componente para que pueda ser reutilizado en otras partes de la app
export default LoadingDatos;
