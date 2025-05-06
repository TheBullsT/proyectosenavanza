import React from "react";
import { Link } from "react-router-dom";
import "../Busqueda/busqueda.css";

const MenuProfile = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="dropdown-menu">
            <ul>
                <p>Informacion de perfil</p>
                <li><Link to="/perfil">Perfil</Link></li>
                <li><Link to="/editarperfil">Editar perfil</Link></li>
                <li><Link to="/editarperfil">Notificaciones del Perfil</Link></li>
            </ul>
        </div>
    );
});

export default MenuProfile;
