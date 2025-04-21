import NavFooter from '../layouts/Layout';
import Presentacion from '../components/Home/Presentacion/presentacion';
import Pregunta from '../components/Home/Pregunta/pregunta';
import Recomendacion from '../components/Home/Recomendacion/recomendacion'

const Home = () => {
  return (
    <NavFooter>
      <Presentacion/>
      <Recomendacion/> 
      <Pregunta/> 
    </NavFooter>
  );
};

export default Home;
