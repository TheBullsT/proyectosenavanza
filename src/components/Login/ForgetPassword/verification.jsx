// Importa React y los hooks useState y useRef
import React, { useState, useRef } from "react";
// Importa useNavigate para la navegación
import { useNavigate } from "react-router-dom";
// Importa la imagen del logo
import logoLogin from '../../../assets/img/Logo_SENAVANZA.jpg';
// Importa los estilos
import "./verification.css";

// Aquí traemos la API de login y el toast
import { apiLogin } from "../../api/apis";
import { toast } from "react-toastify";

export default function Verification() {
  // Estado para guardar los 4 dígitos del código
  const [code, setCode] = useState(["", "", "", ""]);

  // Estado para la nueva contraseña
  const [newPassword, setNewPassword] = useState("");

  // Estado para el NIT (este debería venir del paso anterior o por props/context)
  const [nit] = useState(localStorage.getItem("nitTemp") || "");

  // Referencias para los inputs del código
  const inputsRef = useRef([]);

  // Hook de navegación
  const navigate = useNavigate();

  // Función que redirige al inicio al hacer clic en el logo
  const irInicio = () => {
    navigate("/inicio");
  };

  // Maneja cambios en cada input del código
  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) { // Solo acepta números de 1 dígito
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Si se escribe algo y no es el último input, pasa al siguiente
      if (value && index < 3) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  // Maneja la tecla Backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // Envía el código + NIT + nueva contraseña al backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullCode = code.join(""); // Une los 4 dígitos en un string

    if (!nit) {
      toast.error("No se encontró el NIT. Repite el proceso.");
      return;
    }
    if (fullCode.length !== 4) {
      toast.error("El código debe tener 4 dígitos.");
      return;
    }
    if (!newPassword) {
      toast.error("Debes ingresar una nueva contraseña.");
      return;
    }

    try {
      await apiLogin.post("password-reset/confirm/", {
        nit: parseInt(nit),
        code: fullCode,
        new_password: newPassword,
      });

      toast.success("Contraseña restablecida con éxito. Inicia sesión.");
      navigate("/login"); // Redirige al login
    } catch (error) {
      if (error.response) {
        toast.error(
          error.response.data.detail || "Error al confirmar el código."
        );
        console.error("Error backend:", error.response.data);
      } else {
        toast.error("Error de conexión con el servidor.");
        console.error("Error de red:", error);
      }
    }
  };

  // Renderizado
  return (
    <div className="container">
      {/* Logo */}
      <div onClick={irInicio} className="logoLogin">
        <img src={logoLogin} alt="Logo de SENAVANZA" />
      </div>

      <div className="verification-container">
        {/* Título */}
        <h2 className="forgot-title">¿Olvidaste tu contraseña?</h2>

        {/* Caja principal */}
        <div className="verification-box">
          <h3>Código de verificación</h3>
          <p>
            Ingresa el código de 4 dígitos que enviamos a tu correo
            <br />
            ***************@gmail.com
          </p>

          {/* Inputs del código */}
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

          {/* Input de nueva contraseña */}
          <input
            type="password"
            placeholder="Nueva contraseña"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="password-input"
          />

          {/* Botón de enviar */}
          <button onClick={handleSubmit} className="btn-submit">
            Confirmar
          </button>

          {/* Texto de reenvío */}
          <p className="resend-text">
            ¿No recibiste el código?{" "}
            <span onClick={() => toast.info("Código reenviado.")} className="resend-link">
              Reenviar
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
