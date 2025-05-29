// Importación de React
import React from "react";
// Importación del archivo CSS para estilos específicos de este componente
import './contenido.css';
// Importación de imágenes utilizadas en el contenido
import Cultivo from "../../assets/img/inicio/Cultivo_grande.png";
import Cultivo2 from "../../assets/img/inicio/Cultivo_pequeño.png";

// Definición del componente funcional Contenido
const Contenido = () => {
    return (
        // Contenedor principal que envuelve todo el contenido
        <div className="contenedor-principal">

            {/* Imagen decorativa principal del contenido */}
            <img className="imagen_ayuda" src={Cultivo} alt="Cultivo de arroz grande" />

            {/* Contenedor del texto explicativo del programa */}
            <div className="contenedor-texto">

                {/* Primer bloque de texto: definición del programa de formación */}
                <div className="texto1">
                    <h2>
                        ¿Que es un PROGRAMA
                        <br />DE FORMACIÓN?
                    </h2>
                    <p>
                        Descripción corta
                        <br />de qué es un programa
                        <br />de formación
                    </p>
                </div>

                {/* Segundo bloque de texto: ventajas y razones para participar */}
                <div className="textos2">

                    {/* Ventajas del programa */}
                    <div className="ventajas">
                        <h2>
                            ¿Ventajas de un PROGRAMA
                            <br />DE FORMACIÓN?
                        </h2>
                        <p>
                            En este espacio se
                            <br />responderá la pregunta
                            <br />planteada
                        </p>
                    </div>

                    {/* Justificación para participar en el programa */}
                    <div className="Porque">
                        <h2>
                            ¿Por qué participar en un
                            <br />PROGRAMA DE FORMACIÓN?
                        </h2>
                        <p>
                            En este espacio se
                            <br />responderá la pregunta
                            <br />planteada
                        </p>
                    </div>

                </div>
            </div>

            {/* Segundo contenedor con más texto e imagen */}
            <div className="contenedor2">

                {/* Información sobre los beneficios de contratar aprendices */}
                <div className="contratar">
                    <h2>
                        ¿Por qué contratar a un
                        <br />aprendiz?
                    </h2>
                    <p>
                        A continuación, los beneficios
                        <br />que brinda contratar
                        <br />a un aprendiz:
                    </p>

                    {/* Lista de beneficios enumerados (pueden ser reemplazados por contenido real) */}
                    <br />
                    <p>Beneficio {"(1)"}</p>
                    <br />
                    <p>Beneficio {"(2)"}</p>
                    <br />
                    <p>Beneficio {"(3)"}</p>
                    <br />
                    <p>Beneficio {"(4)"}</p>
                    <br />
                    <p>Beneficio {"(5)"}</p>
                </div>

                {/* Imagen decorativa secundaria al lado del texto */}
                <img className="cultivo" src={Cultivo2} alt="Cultivo pequeño de arroz" />
            </div>
        </div>
    );
}

// Exportación del componente para que pueda ser utilizado en otros archivos
export default Contenido;
