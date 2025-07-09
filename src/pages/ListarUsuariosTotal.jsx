import React from 'react';
// Sidebar para la navegación del admin
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin.jsx'; 
// Footer común para toda la aplicación
import Footer from '../components/Home/Footer/footer.jsx'; 
// Estilos específicos para el layout admin
import '../components/Admin/mainhomecontainer.css'; 
 // Componente que lista las empresas
import ListarUsuarios from '../components/Admin/ListarUsuarios/ListarUsuarios.jsx';

const ListarEmpresa = () => {
  return (
    <div>
      {/* Contenedor principal con estilos para layout admin */}
      <div className='mainhomecontainer'>
        {/* Sidebar lateral */}
        <SidebarAdmin />
        {/* Componente que muestra la lista de empresas */}
        <ListarUsuarios />
      </div>
      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default ListarEmpresa;
