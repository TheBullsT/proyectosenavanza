import React from 'react';
import exito from '../../assets/img/img-resultados-diagnostico/exito.png'
import "./Popup.css";

function Popup({ cerrar }) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className='diagnostico-completo'>
          <h2>!Tu diagnostico <br />ha sido  completado con éxito¡</h2>
          <img src={exito} alt="Imagen de exito" />
          <p>Descarga tu reporte y <br />revisa los resultados al detalle</p>
        </div>
        <div className='botones-diagnostico'>
          <button className='resultados' onClick={cerrar}>Resultados</button>
          <button className='descargar' onClick={cerrar}>Descargar</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
