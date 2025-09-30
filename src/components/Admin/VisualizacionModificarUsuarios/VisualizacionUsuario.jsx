import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { MdPersonSearch } from "react-icons/md";
import { apiGeneral } from "../../../api/apis";
import LoadingBaseDatos from "../../Loading/loading_base_datos";
import './VisualizacionUsuario.css';

const VisualizacionUsuario = () => {
    // Hook para obtener el parámetro "id" de la URL
    const { id } = useParams();
    // Hook para navegar entre rutas
    const navigate = useNavigate();
    // Estado para guardar los datos del usuario
    const [usuario, setUsuario] = useState(null);
    // Estado para controlar el estado de carga
    const [loading, setLoading] = useState(true);

    const irListarUsuario = () => {
        navigate('/listar-usuarios');
    }

    useEffect(() => {
        // Función asincrónica para obtener los datos de un usuario específico
        const fetchUsuario = async () => {
            try {
                // Petición GET a la API para obtener la información del usuario
                const response = await apiGeneral.get(`/users/${id}/`);
                setUsuario(response.data); // Guardar la respuesta en el estado
            } catch (error) {
                console.error("Error al obtener datos del usuario:", error);
            } finally {
                setLoading(false); // Finaliza el estado de carga
            }
        };

        fetchUsuario(); // Ejecuta la función al montar el componente
    }, [id]); // Se ejecuta cuando el "id" cambia

    // Mostrar pantalla de carga mientras se obtienen los datos
    if (loading) return <LoadingBaseDatos />;
    // Mostrar mensaje si no se encuentra el usuario
    if (!usuario) return <p>No se encontró el usuario.</p>;

    return (
        <div className="main-right-bar">
            {/* Navbar del panel administrador */}
            <NavbarAdmin />

            <div className="visualizacion-usuario-contenido">
                <div className="visualizacion-usuario-container">
                    {/* Título y breadcrumb */}
                    <h1 className="titulo-usuario">
                        Visualización de Usuario
                        <span className="breadcrumb-usuario">
                            Usted se encuentra en: <strong className="breadcrumb-actual-usuario">Usuarios</strong>
                        </span>
                    </h1>

                    {/* Caja con ícono y descripción */}
                    <div className="icon-box-usuario">
                        <div className="icon-usuario">
                            <MdPersonSearch />
                        </div>
                        <p>
                            Aquí puedes visualizar la información detallada de un usuario registrado.<br />
                            <strong>Los datos son de solo lectura.</strong>
                        </p>
                    </div>

                    {/* Contenedor de datos del usuario */}
                    <div className="info-box-visualizacion-usuario">
                        <h2 className="subtitulo-usuario">Datos del Usuario</h2>

                        <div className="formulario-usuario">
                            {/* Nombre de usuario */}
                            <div className="campo-form-usuario campo-nombre-usuario">
                                <label>Nombre de Usuario</label>
                                <p>{usuario.username}</p>
                            </div>

                            {/* Correo electrónico */}
                            <div className="campo-form-usuario">
                                <label>Correo Electrónico</label>
                                <p>{usuario.email}</p>
                            </div>

                            {/* NIT */}
                            <div className="campo-form-usuario">
                                <label>NIT</label>
                                <p>
                                    {usuario.empresa?.documento === "nit"
                                        ? usuario.empresa.numero_documento
                                        : "No aplica"}
                                </p>
                            </div>

                            {/* Razon Social */}
                            <div className="campo-form-usuario">
                                <label>Razón Social</label>
                                <p>{usuario.empresa.razon_social}</p>
                            </div>

                            {/* Dirección */}
                            <div className="campo-form-usuario">
                                <label>Dirección</label>
                                <p>{usuario.empresa.direccion}</p>
                            </div> 

                            {/* Telefono */}
                            <div className="campo-form-usuario">
                                <label>Teléfono</label>
                                <p>{usuario.empresa.telefono}</p>
                            </div>

                            {/* Estado */}
                            <div className="campo-form-usuario">
                                <label>Estado</label>
                                <p>{usuario.empresa.estado}</p>
                            </div>


                        </div>

                        {/* Botón para regresar */}
                        <div className="boton-contenedor-visualizar-usuario">
                            <button type="button" className="boton-regresar-visualizar-usuario" onClick={irListarUsuario}>
                                Regresar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisualizacionUsuario;
