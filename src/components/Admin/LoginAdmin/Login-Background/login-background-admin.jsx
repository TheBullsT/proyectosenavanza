// Importar react para poder usar JSX y componentes
import React from "react";
// Importar imagen para el background desde los assets
import mobile from '../../../../assets/img/img-login/mobile.png';
// Importar hoja de estilos para este componente
import './login-background-admin.css';
// Importar la librería Link de react-router-dom para navegación interna
import { Link } from 'react-router-dom';

// Componente principal que renderiza el fondo del login
function LoginBackground() {
    return (
        // Contenedor principal del fondo de la pantalla
        <div className="background">
            {/* Link que redirige al login del administrador */}
            <Link to="/login" className="hidden-link">
                {/* Imagen que se mostrará como elemento visual del lado */}
                <img className="imgage" src={mobile} alt="Imagen del login" />
            </Link>
        </div>
    );
}

// Exportar el componente para poder utilizarlo en otras partes del proyecto
export default LoginBackground;
