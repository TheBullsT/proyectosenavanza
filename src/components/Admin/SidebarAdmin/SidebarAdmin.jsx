import React, { useState } from "react";
// Importamos librerías de navegación
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// Estilos específicos del Sidebar
import "./SidebarAdmin.css";
// Importación de íconos
import { FaHome } from "react-icons/fa";
import { MdHomeRepairService, MdSchool } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
// Componente de cierre de sesión
import CerrarSesion from "../../Loading/cerrar-sesion-admin";
// API para llamadas al backend
import { apiLogin } from '../../../api/apis'
import { toast } from "react-toastify";

function SidebarAdmin() {
    // Estado que controla el menú desplegable activo
    const [ActiveMenu, SetMenuOn] = useState(false);

    // Función para abrir/cerrar un menú
    const abrirMenu = (menu) => {
        SetMenuOn((prevMenu) => (prevMenu === menu ? false : menu));
    };

    const [cerrandoSesion, setCerrandoSesion] = useState(false);
    const navigate = useNavigate();

    // Maneja el cierre de sesión del usuario
    const handleCerrarSesion = async () => {
        setCerrandoSesion(true);
        try {
            await apiLogin.post("logout/", {}, { withCredentials: true });

            // Limpieza del almacenamiento local
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
                // Muestra pantalla de carga mientras se cierra sesión
                <CerrarSesion />
            ) : (
                <div className="sidebar-admin">
                    {/* Menú lateral principal */}
                    <ul className="ulContainer">
                        <h4 className="menu">Menu</h4>

                        {/* Opción Home */}
                        <Link to="/adminhome" className="no-estilo">
                            <li className="liContainer">
                                <FaHome className="sidebaricon" />
                                <p className="itemNames">Home</p>
                            </li>
                        </Link>

                        {/* Opción Empresas con submenú */}
                        <li className="liContainer" onClick={() => abrirMenu("empresas")}>
                            <MdHomeRepairService className="sidebaricon" />
                            <p className="itemNames">Empresas</p>
                        </li>
                        {ActiveMenu === "empresas" && (
                            <ul className="subMenu">
                                <Link to="/crear-empresa" className="no-estilo">
                                    <li>Crear Empresa</li>
                                </Link>
                                <Link to="/listar-empresa" className="no-estilo">
                                    <li>Listar Empresa</li>
                                </Link>
                            </ul>
                        )}

                        {/* Opción Programas */}
                        <li className="liContainer" onClick={() => abrirMenu("programas")}>
                            <MdSchool className="sidebaricon" />
                            <p className="itemNames">Programas</p>
                        </li>
                        {ActiveMenu === "programas" && (
                            <ul className="subMenu">
                                <Link to="/crear-programa" className="no-estilo">
                                    <li>Crear Programa de formación</li>
                                </Link>
                                <Link to="/listar-programa" className="no-estilo">
                                    <li>Listar Programa de formación</li>
                                </Link>
                            </ul>
                        )}

                        {/* Opción Usuarios */}
                        <li className="liContainer" onClick={() => abrirMenu("usuarios")}>
                            <FaUsers className="sidebaricon" />
                            <p className="itemNames">Usuarios</p>
                        </li>
                        {ActiveMenu === "usuarios" && (
                            <ul className="subMenu">
                                <Link to="/listar-usuarios" className="no-estilo">
                                    <li>Listar Usuarios</li>
                                </Link>
                            </ul>
                        )}
                        {/* Botón de cierre de sesión */}
                        <div onClick={handleCerrarSesion} className="ButtonCerrarSesionAdmin">
                            Cerrar Sesión
                        </div>
                    </ul>


                </div>
            )}
        </>
    );
}

export default SidebarAdmin;
