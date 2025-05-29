// Importamos los componentes necesarios para construir el layout principal
// Componente de barra de búsqueda
import Busqueda from '../components/Home/Busqueda/busqueda'; 
 // Componente de barra de navegación
import Navbar from '../components/Home/Navbar/navbar';      
 // Componente de pie de página
import Footer from '../components/Home/Footer/footer';   


// Creamos la función NavFooter que recibe 'children' como prop
const NavFooter = ({ children }) => {
  return (
    <div>
      {/* Renderiza la barra de búsqueda en la parte superior */}
      <Busqueda />

      {/* Renderiza la barra de navegación principal */}
      <Navbar />

      {/* Aquí se renderiza el contenido hijo que se pase al usar este layout */}
      {children}

      {/* Renderiza el pie de página al final del layout */}
      <Footer />
    </div>
  );
};

// Exportamos la función para que pueda ser utilizada en otras partes del proyecto
export default NavFooter;
