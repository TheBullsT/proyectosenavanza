import React from "react";
// Importa la imagen que se mostrará en el componente
import question from '../../../assets/img/Questions-pana 1.png';
// Importa los estilos CSS específicos para este componente
import './pregunta.css';
// Hook para navegar programáticamente en React Router
import { useNavigate } from "react-router-dom";

function Pregunta() {
    // Corrección: El hook se llama useNavigate, así que la variable la renombramos correctamente
    const navigate = useNavigate();

    // Función que redirige a la ruta '/diagnostico-empresarial'
    const diagnosticoEmpresarial = () => {
        navigate('/diagnostico-empresarial');
    };

    return (
        <div className="pregunta">
            {/* Contenedor de la imagen */}
            <div className="imagen">
                {/* Imagen con texto alternativo para accesibilidad */}
                <img src={question} alt="Imagen de pregunta" />
            </div>
            {/* Contenedor para el texto y botón */}
            <div className="realizar">
                <h1 className="Titulo">
                    ¿Ya realizaste tu <br /> diagnóstico empresarial?
                </h1>
                <p>
                    Si ya realizaste tu diagnóstico <br /> empresarial y te <br />
                    interesa saber tus resultados <br />
                    <strong>¡Tenemos la solución!</strong>
                </p>
                {/* Botón que al hacer clic ejecuta la función de navegación */}
                <button onClick={diagnosticoEmpresarial} className="solucion">
                    ¡PULSA AQUÍ!
                </button>
            </div>
        </div>
    );
}

export default Pregunta;
