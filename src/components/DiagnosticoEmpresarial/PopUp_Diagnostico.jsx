// Popup_Diagnostico.jsx
import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import './Popup.css'; // Asumiendo que tienes estilos separados

function Popup_Diagnostico({ cerrar, enviar }) {
    return (
        <div className="overlay">
            <div className="popup2">
                <h2 className="popup-title">Diagnostico Empresarial</h2>
                <div className="underline" />


                <div className="form-group">
                    <input type="text" placeholder="Área requerida" className="input-box" />
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Describa brevemente las ocupaciones para el aprendiz..." className="input-box2" />
                </div>

                <button className="submit-btn" onClick={enviar}>
                    <FaCheck/>Enviar diagnóstico
                </button>
                <div>
                  <button className="close-btn" onClick={cerrar}>
                      <MdCancel/> Cerrar
                  </button>
                  </div>
                
            </div>
        </div>
    );
}

export default Popup_Diagnostico;