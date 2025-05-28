import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SidebarAdmin.css";
import { FaHome } from "react-icons/fa";
import { MdHomeRepairService, MdSchool } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

function SidebarAdmin() {
    const [ActiveMenu, SetMenuOn] = useState(false);

    const abrirMenu = (menuOn) => {
        SetMenuOn(ActiveMenu === menuOn ? null : menuOn);
    };

    return (
        <div className="sidebar-admin">
            <ul className="ulContainer">
                <h4 className="menu">Menu</h4>

                <Link to="/adminhome" className="no-estilo">
                    <li className="liContainer">
                        <FaHome className="sidebaricon" />
                        <p className="itemNames">Home</p>
                    </li>
                </Link>

                <li className="liContainer" onClick={() => abrirMenu("empresas")}>
                    <MdHomeRepairService className="sidebaricon" />
                    <p className="itemNames">Empresas</p>
                </li>
                {ActiveMenu === "empresas" && (
                    <ul className="subMenu">
                        <Link to="/crear-empresa" className="no-estilo"><li>Crear Empresa</li></Link>
                        <Link to="/modificar-empresa" className="no-estilo"><li>Modificar Empresa</li></Link>
                        <Link to="/listar-empresa" className="no-estilo"><li>Listar Empresa</li></Link>
                    </ul>
                )}

                <li className="liContainer" onClick={() => abrirMenu("programas")}>
                    <MdSchool className="sidebaricon" />
                    <p className="itemNames">Programas</p>
                </li>
                {ActiveMenu === "programas" && (
                    <ul className="subMenu">
                        <Link to="/crear-programa" className="no-estilo"><li>Crear Programa de formación</li></Link>
                        <Link to="/modificar-programa" className="no-estilo"><li>Modificar Programa de formación</li></Link>
                        <Link to="/listar-programa" className="no-estilo"><li>Listar Programa de formación</li></Link>
                    </ul>
                )}

                <li className="liContainer" onClick={() => abrirMenu("usuarios")}>
                    <FaUsers className="sidebaricon" />
                    <p className="itemNames">Usuarios</p>
                </li>
                {ActiveMenu === "usuarios" && (
                    <ul className="subMenu">
                        <li>Crear Usuario</li>
                        <li>Modificar Usuarios</li>
                        <li>Visualizar Usuarios</li>
                        <li>Listar Usuarios</li>
                    </ul>
                )}
            </ul>

            <Link to='/inicio' className="no-estilo">
                <div className="ButtonCerrarSesionAdmin">
                    Cerrar Sesión
                </div>
            </Link>
        </div>
    );
}

export default SidebarAdmin;
