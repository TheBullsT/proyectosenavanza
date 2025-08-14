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

            {/* Título principal con salto de línea para separar texto */}
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
                        y encontrarás los
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

                        {/* Contenedor de logo y botón de acción */}
                        <div className="direccion">
                            <img className="logo-capre" src={CaprendizajeLogo} alt="Logo Caprendizaje" />
                            <button className="boton-ir-a-buscar">Ir a buscar</button>
                        </div>
                    </div>

                    {/* Imagen de apoyo visual para reforzar contenido */}
                    <img className="imagen-apoyo" src={ImagenCaprendizaje} alt="Apoyo visual Caprendizaje" />
                </div>
            </div>
        </div>
    );
}

export default Caprendizaje;
