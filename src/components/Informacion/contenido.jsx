import React from "react";
import './contenido.css';
import Cultivo from "../../assets/img/inicio/Cultivo_grande.png"

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
        </div>
    )
}

export default Contenido;