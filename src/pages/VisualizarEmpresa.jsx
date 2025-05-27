import React from 'react';
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin.jsx';
import Footer from '../components/Home/Footer/footer.jsx';
import '../components/Admin/mainhomecontainer.css'
import Visualizar_Empresa from '../components/Admin/VisualizarEmpresa/VisualizarEmpresa.jsx';

const VisualizarEmpresa = () => {
  return (
    <div>
      <div className='mainhomecontainer'>
        <SidebarAdmin />
        <Visualizar_Empresa />
      </div>

      <Footer />
    </div>
  );
};

export default VisualizarEmpresa;