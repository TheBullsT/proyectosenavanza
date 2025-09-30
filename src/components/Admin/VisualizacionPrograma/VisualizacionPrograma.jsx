import React, { useEffect, useState } from "react";
import "./VisualizacionPrograma.css";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { MdHomeRepairService } from "react-icons/md";
import { useParams } from "react-router-dom";
import { apiGeneral } from "../../../api/apis";
import LoadingBaseDatos from "../../Loading/loading_base_datos";
import { useNavigate } from "react-router-dom";

const Visualizacion_Programa = () => {
    const { id } = useParams(); // Obtiene el ID del programa desde la URL
    const [programa, setPrograma] = useState(null); // Estado para guardar los datos del programa
    const [loading, setLoading] = useState(true); // Estado para manejar el indicador de carga
    const navigate = useNavigate();

    const irListarPrograma = () => {
        navigate('/listar-programa');
    }

    // Función para obtener los datos de un programa específico desde la API
    const obtenerPrograma = async () => {
        try {
            const response = await apiGeneral.get(`programa/${id}/`); // Llamada a la API con el ID
            setPrograma(response.data); // Guarda la información obtenida en el estado
        } catch (error) {
            console.error("Error al obtener programa:", error); // Manejo de errores en la petición
        } finally {
            setLoading(false); // Quita el estado de carga sin importar si hubo error o éxito
        }
    };

    // Efecto que se ejecuta cuando cambia el ID o al cargar el componente
    useEffect(() => {
        obtenerPrograma();
    }, [id]);

    // Muestra el componente de carga mientras se obtienen los datos
    if (loading) return <LoadingBaseDatos />;
    // Mensaje en caso de que no se encuentre el programa
    if (!programa) return <p>No se encontró información del programa.</p>;

    return (
        <div className="visualizacion-programa-container">
            <NavbarAdmin /> {/* Barra de navegación del administrador */}

            <div className="visualizacion-programa-contenido">
                <h1 className="titulo-programa">
                    Visualización de Programa de Formación
                    <span className="breadcrumb-programa">
                        Usted se encuentra en: <strong className="breadcrumb-actual-programa">Programa de Formación</strong>
                    </span>
                </h1>

                {/* Sección con ícono y texto explicativo */}
                <div className="icon-box-programa">
                    <div className="icon-programa">
                        <MdHomeRepairService />
                    </div>
                    <p>
                        En este espacio se podrán visualizar los programas de formación que estén vinculados con nosotros.<br />
                        <strong>Debe estar creado para aparecer en la BASE DE DATOS.</strong>
                    </p>
                </div>

                {/* Sección principal con los datos del programa */}
                <div className="info-box-visualizacion-programa">
                    <h2 className="subtitulo-programa">{programa.nombre}</h2>

                    <form className="formulario-programa">
                        <div className="campo-form-programa campo-nombre-programa">
                            <label>Descripción</label>
                            <textarea
                                className="descripcion-programa"
                                value={programa.descripcion || ""}
                                readOnly
                                rows={5}
                            />
                        </div>

                        {/* Grid con dos campos: modalidad y nivel formativo */}
                        <div className="grid-doble-programa">
                            <div className="campo-form-programa">
                                <label>Modalidad</label>
                                <input
                                    type="text"
                                    value={programa.modalidad || ""}
                                    readOnly
                                />
                            </div>

                            <div className="campo-form-programa">
                                <label>Nivel Formativo</label>
                                <input
                                    type="text"
                                    value={programa.nivel_programa || ""}
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className="campo-form-programa">
                            <label>Duración</label>
                            <input
                                type="text"
                                value={programa.duracion || ""}
                                readOnly
                            />
                        </div>
                        {/* Botón para regresar */}
                        <div className="boton-contenedor-programa">
                            <button type="button" className="boton-regresar-programa" onClick={irListarPrograma}>
                                Regresar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Visualizacion_Programa;
