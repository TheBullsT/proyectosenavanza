import React from 'react';
// Importamos la barra lateral del panel administrativo
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin';
// Importamos el componente Footer para el pie de página
import Footer from '../components/Home/Footer/footer.jsx';
// Importamos el formulario para crear programas de formación
import CrearProgramaFormacion from '../components/Admin/CrearProgramasDeFormacion/crearpromama.jsx';
// Importamos los estilos para el contenedor principal del admin
import '../components/Admin/mainhomecontainer.css'

// Componente funcional que representa la página para crear un programa de formación
const CrearProgramaDeFormacion = () => {
  return (
    <div>
      {/* Contenedor principal que engloba la sidebar y el formulario */}
      <div className='mainhomecontainer'>
        {/* Sidebar administrativa */}
        <SidebarAdmin />
        {/* Formulario para crear un programa de formación */}
        <CrearProgramaFormacion />
      </div>
      {/* Footer común en toda la aplicación */}
      <Footer />
    </div>
  );
};

// Exportamos el componente para su uso en rutas o en otros componentes
export default CrearProgramaDeFormacion;
