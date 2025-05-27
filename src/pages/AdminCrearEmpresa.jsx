import React from 'react';
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin';
import Footer from '../components/Home/Footer/footer.jsx';
import CrearEmpresa from '../components/Admin/CrearModificarEmpresa/CrearEmpresa.jsx';
import '../components/Admin/mainhomecontainer.css'

const AdminCrearEmpresa= () => {
  return (
    <div>
      <div className='mainhomecontainer'>
        <SidebarAdmin />
        <CrearEmpresa />
      </div>
      <Footer />
    </div>
  );
};


export default AdminCrearEmpresa;