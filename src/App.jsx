// Hooks de React
import React, { useState, useEffect, Suspense, lazy } from 'react';

// React Router DOM para enrutamiento
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Componente que muestra un spinner o animación mientras se carga algo
import Loading from './components/Loading/loading';

// Toast para mostrar mensajes emergentes (éxito, error, advertencia)
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// CARGA PEREZOSA (Lazy loading) de páginas principales
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

// Componente para cerrar sesión (limpia storage y redirige a login)
function Logout() {
  localStorage.clear(); // Elimina tokens u otros datos de sesión
  return <Navigate to="/login" />; // Redirecciona al login
}

// Componente principal de la App
function App() {
  // Estado para mostrar un loader inicial por 1 segundo
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga inicial
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // Si está cargando, muestra spinner/animación
  if (isLoading) {
    return <Loading />;
  }

  return (
    // Provee el contexto de tema oscuro/claro a toda la app
    <ThemeProvider>
      <Router>
        {/* Suspense permite mostrar un fallback mientras se cargan los componentes de forma lazy */}
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Redirección desde / al inicio principal */}
            <Route path="/" element={<Navigate to="/inicio" />} />

            {/* Rutas públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/login-admin" element={<LoginAdministrador />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/informacion" element={<Informacion />} />

            {/* Rutas protegidas para usuario con rol 'empresa' */}
            <Route path="/home" element={<ProtectRoute rol="empresa"><Home /></ProtectRoute>} />
            <Route path="/perfil" element={<ProtectRoute rol="empresa"><PerfilPage /></ProtectRoute>} />
            <Route path="/editarperfil" element={<ProtectRoute rol="empresa"><EditarPerfilPage /></ProtectRoute>} />
            <Route path="/diagnostico-empresarial" element={<ProtectRoute rol="empresa"><DiagnosticoEmpresarial /></ProtectRoute>} />
            <Route path="/resultado-diagnostico" element={<ProtectRoute rol="empresa"><ResultadosDiagnostico /></ProtectRoute>} />

            {/* Rutas protegidas para usuario con rol 'admin' */}
            <Route path="/adminhome" element={<ProtectRoute rol="admin"><AdminHome /></ProtectRoute>} />
            <Route path="/crear-empresa" element={<ProtectRoute rol="admin"><CrearEmpresa /></ProtectRoute>} />
            <Route path="/listar-empresa" element={<ProtectRoute rol="admin"><ListarEmpresa /></ProtectRoute>} />
            <Route path="/modificar-empresa" element={<ProtectRoute rol="admin"><ModificarEmpresa /></ProtectRoute>} />
            <Route path="/crear-programa" element={<ProtectRoute rol="admin"><CrearProgramaDeFormacion /></ProtectRoute>} />
            <Route path="/modificar-programa" element={<ProtectRoute rol="admin"><ModificarPrograma /></ProtectRoute>} />
            <Route path="/listar-programa" element={<ProtectRoute rol="admin"><ListarPrograma /></ProtectRoute>} />
            <Route path="/visualizacion-empresa" element={<ProtectRoute rol="admin"><VisualizacionEmpresa /></ProtectRoute>} />
            <Route path="/visualizacion-programa" element={<ProtectRoute rol="admin"><VisualizacionPrograma /></ProtectRoute>} />

            {/* Ruta para error 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        {/* Contenedor de notificaciones tipo toast */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
