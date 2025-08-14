import React, { forwardRef, useState } from "react"; // forwardRef permite recibir refs externas
import { Link } from "react-router-dom"; // Componente para navegación interna
import "../Busqueda/busqueda.css"; // Estilos del menú
import { useNavigate } from "react-router-dom"; // Hook para redirecciones
import CerrarSesion from "../../Loading/cerrar-sesion"; // Pantalla de carga al cerrar sesión
import { apiLogin } from "../../../api/apis"; // API de autenticación
import { toast } from "react-toastify"; // Notificaciones

import '../Busqueda/busqueda.css';

const MenuProfile = forwardRef(function MenuProfileComponent(props, ref) {

    const [cerrandoSesion, setCerrandoSesion] = useState(false); // Estado para loader
    const navigate = useNavigate(); // Redirección de rutas

    const handleCerrarSesion = async () => {
        setCerrandoSesion(true); // Activa el estado de cierre

        try {
            await apiLogin.post("logout/", {}, { withCredentials: true }); // Solicitud al backend
            toast.success("Sesión cerrada correctamente");

            // Limpieza de tokens en el almacenamiento local
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");

            navigate("/inicio"); // Redirige al inicio
        } catch (error) {
            toast.error("Error al cerrar sesión");
            console.error(error); // Muestra error en consola
        } finally {
            setCerrandoSesion(false);
        }
    };

    return (
        <>
            {cerrandoSesion ? (
                <CerrarSesion /> // Loader durante el cierre
            ) : (
                <div ref={ref} className="dropdown-menu">
                    <div className="section-header">
                        <div className="subtitulo">Información de perfil</div>
                        <div className="linea"></div>
                    </div>

                    <ul className="menu-list">
                        <li>
                            <Link to="/perfil">Perfil</Link>
                        </li>
                        <li>
                            <Link to="/editarperfil">Editar perfil</Link>
                        </li>
                    </ul>

                    <div className="section-header">
                        <div className="subtitulo">Opciones de empresa</div>
                        <div className="linea"></div>
                    </div>

                    <ul className="menu-list">
                        <li>
                            <Link to="/diagnostico-empresarial">Diagnóstico Empresarial</Link>
                        </li>
                        <li>
                            <Link to="/resultado-diagnostico">Resultados de Diagnóstico</Link>
                        </li>
                    </ul>

                    <div className="linea"></div>

                    <ul className="menu-list">
                        <li onClick={handleCerrarSesion}>Cerrar Sesión</li>
                    </ul>
                </div>
            )}
        </>
    );
});

export default MenuProfile;
