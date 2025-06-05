import React, { useState } from "react";
// Imagen del componente principal
import result from "../../../../assets/img/img-resultados-diagnostico/resultados.png";
// Imagen que se mostrará en el pop-up (puedes cambiarla por la que desees)
import infoImg from "../../../../assets/img/Solutions.png";
// Estilos del componente
import "./resultado.css";

function Resultados() {
    const [mostrarPopup, setMostrarPopup] = useState(false);
    const [animarPopup, setAnimarPopup] = useState(false);

    const abrirPopup = () => {
        setMostrarPopup(true);
        // Activa animación después de montaje
        setTimeout(() => setAnimarPopup(true), 10);
    };

    const cerrarPopup = () => {
        // Desactiva animación
        setAnimarPopup(false);
        // Espera animación de salida antes de desmontar
        setTimeout(() => setMostrarPopup(false), 300);
    };

    return (
        <div className="container-resultado">
            <div className="titulo-reporte">
                <h1>
                    Conoce el programa de formación <br />
                    más recomendado para ti
                </h1>
            </div>

            <div className="resultado-total">
                <img src={result} alt="Imagen de resultados" />

                <div className="programa-recomendado">
                    <h2>
                        Análisis y desarrollo <br />
                        de software
                    </h2>
                    <p>
                        Es uno de los programas de formación <br />
                        recomendados para tu empresa
                    </p>
                    <button className="boton-ver-mas" onClick={abrirPopup}>
                        Ver más
                    </button>
                </div>
            </div>

            {mostrarPopup && (
                <div className={`popup ${animarPopup ? "mostrar" : "ocultar"}`}>
                    <div className="popup-contenido">
                        <img src={infoImg} alt="Programa de formación" className="popup-imagen" />
                        <div className="popup-info">
                            <h1>Análisis y Desarrollo de Software</h1>
                            <p><strong>Duración:</strong> 24 meses</p>
                            <p><strong>Nivel Formativo:</strong> Tecnólogo</p>
                            <p>
                                <strong>Descripción:</strong> Este programa tiene como objetivo formar tecnólogos capaces de analizar, diseñar, desarrollar, implementar y mantener aplicaciones de software, promoviendo soluciones tecnológicas para diversos sectores productivos.
                            </p>
                            <button className="boton-cerrar" onClick={cerrarPopup}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Resultados;
