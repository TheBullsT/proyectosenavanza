import React, { useState } from "react";
// Imagen principal que se muestra en el componente
import result from "../../../../assets/img/img-resultados-diagnostico/resultados.png";
// Imagen que se mostrará dentro del pop-up con más información
import infoImg from "../../../../assets/img/Solutions.png";
// Estilos del componente
import "./resultado.css";
// Hook para acceder a la ubicación y estado de React Router
import { useLocation } from "react-router-dom";

function Resultados() {
    const location = useLocation(); // Obtiene información de la ruta actual
    // Estado para almacenar los datos del programa recomendado
    const [datos, setDatos] = useState(location.state?.datos);
    // Estado para controlar la visibilidad del pop-up
    const [mostrarPopup, setMostrarPopup] = useState(false);
    // Estado para la animación de entrada/salida del pop-up
    const [animarPopup, setAnimarPopup] = useState(false);

    // Efecto que verifica si no hay datos en la ubicación, entonces los recupera del localStorage
    React.useEffect(() => {
        if (!location.state?.datos) {
            const datosGuardados = localStorage.getItem("resultadoDiagnostico");
            if (datosGuardados) {
                setDatos(JSON.parse(datosGuardados));
            }
        }
    }, [location.state]);

    // Función para abrir el pop-up
    const abrirPopup = () => {
        setMostrarPopup(true); // Muestra el pop-up
        // Activa la animación después de un breve retardo
        setTimeout(() => setAnimarPopup(true), 10);
    };

    // Función para cerrar el pop-up
    const cerrarPopup = () => {
        setAnimarPopup(false); // Desactiva la animación
        // Espera a que termine la animación antes de ocultarlo completamente
        setTimeout(() => setMostrarPopup(false), 300);
    };

    return (
        <div className="container-resultado">
            {/* Título principal */}
            <div className="titulo-reporte">
                <h1>
                    Conoce el programa de formación <br />
                    más recomendado para ti
                </h1>
            </div>

            {/* Contenedor principal de la imagen y el programa recomendado */}
            <div className="resultado-total">
                {/* Imagen decorativa de resultados */}
                <img src={result} alt="Imagen de resultados" />

                {/* Caja con información del programa recomendado */}
                <div className="programa-recomendado">
                    <h2>
                        {datos?.programa_recomendado?.nombre} {/* Nombre del programa */}
                    </h2>
                    <p>
                        Es uno de los programas de formación <br />
                        recomendados para tu empresa
                    </p>
                    {/* Botón para abrir más información */}
                    <button className="boton-ver-mas" onClick={abrirPopup}>
                        Ver más
                    </button>
                </div>
            </div>

            {/* Pop-up que muestra información detallada */}
            {mostrarPopup && (
                <div className={`popup ${animarPopup ? "mostrar" : "ocultar"}`}>
                    <div className="popup-contenido">
                        {/* Imagen del programa dentro del pop-up */}
                        <img src={infoImg} alt="Programa de formación" className="popup-imagen" />
                        {/* Información detallada del programa */}
                        <div className="popup-info">
                            <h1>{datos?.programa_recomendado?.nombre}</h1>
                            <p><strong>Duración:</strong> 24 meses</p>
                            <p><strong>Nivel formativo:</strong> {datos?.programa_recomendado?.nivel_programa}</p>
                            <p>
                                <strong>Descripción:</strong>
                                {datos?.programa_recomendado?.descripcion}
                            </p>
                            {/* Botón para cerrar el pop-up */}
                            <button className="boton-cerrar" onClick={cerrarPopup}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Resultados;
