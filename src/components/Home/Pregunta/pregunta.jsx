// Importación de React para crear el componente
import React from "react";
// Importa la imagen que se usará en la sección
import question from '../../../assets/img/Questions-pana 1.png';
// Importa estilos específicos para el componente
import './pregunta.css';
// Hook de React Router para redireccionar de forma programática
import { useNavigate } from "react-router-dom";

function Pregunta() {
    // Hook que permite navegar a otra ruta desde código
    const navigate = useNavigate();

    // Función que redirige al usuario a la página del diagnóstico
    const diagnosticoEmpresarial = () => {
        navigate('/diagnostico-empresarial');
    };

    return (
        <div className="pregunta">
            {/* Sección de la imagen principal */}
            <div className="imagen">
                <img src={question} alt="Imagen de pregunta" />
            </div>
            {/* Contenido textual y botón de acción */}
            <div className="realizar">
                <h1 className="Titulo">
                    ¿Ya realizaste tu <br /> diagnóstico empresarial?
                </h1>
                <p>
                    Si ya realizaste tu diagnóstico <br /> empresarial y te <br />
                    interesa conocer tus resultados <br />
                    <strong>¡Tenemos la solución!</strong>
                </p>
                {/* Botón que ejecuta la navegación */}
                <button onClick={diagnosticoEmpresarial} className="solucion">
                    ¡Pulsa aquí!
                </button>
            </div>
        </div>
    );
}

export default Pregunta;
