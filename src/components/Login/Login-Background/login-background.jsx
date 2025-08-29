// Importar React
import React from "react";
// Importar imagen que se mostrará en el background
import mobile from '../../../assets/img/img-login/mobile.png';
// Importar estilos CSS del componente
import './login-background.css';


// Componente principal que muestra el fondo del login
function LoginBackground() {
    return (
        // Contenedor principal del background
        <div className="background">
            {/* Link para redirigir al login del administrador */}
                {/* Imagen que se posiciona en el lado derecho del fondo */}
                <img
                    className="imgage"
                    src={mobile}
                    alt="Imagen del login"
                />
        </div>
    );
}

// Exporta el componente para usarlo en otras partes de la aplicación
export default LoginBackground;
