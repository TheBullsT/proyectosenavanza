import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Loading from './components/Loading/loading';
import { ThemeProvider } from './layouts/Dark-Mode/temacontexto';


const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const LoginAdministrador = lazy(() => import('./pages/LoginAdmin'))
const PerfilPage = lazy(() => import('./pages/PerfilPage'));
const EditarPerfilPage = lazy(() => import('./pages/EditarPerfilPage'));
const AdminHome = lazy(() => import('./pages/AdminHome'));
const DiagnosticoEmpresarial = lazy(() => import('./pages/FormularioEmp'))
const ResultadosDiagnostico = lazy(() => import('./pages/ResultadosDiagnostico'));
const Inicio = lazy(() => import('./pages/Inicio'));
const Informacion = lazy (() => import('./pages/informacion'))
const CrearEmpresa = lazy(() => import('./pages/AdminCrearEmpresa'));
const ListarEmpresa = lazy(() => import('./pages/ListarEmpresa'));
const ModificarEmpresa = lazy(() => import('./pages/AdminModificarEmpresa'));
const CrearProgramaDeFormacion = lazy(() => import('./pages/CrearProgramaFormacion'));
const ModificarPrograma = lazy(() => import('./pages/ModificaraPrograma'));
const ListarPrograma = lazy(() => import('./pages/ListarPrograma'));
const VisualizacionEmpresa = lazy(() => import('./pages/VisualizacionEmpresa'));


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login-admin" element={<LoginAdministrador />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/perfil" element={<PerfilPage />} />
            <Route path="/editarperfil" element={<EditarPerfilPage />} />
            <Route path="/adminhome" element={<AdminHome />} />
            <Route path="/diagnostico-empresarial" element={<DiagnosticoEmpresarial />} />
            <Route path="/resultado-diagnostico" element={<ResultadosDiagnostico />} />
            <Route path="/inicio" element={<Inicio/>} />
            <Route path="/informacion" element={<Informacion/>}/>
            <Route path="/crear-empresa" element={<CrearEmpresa/>}/>
            <Route path="/listar-empresa" element={<ListarEmpresa/>}/>
            <Route path="/modificar-empresa" element={<ModificarEmpresa/>}/>
            <Route path="/crear-programa" element={<CrearProgramaDeFormacion/>}/>
            <Route path="/modificar-programa" element={<ModificarPrograma/>}/>
            <Route path="/listar-programa" element={<ListarPrograma/>}/>
            <Route path="/visualizacion-empresa" element={<VisualizacionEmpresa />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
