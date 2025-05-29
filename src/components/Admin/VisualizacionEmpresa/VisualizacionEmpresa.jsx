import React from "react";
// Importamos los estilos
import "./VisualizacionEmpresa.css";
// Immportamos el comoponente de la Navbar
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
// Importamos los iconos
import { MdHomeRepairService } from "react-icons/md";

const Visualizacion_Empresa = () => {
    return (
        <div className="visualizacion-empresa-container">
            {/* Contenedor principal que engloba toda la vista */}

            <NavbarAdmin />
            {/* Componente de navegación para la administración */}

            <div className="visualizacion-empresa-contenido">
                {/* Contenedor del contenido principal */}

                <h1 className="titulo">
                    Visualización de Empresa
                    <span className="breadcrumb">
                        {/* Breadcrumb simple para mostrar ubicación */}
                        You are here: <strong className="breadcrumb-actual">Empresas</strong>
                    </span>
                </h1>

                <div className="icon-box">
                    {/* Caja con ícono y texto descriptivo */}
                    <div className="icon">
                        {/* Ícono de edificio (aquí se usa un <i> que no es necesario envolver el componente MdHomeRepairService) */}
                        <i className="fas fa-building"><MdHomeRepairService /></i>
                    </div>
                    <p>
                        {/* Texto explicativo para el usuario */}
                        En este espacio se podrán visualizar los programas de formación que estén vinculados con nosotros.<br />
                        <strong>Debe ser creada para aparecer en la BASE DE DATOS.</strong>
                    </p>
                </div>

                <div className="info-box-visualizacion-empresa">
                    {/* Caja que contiene el formulario de la empresa */}
                    <h2 className="subtitulo">Nombre de Empresa</h2>

                    <form className="formulario-empresa">
                        {/* Formulario con campos para modificar datos de la empresa */}

                        <div className="campo-form campo-nombre-empresa">
                            <label>Nombre de la Empresa</label>
                            {/* Input de texto con valor por defecto */}
                            <input className="input-empresa-nombre" type="text" defaultValue="Empresa de Ejemplo S.A.S" />
                        </div>

                        <div className="grid-doble">
                            {/* Contenedor para organizar dos campos en grid (dos columnas) */}
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
                            {/* Parece que el defaultValue es igual al de la dirección, se podría revisar */}
                            <input type="text" defaultValue="Cra#0 Trans #0 - 00" />
                        </div>

                        <div className="boton-contenedor">
                            {/* Botón para modificar, no tiene tipo ni evento */}
                            <button className="boton-modificar">Modificar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Visualizacion_Empresa;
