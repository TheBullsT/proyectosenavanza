import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <nav className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/diagnostico">Diagnostico Empresarial</Link></li>
          <li><Link to="/resultados">Resultados de Diagnostico</Link></li>
          <li><Link to="/formacion">Programas de formación</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
