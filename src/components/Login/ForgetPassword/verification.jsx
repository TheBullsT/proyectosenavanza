// Importa React y los hooks useState y useRef
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logoLogin from "../../../assets/img/Logo_SENAVANZA.jpg";
import "./verification.css";
import { apiLogin } from "../../../api/apis";
import { toast } from "react-toastify";

export default function Verification() {
    // Estado para guardar los 4 dígitos del código
    const [code, setCode] = useState(["", "", "", ""]);
    // Recuperamos el NIT desde localStorage
    const [nit] = useState(localStorage.getItem("nitTemp") || "");

    // Referencias para inputs del código
    const inputsRef = useRef([]);

    const navigate = useNavigate();

    // Ir al inicio si clic en el logo
    const irInicio = () => {
        navigate("/inicio");
    };

    // Manejar cambio en cada input
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

    // Manejar backspace
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    // Enviar código de verificación al backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        const fullCode = code.join("");

        if (!nit) {
            toast.error("No se encontró el NIT. Repite el proceso.");
            return;
        }
        if (fullCode.length !== 4) {
            toast.error("El código debe tener 4 dígitos.");
            return;
        }

        try {
            // Llamada al backend solo para validar código
            await apiLogin.post("confirm-code/", {
                nit: parseInt(nit),
                code: fullCode,
            });

            // Guardamos datos en localStorage
            localStorage.setItem("nitTemp", nit);
            localStorage.setItem("resetCode", fullCode);

            toast.success("Código validado. Ahora ingresa tu nueva contraseña.");
            navigate("/cambio-contraseña"); // Redirige al paso de cambiar la contraseña
        } catch (error) {
            toast.error(error.response?.data?.detail || "Error al validar el código.");
        }
    };

    return (
        <div className="container">
            <div onClick={irInicio} className="logoLogin">
                <img src={logoLogin} alt="Logo de SENAVANZA" />
            </div>

            <div className="verification-container">
                <h2 className="forgot-title">¿Olvidaste tu contraseña?</h2>

                <div className="verification-box">
                    <h3>Código de verificación</h3>
                    <p>
                        Ingresa el código de 4 dígitos que enviamos a tu correo
                        <br />
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

                    <button onClick={handleSubmit} className="btn-submit">
                        Confirmar
                    </button>

                    <p className="resend-text">
                        ¿No recibiste el código?{" "}
                        <span
                            onClick={() => toast.info("Código reenviado.")}
                            className="resend-link"
                        >
                            Reenviar
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
