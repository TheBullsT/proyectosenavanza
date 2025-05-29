import React from 'react';
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin.jsx';
import Footer from '../components/Home/Footer/footer.jsx';
import '../components/Admin/mainhomecontainer.css'
import Visualizacion_Programa from '../components/Admin/VisualizacionPrograma/VisualizacionPrograma.jsx';

const VisualizacionPrograma = () => {
  return (
    <div>
      <div className='mainhomecontainer'>
        <SidebarAdmin />
        <Visualizacion_Programa />
      </div>

      <Footer />
    </div>
  );
};
export default VisualizacionPrograma;