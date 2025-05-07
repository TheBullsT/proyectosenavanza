import React from "react";
import { Link } from "react-router-dom";
import { forwardRef } from "react";
import "../Busqueda/busqueda.css";

const MenuProfile = forwardRef(function MyInput(props, ref) {
    return (
        <div input ref={ref} className="dropdown-menu">
            <ul>
               <div className="titulo1">
                <div className="subtitulo">Informacion de perfil</div>
                <div className="linea"></div>
               </div>
                <li><Link to="/perfil">Perfil</Link></li>
                <li><Link to="/editarperfil">Editar perfil</Link></li>
                <li><Link to="/notificacionesdelperfil">Notificaciones del Perfil</Link></li>
                <div className="titulo2">
                <div className="subtitulo">Opciones de empresa</div>
                <div className="linea"></div>
                </div>
                <li><Link to="/diagnostico-empresarial">Diagnostico Empresarial</Link></li>
                <li><Link to="/resultadosdediagnostico">Resultados de Diagnostico</Link></li>
                <div className="linea"></div>
                <li><Link to="/login">Cerrar Sesión</Link></li>
            </ul>
        </div>
    );
});

export default MenuProfile;
    