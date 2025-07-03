// Importa la función para definir la configuración de Vite
import { defineConfig } from "vite";

// Plugin para soportar JSX, Fast Refresh y otras funcionalidades de React en Vite
import react from "@vitejs/plugin-react";

// Exporta la configuración de Vite
export default defineConfig({
  // Plugins utilizados por Vite (en este caso, soporte para React)
  plugins: [react()],

  // Configuración del servidor de desarrollo
  server: {
    port: 5173, // Puerto donde se levantará el servidor local (http://localhost:5173)
  },
});
