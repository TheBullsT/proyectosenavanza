import SidebarClose from '../components/Admin/SidebarClose/SidebarClose';
import Footer from '../components/Home/Footer/footer'
import NavbarAdmin from '../components/Admin/NavbarAdmin/NavbarAdmin';

const NavFooterAdmin = ({ children }) => {
  return (
    <div> 
        <NavbarAdmin/>
        <SidebarClose/>
        {children} 
        <Footer/>
    </div>
  );
};

export default NavFooterAdmin;