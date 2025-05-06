import React from "react";
import './recomendacion.css';

function Recomendacion (){
    return (
        <div className="recomendaciones">
            <h2 className="titulo-recomendacion">Recomendaciones</h2>
            <div className="conocer">
                <p>¿Quieres conocer nuestros programas de formación?</p> 
                <button className="boton-recomendacion" onClick={() => window.open("https://oferta.senasofiaplus.edu.co/sofia-oferta/" , "_blanck")}>¡PULSA AQUÍ!</button>
            </div>
        </div>
    );
}

export default Recomendacion;