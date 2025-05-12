import React, { useEffect, useRef, useState } from "react";
import './carrousel.css';

import Resultados from './componentes-carrousel/resultado';
import Programas from './componentes-carrousel/programas';
import GenerarReporte from './componentes-carrousel/generarreporte';


    const componentes = [
        <Resultados key={0} />,
        <Programas key={1} />,
        <GenerarReporte key={2} />
    ];

function Carrousel() {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);


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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % componentes.length);
        }, 5000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-wrapper">
            <div className="carousel-indicators">
                {componentes.map((_, index) => (
                    <div
                        key={index}
                        className={`circle ${currentIndex === index ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>

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
            </div>
        </div>
    );
}

export default Carrousel;
