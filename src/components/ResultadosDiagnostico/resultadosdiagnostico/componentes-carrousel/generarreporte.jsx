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

        // Establecer el tamaño de fuente para el título
        doc.setFontSize(18);
        // Agregar texto principal al PDF
        doc.text("Programa recomendado", 20, 20);

        // Cambiar el tamaño de fuente para el contenido
        doc.setFontSize(14);

        // Obtener el nombre y la descripción del programa recomendado desde los datos
        // Si no existen, asignar un valor por defecto
        const nombre = datos?.programa_recomendado?.nombre || "No disponible";
        const descripcion = datos?.programa_recomendado?.descripcion || "";

        // Agregar el nombre del programa al PDF
        doc.text(`Recomendación: ${nombre}`, 20, 40);
        // Agregar subtítulo "Descripción"
        doc.text("Descripción:", 20, 50);
        // Agregar la descripción, dividiendo el texto para que no se salga del ancho del PDF
        doc.text(doc.splitTextToSize(descripcion, 170), 20, 60);

        // Guardar y descargar el archivo PDF con un nombre específico
        doc.save("programa_recomendado.pdf");
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
