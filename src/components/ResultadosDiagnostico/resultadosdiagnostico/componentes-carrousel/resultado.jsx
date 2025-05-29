import React from "react";
// Importa la imagen de resultados desde la ruta especificada
import result from "../../../../assets/img/img-resultados-diagnostico/resultados.png";
// Importa los estilos específicos para este componente
import "./resultado.css";

function Resultados() {
    return (
        // Contenedor principal que envuelve todo el componente
        <div className="container-resultado">
            {/* Contenedor del título del reporte */}
            <div className="titulo-reporte">
                <h1>
                    Conoce el programa de formación <br />
                    más recomendado para ti
                </h1>
            </div>

            {/* Contenedor que agrupa la imagen y la recomendación */}
            <div className="resultado-total">
                {/* Imagen ilustrativa de los resultados */}
                <img src={result} alt="Imagen de resultados" />

                {/* Caja que muestra el programa de formación recomendado */}
                <div className="programa-recomendado">
                    <h2>
                        Análisis y desarrollo <br />
                        de software
                    </h2>
                    <p>
                        Es uno de los programas de formación <br />
                        recomendados para tu empresa
                    </p>

                    {/* Botón para ver más detalles del programa */}
                    <button className="boton-ver-mas">Ver más</button>
                </div>
            </div>
        </div>
    );
}

export default Resultados;
