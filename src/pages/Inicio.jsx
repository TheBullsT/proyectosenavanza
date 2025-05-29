import NavBarInicio from "../components/Inicio/Navbar_inicio"; // Barra de navegación de la página de inicio
import Footer from "../components/Home/Footer/footer"; // Pie de página común
import ContenidoInicio from "../components/Inicio/contenido-inicio/contenido-inicio"; // Contenido principal de la página de inicio
import Hero from "../components/Inicio/hero_inicio"; // Sección tipo "hero" destacada al inicio

const Inicio = () => {
    return (
        <div>
            {/* Renderiza la barra de navegación */}
            <NavBarInicio />
            {/* Sección hero destacada */}
            <Hero />
            {/* Contenido principal de inicio */}
            <ContenidoInicio />
            {/* Pie de página */}
            <Footer />
        </div>
    )
}

export default Inicio;
