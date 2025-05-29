import React from "react";
import './presentacion.css';
import { useNavigate } from "react-router-dom";
import { BsListTask } from "react-icons/bs";

function Presentacion() {
    // useNavigate devuelve una función para cambiar de ruta
    const navigate = useNavigate(); // Corregí el nombre de la variable (antes "navegate")

    // Función que redirige a la página de diagnóstico empresarial
    const diagnostico = () => {
        navigate('/diagnostico-empresarial'); // Usar la función correcta para navegar
    }

    return (
        <div className="presentacion">
            {/* Sección con texto introductorio */}
            <div className="presentacion-senavanza">
                <p className="texto-presentacion">¡Te presentamos SENAVANZA!</p>
                <p className="texto-ayuda">
                    Te ayudaremos a escoger <br />
                    el mejor aprendiz para tu empresa
                </p>
            </div>

            {/* Sección para invitar al usuario a responder el diagnóstico */}
            <div className="responde-diagnostico">
                <p className="texto-diagnostico">¡Responde a nuestro diagnóstico empresarial!</p>
                {/* Botón que dispara la navegación al diagnóstico */}
                <button className="diagnostico" onClick={diagnostico}>
                    <BsListTask className="icon-diagnostico" /> Diagnóstico
                </button>
            </div>
        </div>
    );
}

export default Presentacion;
