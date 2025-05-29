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

    // Función que redirige al usuario a la página de login
    const irLogin = () => {
        navigate('/login');
    }

    // Retorno del componente JSX
    return (
        <div className='hero'>
            {/* Contenedor principal del contenido del hero */}
            <div className='hero-content'>

                {/* Columna izquierda: Textos */}
                <div className='hero-text'>
                    {/* Texto introductorio */}
                    <p className='texto-ayuda'>¿Necesitas personal?</p>

                    {/* Título principal en mayúsculas con salto de línea */}
                    <p className='titulo-principal'>
                        CONSEGUIMOS LOS APRENDICES<br />PARA TU EMPRESA
                    </p>

                    {/* Subtítulo llamando a la acción */}
                    <p className='texto-ayuda2'>¡INICIA SESIÓN!</p>

                    {/* Contenedor de la flecha y el botón */}
                    <div className='apuntar-boton'>
                        {/* Imagen de flecha */}
                        <img src={arrow} alt="flecha" />

                        {/* Botón que redirige al login */}
                        <button className='button-init2' onClick={irLogin}>
                            Inicia sesión
                        </button>
                    </div>
                </div>

                {/* Columna derecha: Imagen ilustrativa */}
                <div className='image-person'>
                    <img src={person} alt="imagen-inicio" />
                </div>
            </div>
        </div>
    );
}

// Exportación del componente para que pueda ser usado en otras partes de la app
export default Hero;
