import React, { useEffect, useRef, useState, useCallback, useMemo } from "react"; // Importamos React para crear componentes y los hooks
import './carrousel.css'; // Importamos los estilos

// Importación de los componentes que se mostrarán en el carrusel
import Resultados from './componentes-carrousel/resultado';
import Programas from './componentes-carrousel/programas';
import GenerarReporte from './componentes-carrousel/generarreporte';
import Caprendizaje from './componentes-carrousel/caprendizaje';

// Array con los componentes a mostrar en el carrusel
const componentes = [
    <Resultados key={0} />,
    // <Programas key={1} />, // Comentado, si se quiere mostrar descomentar
    <GenerarReporte key={2} />,
    <Caprendizaje key={3} />
];

function Carrousel() {
    // Referencia al contenedor <ul> del carrusel
    const listRef = useRef(null);
    // Referencias a cada <li> individual del carrusel
    const itemRefs = useRef([]);
    // Índice actual del carrusel
    const [currentIndex, setCurrentIndex] = useState(0);
    // Controla si la rotación automática está pausada
    const [pause, setPause] = useState(false);

    // Guardar referencias a cada item del carrusel al montar
    useEffect(() => {
        if (listRef.current) {
            itemRefs.current = Array.from(listRef.current.children);
        }
    }, []);

    // Scroll suave al item actual cada vez que cambia currentIndex
    useEffect(() => {
        const currentItem = itemRefs.current[currentIndex];
        if (currentItem) {
            currentItem.scrollIntoView({
                behavior: "smooth", // Animación suave
                block: "center", // Centrar verticalmente
            });
        }
    }, [currentIndex]);

    // Intervalo para rotar automáticamente el carrusel
    useEffect(() => {
        if (pause) return; // No rotar si está pausado

        const interval = setInterval(() => {
            // Cambiar al siguiente componente, vuelve al inicio si llega al final
            setCurrentIndex(prev => (prev + 1) % componentes.length);
        }, 4000); // Cada 4 segundos

        return () => clearInterval(interval); // Limpiar intervalo al desmontar
    }, [pause]);

    // Handler para cambiar el índice manualmente (clic o teclado)
    const handleIndicatorSelect = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    // Render de los indicadores (círculos)
    const indicators = useMemo(() => {
        return componentes.map((_, index) => (
            <div
                key={index}
                role="button" // Accesibilidad
                tabIndex={0} // Permite foco con teclado
                aria-pressed={currentIndex === index} // Indica activo
                className={`circle ${currentIndex === index ? "active" : ""}`} // Clase activa
                onClick={() => handleIndicatorSelect(index)} // Cambia componente al hacer click
                onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleIndicatorSelect(index); // Permite navegación con teclado
                    }
                }}
                aria-label={`Mostrar componente ${index + 1}`} // Accesibilidad
            />
        ));
    }, [currentIndex, handleIndicatorSelect]);

    return (
        <section
            className="carousel-wrapper"
            onMouseEnter={() => setPause(true)} // Pausa autoplay al pasar mouse
            onMouseLeave={() => setPause(false)} // Reanuda autoplay al salir mouse
            aria-roledescription="carousel" // Accesibilidad
            aria-live="polite" // Notifica cambios a lectores de pantalla
        >
            {/* Indicadores de navegación del carrusel */}
            <nav className="carousel-indicators" aria-label="Navegación del carrusel">
                {indicators}
            </nav>

            {/* Contenedor del slider */}
            <div className="slider-container">
                <div className="container-recomendados">
                    <ul ref={listRef} className="carousel-list-vertical" role="list">
                        {/* Mapear cada componente dentro de un <li> */}
                        {componentes.map((component, index) => (
                            <li
                                key={index}
                                className="carousel-item-vertical"
                                role="listitem" // Accesibilidad
                                aria-hidden={currentIndex !== index} // Oculta contenido no visible
                            >
                                {component}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

// Exportamos el componente
export default Carrousel;
