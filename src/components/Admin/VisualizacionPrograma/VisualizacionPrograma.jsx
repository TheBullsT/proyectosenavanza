import React, { useEffect, useState } from "react";
import "./VisualizacionPrograma.css";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { MdHomeRepairService } from "react-icons/md";
import { useParams } from "react-router-dom";
import { apiGeneral } from "../../../api/apis";
import LoadingBaseDatos from "../../Loading/loading_base_datos";

const Visualizacion_Programa = () => {
  const { id } = useParams();
  const [programa, setPrograma] = useState(null);
  const [loading, setLoading] = useState(true);

  const obtenerPrograma = async () => {
    try {
      const response = await apiGeneral.get(`programa/${id}/`);
      setPrograma(response.data);
    } catch (error) {
      console.error("Error al obtener programa:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerPrograma();
  }, [id]);

  if (loading) return <LoadingBaseDatos />;
  if (!programa) return <p>No se encontró información del programa.</p>;

  return (
    <div className="visualizacion-programa-container">
      <NavbarAdmin />

      <div className="visualizacion-programa-contenido">
        <h1 className="titulo-programa">
          Visualización de Programa de Formación
          <span className="breadcrumb-programa">
            Usted se encuentra en: <strong className="breadcrumb-actual-programa">Programa de Formación</strong>
          </span>
        </h1>

        <div className="icon-box-programa">
          <div className="icon-programa">
            <MdHomeRepairService />
          </div>
          <p>
            En este espacio se podrán visualizar los programas de formación que estén vinculados con nosotros.<br />
            <strong>Debe estar creado para aparecer en la BASE DE DATOS.</strong>
          </p>
        </div>

        <div className="info-box-visualizacion-programa">
          <h2 className="subtitulo-programa">{programa.nombre}</h2>

          <form className="formulario-programa">
            <div className="campo-form-programa campo-nombre-programa">
              <label>Descripción</label>
              <textarea
                className="descripcion-programa"
                value={programa.descripcion || ""}
                readOnly
                rows={5}
              />
            </div>

            <div className="grid-doble-programa">
              <div className="campo-form-programa">
                <label>Modalidad</label>
                <input
                  type="text"
                  value={programa.modalidad || ""}
                  readOnly
                />
              </div>

              <div className="campo-form-programa">
                <label>Nivel Formativo</label>
                <input
                  type="text"
                  value={programa.nivel_programa || ""}
                  readOnly
                />
              </div>
            </div>

            <div className="campo-form-programa">
              <label>Duración</label>
              <input
                type="text"
                value={programa.duracion || ""}
                readOnly
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Visualizacion_Programa;
