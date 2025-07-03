// Importa la biblioteca principal de React
import React from 'react';

// Importa el nuevo API de ReactDOM (desde React 18) para renderizar en el DOM
import ReactDOM from 'react-dom/client';

// Importa estilos globales
import './index.css';

// Importa el componente raíz de la aplicación
import App from './App';

// Importa estilos del sistema de notificaciones toast
import 'react-toastify/dist/ReactToastify.css';

// Crea la raíz del DOM donde se montará toda la app (div con id="root" en index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación dentro de <React.StrictMode>, que ayuda a detectar problemas potenciales
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
