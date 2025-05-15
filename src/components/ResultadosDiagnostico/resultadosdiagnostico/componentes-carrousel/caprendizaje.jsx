import React from "react";
import './caprendizaje.css';
import Flecha from '../../../../assets/img/img-resultados-diagnostico/flecha.png';
import CaprendizajeLogo from '../../../../assets/img/img-resultados-diagnostico/Caprendizaje.png';
import ImagenCaprendizaje from '../../../../assets/img/img-resultados-diagnostico/imagen-caprendizaje.png';

function Caprendizaje(){
    return (
        //Caja del carrusel
        <div className="container-caprendizaje"> 
            <div className="titulo-caprendizaje">
                <h1>¿Quieres buscar los 
                    <br />programas de formación?</h1>
            </div>
            <div className="caprendizaje-contenido">
                <div className="texto-caprendizaje">
                    <p>¡Pulsa aquí para ir a <strong>Caprendizaje</strong> 
                        <br />y encontrarás los  
                        <br />programas de formación!</p>
                </div>
                <div className="caprendizaje-contenido2">
                    <div className="acceso">
                        <div className="flecha-contenedor">
                            <img className="flecha" src={Flecha} alt="Flecha" />
                        </div>
                        <div className="direccion">
                            <img className="logo-capre" src={CaprendizajeLogo} alt="logo Caprendizaje" />
                            <button className="boton-ir-a-buscar">Ir a buscar</button>
                        </div>
                    </div>
                    <img className="imagen-apoyo" src={ImagenCaprendizaje} alt="Caprendizaje apoyo visual" />
                </div>
            </div>
        </div>
    );

}
export default Caprendizaje;
