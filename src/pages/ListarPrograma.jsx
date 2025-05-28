import React from 'react';
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin.jsx';
import Footer from '../components/Home/Footer/footer.jsx';
import '../components/Admin/mainhomecontainer.css'
import ListarProgramas from '../components/Admin/ListarPrograma/ListarPrograma.jsx';

const ListarProgramasFormacion = () => {
  return (
    <div>
      <div className='mainhomecontainer'>
        <SidebarAdmin />
        <ListarProgramas />
      </div>

      <Footer />
    </div>
  );
};

export default ListarProgramasFormacion;