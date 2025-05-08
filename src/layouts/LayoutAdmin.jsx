import Footer from '../components/Home/Footer/footer'
import NavbarAdmin from '../components/Admin/NavbarAdmin/NavbarAdmin';

const NavFooterAdmin = ({ children }) => {
  return (
    <div> 
        <NavbarAdmin/>
        {children}
        <Footer/>
    </div>
  );
};

export default NavFooterAdmin;