import React from "react";
import "./VisualizacionEmpresa.css";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { MdHomeRepairService } from "react-icons/md";

const Visualizacion_Empresa = () => {
    return (
        <div className="visualizacion-empresa-container">
            <NavbarAdmin />
            <div className="visualizacion-empresa-contenido">
                <h1 className="titulo">
                    Visualización de Empresa
                    <span className="breadcrumb">
                        You are here: <strong className="breadcrumb-actual">Empresas</strong>
                    </span>
                </h1>
                <div className="icon-box">
                    <div className="icon">
                        <i className="fas fa-building"><MdHomeRepairService /></i>
                    </div>
                    <p>
                        En este espacio se podrán visualizar los programas de formación que estén vinculados con nosotros.<br />
                        <strong>Debe ser creada para aparecer en la BASE DE DATOS.</strong>
                    </p>
                </div>
                <div className="info-box">
                    <h2 className="subtitulo">Nombre de Empresa</h2>

                    <form className="formulario-empresa">
                        <div className="campo-form campo-nombre-empresa">
                            <label>Nombre de la Empresa</label>
                            <input className="input-empresa-nombre" type="text" defaultValue="Empresa de Ejemplo S.A.S" />
                        </div>

                        <div className="grid-doble">
                            <div className="campo-form">
                                <label>Teléfono</label>
                                <input type="text" defaultValue="+57 300 000 0000" />
                            </div>

                            <div className="campo-form">
                                <label>Correo Electrónico</label>
                                <input type="email" defaultValue="contacto@empresa.com" />
                            </div>
                        </div>

                        <div className="campo-form">
                            <label>Dirección</label>
                            <input type="text" defaultValue="Cra#0 Trans #0 - 00" />
                        </div>

                        <div className="campo-form">
                            <label>Actividad Económica</label>
                            <input type="text" defaultValue="Cra#0 Trans #0 - 00" />
                        </div>
                        <div className="boton-contenedor">
                            <button type="submit" className="boton-modificar">Modificar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Visualizacion_Empresa;