import React, { useState, useEffect } from 'react';
import './Inicio.css';
import logo from '../../assets/img/Logo_SENAVANZA.png';
import { useNavigate } from 'react-router-dom';

// Umbral de desplazamiento para cambiar el estilo del header
const SCROLL_THRESHOLD = 410;

const NavBarInicio = () => {
    // Estado que indica si el usuario ha hecho scroll suficiente
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Función que se ejecuta cada vez que el usuario hace scroll
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= SCROLL_THRESHOLD);
        };

        // Se añade el evento scroll con la opción passive para mejor rendimiento
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Limpieza: elimina el evento al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        // Cambia la clase del header dependiendo si el scroll superó el umbral
        <header className={isScrolled ? 'header header-bg' : 'header'}>
            <nav className="nav-links">
                <div className="inicio-nav">
                    {/* Logo y nombre, redirige a la página de inicio al hacer clic */}
                    <div
                        className="marca-sena"
                        onClick={() => navigate('/inicio')}
                        role="button"
                        tabIndex={0}
                    >
                        <img src={logo} alt="Logo SENA" className="imagen-navbar" />
                        <p>SENAVANZA</p>
                    </div>
                    <div>
                        {/* Botón para ir a la página de inicio de sesión */}
                        <button onClick={() => navigate('/login')} className="button-init">
                            Iniciar sesión
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBarInicio;
