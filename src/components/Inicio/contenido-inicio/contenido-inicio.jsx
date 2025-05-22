import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import flechita from '../../../assets/img/img-inicio/ion_arrow-redo.png'
import { useNavigate } from "react-router-dom";
import './contenido-inicio.css';

function ContenidoInicio(){

    const navigate = useNavigate();

    const irInformacion = () => {
        navigate('/informacion');
    }


    return(
        <div className="contenido-inicio">
            <div className="titulo-inicio">
                <FaPeopleGroup className="icon-inicio-contenido" />
                <p>¿INTERESADO EN <br /> NUESTROS PROGRAMAS DE <br /> FORMACION?</p>
            </div>
            <div className="programas-inicio">
                <div className="programa-inicio">
                    <div className="imagen-programa">
                        <RiComputerFill className="icon-computador" />
                    </div>
                    <div className="nombre-programa"><p>{"<"}Programa de Formación{">"}</p></div>
                    <div className="descripcion-programa">{"<"}Descripción corta del programa <br /> de Formación{">"}</div>
                    <div className="botones-inicio">
                        <img src={flechita} alt="Flecha" />
                        <button onClick={irInformacion} className="boton-inicio">¡PRESIONA AQUI!</button>
                    </div>
                </div>
                <div className="programa-inicio">
                    <div className="imagen-programa">
                        <RiComputerFill className="icon-computador" />
                    </div>
                    <div className="nombre-programa"><p>{"<"}Programa de Formación{">"}</p></div>
                    <div className="descripcion-programa">{"<"}Descripción corta del programa <br /> de Formación{">"}</div>
                    <div className="botones-inicio">
                        <img src={flechita} alt="Flecha" />
                        <button onClick={irInformacion} className="boton-inicio">¡PRESIONA AQUI!</button>
                    </div>
                </div>
                <div className="programa-inicio">
                    <div className="imagen-programa">
                        <RiComputerFill className="icon-computador" />
                    </div>
                    <div className="nombre-programa"><p>{"<"}Programa de Formación{">"}</p></div>
                    <div className="descripcion-programa">{"<"}Descripción corta del programa <br /> de Formación{">"}</div>
                    <div className="botones-inicio">
                        <img src={flechita} alt="Flecha" />
                        <button onClick={irInformacion} className="boton-inicio">¡PRESIONA AQUI!</button>
                    </div>
                </div>
                <div className="programa-inicio">
                    <div className="imagen-programa">
                        <RiComputerFill className="icon-computador" />
                    </div>
                    <div className="nombre-programa"><p>{"<"}Programa de Formación{">"}</p></div>
                    <div className="descripcion-programa">{"<"}Descripción corta del programa <br /> de Formación{">"}</div>
                    <div className="botones-inicio">
                        <img src={flechita} alt="Flecha" />
                        <button onClick={irInformacion} className="boton-inicio">¡PRESIONA AQUI!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContenidoInicio;