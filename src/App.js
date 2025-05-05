import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PerfilPage from './pages/PerfilPage';
import EditarPerfilPage from './pages/EditarPerfilPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/EditarPerfil" element={<EditarPerfilPage />} />
      </Routes>
    </Router>
  );
}

export default App;

