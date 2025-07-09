import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { MdPersonSearch } from "react-icons/md";
import { apiGeneral } from "../../../api/apis";
import LoadingBaseDatos from "../../Loading/loading_base_datos";
import './VisualizacionUsuario.css';

const VisualizacionUsuario = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                const response = await apiGeneral.get(`/users/${id}/`);
                setUsuario(response.data);
            } catch (error) {
                console.error("Error al obtener datos del usuario:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsuario();
    }, [id]);

    if (loading) return <LoadingBaseDatos />;
    if (!usuario) return <p>No se encontró el usuario.</p>;

    return (
        <div className="main-right-bar">
            <NavbarAdmin />
            <div className="visualizacion-usuario-contenido">
                <div className="visualizacion-usuario-container">
                    <h1 className="titulo-usuario">
                        Visualización de Usuario
                        <span className="breadcrumb-usuario">
                            You are here: <strong className="breadcrumb-actual-usuario">Usuarios</strong>
                        </span>
                    </h1>

                    <div className="icon-box-usuario">
                        <div className="icon-usuario">
                            <MdPersonSearch />
                        </div>
                        <p>
                            Aquí puedes visualizar la información detallada de un usuario registrado.<br />
                            <strong>Los datos son de solo lectura.</strong>
                        </p>
                    </div>

                    <div className="info-box-visualizacion-usuario">
                        <h2 className="subtitulo-usuario">Datos del Usuario</h2>
                        <div className="formulario-usuario">
                            <div className="campo-form-usuario campo-nombre-usuario">
                                <label>Nombre de Usuario</label>
                                <p>{usuario.username}</p>
                            </div>

                            <div className="grid-doble-usuario">
                                <div className="campo-form-usuario">
                                    <label>Nombre</label>
                                    <p>{usuario.first_name}</p>
                                </div>

                                <div className="campo-form-usuario">
                                    <label>Apellido</label>
                                    <p>{usuario.last_name}</p>
                                </div>
                            </div>

                            <div className="campo-form-usuario">
                                <label>Correo Electrónico</label>
                                <p>{usuario.email}</p>
                            </div>
                        </div>

                        <div className="boton-contenedor-usuario">
                            <button className="boton-regresar-usuario" onClick={() => navigate(-1)}>
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
