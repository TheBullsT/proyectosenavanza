import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <nav className="nav-links">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/diagnostico">Diagnóstico Empresarial</Link></li>
          <li><Link to="/resultados">Resultados de Diagnóstico</Link></li>
          <li><Link to="https://oferta.senasofiaplus.edu.co/sofia-oferta/">Programas de formación</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
