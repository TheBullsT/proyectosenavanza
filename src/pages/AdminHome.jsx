import React from 'react';
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin';
import Footer from '../components/Home/Footer/footer.jsx';
import HomeRightBar from '../components/Admin/HomeRighBar/homerightbar';
import '../components/Admin/mainhomecontainer.css'

const AdminHome = () => {
  return (
    <div>
      <div className='mainhomecontainer'>
        <SidebarAdmin />
        <HomeRightBar />
      </div>
      <Footer />
    </div>
  );
};


export default AdminHome;