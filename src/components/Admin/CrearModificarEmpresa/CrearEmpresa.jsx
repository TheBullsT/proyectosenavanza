import react from "react";
import './CrearModificar.css';
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { MdHomeRepairService } from "react-icons/md";

const  CrearEmpresa= () => {
    return(
    
        <div className="main-right-bar">
            <NavbarAdmin />
            <div className="empresa-container-modificar">
                <p className="title">Crear Empresa
                <span className="breadcrumb"> You are here: <strong className="breadcrumb-active">Empresas</strong></span></p>

                <div className="form-info">
                    <div className="icon"><MdHomeRepairService/><i className="fas fa-home"></i></div>
                    <p>
                    En este espacio se podrá crear el usuario de la empresa que esté vinculada con nosotros.<br />
                    <strong>Debe ser creada para aparecer en la <span className="highlight">BASE DE DATOS</span>.</strong>
                    </p>
                </div>

                <form className="form">
                    <h2 className="form-title">Nueva Empresa</h2>

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

                    <div className="form-group">
                    <label>Nickname de la empresa</label>
                    <input type="text" />
                    </div>

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

                    <div className="form-actions">
                        <button className="btn-create">Crear Empresa</button>
                        <button type="button" className="btn-cancel">Cancelar</button>
                    </div>
                </form>
                </div>

        </div>
    )
}

export default CrearEmpresa;