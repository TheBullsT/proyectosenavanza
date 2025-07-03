import React, { useState, useEffect } from 'react';
import './Inicio.css';
import logo from '../../assets/img/Logo_SENAVANZA.png';
import { useNavigate } from 'react-router-dom';

const NavBarInicio = () => {
  const [color, setColor] = useState(false); // Estado para cambiar la clase del header
  const navigate = useNavigate();

  // Función que detecta el scroll para cambiar el color de fondo del header
  const changeColor = () => {
    if (window.scrollY >= 410) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // useEffect para agregar el listener del scroll al montar el componente
  useEffect(() => {
    window.addEventListener('scroll', changeColor);

    // Cleanup para evitar múltiples listeners
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  // Redirección al login
  const irLogin = () => {
    navigate('/login');
  };

  // Redirección al inicio
  const irInicio = () => {
    navigate('/inicio');
  };

  return (
    <div className={color ? 'header header-bg' : 'header'}
    >
      <nav className='nav-links'>
        <div className='inicio-nav'>
          <div className='marca-sena'>
            <img onClick={irInicio} src={logo} alt="Logo SENA" className='imagen-navbar' />
            <p>SENAVANZA</p>
          </div>
          <div>
            <button onClick={irLogin} className='button-init'>
              Iniciar sesión
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBarInicio;
