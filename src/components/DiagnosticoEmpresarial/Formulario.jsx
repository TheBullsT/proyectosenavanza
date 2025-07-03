import React, { useState } from 'react';
import './Formulario.css';
import BannerHelp from './BannerHelp';

import arrow from '../../assets/img/arrow-green.png';
import person from '../../assets/img/person-form.png';

import Popup from './PopUp'; // <-- Este es el segundo popup (éxito)
import Popup_Diagnostico from './Popup_diagnostico'; // <-- Este es el primero

import { BsListTask } from "react-icons/bs";

function FormsLayout() {
    const [mostrarDiagnostico, setMostrarDiagnostico] = useState(false);
    const [mostrarExito, setMostrarExito] = useState(false);

    const abrirDiagnostico = () => {
        setMostrarDiagnostico(true);
    };

    const cerrarDiagnostico = () => {
        setMostrarDiagnostico(false);
    };

    const mostrarPopupExito = () => {
        setMostrarDiagnostico(false); // Cierra el popup de diagnóstico
        setMostrarExito(true);        // Abre el popup de éxito
    };

    const cerrarPopupExito = () => {
        setMostrarExito(false);
    };

    return (
        <div className="forms-layout">
            <div className="title-formulario">
                <h1>Formulario</h1>
            </div>

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

                    <button
                        className="diagnostico-button"
                        type="button"
                        onClick={abrirDiagnostico}
                        aria-haspopup="dialog"
                        aria-expanded={mostrarDiagnostico}
                    >
                        <BsListTask className='icon-diagnostico' />
                        Diagnostico
                    </button>

                    {mostrarDiagnostico && (
                        <Popup_Diagnostico
                            cerrar={cerrarDiagnostico}
                            enviar={mostrarPopupExito} // <-- pasamos función que abre segundo popup
                        />
                    )}

                    {mostrarExito && (
                        <Popup cerrar={cerrarPopupExito} />
                    )}
                </div>

                <img className='person-image' src={person} alt="Persona formulario" />
            </div>
        </div>
    );
}

export default FormsLayout;