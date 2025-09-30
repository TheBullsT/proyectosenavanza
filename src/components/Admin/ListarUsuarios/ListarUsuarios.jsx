import React, { useEffect, useState } from "react";
import './ListarUsuarios.css';
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { FaEye, FaEdit, FaTrash, FaDownload } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { apiGeneral } from "../../../api/apis";
import LoadingBaseDatos from "../../Loading/loading_base_datos";
import { jsPDF } from "jspdf";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toast } from "react-toastify";

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



    const generarReporte = () => {
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text("Reporte de Usuarios", 20, 20);

        doc.setFontSize(12);
        let y = 40;

        filteredUsuarios.forEach((user, index) => {
            doc.text(
                `${index + 1}. Usuario: ${user.username} | Correo: ${user.email} | NIT: ${user.empresa?.numero_documento ?? "N/A"}`,
                20,
                y
            );

            y += 10;

            if (y > 270) {
                doc.addPage();
                y = 20;
            }
        });

        doc.save("reporte_usuarios.pdf");
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

        // Mostrar mensaje si no existen empresas (cuando no hay programas en absoluto)
    if (!usuarios || usuarios.length === 0) return <p> Usuario no encontrado.</p>;

    // 💡 Lógica para mostrar el mensaje de "No encontrada"
    const mostrarMensajeNoEncontrada = search.length > 0 && filteredUsuarios.length === 0;

    if (loading) {
        return <LoadingBaseDatos />;
    }

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
                {/* 💡 Nuevo bloque para mostrar el mensaje "Empresa no encontrada" */}
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
