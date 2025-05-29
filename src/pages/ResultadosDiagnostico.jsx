// Importamos el layout general que contiene Navbar y Footer
import NavFooter from "../layouts/Layout";
// Importamos el componente Carrusel que mostrará los resultados del diagnóstico
import Carrousel from "../components/ResultadosDiagnostico/resultadosdiagnostico/carrousel";

// Componente funcional para la página de resultados del diagnóstico
const ResultadoDiagnostico = () => {
    return (
        // Usamos el layout general para envolver el contenido
        <NavFooter>
            {/* Renderizamos el carrusel con los resultados */}
            <Carrousel />
        </NavFooter>
    );
}

// Exportamos el componente para que pueda ser usado en rutas o en otros módulos
export default ResultadoDiagnostico;
