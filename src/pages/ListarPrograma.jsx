import React from 'react';
// Sidebar para navegación del admin
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin.jsx'; 
// Footer general de la aplicación
import Footer from '../components/Home/Footer/footer.jsx'; 
// Estilos para el layout admin
import '../components/Admin/mainhomecontainer.css'; 
// Componente para listar programas de formación
import ListarProgramas from '../components/Admin/ListarPrograma/ListarPrograma.jsx'; 

const ListarProgramasFormacion = () => {
  return (
    <div>
      {/* Contenedor principal que aplica el layout con sidebar y contenido */}
      <div className='mainhomecontainer'>
        {/* Barra lateral de administración */}
        <SidebarAdmin />
        {/* Contenido principal: listado de programas de formación */}
        <ListarProgramas />
      </div>
      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default ListarProgramasFormacion;
