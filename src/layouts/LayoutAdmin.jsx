// Importa el componente Footer que se encuentra en la carpeta 'Home/Footer'
import Footer from '../components/Home/Footer/footer'
// Importa la barra de navegación para administradores
import NavbarAdmin from '../components/Admin/NavbarAdmin/NavbarAdmin';
// Importa la barra lateral para administradores
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin';

// Componente funcional que recibe children como prop
const NavFooterAdmin = ({ children }) => {
  return (
    <div>
      {/* Renderiza la barra lateral del panel de administración */}
      <SidebarAdmin />
      {/* Renderiza la barra de navegación del panel de administración */}
      <NavbarAdmin />
      {/* Renderiza los elementos hijos que se pasen al componente */}
      {children}
      {/* Renderiza el pie de página */}
      <Footer />
    </div>
  );
};

// Exporta el componente para que pueda ser utilizado en otros archivos
export default NavFooterAdmin;
