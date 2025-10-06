import React, { useEffect, useState } from "react";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import "./ListarEmpresa.css";
import { Link } from 'react-router-dom';
import { MdHomeRepairService } from "react-icons/md";
import { FaEye, FaEdit, FaLock, FaLockOpen } from "react-icons/fa";
import { apiEmpresa } from "../../../api/apis";
import LoadingBaseDatos from "../../Loading/loading_base_datos";
import { toast } from "react-toastify";
// Importar logo para el reporte PDF
import logo from '../../../assets/img/Logo_SENAVANZA.jpg';
import { jsPDF } from "jspdf";

const Listar_Empresa = () => {
    // Estado para guardar las empresas obtenidas desde la API
    const [empresas, setEmpresas] = useState([]);

    // Estado para mostrar u ocultar el loader
    const [loadingBaseDatos, setLoadingBaseDatos] = useState(true);

    // Estado para controlar el texto ingresado en la barra de búsqueda
    const [search, setSearch] = useState("");

    // Función para obtener la lista de empresas desde el backend
    const obtenerEmpresas = async () => {
        setLoadingBaseDatos(true); // Activar loader mientras carga
        try {
            const response = await apiEmpresa.get("", {
                headers: { "Content-Type": "application/json" }
            });
            setEmpresas(response.data); // Guardar empresas en el estado
        } catch (error) {
            console.error("Error al obtener las empresas:", error);
        } finally {
            setLoadingBaseDatos(false); // Ocultar loader
        }
    };

    // Llamar a la API cuando se carga el componente
    useEffect(() => {
        obtenerEmpresas();
    }, []);

    // Función para cambiar el estado de una empresa (activar o desactivar)
    const cambiarEstadoEmpresa = async (empresa) => {
        const nuevoEstado = empresa.estado === 1 ? 2 : 1; // Alterna entre 1 (activo) y 2 (inactivo)
        try {
            await apiEmpresa.put(`update/${empresa.id}/`, {
                estado: nuevoEstado
            }, {
                headers: { "Content-Type": "application/json" }
            });

            obtenerEmpresas(); // Refrescar lista después de actualizar
            toast.success("Estado cambiado con éxito");
        } catch (error) {
            console.error("Error al cambiar el estado:", error);
            toast.error("Error al cambiar el estado de la empresa");
        }
    };

    // Función para generar y descargar el reporte PDF de empresas
    const generarReportePDF = () => {
        // 1. Inicialización de jsPDF
        const doc = new jsPDF();

        // 2. Insertar logo y encabezado
        const img = new Image();
        // ASUME QUE 'logo' ESTÁ DISPONIBLE EN EL ÁMBITO GLOBAL O SUPERIOR
        img.src = logo; 
        doc.addImage(img, "PNG", 20, 10, 40, 20); // Logo

        // 3. Título del reporte
        doc.setFontSize(18);
        doc.text("Reporte Detallado de Empresas", 70, 20);
        doc.setFontSize(12);
        doc.text("Generado por el Sistema de Gestión", 70, 28);

        // Línea divisoria
        doc.setLineWidth(0.5);
        doc.line(20, 35, 190, 35);

        // 4. Posición inicial vertical del contenido
        let y = 50; 

        doc.setFontSize(14);
        doc.text("Listado de Empresas Registradas:", 20, y);
        y += 10;
        
        // Configuración para el contenido de la empresa
        doc.setFontSize(12);

        // 5. Recorrer todas las empresas y agregarlas al PDF
        empresas.forEach((empresa, index) => {
            // Nombre de la empresa
            doc.setFontSize(13); 
            doc.text(`${index + 1}. ${empresa.razon_social}`, 20, y);
            y += 7;
            
            // Detalles
            doc.setFontSize(11);
            doc.text(`Teléfono: ${empresa.telefono || "N/A"}`, 25, y);
            y += 6;
            doc.text(`Dirección: ${empresa.direccion || "N/A"}`, 25, y);
            y += 6;
            
            // Estado (SIN EMOJIS)
            const estadoTexto = empresa.estado === 1 ? "Activo" : "Inactivo";
            doc.text(`Estado: ${estadoTexto}`, 25, y);

            y += 10; // Espacio entre empresas

            // 6. Si llega al final de la hoja, agregar una nueva página
            if (y > 270) {
                // Pie de página de la hoja actual
                doc.setFontSize(10);
                doc.text(`Página ${doc.internal.getNumberOfPages()}`, 170, 290);
                
                doc.addPage();
                y = 20; // Reiniciar posición Y
                
                // Re-imprimir el encabezado en la nueva página
                doc.setFontSize(18);
                doc.text("Reporte Detallado de Empresas (Cont.)", 70, 20);
                doc.line(20, 35, 190, 35);
                y = 40;
                doc.setFontSize(12); // Restablecer tamaño de fuente
            }
        });

        // 7. Pie de página
        doc.setFontSize(10);
        doc.text(
            `Este informe contiene ${empresas.length} registros.`,
            20,
            280
        );
        doc.text(`Página ${doc.internal.getNumberOfPages()}`, 170, 280);


        // 8. Guardar PDF
        doc.save("reporte_empresas_detallado.pdf");
    };

    // Filtrar empresas según el texto de búsqueda
    const filteredEmpresas = empresas.filter((empresa) =>
        empresa.razon_social.toLowerCase().includes(search.toLowerCase())
    );

    // Mostrar loader mientras carga la información de la base datos
    if (loadingBaseDatos) return <LoadingBaseDatos />;

    // Mostrar mensaje si no existen empresas (cuando no hay empresas en absoluto)
    if (!empresas || empresas.length === 0) return <p>No hay empresas registradas.</p>;

    // Lógica para mostrar el mensaje de "No encontrada"
    const mostrarMensajeNoEncontrada = search.length > 0 && filteredEmpresas.length === 0;

    return (
        <div className="empresa-container">
            {/* Barra de navegación del administrador */}
            <NavbarAdmin />

            <div className="visualizar-empresa-contenido">
                {/* Título y breadcrumb */}
                <p className="title">
                    Listar Empresa
                    <span className="breadcrumb"> Usted se encuentra en: <strong className="breadcrumb-active">Empresas</strong></span>
                </p>

                {/* Sección informativa */}
                <div className="form-info">
                    <div className="icon"><MdHomeRepairService /></div>
                    <p>
                        En este espacio podrás ver absolutamente todas las empresas<br />
                        que <strong>están registradas en la BASE DE DATOS.</strong>
                    </p>
                </div>

                {/* Encabezado con botones de acción */}
                <div className="header-bar">
                    <h2 className="empresas-label">Empresas</h2>
                    <div className="button-group">
                        {/* Botón para agregar empresa (falta enlazarlo a la ruta de creación) */}
                        <button className="add-button">Agregar Empresa</button>

                        {/* Botón para generar reporte PDF */}
                        <button className="report-button" onClick={generarReportePDF}>
                            Generar Reporte
                        </button>
                    </div>
                </div>

                {/* Barra de búsqueda */}
                <input
                    type="text"
                    placeholder="Buscar por nombre de empresa"
                    className="input-busqueda"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                
                {/* Nuevo bloque para mostrar el mensaje "Empresa no encontrada" */}
                {mostrarMensajeNoEncontrada ? (
                    <div className="mensaje-no-encontrada-container" style={{ marginTop: '20px', textAlign: 'center', color: '#39a900', fontSize: '1.2em' }}>
                        <p><strong>Empresa no encontrada</strong></p>
                    </div>
                ) : (
                    /* Tabla con el listado de empresas */
                    <table className="empresa-table">
                        <thead>
                            <tr>
                                <th>Nombre de la empresa</th>
                                <th>Número de Teléfono Actual</th>
                                <th>Dirección Actual</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Mapea las empresas FILTRADAS si no se muestra el mensaje */}
                            {filteredEmpresas.map((empresa, index) => (
                                <tr key={empresa.id} className={index % 2 === 0 ? 'odd' : ''}>
                                    <td><strong>{empresa.razon_social}</strong></td>
                                    <td>{empresa.telefono}</td>
                                    <td>{empresa.direccion}</td>
                                    <td className="opciones">
                                        {/* Ver detalles */}
                                        <Link to={`/visualizacion-empresa/${empresa.id}`}>
                                            <FaEye className="icon-action" />
                                        </Link>
                                        {/* Editar empresa */}
                                        <Link to={`/modificar-empresa/${empresa.id}`}>
                                            <FaEdit className="icon-action" />
                                        </Link>
                                        {/* Cambiar estado empresa */}
                                        {empresa.estado === 1 ? (
                                            <FaLockOpen
                                                className="icon-action icon-lock"
                                                title="Desactivar empresa"
                                                onClick={() => cambiarEstadoEmpresa(empresa)}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        ) : (
                                            <FaLock
                                                className="icon-action icon-lock"
                                                title="Activar empresa"
                                                onClick={() => cambiarEstadoEmpresa(empresa)}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        )}
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

export default Listar_Empresa;