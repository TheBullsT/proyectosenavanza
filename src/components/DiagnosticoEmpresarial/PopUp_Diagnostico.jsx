// Popup_Diagnostico.jsx
import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import './Popup.css'; // Asumiendo que tienes estilos separados
import axios from 'axios'
// Importar API
import { apiDiagnostico } from '../../api/apis';
// Toast notificacion
import { toast } from 'react-toastify';






function Popup_Diagnostico({ cerrar, onResultado }) {
    const [area, SetArea] = useState('');
    const [descripcion, SetDescripcion] = useState('');

    const enviar_diagnostico = async (e) => {
        e.preventDefault();


        try {
            const response = await apiDiagnostico.post('diagnostico/', {
                RequirementEmpresa: descripcion,
                nivel_programa: area,
            },
                {
                    withCredentials: true
                });

            console.log('requemientos enviados:', response.data);
            onResultado(response.data);
            toast.success("Requerimientos enviados con exito");
            cerrar();
        }

        catch (error) {
            console.error('error al enviar requerimientos', error);
            toast.error("Error al enviar requerimientos");
        };
    };

    return (
        <div className="overlay">
            <form className='overlay' onSubmit={enviar_diagnostico}>
                <div className="popup2">
                    <h2 className="popup-title">Diagnostico Empresarial</h2>
                    <div className="underline" />

                    {/*  */}
                    <div className="form-group">
                        <input type="text" placeholder="Área requerida" className="input-box"
                            value={area}
                            onChange={(e) => SetArea(e.target.value)}
                            required />
                    </div>
                    {/*  */}
                    <div className="form-group">
                        <input type="text" placeholder="Describa brevemente las ocupaciones para el aprendiz..."
                            className="input-box"
                            value={descripcion}
                            onChange={(e) => SetDescripcion(e.target.value)}
                            required
                            minLength={50} />
                    </div>
                    <div className='botones-diagnostico-2'>
                        <button className="submit-btn" type='submit'>
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