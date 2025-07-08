import React from 'react';

// Importa imagen de éxito desde la carpeta de assets
import exito from '../../assets/img/img-resultados-diagnostico/exito.png'

// Importa íconos desde react-icons
import { FaDownload } from "react-icons/fa";
import { FaRegFileArchive } from "react-icons/fa";

// Importa los estilos CSS para este componente
import "./Popup.css";

// Componente funcional que recibe una función 'cerrar' como prop
function Popup({ cerrar }) {
  return (
    // Capa semitransparente que cubre toda la pantalla
    <div className="popup-overlay">
      <form action="" className='popup-overlay'>
      {/* Contenedor del popup central */}
      <div className="popup1">
        {/* Sección con el mensaje de éxito del diagnóstico */}
        <div className='diagnostico-completo'>
          <h2>!Tu diagnostico <br />ha sido  completado con éxito¡</h2>
          {/* Imagen que representa el éxito del diagnóstico */}
          <img src={exito} alt="Imagen de exito" />
          {/* Texto con instrucciones para el usuario */}
          <p>Descarga tu reporte y <br />revisa los resultados al detalle</p>
        </div>

        {/* Botones para ver resultados o descargar reporte */}
        <div className='botones-diagnostico-1'>
          {/* Botón que muestra los resultados y cierra el popup */}
          <button className='resultados' onClick={cerrar}>
            <FaRegFileArchive className='icon-resultados' /> Resultados
          </button>

          {/* Botón para descargar el reporte y cierra el popup */}
          <button className='descargar' onClick={cerrar}>
            <FaDownload className='icon-descargar' /> Descargar
          </button>
        </div>
      </div>
      </form>
    </div>
  );
}

// Exporta el componente para su uso en otros lugares
export default Popup;
