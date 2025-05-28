import React from 'react';
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin.jsx';
import Footer from '../components/Home/Footer/footer.jsx';
import '../components/Admin/mainhomecontainer.css'
import Listar_Empresa from '../components/Admin/ListarEmpresa/ListarEmpresa.jsx';

const ListarEmpresa = () => {
  return (
    <div>
      <div className='mainhomecontainer'>
        <SidebarAdmin />
        <Listar_Empresa />
      </div>

      <Footer />
    </div>
  );
};

export default ListarEmpresa;