import React, { useEffect } from 'react';
// Importamos los estilos específicos para el componente
import './cerrar-sesion.css';
// Hook para navegar programáticamente entre rutas
import { useNavigate } from 'react-router-dom';

// Componente que muestra un mensaje y redirige al usuario al cerrar sesión
const CerrarSesion = ({ mensaje = "Saliendo de SENAVANZA..." }) => {

    const navigate = useNavigate();

    useEffect(() => {
        // Limpiar todo el almacenamiento local y de sesión
        localStorage.clear();
        sessionStorage.clear();

        // Configurar un temporizador para redirigir después de 2 segundos
        const timeout = setTimeout(() => {
            navigate('/inicio'); // Redirige a la página de inicio
        }, 2000);

        // Limpieza del temporizador si el componente se desmonta antes
        return () => clearTimeout(timeout);
    }, []);

    return (
        // Contenedor principal que centra el spinner y el texto
        <div className="loading-container-cerrar-sesion">
            {/* Elemento visual giratorio para indicar carga */}
            <div className="spinner-cerrar-sesion"></div>
            {/* Mensaje mostrado al usuario durante el cierre de sesión */}
            <p className="loading-text">{mensaje}</p>
        </div>
    );
};

export default CerrarSesion;
