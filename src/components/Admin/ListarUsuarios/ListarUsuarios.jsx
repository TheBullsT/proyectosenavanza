import React, { useEffect, useState } from "react";
import './ListarUsuarios.css';
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { FaEye, FaEdit, FaTrash, FaDownload } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { apiGeneral } from "../../../api/apis";
import logo from '../../../assets/img/Logo_SENAVANZA.jpg';
import LoadingBaseDatos from "../../Loading/loading_base_datos";
import { jsPDF } from "jspdf";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toast } from "react-toastify";
import { logDOM } from "@testing-library/dom";

const MySwal = withReactContent(Swal);

const ListarUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchUsuarios = async () => {
        setLoading(true);
        try {
            const response = await apiGeneral.get("users/");
            setUsuarios(response.data);
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const filteredUsuarios = usuarios.filter(
        (user) =>
            user.username.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.empresa?.numero_documento?.toString().includes(search)
    );


    // Generar reporte de Usuarios (CON FORMATO PROFESIONAL)
    const generarReporte = () => {
        const doc = new jsPDF();

        // Título
        // 1. Insertar logo
        const img = new Image();
        // ASUME QUE 'logo' ESTÁ DISPONIBLE EN EL ÁMBITO SUPERIOR
        img.src = logo; 
        doc.addImage(img, "PNG", 20, 10, 40, 20); // x, y, width, height

        // Título y Subtítulo
        doc.setFontSize(18);
        doc.text("Reporte de Usuarios Registrados", 70, 20);
        doc.setFontSize(12);
        doc.text("Información de Acceso al Sistema", 70, 28);

        // Línea divisoria
        doc.setLineWidth(0.5);
        doc.line(20, 35, 190, 35);

        // Posición inicial en Y
        let y = 50;

        doc.setFontSize(14);
        doc.text("Detalle de Usuarios:", 20, y);
        y += 10;

        // Configuración para el contenido de los usuarios
        doc.setFontSize(11);

        // Recorrer usuarios y agregarlos al PDF
        filteredUsuarios.forEach((user, index) => {
            // Formato: Número. Usuario | Correo | NIT de la Empresa
            const userData = `${index + 1}. Usuario: ${user.username} | Correo: ${user.email} | NIT: ${user.empresa?.numero_documento ?? "N/A"}`;
            
            // Manejar texto multilínea si es muy largo (especialmente el NIT o el correo)
            const lineas = doc.splitTextToSize(userData, 170); // 170 es el ancho máximo
            doc.text(lineas, 20, y);

            // Calcular la nueva posición Y
            const alturaLinea = 5; // Aproximadamente 5 unidades por línea con tamaño 11
            y += lineas.length * alturaLinea + 4; // 4 extra de espaciado

            // Si se acaba la hoja, crear una nueva
            if (y > 270) {
                // Pie de página de la hoja actual
                doc.setFontSize(10);
                doc.text(`Página ${doc.internal.getNumberOfPages()}`, 170, 290);
                
                doc.addPage();
                y = 20; // Reiniciar posición Y
                
                // Re-imprimir encabezado en la nueva página
                doc.setFontSize(18);
                doc.text("Reporte de Usuarios (Cont.)", 70, 20);
                doc.line(20, 35, 190, 35);
                y = 40;
                doc.setFontSize(11); // Restablecer tamaño de fuente para el contenido
            }
        });

        // Pie de página
        doc.setFontSize(10);
        doc.text(
            `Este informe lista ${filteredUsuarios.length} usuarios registrados.`,
            20,
            280
        );
        // Número de página final
        doc.text(`Página ${doc.internal.getNumberOfPages()}`, 170, 280);

        // Descargar archivo
        doc.save("reporte_usuarios_detallado.pdf");
    };

    // Eliminar usuario con confirmación
    const eliminarUsuario = (usuarioId) => {
        MySwal.fire({
            title: '¿Eliminar Usuario?',
            html: '<p style="font-size: 2rem;">¿Estás seguro de que deseas eliminar este usuario?</p>',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#39a900',
            cancelButtonColor: '#50E5F9',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await apiGeneral.delete(`delete-user/${usuarioId}/`);
                    toast.success("Usuario eliminado correctamente");
                    fetchUsuarios(); // Recargar lista
                } catch (error) {
                    console.error("Error al eliminar usuario:", error);
                    toast.error("Error al eliminar el usuario");
                }
            }
        });
    };

        
    // Mostrar pantalla de carga si está en loading
    if (loading) return <LoadingBaseDatos />;
    
    // Mostrar mensaje si no existen empresas (cuando no hay programas en absoluto)
    if (!usuarios || usuarios.length === 0) return <p> Usuario no encontrado.</p>;

    // 💡 Lógica para mostrar el mensaje de "No encontrada"
    const mostrarMensajeNoEncontrada = search.length > 0 && filteredUsuarios.length === 0;


    return (
        <div className="main-right-bar">
            <NavbarAdmin />

            <div className="visualizar-container">
                <p className="title">
                    Listar Usuarios
                    <span className="breadcrumb"> Usted se encuentra en: <strong className="breadcrumb-active">Usuarios</strong></span>
                </p>

                <div className="form-info">
                    <div className="icon"><MdPeople /></div>
                    <p>
                        En este espacio podrás listar todos los usuarios registrados en el sistema.<br />
                        <strong>Recuerda que están en la <span className="highlight">BASE DE DATOS</span>.</strong>
                    </p>
                </div>

                <div className="search-bar">
                    <h2 className="empresas-label">Usuarios</h2>
                    <div className="grupo-botones">
                        <button className="btn-reporte" onClick={generarReporte}>
                            <FaDownload /> Generar Reporte
                        </button>
                    </div>
                </div>

                <input
                    type="text"
                    placeholder="Buscar por nombre o correo o NIT"
                    className="input-busqueda"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {/* 💡 Nuevo bloque para mostrar el mensaje "Usuario no encontrado" */}
                {mostrarMensajeNoEncontrada ? (
                    <div className="mensaje-no-encontrada-container" style={{ marginTop: '20px', textAlign: 'center', color: '#39a900', fontSize: '1.2em' }}>
                        <p><strong>Usuario no encontrado.</strong></p>
                    </div>
                ) : (
                    <table className="program-table">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Correo</th>
                                <th>NIT</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsuarios.map((user, index) => (
                                <tr key={user.id} className={index % 2 === 1 ? "odd" : ""}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.empresa?.numero_documento ?? "N/A"}</td>
                                    <td className="opciones">
                                        <Link to={`/visualizacion-usuarios/${user.id}`}>
                                            <FaEye className="icon-action" title="Ver" />
                                        </Link>
                                        <Link to={`/modificar-usuarios/${user.id}`}>
                                            <FaEdit className="icon-action" title="Editar" />
                                        </Link>
                                        <FaTrash
                                            className="icon-action icon-delete"
                                            title="Eliminar"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => eliminarUsuario(user.id)}
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

export default ListarUsuarios;