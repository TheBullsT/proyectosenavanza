// Importa React para poder usar JSX
import React, { forwardRef } from "react";

// Importa Link para navegación interna entre rutas
import { Link } from "react-router-dom";

// Importa los estilos CSS
import "../Busqueda/busqueda.css";

// Define el componente con forwardRef para recibir la referencia externa del DOM
const MenuProfile = forwardRef(function MenuProfileComponent(props, ref) {
    return (
        // Aplica la ref correctamente al contenedor del menú desplegable
        <div ref={ref} className="dropdown-menu">
            {/* Encabezado de la sección "Información de perfil" */}
            <div className="section-header">
                <div className="subtitulo">Información de perfil</div>
                <div className="linea"></div>
            </div>

            {/* Lista de enlaces relacionados al perfil */}
            <ul className="menu-list">
                <li><Link to="/perfil">Perfil</Link></li>
                <li><Link to="/editarperfil">Editar perfil</Link></li>
            </ul>

            {/* Encabezado de la sección "Opciones de empresa" */}
            <div className="section-header">
                <div className="subtitulo">Opciones de empresa</div>
                <div className="linea"></div>
            </div>

            {/* Lista de enlaces relacionados a la empresa */}
            <ul className="menu-list">
                <li><Link to="/diagnostico-empresarial">Diagnóstico Empresarial</Link></li>
                <li><Link to="/resultadosdediagnostico">Resultados de Diagnóstico</Link></li>
            </ul>

            {/* Línea separadora final */}
            <div className="linea"></div>

            {/* Enlace para cerrar sesión */}
            <ul className="menu-list">
                <li><Link to="/inicio">Cerrar Sesión</Link></li>
            </ul>
        </div>
    );
});

export default MenuProfile;
