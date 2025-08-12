import React from "react";
import { jsPDF } from "jspdf";
import './generarreporte.css';
import reporte from '../../../../assets/img/img-resultados-diagnostico/reporte.png';

function GenerarReporte() {
    // Recuperar datos guardados en localStorage
    const datos = JSON.parse(localStorage.getItem("resultadoDiagnostico")) || {};

    const handleDescargarPDF = () => {
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text("Programa Recomendado", 20, 20);

        doc.setFontSize(14);

        const nombre = datos?.programa_recomendado?.nombre || "No disponible";
        const descripcion = datos?.programa_recomendado?.descripcion || "";

        doc.text(`Recomendación: ${nombre}`, 20, 40);
        doc.text("Descripción:", 20, 50);
        doc.text(doc.splitTextToSize(descripcion, 170), 20, 60);

        doc.save("programa_recomendado.pdf");
    };

    return (
        <div className="container-reporte">
            <div className="titulo-reporte">
                <h1>
                    ¿Quieres tener tus resultados
                    <br />
                    del diagnóstico?
                </h1>
            </div>

            <div className="generar-reporte">
                <div className="contenido-reporte">
                    <p className="texto-reporte">
                        Genera un <strong>reporte</strong> del
                        <br />
                        resultado del diagnóstico
                        <br />
                        para que puedas verlos
                        <br />
                        con más calma
                    </p>

                    <button onClick={handleDescargarPDF} className="boton-generar-reporte" type="button">
                        Generar Reporte
                    </button>
                </div>

                <img src={reporte} alt="Imagen reporte" />
            </div>
        </div>
    );
}

export default GenerarReporte;
