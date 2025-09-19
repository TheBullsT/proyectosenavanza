// Importación de React y el hook useState para manejar estados locales
import React, { useState } from "react";
// Importación del archivo de estilos CSS
import './CrearModificar.css';
// Componente de la barra de navegación del administrador
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
// Íconos de la librería react-icons
import { MdHomeRepairService } from "react-icons/md";
// Cliente HTTP para realizar peticiones a la API
import axios from "axios";
// Librería para mostrar notificaciones emergentes
import { toast } from "react-toastify";
// API específica para crear usuarios/empresas
import { apiCreateUser } from "../../../api/apis";

import LoadingBaseDatos from "../../Loading/loading_base_datos";

// Componente funcional principal para la creación de empresas
const CrearEmpresa = () => {

    // Declaración de variables de estado para los campos del formulario
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rol, setRol] = useState("");
    const [tipoDocumento, setTipoDocumento] = useState("");
    const [numeroDocumento, setNumeroDocumento] = useState("");
    const [nickName, setNickName] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [direccion, setDireccion] = useState("");
    const [actividad, setActividad] = useState("");

    // Estado para indicar si la acción está en proceso
    const [loading, setLoading] = useState(false);

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que se recargue la página
        setLoading(true); // Activa la pantalla de carga
        try {
            // Petición POST a la API para crear la empresa
            const response = await apiCreateUser.post("create/",
                {
                    username: username,
                    password: password,
                    rol: rol,
                    email: correo,
                    empresa: {
                        documento: tipoDocumento,
                        numero_documento: parseInt(numeroDocumento),
                        razon_social: nickName,
                        telefono: telefono,
                        correo_electronico: correo,
                        direccion: direccion,
                        actividad_economica: actividad
                    }
                },
                {
                    withCredentials: true, // Incluye cookies de autenticación
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );

            console.log(response.data);
            toast.success("Empresa creada correctamente"); // Mensaje de éxito

            // Limpieza de los campos después de enviar el formulario
            setUsername("");
            setPassword("");
            setRol("");
            setCorreo("");
            setTipoDocumento("");
            setNumeroDocumento("");
            setNickName("");
            setTelefono("");
            setDireccion("");
            setActividad("");

        } catch (error) {
            // Captura y muestra el error si la creación falla
            console.error("Error al crear la empresa:", {
                status: error.response?.status,
                statusText: error.response?.statusText,
                data: error.response?.data,
                message: error.message,
            });
            toast.error(
                `Error: ${error.response?.status} - ${error.response?.statusText}`
            );
        } finally {
            setLoading(false); // Finaliza el estado de carga
        }
    };

    // Renderiza el componente de carga si está en proceso
    if (loading) {
        return <LoadingBaseDatos mensaje="Creando empresa, por favor espere..." />;
    }

    return (
        // Contenedor general de la parte derecha del dashboard
        <div className="main-right-bar">

            {/* Barra de navegación superior para administrador */}
            <NavbarAdmin />

            {/* Contenedor principal del formulario */}
            <div className="empresa-container-modificar">

                {/* Encabezado y ruta de navegación */}
                <p className="title">
                    Crear Empresa
                    <span className="breadcrumb">
                        Usted se encuentra en: <strong className="breadcrumb-active">Empresas</strong>
                    </span>
                </p>

                {/* Sección con ícono e información introductoria */}
                <div className="form-info">
                    <div className="icon">
                        <MdHomeRepairService /> {/* Icono ilustrativo */}
                        <i className="fas fa-home"></i>
                    </div>
                    <p>
                        En este espacio se podrá crear el usuario de la empresa que esté vinculada con nosotros.<br />
                        <strong>
                            Debe ser creada para aparecer en la <span className="highlight">BASE DE DATOS</span>.
                        </strong>
                    </p>
                </div>

                {/* Formulario de ingreso de datos */}
                <form method="POST" onSubmit={handleSubmit} className="form">
                    <h2 className="form-title">Nueva Empresa</h2>

                    {/* Fila para tipo y número de documento */}
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
                            <input type="number" min="0" minLength={9} maxLength={9} pattern="[1-9][0-9]{9,}*" onChange={(e) => setNumeroDocumento(e.target.value)} value={numeroDocumento} required  placeholder="Ingrese el número de documento (De 9 dígitos)"/>
                        </div>
                    </div>

                    {/* Campo para seleccionar el rol */}
                    <div className="form-group">
                        <label>Rol</label>
                        <select onChange={(e) => setRol(e.target.value)} value={rol} required>
                            <option value="">Seleccione su rol</option>
                            <option value="empresa">Empresa</option>
                        </select>
                    </div>

                    {/* Campos para usuario y contraseña */}
                    <div className="form-group">
                        <label>Nombre de usuario</label>
                        <input type="text" pattern="^[^\s]+$" onChange={(e) => setUsername(e.target.value)} value={username} required placeholder="Ingrese el nombre de usuario (Sin espacioes)"  />
                    </div>

                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" minLength="8" onChange={(e) => setPassword(e.target.value)} value={password} required placeholder="Contraseña minimo 8 carácteres"/>
                    </div>

                    {/* Campo para la razón social de la empresa */}
                    <div className="form-group">
                        <label>Razón Social</label>
                        <input type="text" onChange={(e) => setNickName(e.target.value)} value={nickName} required placeholder="Ingrese la razón social"/>
                    </div>

                    {/* Fila con teléfono y correo */}
                    <div className="form-row">
                        <div className="form-group">
                            <label>Número de Teléfono Actual</label>
                            <input type="tel" min='0' inputMode="numeric" pattern="^[3-9][0-9]{11,}$" minLength={10} maxLength={12} onChange={(e) => setTelefono(e.target.value)} value={telefono}  required placeholder="Ingrese el número de teléfono"  />
                        </div>

                        <div className="form-group">
                            <label>Correo electrónico</label>
                            <input type="email" onChange={(e) => setCorreo(e.target.value)} value={correo} required placeholder="Ingrese el correo electrónico"/>
                        </div>
                    </div>

                    {/* Fila con dirección y actividad económica */}
                    <div className="form-row">
                        <div className="form-group">
                            <label>Dirección actual</label>
                            <input type="text" onChange={(e) => setDireccion(e.target.value)} value={direccion} required placeholder="Ingrese la dirección actual" />
                        </div>

                        <div className="form-group">
                            <label>Actividad económica</label>
                            <input type="text" onChange={(e) => setActividad(e.target.value)} value={actividad} pattern="^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\\s]+$"  placeholder="Ingrese la actividad Económica"/>
                        </div>
                    </div>

                    {/* Botones para crear o cancelar */}
                    <div className="form-actions">
                        <button type="submit" className="btn-create">Crear Empresa</button>
                        <button type="button" className="btn-cancel">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// Exporta el componente para su uso en otras partes de la app
export default CrearEmpresa;
