import NavBarInicio from "../components/Inicio/Navbar_inicio";
import Footer from "../components/Home/Footer/footer";
import Fondo from "../assets/img/inicio/fondo_completo.png"
import ContenidoInicio from "../components/Inicio/contenido-inicio/contenido-inicio";

const Inicio = () => {
    return (
        <div>
            <NavBarInicio/>
            <div className="fondillo">
                <img src={Fondo} alt="" />
            </div>
            <ContenidoInicio/>
            <Footer/>       
        </div>
        
    )
}

export default Inicio;