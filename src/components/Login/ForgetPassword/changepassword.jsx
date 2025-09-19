// Importa React y el hook useState para manejar el estado interno
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiLogin } from "../../../api/apis"; // tu cliente Axios
import { toast } from "react-toastify"; // para notificaciones
import logoLogin from "../../../assets/img/Logo_SENAVANZA.jpg";
import "./changepassword.css";

export default function ChangePassword() {
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const irInicio = () => {
        navigate("/inicio");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Las contraseñas no coinciden.");
            return;
        }

        // Obtenemos datos guardados en localStorage
        const nit = localStorage.getItem("nitTemp");
        const code = localStorage.getItem("resetCode");

        if (!nit || !code) {
            toast.error("Faltan datos de validación. Intenta nuevamente.");
            navigate("/recuperar"); // o la ruta donde empieza el flujo
            return;
        }

        try {
            // Llamada al backend
            await apiLogin.post("confirm-password/", {
                nit: parseInt(nit),
                code: code,
                new_password: password,
            });


            toast.success("Contraseña cambiada con éxito.");

            // Limpiamos datos temporales
            localStorage.removeItem("nitTemp");
            localStorage.removeItem("resetCode");

            navigate("/login");
        } catch (error) {
            toast.error(error.response?.data?.detail || "Error al cambiar la contraseña.");
        }
    };

    return (
        <div className="container">
            {/* Logo que al hacer clic redirige al inicio */}
            <div onClick={irInicio} className="logoLogin">
                <img src={logoLogin} alt="Logo de SENAVANZA" />
            </div>
            <div className="change-container">
                <div className="change-box">
                    <h2>Cambio de contraseña</h2>
                    <p>¡Asegura tu cuenta!</p>

                    <form onSubmit={handleSubmit}>
                        <label>Nueva contraseña</label>
                        <input
                            type="password"
                            placeholder="Nueva contraseña (Mínimo de 8 caracteres)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            minLength={8}
                            title="La contraseña debe de tener mínimo 8 caracteres"
                            required
                        />

                        <label>Confirmar contraseña</label>
                        <input
                            type="password"
                            placeholder="Confirmar contraseña"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            minLength={8}
                            title="La contraseñas no son iguales"
                            required
                        />

                        <button type="submit">Cambiar contraseña</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
