import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { MdHomeRepairService } from "react-icons/md";
import { apiEmpresa } from "../../../api/apis"; // Asegúrate que esté correctamente configurado
import LoadingBaseDatos from "../../Loading/loading_base_datos";
import "./VisualizacionEmpresa.css";

const Visualizacion_Empresa = () => {
    const { id } = useParams(); // Capturamos el id de la URL
    const [empresa, setEmpresa] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEmpresa = async () => {
            setLoading(true);
            try {
                const response = await apiEmpresa.get(`/${id}`);
                setEmpresa(response.data);
            } catch (error) {
                console.error("Error al obtener los datos de la empresa:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEmpresa();
    }, [id]);

    if (loading) return <LoadingBaseDatos />;
    if (!empresa) return <p>No se encontró la empresa.</p>;

    return (
        <div className="visualizacion-empresa-container">
            <NavbarAdmin />

            <div className="visualizacion-empresa-contenido">
                <h1 className="titulo">
                    Visualización de Empresa
                    <span className="breadcrumb">
                        Usted se encuentra en: <strong className="breadcrumb-actual">Empresas</strong>
                    </span>
                </h1>

                <div className="icon-box">
                    <div className="icon">
                        <i className="fas fa-building"><MdHomeRepairService /></i>
                    </div>
                    <p>
                        Aquí puedes visualizar la información detallada de la empresa registrada.
                    </p>
                </div>

                <div className="info-box-visualizacion-empresa">
                    <h2 className="subtitulo">{empresa.razon_social}</h2>

                    <form className="formulario-empresa">
                        <div className="campo-form campo-nombre-empresa">
                            <label>Nombre de la Empresa</label>
                            <input className="input-empresa-nombre" type="text" value={empresa.razon_social} readOnly />
                        </div>

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

export default Visualizacion_Empresa;