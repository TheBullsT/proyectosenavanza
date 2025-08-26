// Importa React y el hook useState para manejar el estado interno
import React, { useState } from "react";

// Importa el hook useNavigate para redirigir entre rutas
import { useNavigate } from "react-router-dom";

// Importa la imagen del logo desde la carpeta de assets
import logoLogin from "../../../assets/img/Logo_SENAVANZA.jpg";

// Importa los estilos CSS específicos para este componente
import "./changepassword.css";

// Componente funcional ChangePassword
export default function ChangePassword() {

    // Hook para poder redirigir a otras rutas
    const navigate = useNavigate();

    // Estado para almacenar la nueva contraseña
    const [password, setPassword] = useState("");

    // Estado para almacenar la confirmación de la nueva contraseña
    const [confirmPassword, setConfirmPassword] = useState("");

    // Función que redirige al inicio al hacer clic en el logo
    const irInicio = () => {
        navigate("/inicio");
    };

    // Función que maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Verifica que ambas contraseñas coincidan
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return; // Detiene la ejecución si no son iguales
        }

        // Si coinciden, muestra mensaje de éxito
        alert("Contraseña cambiada con éxito.");

        // Redirige al usuario a la página de inicio de sesión
        navigate("/login");
    };

    // Renderizado del componente
    return (
        <div className="change-container">
            {/* Logo que al hacer clic lleva al inicio */}
            <div onClick={irInicio} className="logoLogin">
                <img src={logoLogin} alt="Logo de SENAVANZA" />
            </div>

            {/* Caja principal del formulario */}
            <div className="change-box">
                {/* Título de la vista */}
                <h2>Cambio de contraseña</h2>
                {/* Subtítulo motivacional */}
                <p>¡Asegura tu cuenta!</p>

                {/* Formulario de cambio de contraseña */}
                <form onSubmit={handleSubmit}>
                    {/* Campo para la nueva contraseña */}
                    <label>Nueva contraseña</label>
                    <input
                        type="password" // Campo oculto
                        placeholder="Nueva contraseña" // Texto de ayuda
                        value={password} // Valor controlado por estado
                        onChange={(e) => setPassword(e.target.value)} // Actualiza el estado
                        required // Campo obligatorio
                    />

                    {/* Campo para confirmar la contraseña */}
                    <label>Confirmar contraseña</label>
                    <input
                        type="password" // Campo oculto
                        placeholder="Confirmar contraseña" // Texto de ayuda
                        value={confirmPassword} // Valor controlado por estado
                        onChange={(e) => setConfirmPassword(e.target.value)} // Actualiza el estado
                        required // Campo obligatorio
                    />

                    {/* Botón para enviar el formulario */}
                    <button type="submit">Cambiar contraseña</button>
                </form>
            </div>
        </div>
    );
}
