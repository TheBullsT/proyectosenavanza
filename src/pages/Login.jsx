// Formulario de inicio de sesión
import FormLogin from "../components/Login/Form-Login/form-login"; 
// Fondo o imagen de fondo para la pantalla de login
import LoginBackground from "../components/Login/Login-Background/login-background"; 

const Login = () => {
    return (
        <div>
            {/* Renderiza el formulario de login */}
            <FormLogin />
            {/* Renderiza el fondo de la pantalla de login */}
            <LoginBackground />
        </div>
    );
}

export default Login;
