// Importación de React 
import react from "react";
// Importación de estilos 
import './CrearModificar.css';
// Importación del componente de NavBar
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
// Importación de los iconos
import { MdHomeRepairService } from "react-icons/md";

// Componente funcional llamado CrearEmpresa
const CrearEmpresa = () => {
    return (
        // Contenedor principal del lado derecho de la interfaz
        <div className="main-right-bar">

            {/* Barra de navegación del administrador */}
            <NavbarAdmin />

            {/* Contenedor del formulario de empresa */}
            <div className="empresa-container-modificar">

                {/* Título y breadcrumbs (ruta de navegación) */}
                <p className="title">
                    Crear Empresa
                    <span className="breadcrumb">
                        You are here: <strong className="breadcrumb-active">Empresas</strong>
                    </span>
                </p>

                {/* Información introductoria del formulario */}
                <div className="form-info">
                    <div className="icon">
                        <MdHomeRepairService /> {/* Ícono de empresa */}
                        <i className="fas fa-home"></i> {/* Ícono adicional (opcional) */}
                    </div>
                    <p>
                        En este espacio se podrá crear el usuario de la empresa que esté vinculada con nosotros.<br />
                        <strong>
                            Debe ser creada para aparecer en la <span className="highlight">BASE DE DATOS</span>.
                        </strong>
                    </p>
                </div>

                {/* Formulario de creación de empresa */}
                <form className="form">
                    <h2 className="form-title">Nueva Empresa</h2>

                    {/* Fila de tipo y número de documento */}
                    <div className="form-row">
                        <div className="form-group">
                            <label>Tipo de documentos</label>
                            <select>
                                <option>Seleccione</option>
                                <option>NIT</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Número de documento</label>
                            <input type="text" />
                        </div>
                    </div>

                    {/* Campo para alias o nombre corto de la empresa */}
                    <div className="form-group">
                        <label>Nickname de la empresa</label>
                        <input type="text" />
                    </div>

                    {/* Fila para teléfono y correo */}
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

                    {/* Fila para dirección y actividad económica */}
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
                        <button className="btn-create">Crear Empresa</button>
                        <button type="button" className="btn-cancel">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// Exportación del componente para poder ser usado en otros archivos
export default CrearEmpresa;
