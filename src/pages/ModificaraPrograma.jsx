import React from 'react';
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin';
import Footer from '../components/Home/Footer/footer.jsx';
import ModificarProgramaFormacion from '../components/Admin/ModificarPrograma/ModificarPrograma.jsx';
import '../components/Admin/mainhomecontainer.css'

const ModificarPrograma= () => {
  return (
    <div>
      <div className='mainhomecontainer'>
        <SidebarAdmin />
        <ModificarProgramaFormacion />
      </div>
      <Footer />
    </div>
  );
};


export default ModificarPrograma;