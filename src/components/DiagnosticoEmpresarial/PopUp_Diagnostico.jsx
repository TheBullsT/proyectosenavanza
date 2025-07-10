import React, { useState } from 'react';
// Importar iconos
import { FaCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
// Asumiendo que tienes estilos separados
import './Popup.css'; 
// Importar AXIOS
import axios from 'axios'
// Importar API
import { apiDiagnostico } from '../../api/apis';
// Toast notificacion
import { toast } from 'react-toastify';



function Popup_Diagnostico({ cerrar, onResultado }) {
    const [area, SetArea] = useState('');
    const [descripcion, SetDescripcion] = useState('');
    const [herramientas, SetHerramientas] = useState('');
    const [habilidades, SetHabilidades] = useState('')

    const enviar_diagnostico = async (e) => {
        e.preventDefault();
        try {
            const response = await apiDiagnostico.post('diagnostico/', {
                RequirementEmpresa: descripcion,
                nivel_programa: area,
                tools: herramientas,
                hards_kills: habilidades,
            },
                {
                    headers: { 'Content-Type': 'application/json',},
                }
            );

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
            <form method='POST' className='overlay' onSubmit={enviar_diagnostico}>
                <div className="popup2">
                    <h2 className="popup-title">Diagnostico Empresarial</h2>
                    <div className="underline" />

                    {/*  */}
                    <div className="form-group">
                    <select
                        className="input-box"
                        value={area}
                        onChange={(e) => SetArea(e.target.value)}
                        required
                    >
                        <option value="" disabled hidden>
                        Seleccione el nivel
                        </option>
                        <option value="tecnico">Técnico</option>
                        <option value="tecnologo">Tecnólogo</option>
                    </select>
                    </div>
                    {/*  */}
                    <div className="form-group">
                        <input type="text" placeholder="¿Cuáles serian las tareas que le va a delegar al aprendiz en su empresa?"
                            className="input-box"
                            value={descripcion}
                            onChange={(e) => SetDescripcion(e.target.value)}
                            required
                            minLength={50} />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="¿Cuáles son las herramientas que el aprendiz debe de utilizar?"
                            className="input-box"
                            value={herramientas}
                            onChange={(e) => SetHerramientas(e.target.value)}
                            required
                            minLength={20} />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="¿Cuáles serian las habilidades tecnicas que el aprendiz debe de tener previamente?"
                            className="input-box"
                            value={habilidades}
                            onChange={(e) => SetHabilidades(e.target.value)}
                            required
                            minLength={20} />
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