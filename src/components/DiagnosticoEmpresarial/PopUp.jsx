import React from 'react';
import { useNavigate } from 'react-router-dom'

// Importa imagen de éxito desde la carpeta de assets
import exito from '../../assets/img/img-resultados-diagnostico/exito.png'

// Importar el logo
import logo from '../../../assets/img/Logo_SENAVANZA.jpg';
// Importa íconos desde react-icons
import { FaDownload } from "react-icons/fa";
import { FaRegFileArchive } from "react-icons/fa";

import { jsPDF } from "jspdf";

// Importa los estilos CSS para este componente
import "./Popup.css";

// Componente funcional Popup que recibe una función 'cerrar' y los 'datos' como props
function Popup({ cerrar, datos }) {
    const navigate = useNavigate();

    // Función para redirigir al usuario a la página de resultados
    const irAResultados = () => {
        cerrar(); // Cierra el popup
        localStorage.setItem("resultadoDiagnostico", JSON.stringify(datos)); // Guarda los datos en localStorage
        navigate('/resultado-diagnostico', { state: { datos } }); // Navega a la página de resultados
    }

    // Función para generar y descargar el PDF con el programa recomendado
    const handleDescargarPDF = async () => {
        // 1. Inicialización de jsPDF
        const doc = new jsPDF();

        // 2. Insertar logo en la parte superior (manejo asíncrono)
        const img = new Image();
        img.src = logo;

        // Esperamos a que la imagen cargue antes de continuar
        await new Promise((resolve, reject) => {
            img.onload = () => {
                doc.addImage(img, "PNG", 20, 10, 40, 20); // x, y, width, height
                resolve();
            };
            img.onerror = reject; // Manejo básico de errores si el logo no carga
        });

        // 3. Encabezado
        doc.setFontSize(18);
        doc.text("Informe de Programa Recomendado", 70, 20);
        doc.setFontSize(12);
        doc.text("Diagnóstico Empresarial", 70, 28);

        // Línea divisoria
        doc.setLineWidth(0.5);
        doc.line(20, 35, 190, 35);

        // 4. Contenido
        doc.setFontSize(14);
        let y_position = 50; // Variable para gestionar la posición Y
        doc.text("Programa Recomendado:", 20, y_position);

        // Obtener datos (asumiendo que 'datos' está en el scope)
        const nombre = datos?.programa_recomendado?.nombre || "No disponible";
        const descripcion = datos?.programa_recomendado?.descripcion || "";
        const nivel = datos?.programa_recomendado?.nivel_programa || "N/A";

        y_position += 10;
        doc.setFontSize(12);
        // 💡 CORRECCIÓN: Uso de backticks (``) para plantillas literales
        doc.text(`Nombre: ${nombre}`, 20, y_position);

        y_position += 10;
        doc.text("Descripción:", 20, y_position);

        y_position += 10;
        // 5. Manejo de la Descripción Multilínea
        // splitTextToSize divide el texto, pero devuelve un array de líneas.
        const descripcionLineas = doc.splitTextToSize(descripcion, 170);
        doc.text(descripcionLineas, 20, y_position);

        // Calcula la nueva posición Y sumando la altura ocupada por la descripción
        const alturaLinea = 7; // Aproximadamente 7 unidades por línea con tamaño 12
        y_position += descripcionLineas.length * alturaLinea;

        // 6. Nivel (Colocado dinámicamente)
        y_position += 10;
        // 💡 CORRECCIÓN: Uso de backticks (``) para plantillas literales
        doc.text(`Nivel: ${nivel}`, 20, y_position);

        // 7. Pie de página (Se mantiene al final de la página)
        doc.setFontSize(10);
        doc.text(
            "Este informe ha sido generado automáticamente por el sistema de diagnóstico empresarial.",
            20,
            280
        );

        // 8. Guardar PDF
        doc.save("programa_recomendado.pdf");
    };
    return (
        // Capa semitransparente que cubre toda la pantalla para el popup
        <div className="popup-overlay">
            <form action="" className='popup-overlay'>
                {/* Contenedor principal del popup */}
                <div className="popup1">
                    {/* Sección del mensaje de éxito */}
                    <div className='diagnostico-completo'>
                        <h2>¡Tu diagnóstico <br />ha sido completado con éxito!</h2>
                        <img src={exito} alt="Imagen de éxito" /> {/* Imagen de éxito */}
                        <p>Descarga tu reporte y <br />revisa los resultados al detalle</p>
                    </div>

                    {/* Botones de acción dentro del popup */}
                    <div className='botones-diagnostico-1'>
                        {/* Botón para ver los resultados */}
                        <button className='resultados' onClick={irAResultados} type='button'>
                            <FaRegFileArchive className='icon-resultados' />
                            Resultados
                        </button>

                        {/* Botón para descargar el reporte en PDF */}
                        <button className='descargar' onClick={handleDescargarPDF} type='button'>
                            <FaDownload className='icon-descargar' /> Descargar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

// Exporta el componente Popup para que pueda usarse en otros módulos
export default Popup;
