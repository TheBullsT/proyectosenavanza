// Importación de React 
import React, { useState } from "react";
// Importación de estilos 
import './CrearModificar.css';
// Importación del componente de NavBar
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
// Importación de los iconos
import { MdHomeRepairService } from "react-icons/md";
// Importar AXIOS
import axios from "axios";
// Importar Toast
import { toast } from "react-toastify";
// Importar APIS
import { user_empresa_create } from "../../../api/apis";

// Componente funcional llamado CrearEmpresa
const CrearEmpresa = () => {

    // Creando Estado local
    const [tipoDocumento, setTipoDocumento] = useState("");
    const [numeroDocumento, setNumeroDocumento] = useState("");
    const [nickName, setNickName] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [direccion, setDireccion] = useState("");
    const [actividad, setActividad] = useState("");

    // Conectar a la base de datos para crear usuario

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await user_empresa_create( {
                documento: tipoDocumento,
                numero_documento: parseInt(numeroDocumento),
                razon_social: nickName,
                telefono: telefono,
                correo_electronico: correo,
                direccion: direccion,
                actividad_economica: actividad

            });
            if(response){
                toast.success("Empresa Creada Correctamente");
                console.log(response.data);
            }else{
                toast.error("Error al crear la empresa");
            }

        }catch (error){
            console.error("Error al crear la empresa", error.response?.data || error.message);
        }
    };


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
                <form method="POST" onSubmit={handleSubmit} className="form">
                    <h2 className="form-title">Nueva Empresa</h2>

                    {/* Fila de tipo y número de documento */}
                    <div className="form-row">
                        <div className="form-group">
                            <label>Tipo de documentos</label>
                            <select onChange={(e) => setTipoDocumento(e.target.value)} value={tipoDocumento} required>
                                <option value="">Seleccione</option>
                                <option value="nit">NIT</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Número de documento</label>
                            <input type="text" onChange={(e) => setNumeroDocumento(e.target.value)} value={numeroDocumento} required />
                        </div>
                    </div>

                    {/* Campo para alias o nombre corto de la empresa */}
                    <div className="form-group">
                        <label>Nickname de la empresa</label>
                        <input type="text" onChange={(e) => setNickName(e.target.value)} value={nickName} required />
                    </div>

                    {/* Fila para teléfono y correo */}
                    <div className="form-row">
                        <div className="form-group">
                            <label>Número de Teléfono Actual</label>
                            <input type="text" onChange={(e) => setTelefono(e.target.value)} value={telefono} required />
                        </div>

                        <div className="form-group">
                            <label>Correo electrónico</label>
                            <input type="email" onChange={(e) => setCorreo(e.target.value)} value={correo} required/>
                        </div>
                    </div>

                    {/* Fila para dirección y actividad económica */}
                    <div className="form-row">
                        <div className="form-group">
                            <label>Dirección actual</label>
                            <input type="text" onChange={(e) => setDireccion(e.target.value)} value={direccion} required />
                        </div>

                        <div className="form-group">
                            <label>Actividad económica</label>
                            <input type="text" onChange={(e) => setActividad(e.target.value)} value={actividad} />
                        </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="form-actions">
                        <button type="submit" className="btn-create">Crear Empresa</button>
                        <button type="button" className="btn-cancel">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// Exportación del componente para poder ser usado en otros archivos
export default CrearEmpresa;
