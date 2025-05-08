import React from "react";
import imagenprograma from '../../../../assets/img/img-resultados-diagnostico/imagen-programa.png';
import recomendados from '../../../../assets/img/img-resultados-diagnostico/recomendados-programa.png';
import './programas.css';

function Programas(){
    return(
        //Caja del carrusel
        <div className="container-programas"> 
            <div className="titulo-reporte"> {/*Titulo de la caja */}
                <h1>Programa de Formación <br /> Recomendados</h1>
            </div>
            <div className="programas-total">
                <div className="programas">
                    <div className="programas-formacion">
                        <img src={imagenprograma} alt="Imagen del programa" />
                    </div>
                    <div className="progrmas-formacion">
                        <img src={imagenprograma} alt="Imagen del programa" />
                    </div>
                    <div className="progrmas-formacion">
                        <img src={imagenprograma} alt="Imagen del programa" />
                    </div>
                </div>
                <img src={recomendados} alt="Recomendados imagen" />
            </div>
        </div>
    );
}

export default Programas;