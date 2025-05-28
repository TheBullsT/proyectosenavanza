import React from "react";
import "./VisualizacionPrograma.css";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { MdHomeRepairService } from "react-icons/md";

const Visualizacion_Programa = () => {
    return (
        <div className="visualizacion-programa-container">
            <NavbarAdmin />
            <div className="visualizacion-programa-contenido">
                <h1 className="titulo-programa">
                    Visualización de Programa de Formación
                    <span className="breadcrumb-programa">
                        You are here: <strong className="breadcrumb-actual-programa">Programa de Formacion</strong>
                    </span>
                </h1>
                <div className="icon-box-programa">
                    <div className="icon-programa">
                        <i className="fas fa-building"><MdHomeRepairService /></i>
                    </div>
                    <p>
                        En este espacio se podrán visualizar los programas de formación que estén vinculados con nosotros.<br />
                        <strong>Debe ser creada para aparecer en la BASE DE DATOS.</strong>
                    </p>
                </div>
                <div className="info-box-visualizacion-programa">
                    <h2 className="subtitulo-programa">Nombre de Programa</h2>
                    <form className="formulario-programa">
                        <div className="campo-form-programa campo-nombre-programa">
                            <label>Descripción</label>
                            <input className="input-programa-nombre" type="text" defaultValue="Descripcion lorem ns holi" />
                        </div>

                        <div className="grid-doble-programa">
                            <div className="campo-form-programa">
                                <label>Modalidad</label>
                                <input type="text" defaultValue="Presencial" />
                            </div>

                            <div className="campo-form-programa">
                                <label>Nivel Formativo</label>
                                <input type="email" defaultValue="Nivel de ejemplo" />
                            </div>
                        </div>

                        <div className="campo-form-programa">
                            <label>Duración</label>
                            <input type="text" defaultValue="El tiempo que es" />
                        </div>

                        <div className="boton-contenedor-programa">
                            <button className="boton-modificar-programa">Modificar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Visualizacion_Programa;