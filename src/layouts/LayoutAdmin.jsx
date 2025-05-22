import Footer from '../components/Home/Footer/footer'
import NavbarAdmin from '../components/Admin/NavbarAdmin/NavbarAdmin';
import SidebarAdmin from '../components/Admin/SidebarAdmin/SidebarAdmin';

const NavFooterAdmin = ({ children }) => {
  return (
    <div>
      <SidebarAdmin/> 
      <NavbarAdmin/>
        {children}
      <Footer/>
    </div>
  );
};

export default NavFooterAdmin;