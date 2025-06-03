import NavFooter from '../layouts/Layout'; // Layout general con navbar y footer
import Presentacion from '../components/Home/Presentacion/presentacion'; // Componente de presentación principal
import Pregunta from '../components/Home/Pregunta/pregunta'; // Componente para mostrar preguntas
import Recomendacion from '../components/Home/Recomendacion/recomendacion'; // Componente para mostrar recomendaciones
import Gov from "../components/BarraGov/gov";


const Home = () => {
  return (
    <div>
    <Gov/>
    <NavFooter>
      <Presentacion />
      <Recomendacion />
      <Pregunta />
    </NavFooter>
    </div>
    
  );
};

export default Home;
