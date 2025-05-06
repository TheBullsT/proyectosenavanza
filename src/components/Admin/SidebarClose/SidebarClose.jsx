import React from "react";
import { Link } from "react-router-dom";
import "./SidebarClose.css";

function SidebarClose() {
    return (
        <div className="sidebar">
            <nav className="sidebar-links">
                <ul>
                    <li><Link to="/perfil">Perfil</Link></li>
                    <li><Link to="/home">Inicio</Link></li>
                    <li><Link to="/formacion">Programa de Formacion</Link></li>
                    <li><Link to="/empresas">Empresas</Link></li>
                    <li><Link to="/usuarios">Usuarios</Link></li>
                    <li><Link to="/reporte">Reporte</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default SidebarClose;