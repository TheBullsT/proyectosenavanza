import React from "react"; // Importación de React para crear el componente
import './presentacion.css'; // Importa estilos específicos del componente
import { useNavigate } from "react-router-dom"; // Hook para navegación programática
import { BsListTask } from "react-icons/bs"; // Icono de lista de tareas

function Presentacion() {
    const navigate = useNavigate(); // Hook que devuelve función para cambiar de ruta

    // Redirige al usuario a la página de diagnóstico empresarial
    const diagnostico = () => {
        navigate('/diagnostico-empresarial'); // Cambia la ruta a la indicada
    }

    return (
        <div className="presentacion">
            {/* Bloque de presentación con texto de bienvenida */}
            <div className="presentacion-senavanza">
                <p className="texto-presentacion">¡Te presentamos SENAVANZA!</p>
                <p className="texto-ayuda">
                    Te ayudaremos a escoger <br />
                    el mejor aprendiz para tu empresa
                </p>
            </div>

            {/* Sección que invita a responder el diagnóstico */}
            <div className="responde-diagnostico">
                <p className="texto-diagnostico">¡Responde a nuestro diagnóstico empresarial!</p>
                {/* Botón con icono que, al hacer clic, ejecuta la navegación */}
                <button className="diagnostico" onClick={diagnostico}>
                    <BsListTask className="icon-diagnostico" /> Diagnóstico
                </button>
            </div>
        </div>
    );
}

export default Presentacion;
