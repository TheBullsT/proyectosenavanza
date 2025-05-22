import React, {useState} from 'react';
import './Formulario.css';
import BannerHelp from './BannerHelp';
import arrow from '../../assets/img/arrow-green.png'; 
import person from '../../assets/img/person-form.png';
import Popup from './PopUp'; 
import { BsListTask } from "react-icons/bs";


function FormsLayout() {
  const [mostrarPopup, setMostrarPopup] = useState(false);  // Estado local del popup

  const abrirPopup = () => {
    console.log("Abrir popup llamado");
    setMostrarPopup(true);  // Cambiar el estado para mostrar el popup
  };

  const cerrarPopup = () => setMostrarPopup(false);
   return (
        <div className="forms-layout">
            <div className="title-formulario"><h1>Formulario</h1></div>
            <div className="barra-formulario">
                <span className="linea2"></span>
            </div>
            <div className='main-section'>
                <span className='information'>
                    ¡Realiza nuestro formulario<br />
                    de diagnóstico empresarial!
                </span>
            </div>
            <BannerHelp />
            <div className='main-section'>
                <span className='information'>
                    ¡Presiona este botón <br />para conocer qué <br /> programas de <br /> formación son <br /> perfectos para usted!
                </span>
            </div>
            <div className='press'>
                <div className='press-boton'>
                    <img className='imagen-flecha' src={arrow} alt="Imagen de flecha" />
                <button className="diagnostico-button"type="button"onClick={abrirPopup}aria-haspopup="dialog"aria-expanded={mostrarPopup}> <BsListTask className='icon-diagnostico' />Diagnostico</button>
                {mostrarPopup && <Popup cerrar={cerrarPopup} />}
                </div>
                <img className='person-image' src={person} alt="Persona formulario" />
            </div>
        </div>
    );
}

export default FormsLayout;

