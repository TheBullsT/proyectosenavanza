import NavBarInicio from "../components/Inicio/Navbar_inicio";
import Footer from "../components/Home/Footer/footer";
import Hero from "../components/Informacion/hero"
import Contenido from "../components/Informacion/contenido";

const Informacion = () => {
    return (
        <div>
            <NavBarInicio/>
            <Hero/> 
            <Contenido/>
            <Footer/>       
        </div>
        
    )
}

export default Informacion;