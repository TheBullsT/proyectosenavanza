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

    // Lista de programas ofrecidos, con nombre y descripción
    const programas = [
        {
            nombre: "Analisis y desarrollo de osftware",
            descripcion: "Programa de formación en desarrollo de software, enfocado en las últimas tecnologías y metodologías ágiles.",
        },
        {
            nombre: "Programación de software",
            descripcion: "Programa de formación en programación de software, abarcando desde los fundamentos hasta técnicas avanzadas.",
        },
        {
            nombre: "Creación medios audiovisuales digitales",
            descripcion: "Programa de formación en creación de medios audiovisuales digitales, incluyendo edición de video y producción multimedia.",
        },
        {
            nombre: "Gestión de redes de datos",
            descripcion: "Programa de formación en gestión de redes de datos, cubriendo desde la configuración básica hasta la seguridad avanzada.",
        },
        // Agrega más si es necesariox
    ];

    return (
        // Contenedor principal de la sección de contenido
        <div className="contenido-inicio">
            {/* Título principal con ícono */}
            <h2 className="titulo-inicio">
                <FaPeopleGroup className="icon-inicio-contenido" />
                <span>¿Interesado en <br /> nuestros programas de <br /> formación?</span>
            </h2>
            {/* Sección que muestra las tarjetas de cada programa */}
            <div className="programas-inicio">
                {programas.map((programa, index) => (
                    // Cada programa se muestra en una tarjeta
                    <div key={index} className="programa-inicio">
                        <div className="imagen-programa">
                            <RiComputerFill className="icon-computador" />
                        </div>
                        <div className="nombre-programa"><p>{programa.nombre}</p></div>
                        <div className="descripcion-programa">{programa.descripcion}</div>
                        <div className="botones-inicio">
                            <img src={flechita} alt="Flecha" />
                            {/* Botón que redirige a más información */}
                            <button onClick={irInformacion} className="boton-inicio">¡PRESIONA AQUÍ!</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default ContenidoInicio;
