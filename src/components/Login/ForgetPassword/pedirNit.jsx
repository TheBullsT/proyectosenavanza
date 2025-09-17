// Importa React y el hook useState para manejar el estado local del formulario
import React, { useState } from "react";

// Importa la instancia de API general (con baseURL configurado en VITE_API_URL_GENERAL)
import { apiLogin } from "../../../api/apis";

// Importa la imagen del logo desde la carpeta de assets

import logoLogin from '../../../assets/img/Logo_SENAVANZA.jpg';
// Importa Link y useNavigate desde react-router-dom para la navegación entre rutas

import { useNavigate } from "react-router-dom";
// Importa la librería toastify para mostrar notificaciones al usuario
import { toast } from "react-toastify";

// Importa los estilos CSS específicos para este componente
import "./pedirNit.css";

// Componente funcional NitPedir
function NitPedir() {

    // Estado para almacenar el valor del NIT ingresado por el usuario
    const [nit, setNit] = useState("");
    // Hook para redireccionar al usuario a otras rutas dentro de la app
    const navigate = useNavigate();

    // Función que redirige a la página de inicio al hacer clic en el logo
    const irInicio = () => {
        navigate('/inicio'); // Cambia la ruta a /inicio
    };

    // Función que maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue

        try {
            // Se realiza la petición POST al backend con el NIT ingresado
            // IMPORTANTE: Cambia "recuperar-nit/" por el nombre real de tu endpoint
            await apiLogin.post("code-reset/", {
                nit: parseInt(nit), // Convertimos a número ya que el backend espera un entero
            });

            localStorage.setItem("nitTemp", nit); // ⬅Guarda el NIT para el siguiente paso
            
            // Si la petición es exitosa, mostramos mensaje de éxito
            toast.success("Se ha enviado un código de recuperación al correo registrado.");
            navigate('/validar-nit')
            // Limpiamos el campo de entrada
            setNit("");
        } catch (error) {
            // Si hubo un error en la respuesta del backend
            if (error.response) {
                // Mostramos el mensaje exacto que devuelva el backend (detalle o validación de NIT)
                toast.error(
                    error.response.data.nit?.[0] ||
                    error.response.data.detail ||
                    "Error al procesar la solicitud."
                );

                // Mostramos el error en consola para depuración
                console.error("Error desde backend:", error.response.data);
            } else {
                // Si el error fue por conexión o red
                toast.error("Error de conexión con el servidor.");
                console.error("Error de red:", error);
            }
        }
    };

    // Renderizado del componente
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

// Exporta el componente para poder usarlo en otras partes de la app
export default NitPedir;
