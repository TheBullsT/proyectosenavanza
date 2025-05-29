import React from 'react';
// Importamos el componente SidebarAdmin para la barra lateral del admin
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin';
// Importamos el componente Footer para el pie de página general
import Footer from '../components/Home/Footer/footer.jsx';
// Importamos el componente CrearEmpresa para mostrar el formulario de creación de empresa
import CrearEmpresa from '../components/Admin/CrearModificarEmpresa/CrearEmpresa.jsx';
// Importamos los estilos CSS específicos para el contenedor principal del admin
import '../components/Admin/mainhomecontainer.css'

// Componente funcional que representa la página para crear una empresa desde el panel de administración
const AdminCrearEmpresa = () => {
  return (
    <div>
      {/* Contenedor principal que incluye sidebar y contenido principal */}
      <div className='mainhomecontainer'>
        {/* Barra lateral del panel administrativo */}
        <SidebarAdmin />
        {/* Formulario o sección para crear una nueva empresa */}
        <CrearEmpresa />
      </div>
      {/* Pie de página común para toda la aplicación */}
      <Footer />
    </div>
  );
};

// Exportamos el componente para su uso en el enrutamiento o en otras partes del proyecto
export default AdminCrearEmpresa;
