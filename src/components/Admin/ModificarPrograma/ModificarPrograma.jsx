import React, { useEffect, useState } from "react";
import './ModificarPrograma.css';
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { MdSchool } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import { apiGeneral } from "../../../api/apis";
import { toast } from "react-toastify";
import LoadingBaseDatos from "../../Loading/loading_base_datos";

const ModificarProgramaFormacion = () => {
    const { id } = useParams(); // Obtiene el ID de la URL
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [programa, setPrograma] = useState({
        nombre: "",
        descripcion: "",
        modalidad: "",
        nivel_programa: "",
        duracion: ""
    });

    // Traer datos del programa por ID
    const fetchPrograma = async () => {
        try {
            const response = await apiGeneral.get(`programa/${id}/`);
            setPrograma({
                nombre: response.data.nombre || "",
                descripcion: response.data.descripcion || "",
                modalidad: response.data.modalidad || "",
                nivel_programa: response.data.nivel_programa || "",
                duracion: response.data.duracion || ""
            });
        } catch (error) {
            console.error("Error al obtener programa:", error);
            toast.error("Error al cargar datos del programa");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPrograma();
    }, []);

    // Manejar cambios en campos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPrograma((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Guardar cambios
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiGeneral.put(`programa/${id}/`, programa, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            toast.success("Programa modificado correctamente");
            navigate("/listar-programa");
        } catch (error) {
            console.error("Error al modificar:", error);
            toast.error("Error al modificar programa");
        }
    };

    if (loading) return <LoadingBaseDatos />;

    return (
        <div className="main-right-bar">
            <NavbarAdmin />

            <div className="formacion-container">
                <p className="title">
                    Modificar Programa de Formación
                    <span className="breadcrumb">
                        You are here: <strong className="breadcrumb-active">Programas de Formación</strong>
                    </span>
                </p>

                <div className="form-info">
                    <div className="icon">
                        <MdSchool />
                    </div>
                    <p>
                        Aquí puedes modificar los datos de este programa de formación.<br />
                        <strong>Debe estar registrado en la <span className="highlight">BASE DE DATOS</span>.</strong>
                    </p>
                </div>

                <p className="program-name">{programa.nombre}</p>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nombre de Programa de Formación</label>
                        <input
                            type="text"
                            name="nombre"
                            value={programa.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Descripción de Programa de Formación</label>
                        <textarea
                            rows="3"
                            name="descripcion"
                            value={programa.descripcion}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Modalidad</label>
                            <select
                                name="modalidad"
                                value={programa.modalidad}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Seleccione</option>
                                <option value="Presencial">Presencial</option>
                                <option value="Virtual">Virtual</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Nivel Formativo</label>
                            <select
                                name="nivel_programa"
                                value={programa.nivel_programa}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Seleccione</option>
                                <option value="tecnico">Técnico</option>
                                <option value="tecnologo">Tecnológico</option>
                            </select>
                        </div>

                    </div>

                    <div className="form-group">
                        <label>Duración (Horas)</label>
                        <input
                            type="number"
                            name="duracion"
                            value={programa.duracion}
                            onChange={handleChange}
                            min="1"
                            placeholder="Ej: 120"
                            required
                        />
                    </div>


                    <div className="form-actions">
                        <button className="btn-modify" type="submit">Guardar Cambios</button>
                        <button type="button" className="btn-cancel" onClick={() => navigate(-1)}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModificarProgramaFormacion;
