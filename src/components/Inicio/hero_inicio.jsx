// Importación de React
import React from 'react';
// Importación de imagen de persona (lado derecho del hero)
import person from '../../assets/img/inicio/Biblioteca.png';
// Importación de imagen de flecha (ícono al lado del botón)
import arrow from '../../assets/img/inicio/typcn_arrow-back.png';
// Importación del archivo de estilos específicos del componente
import './Inicio.css';
// Importación de hook para navegación de React Router
import { useNavigate } from 'react-router-dom';

// Componente funcional Hero
const Hero = () => {

    // Hook para redireccionar a otras rutas
    const navigate = useNavigate();

    // Función para ir a la página de login cuando se presiona el botón
    const irLogin = () => {
        navigate('/login'); // Cambia la ruta actual a /login
    }

    // Retorno del componente JSX
    return (
        <div className='hero'>
            {/* Contenedor principal del contenido del hero */}
            <div className='hero-content'>

                {/* Columna izquierda con textos de presentación */}
                <div className='hero-text'>
                    {/* Texto breve que introduce la sección */}
                    <p className='texto-ayuda'>¿Necesitas personal?</p>

                    {/* Título principal del hero */}
                    <p className='titulo-principal'>
                        CONSEGUIMOS LOS APRENDICES<br />PARA TU EMPRESA
                    </p>

                    {/* Subtítulo que invita a iniciar sesión */}
                    <p className='texto-ayuda2'>¡INICIA SESIÓN!</p>

                    {/* Sección que agrupa flecha e botón */}
                    <div className='apuntar-boton'>
                        {/* Flecha decorativa al lado del botón */}
                        <img src={arrow} alt="flecha" />

                        {/* Botón con evento para redirigir al login */}
                        <button className='button-init2' onClick={irLogin}>
                            Inicia sesión
                        </button>
                    </div>
                </div>

                {/* Columna derecha que contiene la imagen ilustrativa */}
                <div className='image-person'>
                    <img src={person} alt="imagen-inicio" />
                </div>
            </div>
        </div>
    );
}

// Exportación del componente
export default Hero;
