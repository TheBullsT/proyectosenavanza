import React from "react";
import { Link } from "react-router-dom";
import "./SidebarClose.css";
import empresa from "../../../assets/img/Empresa.png";
import perfil from "../../../assets/img/Perfil.png";
import programas from "../../../assets/img/Programas.png";
import reporte from "../../../assets/img/Reporte.png";
import usuarios from "../../../assets/img/Usuarios.png";
import home from "../../../assets/img/Home.png";


function SidebarClose() {
    return (
        <div className="sidebar">
            <nav className="sidebar-links">
                <ul>
                    <li><Link to="/perfil"><img src={perfil} alt="Perfil" /></Link></li>
                    <li><Link to="/home"><img src={home} alt="home" /></Link></li>
                    <li><Link to="/formacion"><img src={programas} alt="Programas de Formacion" /></Link></li>
                    <li><Link to="/empresas"><img src={empresa} alt="Empresas" /></Link></li>
                    <li><Link to="/usuarios"><img src={usuarios} alt="Usuarios" /></Link></li>
                    <li><Link to="/reporte"><img src={reporte} alt="Reporte " /></Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default SidebarClose;