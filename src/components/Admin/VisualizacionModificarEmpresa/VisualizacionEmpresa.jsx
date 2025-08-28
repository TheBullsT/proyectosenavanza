import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Hook para obtener parámetros de la URL
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { MdHomeRepairService } from "react-icons/md";
import { apiEmpresa } from "../../../api/apis"; // Cliente Axios para peticiones a la API de empresas
import LoadingBaseDatos from "../../Loading/loading_base_datos";
import "./VisualizacionEmpresa.css";

const Visualizacion_Empresa = () => {
    const { id } = useParams(); // Capturamos el id de la empresa desde la URL
    const [empresa, setEmpresa] = useState(null); // Estado para almacenar los datos de la empresa
    const [loading, setLoading] = useState(true); // Estado para manejar la carga

    useEffect(() => {
        const fetchEmpresa = async () => {
            setLoading(true); // Se activa el indicador de carga antes de la petición
            try {
                const response = await apiEmpresa.get(`/${id}`); // Petición GET a la API
                setEmpresa(response.data); // Guardamos los datos recibidos en el estado
            } catch (error) {
                console.error("Error al obtener los datos de la empresa:", error); // Captura de errores
            } finally {
                setLoading(false); // Se desactiva el estado de carga
            }
        };

        fetchEmpresa(); // Ejecuta la función al montar el componente o cambiar el id
    }, [id]); // Dependencia: se ejecuta cada vez que cambie el id

    if (loading) return <LoadingBaseDatos />; // Mientras carga muestra un spinner
    if (!empresa) return <p>No se encontró la empresa.</p>; // Si no hay datos muestra un mensaje

    return (
        <div className="visualizacion-empresa-container">
            <NavbarAdmin /> {/* Barra de navegación para el administrador */}

            <div className="visualizacion-empresa-contenido">
                <h1 className="titulo">
                    Visualización de Empresa
                    <span className="breadcrumb">
                        Usted se encuentra en: <strong className="breadcrumb-actual">Empresas</strong>
                    </span>
                </h1>

                <div className="icon-box">
                    <div className="icon">
                        {/* Ícono representativo del módulo */}
                        <i className="fas fa-building"><MdHomeRepairService /></i>
                    </div>
                    <p>
                        Aquí puedes visualizar la información detallada de la empresa registrada.
                    </p>
                </div>

                <div className="info-box-visualizacion-empresa">
                    {/* Muestra la razón social como título secundario */}
                    <h2 className="subtitulo">{empresa.razon_social}</h2>

                    <form className="formulario-empresa">
                        <div className="campo-form campo-nombre-empresa">
                            <label>Nombre de la Empresa</label>
                            <input className="input-empresa-nombre" type="text" value={empresa.razon_social} readOnly />
                        </div>

                        {/* Agrupación de campos en dos columnas */}
                        <div className="grid-doble">
                            <div className="campo-form">
                                <label>Teléfono</label>
                                <input type="text" value={empresa.telefono} readOnly />
                            </div>

                            <div className="campo-form">
                                <label>Correo Electrónico</label>
                                <input type="email" value={empresa.correo_electronico} readOnly />
                            </div>
                        </div>

                        <div className="campo-form">
                            <label>Dirección</label>
                            <input type="text" value={empresa.direccion} readOnly />
                        </div>

                        <div className="campo-form">
                            <label>Actividad Económica</label>
                            <input type="text" value={empresa.actividad_economica} readOnly />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Visualizacion_Empresa; // Exportamos el componente principal
