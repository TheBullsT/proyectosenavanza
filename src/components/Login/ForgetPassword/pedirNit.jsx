// Importa React y el hook useState para manejar el estado local del formulario
import React, { useState } from "react";

// Importa la instancia de API general (con baseURL configurado en VITE_API_URL_GENERAL)
import { apiGeneral } from "../../../api/apis";

// Importa la librería toastify para mostrar notificaciones al usuario
import { toast } from "react-toastify";

// Importa los estilos CSS específicos para este componente
import "./pedirNit.css";

// Componente funcional NitPedir
function NitPedir() {
  // Estado para almacenar el valor del NIT ingresado por el usuario
  const [nit, setNit] = useState("");

  // Función que maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    try {
      // Se realiza la petición POST al backend con el NIT ingresado
      // IMPORTANTE: Cambia "recuperar-nit/" por el nombre real de tu endpoint
      await apiGeneral.post("recuperar-nit/", {
        nit: parseInt(nit), // Convertimos a número ya que el backend espera un entero
      });

      // Si la petición es exitosa, mostramos mensaje de éxito
      toast.success("Se ha enviado un código de recuperación al correo registrado.");

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
    <div className="nitpedir-container">
      {/* Título de la vista */}
      <h2>Recuperar Contraseña</h2>

      {/* Formulario de recuperación */}
      <form onSubmit={handleSubmit}>
        {/* Campo para ingresar el NIT */}
        <label htmlFor="nit">Ingrese el NIT de su empresa:</label>
        <input
          type="number" // Solo permite números
          id="nit"
          value={nit} // Valor controlado por el estado
          onChange={(e) => setNit(e.target.value)} // Actualiza el estado al escribir
          required // Campo obligatorio
        />

        {/* Botón para enviar el formulario */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

// Exporta el componente para poder usarlo en otras partes de la app
export default NitPedir;
