import React from "react";
import './presentacion.css';

function Presentacion(){
    return (
        <div className="presentacion">
            <div className="presentacion-senavanza">
                <p className="texto-presentacion">¡Te presentamos SENAVANZA!</p>
                <p className="texto-ayuda">Te ayudaremos a escoger <br />
                    el mejor aprendiz para tu empresa
                </p>
            </div>
            <div className="responde-diagnostico">
                <p className="texto-diagnostico">!Responde a nuestro diagnostico empresarial!</p>
                <button className="diagnostico">Diagnostico</button>
            </div>
        </div>
    );
}

export default Presentacion