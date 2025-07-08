import React from 'react';
// Importamos el componente del sidebar para la navegación lateral en la vista admin
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin.jsx';
// Importamos el footer común para la parte inferior de la página
import Footer from '../components/Home/Footer/footer.jsx';
// Importamos los estilos específicos para el contenedor principal en admin
import '../components/Admin/mainhomecontainer.css'
// Importamos el componente que muestra la visualización detallada de una empresa
import Visualizacion_Empresa from '../components/Admin/VisualizacionModificarEmpresa/VisualizacionEmpresa.jsx';

const VisualizacionEmpresa = () => {
  return (
    <div>
      {/* Contenedor principal con estilos para organizar sidebar y contenido */}
      <div className='mainhomecontainer'>
        {/* Barra lateral de administración */}
        <SidebarAdmin />
        {/* Componente para mostrar la visualización o detalles de la empresa */}
        <Visualizacion_Empresa />
      </div>

      {/* Pie de página común */}
      <Footer />
    </div>
  );
};

export default VisualizacionEmpresa;
