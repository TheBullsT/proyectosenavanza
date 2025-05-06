import React ,{ BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PerfilPage from './pages/PerfilPage';
import EditarPerfilPage from './pages/EditarPerfilPage';
<<<<<<< HEAD
import AdminHome from './pages/AdminHome';

=======
import DiagnosticoEmpresarial from './pages/FormularioEmp';
>>>>>>> 1cb6afd17583e6b074181d55c5a6bf7b7c4372ca

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<PerfilPage />} />
<<<<<<< HEAD
        <Route path="/editarperfil" element={<EditarPerfilPage />} />
        <Route path="/adminhome" element={<AdminHome />} />
=======
        <Route path="/editar-perfil" element={<EditarPerfilPage />} />
        <Route path="/diagnostico-empresarial" element={<DiagnosticoEmpresarial />} />

>>>>>>> 1cb6afd17583e6b074181d55c5a6bf7b7c4372ca
      </Routes>
    </Router>
  );
}

export default App;
