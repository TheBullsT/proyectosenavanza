import React, { useEffect} from 'react';
import './cerrar-sesion.css';
import { useNavigate } from 'react-router-dom';

const CerrarSesion = ({ mensaje = "Saliendo de SENAVANZA..." }) => {

  const navigate = useNavigate();

  useEffect(() => {
    // Limpiar storage
    localStorage.clear();
    sessionStorage.clear();

    // Redireccionar luego de 2 segundos
    const timeout = setTimeout(() => {
      navigate('/inicio');
    }, 2000);

    // Limpieza del timeout si el componente se desmonta
    return () => clearTimeout(timeout);
  }, []);
  return (
    // Contenedor principal que centra el spinner y el texto
    <div className="loading-container-cerrar-sesion">
      {/* Spinner animado que indica carga */}
      <div className="spinner-cerrar-sesion"></div>
      {/* Texto que muestra el mensaje de carga, con valor por defecto */}
      <p className="loading-text">{mensaje}</p>
    </div>
  );
};

export default CerrarSesion;
