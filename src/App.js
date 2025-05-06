import React ,{ BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PerfilPage from './pages/PerfilPage';
import EditarPerfilPage from './pages/EditarPerfilPage';
import AdminHome from './pages/AdminHome';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/editarperfil" element={<EditarPerfilPage />} />
        <Route path="/adminhome" element={<AdminHome />} />
      </Routes>
    </Router>
  );
}

export default App;
