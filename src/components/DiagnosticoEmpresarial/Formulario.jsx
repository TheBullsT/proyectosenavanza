import React, { useState } from 'react';
import './Formulario.css';
import BannerHelp from './BannerHelp';

// Importación de imágenes
import arrow from '../../assets/img/arrow-green.png';
import person from '../../assets/img/person-form.png';

// Importación de popups
import Popup_Diagnostico from '../DiagnosticoEmpresarial/PopUp_Diagnostico'; // Popup de diagnóstico
import Popup from './PopUp'; // Popup de éxito

// Importación del componente de resultados
import Resultados from '../ResultadosDiagnostico/resultadosdiagnostico/componentes-carrousel/resultado';

// Importación de iconos
import { BsListTask } from "react-icons/bs";

function FormsLayout() {
    // Estado para manejar la visibilidad del popup de diagnóstico
    const [mostrarDiagnostico, setMostrarDiagnostico] = useState(false);
    // Estado para manejar la visibilidad del popup de éxito
    const [mostrarExito, setMostrarExito] = useState(false);
    // Estado para guardar los resultados del diagnóstico
    const [ResultadoDiagnostico, setResultadoDiagnostico] = useState(null)
    // Estado para mostrar la vista de resultados
    const [verResultado, setVerResultado] = useState(false)

    // Abrir popup de diagnóstico
    const abrirDiagnostico = () => {
        setMostrarDiagnostico(true);
    };

    // Cerrar popup de diagnóstico
    const cerrarDiagnostico = () => {
        setMostrarDiagnostico(false);
    };

    // Mostrar popup de éxito después de cerrar el diagnóstico
    const mostrarPopupExito = () => {
        setMostrarDiagnostico(false); // Cierra el popup de diagnóstico
        setMostrarExito(true);        // Abre el popup de éxito
    };

    // Cerrar popup de éxito
    const cerrarPopupExito = () => {
        setMostrarExito(false);
    };

    return (
        <div className="forms-layout">
            {/* Título principal */}
            <div className="title-formulario">
                <h1>Formulario</h1>
            </div>

            {/* Línea decorativa */}
            <div className="barra-formulario">
                <span className="linea2"></span>
            </div>

            {/* Sección informativa */}
            <div className='main-section'>
                <span className='information'>
                    ¡Realiza nuestro formulario<br />
                    de diagnóstico empresarial!
                </span>
            </div>

            {/* Componente de ayuda */}
            <BannerHelp />

            {/* Segunda sección informativa */}
            <div className='main-section'>
                <span className='information'>
                    ¡Presione este botón <br />para conocer qué <br /> programas de <br /> formación son <br /> perfectos para usted!
                </span>
            </div>

            {/* Sección principal con botón y popups */}
            <div className='press'>
                <div className='press-boton'>
                    {/* Imagen de flecha decorativa */}
                    <img className='imagen-flecha' src={arrow} alt="Imagen de flecha" />

                    {/* Botón para abrir el popup de diagnóstico */}
                    <button
                        className="diagnostico-button"
                        type="button"
                        onClick={abrirDiagnostico}
                        aria-haspopup="dialog"
                        aria-expanded={mostrarDiagnostico}
                    >
                        <BsListTask className='icon-diagnostico' />
                        Diagnóstico
                    </button>

                    {/* Popup de diagnóstico */}
                    {mostrarDiagnostico && (
                        <Popup_Diagnostico
                            cerrar={cerrarDiagnostico}
                            onResultado={(data) => {
                                setResultadoDiagnostico(data); // Guardar datos del diagnóstico
                                setMostrarDiagnostico(false);  // Cerrar popup de diagnóstico
                                setMostrarExito(true)          // Abrir popup de éxito
                            }}
                        />
                    )}

                    {/* Popup de éxito */}
                    {mostrarExito && (
                        <Popup
                            datos={ResultadoDiagnostico}
                            cerrar={cerrarPopupExito}
                            irAResultados={() => {
                                setMostrarExito(false); // Cerrar popup de éxito
                                setVerResultado(true)  // Mostrar resultados
                            }} />
                    )}

                    {/* Vista de resultados */}
                    {verResultado && (
                        < Resultados datos={ResultadoDiagnostico} />
                    )}
                </div>

                {/* Imagen decorativa de persona */}
                <img className='person-image' src={person} alt="Persona en formulario" />
            </div>
        </div>
    );
}

export default FormsLayout;
