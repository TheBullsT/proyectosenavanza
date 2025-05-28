import React from "react";
import "./VisualizacionPrograma.css";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";

const Visualizacion_Programa = () => {
    return (
        <div className="visualizacion-programa-container">
            <NavbarAdmin />
            <div className="visualizacion-programa-contenido">
                <h1 className="titulo-programa">
                    Visualización de Empresa
                    <span className="breadcrumb-programa">
                        You are here: <strong className="breadcrumb-actual-programa">Empresas</strong>
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
                    <h2 className="subtitulo-programa">Nombre de Empresa</h2>
                    <form className="formulario-programa">
                        <div className="campo-form-programa campo-nombre-programa">
                            <label>Nombre de la Empresa</label>
                            <input className="input-programa-nombre" type="text" defaultValue="programa de Ejemplo" />
                        </div>

                        <div className="grid-doble-programa">
                            <div className="campo-form-programa">
                                <label>Teléfono</label>
                                <input type="text" defaultValue="+57 300 000 0000" />
                            </div>

                            <div className="campo-form-programa">
                                <label>Correo Electrónico</label>
                                <input type="email" defaultValue="contacto@empresa.com" />
                            </div>
                        </div>

                        <div className="campo-form-programa">
                            <label>Dirección</label>
                            <input type="text" defaultValue="Cra#0 Trans #0 - 00" />
                        </div>

                        <div className="campo-form-programa">
                            <label>Actividad Económica</label>
                            <input type="text" defaultValue="Cra#0 Trans #0 - 00" />
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