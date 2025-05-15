import NavBarInicio from "../components/Inicio/Navbar_inicio";
import Footer from "../components/Home/Footer/footer";
import Fondo from "../assets/img/inicio/fondo_completo.png"

const Inicio = () => {
    return (
        <div>
            <NavBarInicio/>
            <div className="fondillo">
                <img src={Fondo} alt="" />
            </div>
            <Footer/>       
        </div>
        
    )
}

export default Inicio;