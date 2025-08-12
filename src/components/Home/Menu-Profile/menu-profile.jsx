// Importa React para poder usar JSX
import React, { forwardRef, useState } from "react";
// Importa Link para navegación interna entre rutas
import { Link } from "react-router-dom";
// Importa los estilos CSS
import "../Busqueda/busqueda.css";
// Importar navigate para poder navegar entre paginas
import { useNavigate } from "react-router-dom";
// Importamos el componente donde mostrara la pantalla de cerrar sesion
import CerrarSesion from "../../Loading/cerrar-sesion";
// Importar API
import { apiLogin } from "../../../api/apis"
// Imporar TOAST
import { toast } from "react-toastify";

import '../Busqueda/busqueda.css';


// Define el componente con forwardRef para recibir la referencia externa del DOM
const MenuProfile = forwardRef(function MenuProfileComponent(props, ref) {

    const [cerrandoSesion, setCerrandoSesion] = useState(false);
    const navigate = useNavigate();

    const handleCerrarSesion = async () => {
        setCerrandoSesion(true); // Muestra el loader

        try {
            // Llama a tu backend para borrar cookies
            await apiLogin.post("logout/", {}, { withCredentials: true });

            toast.success("Sesión cerrada correctamente");

            // Si tienes tokens en localStorage, los borras
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");

            // Redirige a inicio o login
            navigate("/inicio");
        } catch (error) {
            toast.error("Error al cerrar sesión");
            console.error(error);
        } finally {
            setCerrandoSesion(false);
        }
    };
    return (
        <>
            {/* Si está cerrando sesión, mostramos la pantalla de carga */}
            {cerrandoSesion ? (
                <CerrarSesion />
            ) : (
                <div ref={ref} className="dropdown-menu">
                    {/* Encabezado de la sección "Información de perfil" */}
                    <div className="section-header">
                        <div className="subtitulo">Información de perfil</div>
                        <div className="linea"></div>
                    </div>

                    {/* Lista de enlaces relacionados al perfil */}
                    <ul className="menu-list">
                        <li>
                            <Link to="/perfil">Perfil</Link>
                        </li>
                        <li>
                            <Link to="/editarperfil">Editar perfil</Link>
                        </li>
                    </ul>

                    {/* Encabezado de la sección "Opciones de empresa" */}
                    <div className="section-header">
                        <div className="subtitulo">Opciones de empresa</div>
                        <div className="linea"></div>
                    </div>

                    {/* Lista de enlaces relacionados a la empresa */}
                    <ul className="menu-list">
                        <li>
                            <Link to="/diagnostico-empresarial">Diagnóstico Empresarial</Link>
                        </li>
                        <li>
                            <Link to="/resultado-diagnostico">Resultados de Diagnóstico</Link>
                        </li>
                    </ul>

                    {/* Línea separadora final */}
                    <div className="linea"></div>

                    {/* Enlace para cerrar sesión */}
                    <ul className="menu-list">
                        <li onClick={handleCerrarSesion}>Cerrar Sesión</li>
                    </ul>
                </div>
            )}
        </>
    );
});

export default MenuProfile;
