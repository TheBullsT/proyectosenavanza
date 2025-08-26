import React from 'react';
import { useNavigate } from 'react-router-dom'

// Importa imagen de éxito desde la carpeta de assets
import exito from '../../assets/img/img-resultados-diagnostico/exito.png'

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
  const handleDescargarPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Programa Recomendado", 20, 20);

    doc.setFontSize(14);

    // Obtiene los datos del programa recomendado
    const nombre = datos?.programa_recomendado?.nombre || "No disponible";
    const descripcion = datos?.programa_recomendado?.descripcion || "";

    // Agrega texto al PDF
    doc.text(`Recomendación: ${nombre}`, 20, 40);
    doc.text("Descripción:", 20, 50);
    doc.text(doc.splitTextToSize(descripcion, 170), 20, 60);

    // Guarda y descarga el archivo
    doc.save("programa_recomendado.pdf");

    cerrar(); // Cierra el popup
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
