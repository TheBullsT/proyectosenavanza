// Importación de React y componentes necesarios
import React from "react";
// Icono de grupo de personas
import { FaPeopleGroup } from "react-icons/fa6";
// Icono de computador
import { RiComputerFill } from "react-icons/ri";
// Imagen de flechita usada en los botones
import flechita from '../../../assets/img/img-inicio/ion_arrow-redo.png';
// Hook de navegación de React Router
import { useNavigate } from "react-router-dom";
// Estilos CSS del componente
import './contenido-inicio.css';

function ContenidoInicio() {
    // Hook para manejar la navegación entre rutas
    const navigate = useNavigate();

    // Función que redirige a la ruta '/informacion'
    const irInformacion = () => {
        navigate('/informacion');
    }

    const programas = [
        {
            nombre: "<Programa de Formación>",
            descripcion: "<Descripción corta del programa de Formación>",
        },
        {
            nombre: "<Programa de Formación>",
            descripcion: "<Descripción corta del programa de Formación>",
        },
        {
            nombre: "<Programa de Formación>",
            descripcion: "<Descripción corta del programa de Formación>",
        },
        {
            nombre: "<Programa de Formación>",
            descripcion: "<Descripción corta del programa de Formación>",
        },
        // Agrega más si es necesariox
    ];

    return (
        //Contenido General
        <div className="contenido-inicio">
            {/*Titulo del contenido */}
            <h2 className="titulo-inicio">
                <FaPeopleGroup className="icon-inicio-contenido" />
                <span>¿Interesado en <br /> nuestros programas de <br /> formación?</span>
            </h2>
            {/*Cajas para los programas */}
            <div className="programas-inicio">
                {programas.map((programa, index) => (
                    <div key={index} className="programa-inicio">
                        <div className="imagen-programa">
                            <RiComputerFill className="icon-computador" />
                        </div>
                        <div className="nombre-programa"><p>{programa.nombre}</p></div>
                        <div className="descripcion-programa">{programa.descripcion}</div>
                        <div className="botones-inicio">
                            <img src={flechita} alt="Flecha" />
                            <button onClick={irInformacion} className="boton-inicio">¡PRESIONA AQUÍ!</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default ContenidoInicio;
