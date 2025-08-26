import React from "react"; // Importamos React para crear componentes
import './caprendizaje.css'; // Importamos los estilos

// Importación de imágenes usadas en el componente
import Flecha from '../../../../assets/img/img-resultados-diagnostico/flecha.png';
import CaprendizajeLogo from '../../../../assets/img/img-resultados-diagnostico/Caprendizaje.png';
import ImagenCaprendizaje from '../../../../assets/img/img-resultados-diagnostico/imagen-caprendizaje.png';

function Caprendizaje() {
    return (
        // Contenedor principal del componente, funciona como caja del carrusel
        <div className="container-caprendizaje">

            {/* Título principal con salto de línea para separar el texto */}
            <div className="titulo-caprendizaje">
                <h1>
                    ¿Quieres buscar los
                    <br />
                    programas de formación?
                </h1>
            </div>

            {/* Contenedor principal del contenido: texto + elementos visuales */}
            <div className="caprendizaje-contenido">

                {/* Texto explicativo con llamada a la acción */}
                <div className="texto-caprendizaje">
                    <p>
                        ¡Pulsa aquí para ir a <strong>Caprendizaje</strong>
                        <br />
                        y encontrar los
                        <br />
                        programas de formación!
                    </p>
                </div>

                {/* Segunda parte del contenido con flecha, logo, botón e imagen */}
                <div className="caprendizaje-contenido2">

                    {/* Contenedor de acceso que agrupa flecha, logo y botón */}
                    <div className="acceso">

                        {/* Imagen de flecha decorativa */}
                        <div className="flecha-contenedor">
                            <img className="flecha" src={Flecha} alt="Flecha" />
                        </div>

                        {/* Contenedor del logo y botón de acción */}
                        <div className="direccion">
                            <img className="logo-capre" src={CaprendizajeLogo} alt="Logo de Caprendizaje" />
                            <button className="boton-ir-a-buscar">Ir a buscar</button>
                        </div>
                    </div>

                    {/* Imagen de apoyo visual para reforzar el contenido */}
                    <img className="imagen-apoyo" src={ImagenCaprendizaje} alt="Apoyo visual de Caprendizaje" />
                </div>
            </div>
        </div>
    );
}

export default Caprendizaje;
