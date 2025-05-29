import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

/**
 * Componente NavBar
 * Muestra una barra de navegación simple con enlaces usando react-router-dom
 */
function NavBar() {
  return (
    <div className="nav-bar">
      <nav className="nav-links" aria-label="Main Navigation">
        <ul>
          {/* Lista de enlaces de navegación */}
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/diagnostico-empresarial">Diagnóstico Empresarial</Link></li>
          <li><Link to="/resultado-diagnostico">Resultados de Diagnóstico</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
