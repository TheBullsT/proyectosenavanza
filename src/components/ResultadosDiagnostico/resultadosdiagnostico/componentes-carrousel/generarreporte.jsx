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
                <img src={reporte} alt="Imagen reporte" />
                <h2>Genera un reporte del resultado del diagnóstico para que puedas verlos con más calma</h2>
                <button className="boton-generar-reporte">Generar Reporte</button>
            </div>
        </div>
    );
}

export default GenerarReporte;