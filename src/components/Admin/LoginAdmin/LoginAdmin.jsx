// Importa React y useState para manejar estado local
import React, { useState } from "react";
// Importa la imagen del logo para mostrar en el login
import logoLogin from '../../../assets/img/Logo_SENAVANZA.jpg';
// Importa los estilos CSS específicos para este component
import './LoginAdmin.css';
// Importa useNavigate para navegación programática entre rutas
import { useNavigate } from "react-router-dom";
// Importar los AXIOS
import axios from "axios";
// Importar Toast
import { toast } from "react-toastify";
// Importar Apis
import { login_admin } from "../../../api/apis";

// Componente funcional LoginAdmin
function LoginAdmin() {
    // Estado local para manejar la opción seleccionada (aunque no se usa en el formulario actual)
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");

    // Hook para redireccionar a otras rutas
    const navigate = useNavigate();

    // Función que redirige a la página de inicio ('/inicio')
    const irInicio = () => {
        navigate('/inicio');
    }

    //Verficicacion de datos
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que se recargue la página
        try {
            const response = await login_admin({
                username: correo,
                password: contraseña
            });

            if (response) {
                console.log(response.data);
                toast.success("Inició de Sesión exitoso");
                navigate('/adminhome'); // Redirige al panel del admin (cambia si es otro)
            } else {
                toast.error("Contraseña Incorrectas");
            }

        } catch (error) {
            console.error(error);
        }
    };


    return (
        // Contenedor principal del login
        <div className="login">
            {/* Logo que al hacer clic redirige a inicio */}
            <div onClick={irInicio} className="logoLogin">
                <img onClick={irInicio} src={logoLogin} alt="Logo de SENAVANZA" />
            </div>

            {/* Contenedor del formulario de login */}
            <div className="form-login">
                {/* Formulario con método POST (aunque action no apunta a nada) */}
                <form onSubmit={handleSubmit} method="POST">
                    {/* Título principal del formulario */}
                    <h1 className="titulo">Iniciar Sesión</h1>
                    {/* Subtítulo motivacional */}
                    <h4 className="subtitulo">¡Vamos a Empezar!</h4>

                    {/* Contenido del formulario: campos email y contraseña */}
                    <div className="contenido">
                        {/* Campo email con label accesible */}
                        <label className="emailType" htmlFor="emailType">
                            Email
                            <input type="email" id="emailType" placeholder="Correo Electronico" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                        </label>

                        {/* Campo contraseña con label accesible */}
                        <label className="passwordType" htmlFor="passwordType">
                            Contraseña
                            <input type="password" id="passwordType" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
                        </label>
                    </div>

                    {/* Botón para enviar el formulario */}
                    <button type="submit" className="iniciar-sesion">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
}

// Exporta el componente para usarlo en otras partes de la app
export default LoginAdmin;
