import React, {useState} from 'react';
import './Inicio.css';
import logo from '../../assets/img/Logo_SENAVANZA.png';
import { useNavigate } from 'react-router-dom';

const NavBarInicio = () => {
    
    //Scrolling Navbar 
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= '410'/*Decide en que momento del scrolling, cambia el color*/ ) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    const navigate = useNavigate();

    const irLogin= () =>{
        navigate('/login')
    }

    const irInicio = () => {
        navigate('/inicio');
    }

    window.addEventListener('scroll', changeColor) //Aplicamos el cambio de color con el scrolling

    return(
        <div className={color ? 'header header-bg' : 'header'}> {/* Depende el color escogido en la propiedad, se cambiara */}
                <nav className='nav-links'>
                    <div className='inicio-nav'>
                        <div className='marca-sena'>
                            <img onClick={irInicio} src={logo} alt="" className='imagen-navbar'/>
                            <p>SENAVANZA</p>
                        </div>
                        <div >
                            <button onClick={irLogin} className='button-init'>
                            Iniciar sesión</button>
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default NavBarInicio;


