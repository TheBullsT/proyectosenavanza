import React from 'react';
import './Formulario.css';
import BannerHelp from './BannerHelp';
import arrow from '../../assets/img/arrow-green.png'; 
import person from '../../assets/img/person-form.png';
const FormsLayout = () => {
    return (
        <div className="forms-layout">
            <div className="title"><h1>Formulario</h1></div>
            <div className="barra2">
                <span className="linea2"></span>
            </div>
            <div className='main-section'>
                <span className='information'>¡Realiza nuestro formulario<br /> 
                de diagnostico empresarial!</span>
            </div>
            <BannerHelp />
            <div className='main-section'>
                <span className='information'>¡Presiona este boton<br/> para conocer que <br/> programas de formación son <br/> perfectos para usted!</span>
            </div>
            <div className='press'>
                <img src={arrow} alt="" />
                <button className="diagnostico-button">Diagnostico</button>
                <img className='person-image' src={person} alt="" />
            </div>
            
        </div>
    )
}
export default FormsLayout;