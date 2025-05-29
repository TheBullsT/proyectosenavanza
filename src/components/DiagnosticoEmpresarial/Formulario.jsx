import React, { useState } from 'react';
import './Formulario.css';
import BannerHelp from './BannerHelp';

// Imágenes
import arrow from '../../assets/img/arrow-green.png';
import person from '../../assets/img/person-form.png';

// Componente popup de éxito
import Popup from './PopUp';

// Ícono de diagnóstico
import { BsListTask } from "react-icons/bs";

// Componente principal del formulario
function FormsLayout() {
    const [mostrarPopup, setMostrarPopup] = useState(false); // Estado para mostrar u ocultar el popup

    const abrirPopup = () => {
        console.log("Abrir popup llamado");
        setMostrarPopup(true); // Mostrar popup al hacer clic
    };

    const cerrarPopup = () => setMostrarPopup(false); // Cerrar popup

    return (
        <div className="forms-layout">
            {/* Título principal del formulario */}
            <div className="title-formulario">
                <h1>Formulario</h1>
            </div>

            {/* Barra de separación debajo del título */}
            <div className="barra-formulario">
                <span className="linea2"></span>
            </div>

            {/* Mensaje introductorio */}
            <div className='main-section'>
                <span className='information'>
                    ¡Realiza nuestro formulario<br />
                    de diagnóstico empresarial!
                </span>
            </div>

            {/* Componente de ayuda (por ejemplo, contacto o tooltip) */}
            <BannerHelp />

            {/* Instrucción para presionar el botón */}
            <div className='main-section'>
                <span className='information'>
                    ¡Presiona este botón <br />para conocer qué <br /> programas de <br /> formación son <br /> perfectos para usted!
                </span>
            </div>

            {/* Botón de diagnóstico e imagen decorativa */}
            <div className='press'>
                <div className='press-boton'>
                    {/* Flecha visual */}
                    <img className='imagen-flecha' src={arrow} alt="Imagen de flecha" />

                    {/* Botón de diagnóstico */}
                    <button
                        className="diagnostico-button"
                        type="button"
                        onClick={abrirPopup}
                        aria-haspopup="dialog"
                        aria-expanded={mostrarPopup}
                    >
                        <BsListTask className='icon-diagnostico' />
                        Diagnostico
                    </button>

                    {/* Mostrar popup si `mostrarPopup` es true */}
                    {mostrarPopup && <Popup cerrar={cerrarPopup} />}
                </div>

                {/* Imagen lateral decorativa */}
                <img className='person-image' src={person} alt="Persona formulario" />
            </div>
        </div>
    );
}

// Exporta el componente FormsLayout para su uso en otros lugares
export default FormsLayout;