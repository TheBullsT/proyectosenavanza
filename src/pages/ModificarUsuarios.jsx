import React from 'react';
// Importa el componente del sidebar para la vista de administrador
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin';
// Importa el footer común de la aplicación
import Footer from '../components/Home/Footer/footer.jsx';
// Importa el formulario para modificar un programa de formación
import ModificarUsuario from '../components/Admin/VisualizacionModificarUsuarios/ModificarUsuario.jsx';
// Importa los estilos específicos para el contenedor principal de la sección admin
import '../components/Admin/mainhomecontainer.css'

const ModificarPrograma = () => {
  return (
    <div>
      {/* Contenedor principal que agrupa sidebar y formulario */}
      <div className='mainhomecontainer'>
        {/* Sidebar para la navegación en admin */}
        <SidebarAdmin />
        {/* Formulario para modificar un programa de formación */}
        <ModificarUsuario />
      </div>
      {/* Footer común para toda la aplicación */}
      <Footer />
    </div>
  );
};

export default ModificarPrograma;
