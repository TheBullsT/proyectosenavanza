import React, { useEffect, useState } from "react";
import './ListarUsuarios.css'; // Estilos propios del componente
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin"; // Navbar del admin
import { FaEye, FaEdit, FaLock } from "react-icons/fa"; // Íconos de acciones
import { MdPeople } from "react-icons/md"; // Ícono para la sección
import { Link, useNavigate } from "react-router-dom"; // Navegación entre páginas
import { apiGeneral } from "../../../api/apis"; // Configuración de Axios (llamadas a la API)
import LoadingBaseDatos from "../../Loading/loading_base_datos"; // Componente de carga


const ListarUsuarios = () => {
    // Estado que guarda la lista de usuarios
    const [usuarios, setUsuarios] = useState([]);

    // Estado para manejar el texto de búsqueda
    const [search, setSearch] = useState("");

    // Estado para mostrar pantalla de carga
    const [loading, setLoading] = useState(true);

    // Hook de navegación
    const navigate = useNavigate();


    // useEffect: carga los usuarios cuando se monta el componente
    useEffect(() => {
        const fetchUsuarios = async () => {
            setLoading(true); // Activa el loader
            try {
                const response = await apiGeneral.get("users/"); // Llamada GET a la API
                setUsuarios(response.data); // Guarda los usuarios en el estado
            } catch (error) {
                console.error("Error al obtener usuarios:", error);
            } finally {
                setLoading(false); // Quita el loader
            }
        };

        fetchUsuarios(); // Ejecuta la función
    }, []);


    // Filtra los usuarios según el texto buscado (por username o correo)
    const filteredUsuarios = usuarios.filter(
        (user) =>
            user.username.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
    );


    // Si está cargando, muestra el componente Loading
    if (loading) {
        return <LoadingBaseDatos />;
    }

    return (
        <div className="main-right-bar">
            {/* Navbar del administrador */}
            <NavbarAdmin />

            {/* Encabezado con título y breadcrumb */}
            <div className="visualizar-container">
                <p className="title">
                    Listar Usuarios
                    <span className="breadcrumb"> Usted se encuentra en: <strong className="breadcrumb-active">Usuarios</strong></span>
                </p>

                {/* Info introductoria */}
                <div className="form-info">
                    <div className="icon"><MdPeople /></div>
                    <p>
                        En este espacio podrás listar todos los usuarios registrados en el sistema.<br />
                        <strong>Recuerda que están en la <span className="highlight">BASE DE DATOS</span>.</strong>
                    </p>
                </div>

                {/* Barra superior con título y botón de reporte */}
                <div className="search-bar">
                    <h2 className="empresas-label">Usuarios</h2>
                    <div className="grupo-botones">
                        <button className="btn-reporte">Generar Reporte</button>
                    </div>
                </div>

                {/* Input para filtrar usuarios */}
                <input
                    type="text"
                    placeholder="Buscar por nombre o correo"
                    className="input-busqueda"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Tabla que lista los usuarios */}
                <table className="program-table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Correo</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsuarios.map((user, index) => (
                            <tr key={user.id} className={index % 2 === 1 ? "odd" : ""}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td className="opciones">
                                    {/* Ver detalle de usuario */}
                                    <Link to={`/visualizacion-usuarios/${user.id}`}>
                                        <FaEye className="icon-action" title="Ver" />
                                    </Link>

                                    {/* Editar usuario */}
                                    <Link to={`/modificar-usuarios/${user.id}`}>
                                        <FaEdit className="icon-action" title="Editar" />
                                    </Link>

                                    {/* Eliminar usuario (no implementado aún) */}
                                    <FaLock className="icon-action" title="Eliminar (no disponible)" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default ListarUsuarios; // Exporta el componente

