import React from "react";
import question from '../../../assets/img/Questions-pana 1.png';
import './pregunta.css';

function Pregunta(){
    return(
        <div className="pregunta">
            <div className="imagen">
                <img src={question} alt="Imagen de pregunta" />
            </div>
            <div className="realizar">
                <h1 className="Titulo">
                    ¿Ya realizaste tu <br /> diagnostico empresarial
                </h1>
                <p>Si ya realizaste tu diagnostico <br /> empresarial y te  <br /> interesa saber tus resultados <br /> <strong>!Tenemos la solución!</strong> </p>
                <button className="solucion">
                    !PULSA AQUI¡
                </button>
            </div>
        </div>
    );
}
export default Pregunta;