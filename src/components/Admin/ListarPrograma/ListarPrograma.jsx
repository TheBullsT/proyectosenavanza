import React, { useEffect, useState } from "react";
import './ListarPrograma.css';
// Importar NavBar
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
// Importar Iconos
import { FaEye, FaEdit, FaLock, FaLockOpen, FaTrash } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
// Importar los link y navigate para navegar entre rutas
import { Link, useNavigate } from "react-router-dom";
// Importar el API
import { apiGeneral } from "../../../api/apis";
// Importar el loading
import LoadingBaseDatos from "../../Loading/loading_base_datos";
// Importar Las notificaciones toast
import { toast } from "react-toastify";

// ✅ SweetAlert2 + React wrapper
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// Crear instancia con React Content
const MySwal = withReactContent(Swal);

const ListarProgramas = () => {
    const [programas, setProgramas] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Obtener programas
    const fetchProgramas = async () => {
        setLoading(true);
        try {
            const response = await apiGeneral.get("programas/");
            setProgramas(response.data);
        } catch (error) {
            console.error("Error al obtener programas:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProgramas();
    }, []);

    // Cambiar estado del programa
    const cambiarEstadoPrograma = async (programa) => {
        const nuevoEstado = programa.estado === 1 ? 2 : 1;
        try {
            await apiGeneral.put(`programa/${programa.id}/`, {
                estado: nuevoEstado,
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            toast.success(`Estado cambiado correctamente`);
            fetchProgramas();
        } catch (error) {
            console.error("Error al cambiar estado:", error);
            toast.error("Error al cambiar estado");
        }
    };

    // Eliminar programa 
    // Función para eliminar un programa usando SweetAlert2 para confirmar
    const eliminarPrograma = (programaId) => {
        // Mostrar modal de confirmación con SweetAlert2
        MySwal.fire({
            title: '¿Eliminar Programa?',          // Título del modal
            html: '<p style="font-size: 2rem;">¿Estás seguro de que deseas eliminar este programa de formación?</p>', // Mensaje de advertencia
            icon: 'warning',                       // Ícono de advertencia (triángulo amarillo)
            showCancelButton: true,                // Mostrar botón "Cancelar"
            confirmButtonColor: '#39a900',            // Color del botón "Sí, eliminar"
            cancelButtonColor: '#50E5F9',          // Color del botón "Cancelar"
            confirmButtonText: 'Sí, eliminar',     // Texto del botón de confirmación
            cancelButtonText: 'Cancelar',          // Texto del botón de cancelación
        })
            .then(async (result) => {
                // Si el usuario confirma (presiona "Sí, eliminar")
                if (result.isConfirmed) {
                    try {
                        // 🗑️ Hacer petición DELETE a la API para eliminar el programa
                        await apiGeneral.delete(`programa/${programaId}/`);
                        // Mostrar notificación de éxito
                        toast.success("Programa eliminado");
                        // Volver a cargar la lista de programas actualizada
                        fetchProgramas();
                    } catch (error) {
                        // Si hay error al eliminar, mostrar en consola y notificación
                        console.error("Error al eliminar:", error);
                        toast.error("Error al eliminar el programa");
                    }
                }
                //  Si cancela, no se hace nada (el modal se cierra solo)
            });
    };


    const filteredProgramas = programas.filter((pf) =>
        pf.id.toString().includes(search) ||
        pf.nombre.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <LoadingBaseDatos />;

    return (
        <div className="main-right-bar">
            <NavbarAdmin />

            <div className="visualizar-container">
                <p className="title">
                    Listar Programa de formación
                    <span className="breadcrumb"> You are here: <strong className="breadcrumb-active">Programas</strong></span>
                </p>

                <div className="form-info">
                    <div className="icon"><MdSchool /></div>
                    <p>
                        En este espacio se podrán listar los programas de formación que estén vinculados.<br />
                        <strong>Debe estar creado en la <span className="highlight">BASE DE DATOS</span>.</strong>
                    </p>
                </div>

                <div className="search-bar">
                    <h2 className="empresas-label">Programas</h2>
                    <div className="grupo-botones">
                        <button className="btn-agregar" onClick={() => navigate("/crear-programa")}>Agregar PF</button>
                        <button className="btn-reporte">Generar Reporte</button>
                    </div>
                </div>

                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    className="input-busqueda"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

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
                                        style={{ cursor: 'pointer', marginLeft: '10px' }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListarProgramas;
