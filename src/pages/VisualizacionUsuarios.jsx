import React from 'react';
// Importamos el sidebar para la navegación lateral en la vista admin
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin.jsx';
// Importamos el footer común para la parte inferior de la página
import Footer from '../components/Home/Footer/footer.jsx';
// Importamos estilos específicos para el contenedor principal en admin
import '../components/Admin/mainhomecontainer.css'
// Importamos el componente que muestra la visualización detallada de un programa
import VisualizacionUsuario from '../components/Admin/VisualizacionModificarUsuarios/VisualizacionUsuario.jsx';
const VisualizacionPrograma = () => {
  return (
    <div>
      {/* Contenedor principal con estilos para organizar sidebar y contenido */}
      <div className='mainhomecontainer'>
        {/* Barra lateral para navegación del administrador */}
        <SidebarAdmin />
        {/* Componente para mostrar los detalles o visualización del programa */}
        <VisualizacionUsuario />
      </div>

      {/* Pie de página común */}
      <Footer />
    </div>
  );
};

export default VisualizacionPrograma;
