// Importar React
import React from "react";
// Importar jsPDF para generar archivos PDF
import { jsPDF } from "jspdf";
// Importar CSS del componente
import './generarreporte.css';
// Importar imagen de apoyo para el componente
import reporte from '../../../../assets/img/img-resultados-diagnostico/reporte.png';

function GenerarReporte() {
    // Recuperar los datos guardados en localStorage con la clave "resultadoDiagnostico"
    // Si no existen, usar un objeto vacío como valor por defecto
    const datos = JSON.parse(localStorage.getItem("resultadoDiagnostico")) || {};
 
    // Función que se ejecuta al hacer clic en el botón para generar el PDF
    const handleDescargarPDF = () => {
        // Crear un nuevo documento PDF
        const doc = new jsPDF();
        let y = 10; // Posición Y inicial

        // 1. Insertar logo y encabezado
        const img = new Image();
        // ASUME QUE 'logo' ESTÁ DISPONIBLE EN EL ÁMBITO SUPERIOR
        img.src = logo; 
        doc.addImage(img, "PNG", 10, y, 20, 10); 
        y += 10;

        // Título Principal
        doc.setFontSize(18);
        doc.text("Reporte de Resultados del Diagnóstico", 70, y);
        y += 8;
        doc.setFontSize(12);
        doc.text("Recomendación de Programa de Formación", 70, y);
        y += 12;

        // Línea divisoria
        doc.setLineWidth(0.5);
        doc.line(20, y, 190, y);
        y += 10;

        // 2. Contenido del Reporte
        
        // Obtener el nombre y la descripción del programa recomendado desde los datos
        const nombre = datos?.programa_recomendado?.nombre || "N/A";
        const descripcion = datos?.programa_recomendado?.descripcion || "No se encontró una descripción detallada para el programa recomendado.";

        // Nombre del Programa Recomendado
        doc.setFontSize(14);
        doc.text("Programa Recomendado:", 20, y);
        y += 7;

        doc.setFontSize(16);
        doc.text(nombre, 20, y);
        y += 10;

        // Sección de Descripción
        doc.setFontSize(14);
        doc.text("Descripción del Programa:", 20, y);
        y += 7;

        doc.setFontSize(12);
        // Agregar la descripción, dividiendo el texto para que no se salga del ancho del PDF
        const lineasDescripcion = doc.splitTextToSize(descripcion, 170);
        doc.text(lineasDescripcion, 20, y);
        y += (lineasDescripcion.length * 5) + 10; // 5 unidades por línea más espaciado

        // 3. Información Adicional / Pie de Página

        // Espaciado para el pie de página
        if (y > 270) {
            doc.addPage();
            y = 20;
        }

        doc.setFontSize(10);
        doc.text(
            "Nota: Esta es una recomendación basada en los resultados de su diagnóstico.",
            20,
            280
        );
        doc.text(
            `Fecha de generación: ${new Date().toLocaleDateString()}`,
            140,
            280
        );

        // 4. Guardar y descargar el archivo PDF con un nombre específico
        doc.save("diagnostico_programa_recomendado.pdf");
    };

    return (
        // Contenedor principal del componente
        <div className="container-reporte">
            {/* Título principal */}
            <div className="titulo-reporte">
                <h1>
                    ¿Quieres tener tus resultados
                    <br />
                    del diagnóstico?
                </h1>
            </div>

            {/* Contenedor que agrupa el contenido de texto y la imagen */}
            <div className="generar-reporte">
                {/* Contenido textual y botón */}
                <div className="contenido-reporte">
                    <p className="texto-reporte">
                        Genera un <strong>reporte</strong> del
                        <br />
                        resultado del diagnóstico
                        <br />
                        para que puedas verlo
                        <br />
                        con más calma
                    </p>

                    {/* Botón que ejecuta la función para generar el PDF */}
                    <button onClick={handleDescargarPDF} className="boton-generar-reporte" type="button">
                        Generar reporte
                    </button>
                </div>

                {/* Imagen de apoyo al lado del contenido */}
                <img src={reporte} alt="Imagen del reporte" />
            </div>
        </div>
    );
}

// Exportar el componente para usarlo en otras partes de la aplicación
export default GenerarReporte;