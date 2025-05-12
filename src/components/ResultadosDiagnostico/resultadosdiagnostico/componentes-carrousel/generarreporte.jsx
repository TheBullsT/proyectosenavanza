import React from "react";
import './generarreporte.css';
import reporte from '../../../../assets/img/img-resultados-diagnostico/reporte.png';


function GenerarReporte(){
    return(
        <div className="container-reporte">
            <div className="titulo-reporte">
                <h1>¿Quieres tener tus resultados 
                    <br /> 
                del diagnóstico?</h1>
            </div>
            <div className="generar-reporte">
                <div className="contenido-reporte">
                    <h2 className="texto-reporte">Genera un reporte del 
                        <br />resultado del diagnóstico 
                        <br />para que puedas verlos 
                        <br />con más calma</h2>
                    <button className="boton-generar-reporte">Generar Reporte</button>
                </div>
                <img src={reporte} alt="Imagen reporte" />
            </div>
        </div>
    );
}

export default GenerarReporte;