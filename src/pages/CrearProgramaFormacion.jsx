import React from 'react';
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin';
import Footer from '../components/Home/Footer/footer.jsx';
import CrearProgramaFormacion from '../components/Admin/CrearProgramasDeFormacion/crearpromama.jsx';
import '../components/Admin/mainhomecontainer.css'

const CrearProgramaDeFormacion= () => {
  return (
    <div>
      <div className='mainhomecontainer'>
        <SidebarAdmin />
        <CrearProgramaFormacion />
      </div>
      <Footer />
    </div>
  );
};


export default CrearProgramaDeFormacion;