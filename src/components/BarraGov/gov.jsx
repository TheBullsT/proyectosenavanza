// Importa React
import react from 'react';
// Importa los estilos para la barra GOV.CO
import './gov.css';
// Importa una imagen (aunque no se usa en este componente)
import gov from '../../assets/img/gov.png';

/**
 * Componente que representa la barra superior de GOV.CO
 * (Portal del Estado Colombiano), comúnmente usada en sitios institucionales.
 */
const Gov = () => {
    return (
        <div className='gov'>
        {/* // Elemento de navegación con clases de estilo personalizadas y de Bootstrap */}
            <nav className="navbar navbar-expand-lg barra-superior-govco" aria-label="Barra superior">
                {/* Enlace al portal GOV.CO. Se abre en nueva pestaña y tiene etiqueta ARIA para accesibilidad */}
                <a
                    href="https://www.gov.co/"
                    target="_blank"
                    aria-label="Portal del Estado Colombiano - GOV.CO"
                ></a>
            </nav>
        </div>
    );
};

export default Gov;
