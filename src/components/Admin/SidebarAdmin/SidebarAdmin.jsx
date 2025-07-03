import React, { useState } from "react";
// Importamos libreria Link para poder navegar entre paginas
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// Importamos los estilos
import "./SidebarAdmin.css";
// Importamos los iconos
import { FaHome } from "react-icons/fa";
import { MdHomeRepairService, MdSchool } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
// Importamos cerrar sesión del loading
import CerrarSesion from "../../Loading/cerrar-sesion-admin";
// Importar API
import { apiLogin } from '../../../api/apis'
import { toast } from "react-toastify";

function SidebarAdmin() {
    // Estado que controla qué menú desplegable está activo (abierto)
    const [ActiveMenu, SetMenuOn] = useState(false);

    // Se guarda el nombre del menú abierto o false/null si ninguno está abierto
    const abrirMenu = (menu) => {
        SetMenuOn((prevMenu) => (prevMenu === menu ? false : menu));
    };

    const [cerrandoSesion, setCerrandoSesion] = useState(false);
    const navigate = useNavigate();

    const handleCerrarSesion = async () => {
        setCerrandoSesion(true); // Mostrar pantalla de carga
        try {
            await apiLogin.post("logout/",
                {},
                { withCredentials: true }
            );

            localStorage.removeItem("access");
            localStorage.removeItem("refresh");

            toast.success("Sesión cerrada correctamente");
            navigate("/inicio");

        } catch (error) {
            toast.error("Error al cerrar sesión");
            console.error(error);
        } finally {
            setCerrandoSesion(false);
        }
    };

    return (
        <>
            {cerrandoSesion ? (
                <CerrarSesion />
            ) : (
                <div className="sidebar-admin">
                    {/* Lista principal del sidebar */}
                    <ul className="ulContainer">
                        <h4 className="menu">Menu</h4>

                        {/* Link a la página principal del admin */}
                        <Link to="/adminhome" className="no-estilo">
                            <li className="liContainer">
                                <FaHome className="sidebaricon" /> {/* Icono Home */}
                                <p className="itemNames">Home</p>
                            </li>
                        </Link>

                        {/* Menú Empresas con submenú desplegable */}
                        <li className="liContainer" onClick={() => abrirMenu("empresas")}>
                            <MdHomeRepairService className="sidebaricon" /> {/* Icono Empresas */}
                            <p className="itemNames">Empresas</p>
                        </li>
                        {ActiveMenu === "empresas" && (
                            // Submenú que solo se muestra si el menú "empresas" está activo
                            <ul className="subMenu">
                                <Link to="/crear-empresa" className="no-estilo">
                                    <li>Crear Empresa</li>
                                </Link>
                                <Link to="/modificar-empresa" className="no-estilo">
                                    <li>Modificar Empresa</li>
                                </Link>
                                <Link to="/listar-empresa" className="no-estilo">
                                    <li>Listar Empresa</li>
                                </Link>
                            </ul>
                        )}

                        {/* Menú Programas con submenú desplegable */}
                        <li className="liContainer" onClick={() => abrirMenu("programas")}>
                            <MdSchool className="sidebaricon" /> {/* Icono Programas */}
                            <p className="itemNames">Programas</p>
                        </li>
                        {ActiveMenu === "programas" && (
                            // Submenú Programas visible solo si "programas" está activo
                            <ul className="subMenu">
                                <Link to="/crear-programa" className="no-estilo">
                                    <li>Crear Programa de formación</li>
                                </Link>
                                <Link to="/modificar-programa" className="no-estilo">
                                    <li>Modificar Programa de formación</li>
                                </Link>
                                <Link to="/listar-programa" className="no-estilo">
                                    <li>Listar Programa de formación</li>
                                </Link>
                            </ul>
                        )}

                        {/* Menú Usuarios con submenú desplegable */}
                        <li className="liContainer" onClick={() => abrirMenu("usuarios")}>
                            <FaUsers className="sidebaricon" /> {/* Icono Usuarios */}
                            <p className="itemNames">Usuarios</p>
                        </li>
                        {ActiveMenu === "usuarios" && (
                            // Submenú Usuarios visible solo si "usuarios" está activo
                            <ul className="subMenu">
                                <li>Crear Usuario</li>
                                <li>Modificar Usuarios</li>
                                <li>Visualizar Usuarios</li>
                                <li>Listar Usuarios</li>
                            </ul>
                        )}
                    </ul>

                    {/* Botón para cerrar sesión que redirige a la ruta '/inicio' */}
                    <div onClick={handleCerrarSesion} className="ButtonCerrarSesionAdmin">
                        Cerrar Sesión
                    </div>
                </div>
            )
            }
        </>
    );
}

export default SidebarAdmin;
