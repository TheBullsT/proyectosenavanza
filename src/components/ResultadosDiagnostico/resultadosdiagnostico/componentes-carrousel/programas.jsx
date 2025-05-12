import React from "react";
import imagenprograma from '../../../../assets/img/img-resultados-diagnostico/imagen-programa.png';
import recomendados from '../../../../assets/img/img-resultados-diagnostico/recomendados-programa.png';
import './programas.css';

function Programas(){
    return(
        //Caja del carrusel
        <div className="container-programas"> {/* Container de programas*/}
            <div className="titulo-reporte"> {/*Titulo de la caja */}
                <h1>Programa de Formación <br /> Recomendados</h1>
            </div>
            <div className="programas-total"> {/*Donde esta alojado las cajas del programa */}
                <div className="programas">
                    <div className="programas-formacion">
                        <img className="imagen-programa" src={imagenprograma} alt="Imagen del programa" />
                        <div className="informacion-ficha">
                            <p>'Nombre programa de formación'</p>
                            <button className="boton-ver-mas">Ver más</button>
                        </div>
                    </div>
                    <div className="programas-formacion">
                        <img className="imagen-programa" src={imagenprograma} alt="Imagen del programa" />
                        <div className="informacion-ficha">
                            <p>'Nombre programa de formación'</p>
                            <button className="boton-ver-mas">Ver más</button>
                        </div>
                    </div>
                    <div className="programas-formacion">
                        <img className="imagen-programa" src={imagenprograma} alt="Imagen del programa" />
                        <div className="informacion-ficha">
                            <p>'Nombre programa de formación'</p>
                            <button className="boton-ver-mas">Ver más</button>
                        </div>
                    </div>

                </div>
                <img className="imagen-recomendados" src={recomendados} alt="Recomendados imagen" /> {/*Imagen */}
            </div>
        </div>
    );
}

export default Programas;