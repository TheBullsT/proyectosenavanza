import NavFooter from '../layouts/Layout'; // Layout general con navbar y footer
import Presentacion from '../components/Home/Presentacion/presentacion'; // Componente de presentación principal
import Pregunta from '../components/Home/Pregunta/pregunta'; // Componente para mostrar preguntas
import Recomendacion from '../components/Home/Recomendacion/recomendacion'; // Componente para mostrar recomendaciones

const Home = () => {
  return (
    // Renderiza el layout general y dentro incluye la presentación, recomendaciones y preguntas
    <NavFooter>
      <Presentacion />
      <Recomendacion />
      <Pregunta />
    </NavFooter>
  );
};

export default Home;
