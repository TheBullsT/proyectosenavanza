import React from 'react';
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin';
import Footer from '../components/Home/Footer/footer.jsx';
import '../components/Admin/mainhomecontainer.css'
import ModificarEmpresa from '../components/Admin/CrearModificarEmpresa/ModificarEmpresa.jsx';

const AdminModificarEmpresa = () => {
  return (
    <div>
      <div className='mainhomecontainer'>
        <SidebarAdmin />
        <ModificarEmpresa />
      </div>
      <Footer />
    </div>
  );
};


export default AdminModificarEmpresa;