import React from "react";
// Importación de imágenes usadas en el componente
import imagenprograma from '../../../../assets/img/img-resultados-diagnostico/imagen-programa.png';
import recomendados from '../../../../assets/img/img-resultados-diagnostico/recomendados-programa.png';
// Importación del archivo CSS con los estilos para este componente
import './programas.css';

function Programas() {
    return (
        // Contenedor principal del carrusel o sección de programas recomendados
        <div className="container-programas">
            {/* Título de la sección */}
            <div className="titulo-reporte">
                <h1>Programa de Formación <br /> Recomendados</h1>
            </div>

            {/* Contenedor que agrupa todos los elementos relacionados con los programas */}
            <div className="programas-total">
                {/* Contenedor que agrupa las fichas individuales de programas */}
                <div className="programas">
                    {/* Cada programa se representa con esta tarjeta */}
                    <div className="programas-formacion">
                        {/* Imagen del programa */}
                        <img className="imagen-programa" src={imagenprograma} alt="Imagen del programa" />

                        {/* Información y botón dentro de la ficha */}
                        <div className="informacion-ficha">
                            {/* Nombre del programa (texto estático por ahora) */}
                            <p>'Nombre programa de formación'</p>
                            {/* Botón para ver más detalles del programa */}
                            <button className="boton-ver-mas">Ver más</button>
                        </div>
                    </div>

                    {/* Segunda ficha de programa (idéntica a la anterior) */}
                    <div className="programas-formacion">
                        <img className="imagen-programa" src={imagenprograma} alt="Imagen del programa" />
                        <div className="informacion-ficha">
                            <p>'Nombre programa de formación'</p>
                            <button className="boton-ver-mas">Ver más</button>
                        </div>
                    </div>

                    {/* Tercera ficha de programa */}
                    <div className="programas-formacion">
                        <img className="imagen-programa" src={imagenprograma} alt="Imagen del programa" />
                        <div className="informacion-ficha">
                            <p>'Nombre programa de formación'</p>
                            <button className="boton-ver-mas">Ver más</button>
                        </div>
                    </div>
                </div>

                {/* Imagen decorativa o ilustrativa de la sección de recomendados */}
                <img className="imagen-recomendados" src={recomendados} alt="Recomendados imagen" />
            </div>
        </div>
    );
}

export default Programas;
