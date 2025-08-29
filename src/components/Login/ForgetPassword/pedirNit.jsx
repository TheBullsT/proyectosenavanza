// Importa React y los hooks useState desde la librería React
import React, { useState } from "react";

// Importa Link y useNavigate desde react-router-dom para la navegación entre rutas
import { useNavigate } from "react-router-dom";

// Importa la imagen del logo desde la carpeta de assets
import logoLogin from '../../../assets/img/Logo_SENAVANZA.jpg';

// Importa los estilos específicos para este componente
import "./pedirNit.css";

// Componente funcional Verification (ahora para NIT de empresa)
function NitPedir() {

    // Estado para almacenar el NIT
    const [nit, setNit] = useState("");

    // Hook para redireccionar al usuario a otras rutas dentro de la app
    const navigate = useNavigate();

    // Función que redirige a la página de inicio al hacer clic en el logo
    const irInicio = () => {
        navigate('/inicio'); // Cambia la ruta a /inicio
    };

    // Función que maneja el submit del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nit) {
            alert("Por favor ingresa el NIT de la empresa");
            return;
        }

        // Aquí podrías hacer la validación con el backend
        console.log("NIT ingresado:", nit);

        // Ejemplo: redirigir a la siguiente pantalla
        navigate("/restablecer"); 
    };

    return (
        <div className="container">
            {/* Logo que al hacer clic redirige al inicio */}
            <div onClick={irInicio} className="logoLogin">
                <img src={logoLogin} alt="Logo de SENAVANZA" />
            </div>
            <div className="verification-container">

                {/* Título principal */}
                <h2 className="forgot-title">¿Olvidaste <br />tu contraseña?</h2>

                {/* Caja del formulario */}
                <div className="verification-box">
                    {/* Subtítulo */}
                    <h3>Recuperación de cuenta</h3>
                    {/* Texto de instrucciones */}
                    <p>
                        Ingresa el <strong>NIT de tu empresa</strong> para continuar con la recuperación.
                    </p>

                    {/* Input para el NIT */}
                    <form onSubmit={handleSubmit} className="nit-form">
                        <input
                            type="text"
                            placeholder="NIT de la empresa"
                            value={nit}
                            onChange={(e) => setNit(e.target.value)}
                            className="nit-input"
                        />
                        <button type="submit" className="btn-submit">
                            Continuar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NitPedir;