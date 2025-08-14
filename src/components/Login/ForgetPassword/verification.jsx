// Importa React y los hooks useState y useRef desde la librería React
import React, { useState, useRef } from "react";

// Importa Link y useNavigate desde react-router-dom para navegación entre rutas
import { Link, useNavigate } from "react-router-dom";

// Importa la imagen del logo desde la carpeta de assets
import logoLogin from '../../../assets/img/Logo_SENAVANZA.jpg';

// Importa los estilos específicos para este componente
import "./verification.css";

// Componente funcional Verification
export default function Verification() {

    // Estado para almacenar los 4 dígitos del código de verificación
    const [code, setCode] = useState(["", "", "", ""]);

    // Referencias para los inputs, permite enfocar en el siguiente o anterior
    const inputsRef = useRef([]);

    // Hook para redireccionar al usuario a otras rutas dentro de la app
    const navigate = useNavigate();

    // Función que redirige a la página de inicio al hacer clic en el logo
    const irInicio = () => {
        navigate('/inicio'); // Cambia la ruta a /inicio
    };

    // Función que maneja el cambio en cada input del código
    const handleChange = (value, index) => {
        // Solo permite valores numéricos de un dígito
        if (/^[0-9]?$/.test(value)) {
            // Crea una copia del código actual
            const newCode = [...code];
            // Actualiza el valor en la posición correspondiente
            newCode[index] = value;
            // Guarda el nuevo estado
            setCode(newCode);

            // Si hay un valor y no es el último input, enfoca el siguiente
            if (value && index < 3) {
                inputsRef.current[index + 1].focus();
            }
        }
    };

    // Función que maneja la navegación con la tecla "Backspace"
    const handleKeyDown = (e, index) => {
        // Si se presiona Backspace, el campo está vacío y no es el primero
        if (e.key === "Backspace" && !code[index] && index > 0) {
            // Enfoca el input anterior
            inputsRef.current[index - 1].focus();
        }
    };

    // Función que simula el reenvío del código de verificación
    const handleResend = () => {
        alert("Código reenviado al correo."); // Mensaje emergente
    };

    // Renderizado del componente
    return (
        <div className="verification-container">
            {/* Logo que al hacer clic redirige al inicio */}
            <div onClick={irInicio} className="logoLogin">
                <img src={logoLogin} alt="Logo de SENAVANZA" />
            </div>

            {/* Título principal */}
            <h2 className="forgot-title">¿Olvidaste <br />tu contraseña?</h2>

            {/* Caja del formulario de verificación */}
            <div className="verification-box">
                {/* Subtítulo */}
                <h3>Código de Verificación</h3>
                {/* Texto de instrucciones */}
                <p>
                    Ingresa el código de 4 dígitos que enviamos a tu correo <br />
                    ***************@gmail.com
                </p>

                {/* Contenedor de los inputs */}
                <div className="code-inputs">
                    {/* Renderiza los 4 inputs según el estado 'code' */}
                    {code.map((digit, index) => (
                        <input
                            key={index} // Clave única por índice
                            type="text" // Tipo texto (limitado por maxLength)
                            maxLength="1" // Solo permite un carácter
                            value={digit} // Valor actual del input
                            ref={(el) => (inputsRef.current[index] = el)} // Guarda la referencia
                            onChange={(e) => handleChange(e.target.value, index)} // Maneja cambios
                            onKeyDown={(e) => handleKeyDown(e, index)} // Maneja tecla Backspace
                        />
                    ))}
                </div>

                {/* Texto de reenvío */}
                <p className="resend-text">
                    ¿No recibiste el código?{" "}
                    <span onClick={handleResend} className="resend-link">
                        Resend
                    </span>
                </p>
            </div>
        </div>
    );
}
