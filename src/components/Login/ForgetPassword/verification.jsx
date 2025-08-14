import react, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoLogin from '../../../assets/img/Logo_SENAVANZA.jpg';

import "./verification.css";

export default function Verification() {
    const [code, setCode] = useState(["", "", "", ""]);
    const inputsRef = useRef([]);

    // Hook para redireccionar al usuario a otras rutas
    const navigate = useNavigate();

    // Función que redirige a la página de inicio al hacer clic en el logo
    const irInicio = () => {
        navigate('/inicio');
    };

    const handleChange = (value, index) => {
        if (/^[0-9]?$/.test(value)) {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 3) {
            inputsRef.current[index + 1].focus();
        }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
        inputsRef.current[index - 1].focus();
        }
    };

    const handleResend = () => {
        alert("Código reenviado al correo.");
    };

    return (
        <div className="verification-container">
        <div onClick={irInicio} className="logoLogin">
            <img src={logoLogin} alt="Logo de SENAVANZA" />
        </div>
        <h2 className="forgot-title">¿Olvidaste <br />tu contraseña?</h2>

        <div className="verification-box">
            <h3>Código de Verificación</h3>
            <p>
            Ingresa el código de 4 dígitos que enviamos a tu correo <br />
            ***************@gmail.com
            </p>

            <div className="code-inputs">
            {code.map((digit, index) => (
                <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                />
            ))}
            </div>

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
