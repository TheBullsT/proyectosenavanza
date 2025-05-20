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



    window.addEventListener('scroll', changeColor) //Aplicamos el cambio de color con el scrolling

    return(
        <div className={color ? 'header header-bg' : 'header'}> {/* Depende el color escogido en la propiedad, se cambiara */}
                <nav className='nav-links'>
                    <ul>
                        <li className='marca-sena'><img src={logo} alt="" className='imagen-navbar' /><p>SENAVANZA</p></li>
                        <li>Pages</li>
                        <li><button onClick={irLogin} className='button-init'><p>Iniciar sesion</p></button></li>
                    </ul>
                </nav>
        </div>
    )
}

export default NavBarInicio;


