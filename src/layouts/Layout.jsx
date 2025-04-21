import Busqueda from '../components/Home/Busqueda/busqueda';
import Navbar from '../components/Home/Navbar/navbar'
import Footer from '../components/Home/Footer/footer'

const NavFooter = ({ children }) => {
  return (
    <div>
        <Busqueda/> 
        <Navbar/>
        {children} 
        <Footer/>
    </div>
  );
};

export default NavFooter;
