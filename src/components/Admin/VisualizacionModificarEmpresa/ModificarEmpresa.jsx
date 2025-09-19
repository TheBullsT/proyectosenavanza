// Importaciones principales de React y librerías necesarias
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Hooks para obtener parámetros y navegación
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin"; // Navbar de administración
import { MdHomeRepairService } from "react-icons/md"; // Icono de reparación
import { apiEmpresa } from "../../../api/apis"; // API de empresas
import LoadingBaseDatos from "../../Loading/loading_base_datos"; // Componente de carga
import '../CrearModificarEmpresa/CrearModificar.css'; // Estilos CSS
import { toast } from "react-toastify"; // Notificaciones

// Componente para modificar datos de una empresa
const ModificarEmpresa = () => {
    const { id } = useParams(); // Obtiene el ID desde la URL
    const navigate = useNavigate(); // Permite redirigir al usuario
    const [empresa, setEmpresa] = useState(null); // Estado para almacenar la empresa
    const [loading, setLoading] = useState(true); // Estado de carga

    // Estado del formulario con datos de la empresa
    const [form, setForm] = useState({
        username: "",
        razon_social: "",
        telefono: "",
        correo_electronico: "",
        direccion: "",
        actividad_economica: ""
    });

    // Hook para obtener datos al cargar el componente
    useEffect(() => {
        const fetchEmpresa = async () => {
            try {
                const response = await apiEmpresa.get(`/${id}`); // Petición a la API
                setEmpresa(response.data); // Guardar en estado
                setForm(response.data); // Llenar formulario
            } catch (error) {
                console.error("Error al obtener datos:", error);
            } finally {
                setLoading(false); // Desactiva el loader
            }
        };
        fetchEmpresa();
    }, [id]);

    // Actualiza el estado del formulario al cambiar un campo
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Envía los datos actualizados al backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiEmpresa.put(`/update/${id}/`, form);
            toast.success("Empresa modificada con éxito");
            navigate("/listar-empresa");
        } catch (error) {
            console.error("Error al modificar empresa:", error);
            toast.error("Error al modificar la empresa");
        }
    };

    // Renderiza loader mientras carga
    if (loading) return <LoadingBaseDatos />;
    if (!empresa) return <p>No se encontró la empresa.</p>;

    return (
        <div className="main-right-bar">
            <NavbarAdmin /> {/* Barra de navegación */}

            <div className="empresa-container-modificar">
                {/* Encabezado con breadcrumb */}
                <p className="title">
                    Modificar Empresa
                    <span className="breadcrumb">
                        Usted se encuentra en: <strong className="breadcrumb-active">Empresas</strong>
                    </span>
                </p>

                {/* Caja de información */}
                <div className="form-info">
                    <div className="icon">
                        <MdHomeRepairService />
                    </div>
                    <p>
                        En este espacio se podrá modificar la información de una empresa registrada.<br />
                        <strong>Se guardará en la <span className="highlight">BASE DE DATOS</span>.</strong>
                    </p>
                </div>

                {/* Formulario de modificación */}
                <form className="form" onSubmit={handleSubmit}>
                    <h2 className="form-title">{form.razon_social}</h2>

                    <div className="form-group">
                        <label>Razón Social de la empresa</label>
                        <input type="text" name="razon_social" value={form.razon_social} onChange={handleChange} placeholder="Ingrese la razón social"/>
                    </div>

                    {/* Campos de teléfono y correo */}
                    <div className="form-row">
                        <div className="form-group">
                            <label>Número de Teléfono Actual</label>
                            <input type="tel" min="0" inputMode="numeric" minLength={10} maxLength={12} name="telefono" value={form.telefono} onChange={handleChange} pattern="^3[0-9]{9}$" placeholder="Ingrese el número de teléfono" />
                        </div>
                        <div className="form-group">
                            <label>Correo electrónico</label>
                            <input type="email" name="correo_electronico" value={form.correo_electronico} onChange={handleChange} placeholder="Ingrese el correo electrónico"/>
                        </div>
                    </div>

                    {/* Campos de dirección y actividad económica */}
                    <div className="form-row">
                        <div className="form-group">
                            <label>Dirección actual</label>
                            <input type="text" name="direccion" value={form.direccion} onChange={handleChange} placeholder="Ingrese la dirección actual" />
                        </div>
                        <div className="form-group">
                            <label>Actividad económica</label>
                            <input type="text" name="actividad_economica" value={form.actividad_economica} onChange={handleChange} pattern="^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\\s]+$" placeholder="Ingrese la actividad económica"/>
                        </div>
                    </div>

                    {/* Botones de acción */}
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
