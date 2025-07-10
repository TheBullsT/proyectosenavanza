import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import './carrousel.css';

import Resultados from './componentes-carrousel/resultado';
import Programas from './componentes-carrousel/programas';
import GenerarReporte from './componentes-carrousel/generarreporte';
import Caprendizaje from './componentes-carrousel/caprendizaje';

const componentes = [
    <Resultados key={0} />,
    // <Programas key={1} />,
    // <GenerarReporte key={2} />,
    <Caprendizaje key={3} />
];

function Carrousel() {
    const listRef = useRef(null);
    const itemRefs = useRef([]); // Guardamos referencias directas a cada <li>
    const [currentIndex, setCurrentIndex] = useState(0);
    const [pause, setPause] = useState(false);

    // Guardamos las referencias de cada item cuando se montan
    useEffect(() => {
        if (listRef.current) {
            itemRefs.current = Array.from(listRef.current.children);
        }
    }, []);

    // Scroll suave al item actual cuando cambia currentIndex
    useEffect(() => {
        const currentItem = itemRefs.current[currentIndex];
        if (currentItem) {
            currentItem.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [currentIndex]);

    // Intervalo para rotar automáticamente el carrusel
    useEffect(() => {
        if (pause) return; // No crear intervalo si está pausado

        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % componentes.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [pause]);

    // Handler optimizado para cambiar índice con click o teclado
    const handleIndicatorSelect = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    // Renderizamos indicadores con accesibilidad y manejo de teclado
    const indicators = useMemo(() => {
        return componentes.map((_, index) => (
            <div
                key={index}
                role="button"
                tabIndex={0}
                aria-pressed={currentIndex === index}
                className={`circle ${currentIndex === index ? "active" : ""}`}
                onClick={() => handleIndicatorSelect(index)}
                onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleIndicatorSelect(index);
                    }
                }}
                aria-label={`Mostrar componente ${index + 1}`}
            />
        ));
    }, [currentIndex, handleIndicatorSelect]);

    return (
        <section
            className="carousel-wrapper"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
            aria-roledescription="carousel"
            aria-live="polite"
        >
            {/* Indicadores de navegación */}
            <nav className="carousel-indicators" aria-label="Navegación del carrusel">
                {indicators}
            </nav>

            {/* Contenedor del slider */}
            <div className="slider-container">
                <div className="container-recomendados">
                    <ul ref={listRef} className="carousel-list-vertical" role="list">
                        {componentes.map((component, index) => (
                            <li
                                key={index}
                                className="carousel-item-vertical"
                                role="listitem"
                                aria-hidden={currentIndex !== index}
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

export default Carrousel;
