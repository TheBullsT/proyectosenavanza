import React, {useState} from 'react';
import './Inicio.css';

const NavBarInicio = () => {
    
    //Scrolling Navbar 
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= ''/*Decide en que momento del scrolling, cambia el color*/ ) {
            setColor(true)
        } else {
            setColor(false)
        }
    }



    window.addEventListener('scroll', changeColor) //Aplicamos el cambio de color con el scrolling

    return(
        <div className={color ? 'header header-bg' : 'header'}> {/* Depende el color escogido en la propiedad, se cambiara */}
            <nav className='nav-links'>
                <ul>
                    <li>Pages</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBarInicio;


