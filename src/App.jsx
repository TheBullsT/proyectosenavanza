import React, { useState, useEffect, Suspense, lazy } from 'react';
// Importamos las herramientas para enrutamiento en React Router v6
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Componente que muestra una animación o indicador mientras se carga contenido
import Loading from './components/Loading/loading';
// Contexto para manejo de temas oscuros (dark mode)
import { ThemeProvider } from './layouts/Dark-Mode/temacontexto';

// Lazy loading: importamos las páginas de forma diferida para mejorar rendimiento
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const LoginAdministrador = lazy(() => import('./pages/LoginAdmin'));
const PerfilPage = lazy(() => import('./pages/PerfilPage'));
const EditarPerfilPage = lazy(() => import('./pages/EditarPerfilPage'));
const AdminHome = lazy(() => import('./pages/AdminHome'));
const DiagnosticoEmpresarial = lazy(() => import('./pages/FormularioEmp'));
const ResultadosDiagnostico = lazy(() => import('./pages/ResultadosDiagnostico'));
const Inicio = lazy(() => import('./pages/Inicio'));
const Informacion = lazy(() => import('./pages/informacion'));
const CrearEmpresa = lazy(() => import('./pages/AdminCrearEmpresa'));
const ListarEmpresa = lazy(() => import('./pages/ListarEmpresa'));
const ModificarEmpresa = lazy(() => import('./pages/AdminModificarEmpresa'));
const CrearProgramaDeFormacion = lazy(() => import('./pages/CrearProgramaFormacion'));
const ModificarPrograma = lazy(() => import('./pages/ModificaraPrograma'));
const ListarPrograma = lazy(() => import('./pages/ListarPrograma'));
const VisualizacionEmpresa = lazy(() => import('./pages/VisualizacionEmpresa'));
const VisualizacionPrograma = lazy(() => import('./pages/VisualizacionPrograma'));

function App() {
  // Estado local para controlar si está en modo "loading" (cargando)
  const [isLoading, setIsLoading] = useState(true);

  // useEffect para simular una carga inicial de 1 segundo (1000 ms)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // Mientras está cargando, mostrar componente Loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    // Proveemos el contexto para tema oscuro en toda la app
    <ThemeProvider>
      {/* Definimos el Router para navegación */}
      <Router>
        {/* Suspense permite mostrar un fallback (Loading) mientras carga la página lazy */}
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Redirecciona la ruta raíz "/" a "/inicio" */}
            <Route path="/" element={<Navigate to="/inicio" />} />
            
            {/* Rutas para login de usuario y admin */}
            <Route path="/login" element={<Login />} />
            <Route path="/login-admin" element={<LoginAdministrador />} />

            {/* Rutas principales para usuarios */}
            <Route path="/home" element={<Home />} />
            <Route path="/perfil" element={<PerfilPage />} />
            <Route path="/editarperfil" element={<EditarPerfilPage />} />
            
            {/* Rutas para área de administración */}
            <Route path="/adminhome" element={<AdminHome />} />
            <Route path="/diagnostico-empresarial" element={<DiagnosticoEmpresarial />} />
            <Route path="/resultado-diagnostico" element={<ResultadosDiagnostico />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/informacion" element={<Informacion />} />
            <Route path="/crear-empresa" element={<CrearEmpresa />} />
            <Route path="/listar-empresa" element={<ListarEmpresa />} />
            <Route path="/modificar-empresa" element={<ModificarEmpresa />} />
            <Route path="/crear-programa" element={<CrearProgramaDeFormacion />} />
            <Route path="/modificar-programa" element={<ModificarPrograma />} />
            <Route path="/listar-programa" element={<ListarPrograma />} />
            <Route path="/visualizacion-empresa" element={<VisualizacionEmpresa />} />
            <Route path="/visualizacion-programa" element={<VisualizacionPrograma />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
