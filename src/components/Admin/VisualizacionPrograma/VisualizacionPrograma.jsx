import React from "react";
import "./VisualizacionPrograma.css"; // Estilos específicos para este componente
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin"; // Barra de navegación del admin
import { MdHomeRepairService } from "react-icons/md"; // Icono importado desde react-icons

const Visualizacion_Programa = () => {
    return (
        <div className="visualizacion-programa-container">
            {/* Navbar para administración */}
            <NavbarAdmin />

            <div className="visualizacion-programa-contenido">
                {/* Título y breadcrumb */}
                <h1 className="titulo-programa">
                    Visualización de Programa de Formación
                    <span className="breadcrumb-programa">
                        You are here: <strong className="breadcrumb-actual-programa">Programa de Formacion</strong>
                    </span>
                </h1>

                {/* Sección informativa con icono */}
                <div className="icon-box-programa">
                    <div className="icon-programa">
                        {/* Nota: Aquí el <i> no es necesario si usas react-icons */}
                        <MdHomeRepairService />
                    </div>
                    <p>
                        En este espacio se podrán visualizar los programas de formación que estén vinculados con nosotros.<br />
                        <strong>Debe ser creada para aparecer en la BASE DE DATOS.</strong>
                    </p>
                </div>

                {/* Formulario con campos para el programa */}
                <div className="info-box-visualizacion-programa">
                    <h2 className="subtitulo-programa">Nombre de Programa</h2>
                    <form className="formulario-programa">
                        {/* Campo de descripción */}
                        <div className="campo-form-programa campo-nombre-programa">
                            <label>Descripción</label>
                            <input
                                className="input-programa-nombre"
                                type="text"
                                defaultValue="Descripcion lorem ns holi"
                            />
                        </div>

                        {/* Grid con dos campos lado a lado */}
                        <div className="grid-doble-programa">
                            <div className="campo-form-programa">
                                <label>Modalidad</label>
                                <input type="text" defaultValue="Presencial" />
                            </div>

                            <div className="campo-form-programa">
                                <label>Nivel Formativo</label>
                                {/* Aquí el type="email" parece un error, debería ser type="text" */}
                                <input type="text" defaultValue="Nivel de ejemplo" />
                            </div>
                        </div>

                        {/* Campo duración */}
                        <div className="campo-form-programa">
                            <label>Duración</label>
                            <input type="text" defaultValue="El tiempo que es" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Visualizacion_Programa;
