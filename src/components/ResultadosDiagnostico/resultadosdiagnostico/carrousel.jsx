import React, { useEffect, useRef, useState } from "react";
import './carrousel.css';

import Resultados from './componentes-carrousel/resultado';
import Programas from './componentes-carrousel/programas';
import GenerarReporte from './componentes-carrousel/generarreporte';

function Carrousel() {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    const componentes = [
        <Resultados key={0} />,
        <Programas key={1} />,
        <GenerarReporte key={2} />
    ];

    useEffect(() => {
        const listNode = listRef.current;
        const items = listNode.querySelectorAll("li");
        const currentItem = items[currentIndex];

        if (currentItem) {
            currentItem.scrollIntoView({
                behavior: "smooth",
                block: "center" 
            });
        }
    }, [currentIndex]);

    return (
        <div className="main-container">
            <div className="slider-container">
                <div className="container-recomendados">
                    <ul ref={listRef} className="carousel-list-vertical">
                        {componentes.map((component, index) => (
                            <li key={index} className="carousel-item-vertical">
                                {component}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="controls">
                    <button onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}>⬆</button>
                    <button onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, componentes.length - 1))}>⬇</button>
                </div>
            </div>
        </div>
    );
}

export default Carrousel;
