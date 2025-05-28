import React from 'react';
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin.jsx';
import Footer from '../components/Home/Footer/footer.jsx';
import '../components/Admin/mainhomecontainer.css'
import Visualizacion_Empresa from '../components/Admin/VisualizacionEmpresa/VisualizacionEmpresa.jsx';

const VisualizacionEmpresa = () => {
  return (
    <div>
      <div className='mainhomecontainer'>
        <SidebarAdmin />
        <Visualizacion_Empresa />
      </div>

      <Footer />
    </div>
  );
};
export default VisualizacionEmpresa;