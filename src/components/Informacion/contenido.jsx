// Importación de React para crear el componente
import React from "react"; 
// Importación del archivo CSS que contiene los estilos específicos para este componente
import './contenido.css';
// Importación de imágenes utilizadas en la sección
import Cultivo from "../../assets/img/inicio/Cultivo_grande.png";
import Cultivo2 from "../../assets/img/inicio/Cultivo_pequeño.png";

// Componente funcional que representa el contenido principal de la página
const Contenido = () => {
    return (
        // Contenedor principal que agrupa todo el contenido
        <div className="contenedor-principal">

            {/* Imagen decorativa principal */}
            <img className="imagen_ayuda" src={Cultivo} alt="Cultivo de arroz grande" />

            {/* Bloque que contiene el texto explicativo */}
            <div className="contenedor-texto">

                {/* Sección de definición del programa */}
                <div className="texto1">
                    <h2>
                        ¿Que es un PROGRAMA
                        <br />DE FORMACIÓN?
                    </h2>
                    <p>
                        Un programa de formación del SENA es un curso técnico,
                        <br />tecnológico o de formación complementaria que capacita a los colombianos para el trabajo,
                        <br />combinando teoría y práctica de forma gratuita.
                    </p>
                </div>

                {/* Sección que explica ventajas y razones para participar */}
                <div className="textos2">

                    {/* Sub-bloque de ventajas */}
                    <div className="ventajas">
                        <h2>
                            ¿Ventajas de un PROGRAMA
                            <br />DE FORMACIÓN?
                        </h2>
                        <p>
                            Los programas de formación del SENA ofrecen capacitación
                            <br />gratuita y práctica en diversas áreas, mejorando la empleabilidad.
                            <br />Brindan certificación reconocida, están disponibles en todo el <br />país, se articulan con el sector empresarial y permiten estudiar <br />de forma flexible.
                        </p>
                    </div>

                    {/* Sub-bloque de motivos para participar */}
                    <div className="Porque">
                        <h2>
                            ¿Por qué participar en un
                            <br />PROGRAMA DE FORMACIÓN?
                        </h2>
                        <p>
                            Participar en un programa de formación permite adquirir conocimientos y <br />habilidades prácticas que aumentan las oportunidades laborales.
                            <br />Además, brinda certificación oficial,
                            <br />es gratuito en el SENA, y facilita el acceso al mercado laboral o <br />el emprendimiento, fortaleciendo el perfil profesional.
                        </p>
                    </div>

                </div>
            </div>

            {/* Segundo contenedor con beneficios y una imagen */}
            <div className="contenedor2">

                {/* Lista de beneficios al contratar aprendices */}
                <div className="contratar">
                    <h2>
                        ¿Por qué contratar a un
                        <br />aprendiz?
                    </h2>
                    <p>
                        A continuación, los beneficios
                        <br />que brinda contratar
                        <br />a un aprendiz:
                    </p>

                    {/* Beneficios enumerados */}
                    <br />
                    <p className="Beneficio">{"(1)"} Talento en formación: Se adapta fácilmente
                        <br />a la cultura y procesos de la empresa.</p>
                    <br />
                    <p className="Beneficio">{"(2)"} Actualización constante: Trae conocimientos <br />actualizados desde su formación.</p>
                    <br />
                    <p className="Beneficio">{"(3)"} Apoyo en tareas clave: Refuerza áreas <br />operativas o técnicas sin altos costos.</p>
                    <br />
                    <p className="Beneficio">{"(4)"} Proyección futura: Posible incorporación como <br />empleado ya capacitado.</p>
                    <br />
                    <p className="Beneficio">{"(5)"} Cumplimiento legal: Ayuda a cumplir con la <br />cuota obligatoria de aprendices (Ley 789 de 2002).</p>
                </div>

                {/* Imagen decorativa secundaria */}
                <img className="cultivo" src={Cultivo2} alt="Cultivo pequeño de arroz" />
            </div>
        </div>
    );
}

// Exportación del componente para su uso en otras partes del proyecto
export default Contenido;
