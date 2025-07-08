import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { MdHomeRepairService } from "react-icons/md";
import { apiEmpresa } from "../../../api/apis";
import LoadingBaseDatos from "../../Loading/loading_base_datos";
import '../CrearModificarEmpresa/CrearModificar.css';

const ModificarEmpresa = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [empresa, setEmpresa] = useState(null);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({
        username: "",
        razon_social: "",
        telefono: "",
        correo_electronico: "",
        direccion: "",
        actividad_economica: ""
    });

    useEffect(() => {
        const fetchEmpresa = async () => {
            try {
                const response = await apiEmpresa.get(`/${id}`);
                setEmpresa(response.data);
                setForm(response.data);
            } catch (error) {
                console.error("Error al obtener datos:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchEmpresa();
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiEmpresa.put(`/update/${id}/`, form);
            alert("Empresa modificada con éxito");
            navigate("/admin/listar-empresa");
        } catch (error) {
            console.error("Error al modificar empresa:", error);
            alert("Error al modificar la empresa");
        }
    };

    if (loading) return <LoadingBaseDatos />;
    if (!empresa) return <p>No se encontró la empresa.</p>;

    return (
        <div className="main-right-bar">
            <NavbarAdmin />

            <div className="empresa-container-modificar">
                <p className="title">
                    Modificar Empresa
                    <span className="breadcrumb">
                        You are here: <strong className="breadcrumb-active">Empresas</strong>
                    </span>
                </p>

                <div className="form-info">
                    <div className="icon">
                        <MdHomeRepairService />
                    </div>
                    <p>
                        En este espacio se podrá modificar la información de una empresa registrada.<br />
                        <strong>Se guardará en la <span className="highlight">BASE DE DATOS</span>.</strong>
                    </p>
                </div>

                <form className="form" onSubmit={handleSubmit}>
                    <h2 className="form-title">{form.razon_social}</h2>

                    <div className="form-group">
                        <label>Razón Social de la empresa</label>
                        <input type="text" name="razon_social" value={form.razon_social} onChange={handleChange} />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Número de Teléfono Actual</label>
                            <input type="text" name="telefono" value={form.telefono} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Correo electrónico</label>
                            <input type="email" name="correo_electronico" value={form.correo_electronico} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Dirección actual</label>
                            <input type="text" name="direccion" value={form.direccion} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Actividad económica</label>
                            <input type="text" name="actividad_economica" value={form.actividad_economica} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn-create">Modificar Empresa</button>
                        <button type="button" className="btn-cancel" onClick={() => navigate(-1)}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModificarEmpresa;
