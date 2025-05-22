import NavBarInicio from "../components/Inicio/Navbar_inicio";
import Footer from "../components/Home/Footer/footer";
import ContenidoInicio from "../components/Inicio/contenido-inicio/contenido-inicio";
import Hero from "../components/Inicio/hero_inicio";

const Inicio = () => {
    return (
        <div>
            <NavBarInicio/>
            <Hero/>
            <ContenidoInicio/>
            <Footer/>
        </div>
        
    )
}

export default Inicio;