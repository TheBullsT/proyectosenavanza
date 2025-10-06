import React, { useEffect, useState } from "react";
import './ListarPrograma.css';
// Importar NavBar para la barra de navegación superior
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
// Importar Iconos para las acciones
import { FaEye, FaEdit, FaLock, FaLockOpen, FaTrash } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
// Importar Link y useNavigate para navegación entre rutas
import { Link, useNavigate } from "react-router-dom";
// Importar la API general para llamadas HTTP
import { apiGeneral } from "../../../api/apis";
// Componente de carga mientras se espera la respuesta del servidor
import LoadingBaseDatos from "../../Loading/loading_base_datos";
// Importar notificaciones tipo toast
import { toast } from "react-toastify";
// Importar logo para el reporte PDF
import logo from '../../../assets/img/Logo_SENAVANZA.jpg';
// Librerías para alertas personalizadas
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// Importar librería para generar PDFs
import { jsPDF } from "jspdf";

// Crear instancia con integración de React
const MySwal = withReactContent(Swal);

const ListarProgramas = () => {
    const [programas, setProgramas] = useState([]); // Estado que almacena la lista de programas
    const [search, setSearch] = useState(""); // Estado para el texto de búsqueda
    const [loading, setLoading] = useState(true); // Estado de carga
    const navigate = useNavigate(); // Hook para navegación programática

    // Obtener programas desde la API
    const fetchProgramas = async () => {
        setLoading(true); // Activar loading antes de la petición
        try {
            const response = await apiGeneral.get("programas/"); // Petición GET
            setProgramas(response.data); // Guardar datos en el estado
        } catch (error) {
            console.error("Error al obtener programas:", error);
        } finally {
            setLoading(false); // Desactivar loading después de la petición
        }
    };

    // Ejecutar la carga inicial al montar el componente
    useEffect(() => {
        fetchProgramas();
    }, []);

    // Cambiar estado activo/inactivo de un programa
    const cambiarEstadoPrograma = async (programa) => {
        const nuevoEstado = programa.estado === 1 ? 2 : 1; // Alternar estado
        try {
            await apiGeneral.put(`programa/${programa.id}/`, {
                estado: nuevoEstado,
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            toast.success(`Estado cambiado correctamente`);
            fetchProgramas(); // Refrescar la lista
        } catch (error) {
            console.error("Error al cambiar estado:", error);
            toast.error("Error al cambiar estado");
        }
    };

    // Eliminar programa con confirmación
    const eliminarPrograma = (programaId) => {
        MySwal.fire({
            title: '¿Eliminar Programa?',
            html: '<p style="font-size: 2rem;">¿Estás seguro de que deseas eliminar este programa de formación?</p>',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#39a900',
            cancelButtonColor: '#50E5F9',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        })
            .then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        await apiGeneral.delete(`programa/${programaId}/`); // Petición DELETE
                        toast.success("Programa eliminado");
                        fetchProgramas();
                    } catch (error) {
                        console.error("Error al eliminar:", error);
                        toast.error("Error al eliminar el programa");
                    }
                }
            });
    };

    // Generar y descargar reporte PDF de programas (CON FORMATO PROFESIONAL)
    const generarReportePDF = () => {
        const doc = new jsPDF();

        // 1. Insertar logo y encabezado
        const img = new Image();
        // ASUME QUE 'logo' ESTÁ DISPONIBLE EN EL ÁMBITO SUPERIOR
        img.src = logo; 
        doc.addImage(img, "PNG", 20, 10, 40, 20); // Logo

        // 2. Título y Subtítulo
        doc.setFontSize(18);
        doc.text("Reporte de Programas de Formación", 70, 20);
        doc.setFontSize(12);
        doc.text("Listado de Oferta Educativa", 70, 28);

        // Línea divisoria
        doc.setLineWidth(0.5);
        doc.line(20, 35, 190, 35);

        // 3. Contenido
        let y = 50; // Posición inicial en Y

        doc.setFontSize(14);
        doc.text("Detalle de Programas:", 20, y);
        y += 10;
        
        // Configuración para el contenido del programa
        doc.setFontSize(12);

        // Recorrer programas y agregarlos al PDF
        programas.forEach((pf, index) => {
            // Nombre del programa
            doc.setFontSize(13); 
            doc.text(`${index + 1}. ${pf.nombre}`, 20, y);
            y += 7;
            
            // Detalles
            doc.setFontSize(11);
            doc.text(`Nivel: ${pf.nivel_programa || "N/A"}`, 25, y);
            y += 6;
            
            // Estado (SIN EMOJIS)
            const estadoTexto = pf.estado === 1 ? "Activo" : "Inactivo";
            doc.text(`Estado: ${estadoTexto}`, 25, y);

            y += 10;

            // 4. Manejo de páginas
            if (y > 270) {
                // Pie de página de la hoja actual
                doc.setFontSize(10);
                doc.text(`Página ${doc.internal.getNumberOfPages()}`, 170, 290);
                
                doc.addPage();
                y = 20; // Reiniciar posición Y
                
                // Re-imprimir encabezado en la nueva página
                doc.setFontSize(18);
                doc.text("Reporte de Programas (Cont.)", 70, 20);
                doc.line(20, 35, 190, 35);
                y = 40;
                doc.setFontSize(12); // Restablecer tamaño de fuente
            }
        });

        // 5. Pie de página final
        doc.setFontSize(10);
        doc.text(
            `Este informe lista ${programas.length} programas de formación.`,
            20,
            280
        );
        // Número de página final
        doc.text(`Página ${doc.internal.getNumberOfPages()}`, 170, 280);

        // 6. Descargar archivo
        doc.save("reporte_programas_detallado.pdf");
    };

    // Filtrar programas según búsqueda
    const filteredProgramas = programas.filter((pf) =>
        pf.id.toString().includes(search) ||
        pf.nombre.toLowerCase().includes(search.toLowerCase())
    );

    
    // Mostrar pantalla de carga si está en loading
    if (loading) return <LoadingBaseDatos />;
    
    // Mostrar mensaje si no existen empresas (cuando no hay programas en absoluto)
    if (!programas || programas.length === 0) return <p> Programa de formación no encontrado.</p>;

    // 💡 Lógica para mostrar el mensaje de "No encontrada"
    const mostrarMensajeNoEncontrada = search.length > 0 && filteredProgramas.length === 0;


    return (
        <div className="main-right-bar">
            <NavbarAdmin />

            <div className="visualizar-container">
                {/* Título principal */}
                <p className="title">
                    Listar Programa de formación
                    <span className="breadcrumb"> Usted se encuentra en: <strong className="breadcrumb-active">Programas</strong></span>
                </p>

                {/* Información descriptiva con ícono */}
                <div className="form-info">
                    <div className="icon"><MdSchool /></div>
                    <p>
                        En este espacio se podrán listar los programas de formación que estén vinculados.<br />
                        <strong>Debe estar creado en la <span className="highlight">BASE DE DATOS</span>.</strong>
                    </p>
                </div>

                {/* Barra de búsqueda y botones */}
                <div className="search-bar">
                    <h2 className="empresas-label">Programas</h2>
                    <div className="grupo-botones">
                        {/* Botón para crear un nuevo programa */}
                        <button className="btn-agregar" onClick={() => navigate("/crear-programa")}>Agregar PF</button>

                        {/* Botón para generar reporte PDF */}
                        <button className="btn-reporte" onClick={generarReportePDF}>Generar Reporte</button>
                    </div>
                </div>

                {/* Campo de búsqueda */}
                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    className="input-busqueda"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {/* 💡 Nuevo bloque para mostrar el mensaje "Programa no encontrado" */}
                {mostrarMensajeNoEncontrada ? (
                    <div className="mensaje-no-encontrada-container" style={{ marginTop: '20px', textAlign: 'center', color: '#39a900', fontSize: '1.2em' }}>
                        <p><strong>Programa de formación no encontrado.</strong></p>
                    </div>
                ) : (
                    <table className="program-table">
                        <thead>
                            <tr>
                                <th>Nombre del PF</th>
                                <th>Nivel Formativo</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProgramas.map((pf, index) => (
                                <tr key={pf.id} className={index % 2 === 1 ? "odd" : ""}>
                                    <td>{pf.nombre}</td>
                                    <td>{pf.nivel_programa}</td>
                                    <td className="opciones">
                                        <Link to={`/visualizacion-programa/${pf.id}`}>
                                            <FaEye className="icon-action" title="Ver" />
                                        </Link>
                                        <Link to={`/modificar-programa/${pf.id}`}>
                                            <FaEdit className="icon-action" title="Editar" />
                                        </Link>
                                        {pf.estado === 1 ? (
                                            <FaLockOpen
                                                className="icon-action icon-lock"
                                                title="Desactivar"
                                                onClick={() => cambiarEstadoPrograma(pf)}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        ) : (
                                            <FaLock
                                                className="icon-action icon-lock"
                                                title="Activar"
                                                onClick={() => cambiarEstadoPrograma(pf)}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        )}
                                        <FaTrash
                                            className="icon-action icon-delete"
                                            title="Eliminar"
                                            onClick={() => eliminarPrograma(pf.id)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

            </div>
        </div>
    );
};

export default ListarProgramas;