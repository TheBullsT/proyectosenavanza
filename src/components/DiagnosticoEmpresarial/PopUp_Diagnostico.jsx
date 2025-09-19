import React, { useState } from 'react';
// Importa íconos de confirmación y cancelación
import { FaCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
// Importa estilos CSS específicos para el popup
import './Popup.css';
// Importa Axios para peticiones HTTP
import axios from 'axios'
// Importa la API configurada para diagnóstico
import { apiDiagnostico } from '../../api/apis';
// Importa notificaciones tipo Toast
import { toast } from 'react-toastify';

// Componente funcional Popup_Diagnostico
function Popup_Diagnostico({ cerrar, onResultado }) {
    // Estados para manejar los valores del formulario
    const [area, SetArea] = useState('');
    const [descripcion, SetDescripcion] = useState('');
    const [herramientas, SetHerramientas] = useState('');
    const [habilidades, SetHabilidades] = useState('')

    // Función asincrónica para enviar el formulario de diagnóstico
    const enviar_diagnostico = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        try {
            // Enviar datos al endpoint del diagnóstico
            const response = await apiDiagnostico.post('diagnostico/', {
                RequirementEmpresa: descripcion,
                nivel_programa: area,
                tools: herramientas,
                hards_kills: habilidades,
            },
                {
                    headers: { 'Content-Type': 'application/json', },
                }
            );

            // Si la petición es exitosa
            console.log('requerimientos enviados:', response.data);
            onResultado(response.data); // Devuelve los datos al componente padre
            toast.success("Requerimientos enviados con éxito"); // Notificación de éxito
            cerrar(); // Cierra el popup
        }

        catch (error) {
            // Manejo de errores en caso de que falle la petición
            console.error('error al enviar requerimientos', error);
            toast.error("Error al enviar requerimientos"); // Notificación de error
        };
    };

    return (
        // Capa de fondo del popup
        <div className="overlay">
            {/* Formulario para enviar diagnóstico */}
            <form method='POST' className='overlay' onSubmit={enviar_diagnostico}>
                <div className="popup2">
                    {/* Título */}
                    <h2 className="popup-title">Diagnóstico Empresarial</h2>
                    <div className="underline" />

                    {/* Selección de nivel del programa */}
                    <div className="form-group">
                        <select
                            className="input-box-select"
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

                    {/* Campo para descripción de tareas */}
                    <div className="form-group">
                        <input type="text" placeholder="¿Cuáles serían las tareas que le va a delegar al aprendiz en su empresa?"
                            className="input-box"
                            value={descripcion}
                            onChange={(e) => SetDescripcion(e.target.value)}
                            required
                            minLength={30} />
                    </div>

                    {/* Campo para herramientas necesarias */}
                    <div className="form-group">
                        <input type="text" placeholder="¿Cuáles son las herramientas que el aprendiz debe utilizar en el cargo?"
                            className="input-box"
                            value={herramientas}
                            onChange={(e) => SetHerramientas(e.target.value)}
                            required
                            minLength={20} />
                    </div>

                    {/* Campo para habilidades técnicas requeridas */}
                    <div className="form-group">
                        <input type="text" placeholder="¿Qué conocimientos básicos debería tener el aprendiz que va a ocupar el cargo?"
                            className="input-box"
                            value={habilidades}
                            onChange={(e) => SetHabilidades(e.target.value)}
                            required
                            minLength={20} />
                    </div>

                    {/* Botones de acción: enviar o cerrar */}
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
