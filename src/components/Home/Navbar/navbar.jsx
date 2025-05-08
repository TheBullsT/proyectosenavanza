import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <nav className="nav-links">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/diagnostico-empresarial">Diagnóstico Empresarial</Link></li>
          <li><Link to="/resultados">Resultados de Diagnóstico</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
