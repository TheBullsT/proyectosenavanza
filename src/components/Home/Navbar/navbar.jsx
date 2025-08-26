// Importación de React para crear el componente
import React from "react";
// Componente para navegación interna
import { Link } from "react-router-dom";
import "./navbar.css";

// Componente funcional que representa la barra de navegación principal
function NavBar() {
    return (
        <div className="nav-bar">
            {/* Contenedor de los enlaces de navegación */}
            <nav className="nav-links" aria-label="Main Navigation">
                <ul>
                    {/* Cada <li> contiene un enlace de navegación interno usando Link de react-router-dom */}
                    <li>
                        <Link to="/home">Inicio</Link> {/* Enlace a la página principal */}
                    </li>
                    <li>
                        <Link to="/diagnostico-empresarial">Diagnóstico empresarial</Link>
                    </li>
                    <li>
                        <Link to="/resultado-diagnostico">Resultados del diagnóstico</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar; // Exporta el componente para su uso en otras partes de la app
