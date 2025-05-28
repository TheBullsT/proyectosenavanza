import React from 'react';
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin';
import Footer from '../components/Home/Footer/footer.jsx';
import VisualizarProgramas from '../components/Admin/VisualizarPrograma/VisualizarPrograma.jsx';
import '../components/Admin/mainhomecontainer.css'

const VisualizarProgramasFormacion= () => {
  return (
    <div>
      <div className='mainhomecontainer'>
        <SidebarAdmin />
        <VisualizarProgramas />
      </div>
      <Footer />
    </div>
  );
};


export default VisualizarProgramasFormacion;