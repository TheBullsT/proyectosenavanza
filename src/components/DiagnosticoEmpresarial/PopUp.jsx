import React from 'react';
import "./Popup.css";

function Popup({ cerrar }) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Este es el popup</h2>
        <p>Contenido del popup aquí.</p>
        <button onClick={cerrar}>Cerrar</button>
      </div>
    </div>
  );
}

export default Popup;
