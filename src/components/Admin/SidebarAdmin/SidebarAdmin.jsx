import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SidebarAdmin.css";
import { FaHome } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import { FaUsers } from "react-icons/fa";


function SidebarAdmin() {

    const [ActiveMenu, SetMenuOn] = useState(false)

    const abrirMenu = (menuOn) => {
        SetMenuOn(ActiveMenu === menuOn ? null : menuOn);
    }

    return (
        <div className="sidebar-admin">

            <ul className="ulContainer">
                <h4 className="menu">Menu</h4>

                <li className="liContainer">
                    <FaHome className="sidebaricon" />
                    <p className="itemNames">Home</p>
                </li>


                <li className="liContainer" onClick={() => abrirMenu("empresas")}>
                    <MdHomeRepairService className="sidebaricon" />
                    <p className="itemNames">Empresas</p>
                </li>
                {ActiveMenu === "empresas" && (
                    <ul className="subMenu">
                        <li>Crear Empresa</li>
                        <li>Modificar Empresa</li>
                        <li>Visualizar Empresa</li>
                        <li>Listar Empresa</li>
                        <li>Estado Empresa</li>
                    </ul>
                )}

                <li className="liContainer" onClick={() => abrirMenu("programas")}>
                    <MdSchool className="sidebaricon" />
                    <p className="itemNames">Programas de Formación</p>
                </li>
                {ActiveMenu === "programas" && (
                    <ul className="subMenu">
                        <li>Crear Programa de formación</li>
                        <li>Modificar Programa de formación</li>
                        <li>Visualizar Programa de formación</li>
                        <li>Listar Programa de formación</li>
                        <li>Estado de Programa de formación</li>
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
                        <li>Estado de Usuarios</li>
                    </ul>
                )}

            </ul>

            <Link to='/inicio' className="ButtonCerrarSesionAdmin">
            Cerrar Sesión
            </Link>

        </div>
    );
}

export default SidebarAdmin;
