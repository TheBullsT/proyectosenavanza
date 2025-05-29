import React from 'react';
// Importamos el componente SidebarAdmin para la barra lateral del panel administrativo
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin';
// Importamos el componente Footer para el pie de página común
import Footer from '../components/Home/Footer/footer.jsx';
// Importamos el componente HomeRightBar para mostrar contenido principal o adicional en la parte derecha
import HomeRightBar from '../components/Admin/HomeRighBar/homerightbar';
// Importamos los estilos específicos para el contenedor principal del admin
import '../components/Admin/mainhomecontainer.css'

// Componente funcional que representa la página principal del panel administrativo
const AdminHome = () => {
  return (
    <div>
      {/* Contenedor principal que agrupa la sidebar y el contenido derecho */}
      <div className='mainhomecontainer'>
        {/* Barra lateral del panel administrativo */}
        <SidebarAdmin />
        {/* Contenido o barra derecha del panel administrativo */}
        <HomeRightBar />
      </div>
      {/* Pie de página común en toda la app */}
      <Footer />
    </div>
  );
};

// Exportamos el componente para usarlo en el sistema de rutas o en otras partes del proyecto
export default AdminHome;
