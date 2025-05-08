import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Loading from './components/Loading/loading';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const PerfilPage = lazy(() => import('./pages/PerfilPage'));
const EditarPerfilPage = lazy(() => import('./pages/EditarPerfilPage'));
const AdminHome = lazy(() => import('./pages/AdminHome'));
const DiagnosticoEmpresarial = lazy(() => import('./pages/FormularioEmp'))
const ResultadosDiagnostico = lazy(() => import('./pages/ResultadosDiagnostico'));


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); 
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/editarperfil" element={<EditarPerfilPage />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/diagnostico-empresarial" element={<DiagnosticoEmpresarial />} />
          <Route path="/resultado-diagnostico" element={<ResultadosDiagnostico />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
