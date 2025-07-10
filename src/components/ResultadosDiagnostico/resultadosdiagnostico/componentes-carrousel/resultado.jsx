import React, { useState } from "react";
// Imagen del componente principal
import result from "../../../../assets/img/img-resultados-diagnostico/resultados.png";
// Imagen que se mostrará en el pop-up (puedes cambiarla por la que desees)
import infoImg from "../../../../assets/img/Solutions.png";
// Estilos del componente
import "./resultado.css";
import { useLocation } from "react-router-dom";

function Resultados() {
    const location = useLocation();
    const [datos, setDatos] = useState(location.state?.datos);
    const [mostrarPopup, setMostrarPopup] = useState(false);
    const [animarPopup, setAnimarPopup] = useState(false);


// Si no hay datos del estado, los intenta recuperar del localStorage
    React.useEffect(() => {
        if (!location.state?.datos) {
            const datosGuardados = localStorage.getItem("resultadoDiagnostico");
            if (datosGuardados) {
                setDatos(JSON.parse(datosGuardados));
            }
        }
    }, [location.state]);
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
                        {datos?.programa_recomendado?.nombre}
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
                            <h1>{datos?.programa_recomendado?.nombre}</h1>
                            <p><strong>Duración:</strong> 24 meses</p>
                            <p><strong>Nivel Formativo:</strong>{datos?.programa_recomendado?.nivel_programa}</p>
                            <p>
                                <strong>Descripción:</strong>
                                {datos?.programa_recomendado?.descripcion}
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
