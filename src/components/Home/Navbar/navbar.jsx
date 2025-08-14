// Importación de React para crear el componente
import React from "react";
// Componente para navegacion interna
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
                        <Link to="/home">Home</Link> {/* Enlace a la página principal */}
                    </li>
                    <li>
                        <Link to="/diagnostico-empresarial">Diagnóstico Empresarial</Link>
                    </li>
                    <li>
                        <Link to="/resultado-diagnostico">Resultados de Diagnóstico</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar; // Exporta el componente para su uso en otras partes de la app
