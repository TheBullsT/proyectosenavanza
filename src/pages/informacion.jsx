import NavBarInicio from "../components/Inicio/Navbar_inicio"; // Barra de navegación para la página de inicio
import Footer from "../components/Home/Footer/footer"; // Pie de página común
import HeroInfo from "../components/Informacion/hero"; // Sección principal tipo "hero" con información destacada
import Contenido from "../components/Informacion/contenido"; // Contenido principal de la página de información

const Informacion = () => {
    return (
        <div>
            {/* Renderiza la barra de navegación */}
            <NavBarInicio />
            {/* Sección destacada tipo hero */}
            <HeroInfo />
            {/* Contenido informativo */}
            <Contenido />
            {/* Pie de página */}
            <Footer />
        </div>
    )
}

export default Informacion;
