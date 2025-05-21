import React from "react";
import './contenido.css';
import Cultivo from "../../assets/img/inicio/Cultivo_grande.png"
import Cultivo2 from "../../assets/img/inicio/Cultivo_pequeño.png"

const Contenido = () => {
    return(
        <div className="contenedor-principal">
            <img className="imagen_ayuda" src={Cultivo} alt="Cultivo de arroz grande" />
            <div className="contenedor-texto">
                <div className="texto1">
                    <h2>¿Que es un PROGRAMA 
                        <br />DE FORMACIÓN?
                    </h2>
                    <p> 
                        Descripcion corta 
                        <br />de que es un programa 
                        <br />de formación
                    </p>
                </div>
                <div className="textos2">
                    <div className="ventajas">
                        <h2>¿Ventajas de un PROGRAMA 
                            <br />DE FORMACIÓN?
                        </h2>
                        <p> 
                            En este espacio se  
                            <br />responderá la pregunta
                            <br />planteada
                        </p>
                    </div>
                    <div className="Porque">
                        <h2>¿Por qué participar en un
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
            <div className="contenedor2">
                <div className="contratar">
                    <h2>¿Por qué contratar a un 
                        <br />aprendiz?
                    </h2>
                    <p> 
                        A continuación, los beneficios  
                        <br />que brindan el contratar
                        <br />a un aprendiz:
                    </p>
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
                <img className="cultivo" src={Cultivo2} alt="Cultivo pequeño de arroz" />
            </div> 
        </div>
    )
}

export default Contenido;