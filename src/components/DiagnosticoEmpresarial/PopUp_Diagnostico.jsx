// Popup_Diagnostico.jsx
import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import './Popup.css'; // Asumiendo que tienes estilos separados

function Popup_Diagnostico({ cerrar, enviar }) {
    return (
        <div className="overlay">
            <form action="" className='overlay'>
                <div className="popup2">
                    <h2 className="popup-title">Diagnostico Empresarial</h2>
                    <div className="underline" />
                    <div className="form-group">
                        <input type="text" placeholder="Área requerida" className="input-box" />
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="Describa brevemente las ocupaciones para el aprendiz..." className="input-box" />
                    </div>
                    <div className='botones-diagnostico-2'>
                        <button className="submit-btn" onClick={enviar}>
                            <FaCheck className='icon-check' />Enviar diagnóstico
                        </button>
                        <button className="close-btn" onClick={cerrar}>
                            <MdCancel className='cerrar-diagnostico' /> Cerrar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Popup_Diagnostico; 