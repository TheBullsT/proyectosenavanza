import React from "react";
import result from '../../../../assets/img/img-resultados-diagnostico/resultados.png';
import './resultado.css';

function Resultados(){
    return(
        <div className="container-resultado">
            <div className="titulo-reporte">
                <h1>!Conoce el programa de formacion <br /> 
                mas recomendadopara ti¡</h1>
            </div>
            <div className="resultado-total">
                <img src={result} alt="Imagen de resultados" />
                <div className="programa-recomendado">
                    <h2>Analisis de desarrollo de software</h2>
                    <p>Es uno de los programas de formacion <br /> recomendados para tu empresa</p>
                </div>
            </div>
        </div>
    );
}

export default Resultados;