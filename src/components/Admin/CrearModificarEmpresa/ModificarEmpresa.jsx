// Importa React para poder usar JSX
import React from "react";
// Importar los estilos
import './CrearModificar.css';
// Importar el componente de NavBar
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
// Importar los iconos
import { MdHomeRepairService } from "react-icons/md";
const ModificarEmpresa = () => {
    return (
        <div className="main-right-bar">
            {/* Barra de navegación */}
            <NavbarAdmin />

            {/* Contenedor principal del formulario */}
            <div className="empresa-container-modificar">

                {/* Título principal con ruta de navegación */}
                <p className="title">
                    Modificar Empresa
                    <span className="breadcrumb">
                        You are here: <strong className="breadcrumb-active">Empresas</strong>
                    </span>
                </p>

                {/* Sección informativa con ícono */}
                <div className="form-info">
                    <div className="icon">
                        <MdHomeRepairService />
                        <i className="fas fa-home"></i> {/* Ícono extra, posiblemente redundante */}
                    </div>
                    <p>
                        En este espacio se podrá crear el usuario de la empresa que esté vinculada con nosotros.<br />
                        <strong>Debe ser creada para aparecer en la <span className="highlight">BASE DE DATOS</span>.</strong>
                    </p>
                </div>

                {/* Formulario para modificar datos de la empresa */}
                <form className="form">
                    {/* Título del formulario (debería mostrar el nombre de la empresa a modificar) */}
                    <h2 className="form-title">/Nombre Empresa/</h2>

                    {/* Fila: tipo y número de documento */}
                    <div className="form-row">
                        <div className="form-group">
                            <label>Tipo de documentos</label>
                            <select>
                                <option>Seleccione</option>
                                <option>RUC</option>
                                <option>DNI</option>
                                <option>Pasaporte</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Número de documento</label>
                            <input type="text" />
                        </div>
                    </div>

                    {/* Campo para el nickname de la empresa */}
                    <div className="form-group">
                        <label>Nickname de la empresa</label>
                        <input type="text" />
                    </div>

                    {/* Fila: teléfono y correo */}
                    <div className="form-row">
                        <div className="form-group">
                            <label>Número de Teléfono Actual</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Correo electrónico</label>
                            <input type="email" />
                        </div>
                    </div>

                    {/* Fila: dirección y actividad económica */}
                    <div className="form-row">
                        <div className="form-group">
                            <label>Dirección actual</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Actividad económica</label>
                            <input type="text" />
                        </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="form-actions">
                        <button className="btn-create">Modificar Empresa</button>
                        <button type="button" className="btn-cancel">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModificarEmpresa;
