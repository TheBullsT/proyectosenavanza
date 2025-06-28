import React, { useState, useEffect, Suspense, lazy } from 'react';
// Importamos las herramientas para enrutamiento en React Router v6
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Componente que muestra una animación o indicador mientras se carga contenido
import Loading from './components/Loading/loading';
// Contexto para manejo de temas oscuros (dark mode)
import { ThemeProvider } from './layouts/Dark-Mode/temacontexto';
// Importar estilos a las notificaciones tipo toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
const ProtectRoute = lazy(() => import('./components/ProtectRoute'));
const NotFound = lazy(() => import('./pages/NotFound'));


function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />;
}

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
            <Route path="/logout" element={<Logout />} />
            <Route path="/login-admin" element={<LoginAdministrador />} />

            {/* Rutas principales para usuarios */}
            <Route path="/home" element={<ProtectRoute role="empresa"><Home /></ProtectRoute>} />
            <Route path="/perfil" element={<ProtectRoute role="empresa"><PerfilPage /></ProtectRoute>} />
            <Route path="/editarperfil" element={<ProtectRoute role="empresa"><EditarPerfilPage /></ProtectRoute>} />

            {/* Rutas para área de administración usuario */}
            <Route path="/diagnostico-empresarial" element={<ProtectRoute role="empresa"><DiagnosticoEmpresarial /></ProtectRoute>} />
            <Route path="/resultado-diagnostico" element={<ProtectRoute role="empresa"><ResultadosDiagnostico /></ProtectRoute>} />

            {/* Ruta de inicio */}
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/informacion" element={<Informacion />} />

            {/* Rutas para administración */}
            <Route path="/adminhome" element={<ProtectRoute role="admin"><AdminHome /></ProtectRoute>} />
            <Route path="/crear-empresa" element={<ProtectRoute role="admin"><CrearEmpresa /></ProtectRoute>} />
            <Route path="/listar-empresa" element={<ProtectRoute role="admin"><ListarEmpresa /></ProtectRoute>} />
            <Route path="/modificar-empresa" element={<ProtectRoute role="admin"><ModificarEmpresa /></ProtectRoute>} />
            <Route path="/crear-programa" element={<ProtectRoute role="admin"><CrearProgramaDeFormacion /></ProtectRoute>} />
            <Route path="/modificar-programa" element={<ProtectRoute role="admin"><ModificarPrograma /></ProtectRoute>} />
            <Route path="/listar-programa" element={<ProtectRoute role="admin"><ListarPrograma /></ProtectRoute>} />
            <Route path="/visualizacion-empresa" element={<ProtectRoute role="admin"><VisualizacionEmpresa /></ProtectRoute>} />
            <Route path="/visualizacion-programa" element={<ProtectRoute role="admin"><VisualizacionPrograma /></ProtectRoute>} />

            {/* Ruta para error no se encuentra la pagina */}
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Suspense>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored" />
      </Router>
    </ThemeProvider>
  );
}

export default App;
