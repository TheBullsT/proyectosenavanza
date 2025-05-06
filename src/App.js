import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PerfilPage from './pages/PerfilPage';
import EditarPerfilPage from './pages/EditarPerfilPage';
import DiagnosticoEmpresarial from './pages/FormularioEmp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/editar-perfil" element={<EditarPerfilPage />} />
        <Route path="/diagnostico-empresarial" element={<DiagnosticoEmpresarial />} />

      </Routes>
    </Router>
  );
}

export default App;
