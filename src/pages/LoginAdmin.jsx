 // Componente del formulario de login para administrador
import LoginAdmin from "../components/Admin/LoginAdmin/LoginAdmin";
 // Fondo para la pantalla de login
import LoginBackground from "../components/Admin/LoginAdmin/Login-Background/login-background-admin";
const LoginAdministrador = () => {
    return (
        <div>
            {/* Renderiza el formulario de login para administradores */}
            <LoginAdmin />
            {/* Renderiza el fondo de la pantalla de login */}
            <LoginBackground />
        </div>
    );
}

export default LoginAdministrador;
