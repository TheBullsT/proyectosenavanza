import React, { useEffect } from 'react'; // Importamos React para crear componentes y hook useEffect
import './cerrar-sesion-admin.css'; // Importamos los estilos
import { useNavigate } from 'react-router-dom'; // Hook para navegar

const CerrarSesion = ({ mensaje = "Saliendo del Administrador..." }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // Limpia todo el almacenamiento local y de sesión para cerrar sesión completamente
        localStorage.clear();
        sessionStorage.clear();

        // Inicia un temporizador para redirigir al usuario a la página de inicio después de 2 segundos
        const timeout = setTimeout(() => {
            navigate('/inicio'); // Redirección
        }, 2000);

        // Limpieza del temporizador si el componente se desmonta antes de que termine
        return () => clearTimeout(timeout);
    }, []);

    return (
        // Contenedor que muestra el estado de "cargando" mientras se cierra la sesión
        <div className="loading-container-admin">
            {/* Animación del spinner que indica al usuario que el proceso está en curso */}
            <div className="spinner-admin"></div>
            {/* Mensaje dinámico que informa el estado, con un valor por defecto */}
            <p className="loading-text">{mensaje}</p>
        </div>
    );
};

export default CerrarSesion;
