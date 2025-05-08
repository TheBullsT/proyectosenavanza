import React from "react";
import result from '../../../../assets/img/img-resultados-diagnostico/resultados.png';
import './resultado.css';

function Resultados(){
    return(
        //Caja del carrusel
        <div className="container-resultado"> 
            <div className="titulo-reporte"> {/*Titulo de la caja */}
                <h1>!Conoce el programa de formacion <br /> 
                mas recomendado para ti¡</h1>
            </div>
            <div className="resultado-total"> {/*Caja de la imagen y resultado*/}
                <img src={result} alt="Imagen de resultados" /> {/*Imagen */}
                <div className="programa-recomendado"> {/*Caja de programa que recomienda*/}
                    <h2>Analisis y desarrollo <br /> de software</h2>
                    <p>Es uno de los programas de formacion <br /> recomendados para tu empresa</p>
                    <button className="boton-ver-mas">Ver más</button> {/*Boton para ver más */}
                </div>
            </div>
        </div>
    );
}

export default Resultados;