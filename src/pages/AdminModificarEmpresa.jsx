import React from 'react';
// Importamos el componente SidebarAdmin para mostrar la barra lateral del panel administrativo
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin';
// Importamos el componente Footer para el pie de página común
import Footer from '../components/Home/Footer/footer.jsx';
// Importamos los estilos específicos para el contenedor principal del admin
import '../components/Admin/mainhomecontainer.css'
// Importamos el componente ModificarEmpresa para la funcionalidad de modificar empresas
import ModificarEmpresa from '../components/Admin/CrearModificarEmpresa/ModificarEmpresa.jsx';

// Componente funcional que representa la página para modificar empresa en el panel administrativo
const AdminModificarEmpresa = () => {
  return (
    <div>
      {/* Contenedor principal que agrupa la sidebar y el formulario/modulo de modificación */}
      <div className='mainhomecontainer'>
        {/* Barra lateral del panel administrativo */}
        <SidebarAdmin />
        {/* Componente que contiene el formulario o interfaz para modificar empresa */}
        <ModificarEmpresa />
      </div>
      {/* Pie de página común en toda la app */}
      <Footer />
    </div>
  );
};

// Exportamos el componente para poder usarlo en las rutas o donde sea necesario
export default AdminModificarEmpresa;
