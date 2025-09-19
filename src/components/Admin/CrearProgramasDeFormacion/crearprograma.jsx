import React, { useState } from "react";
import './crearprograma.css';
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { MdSchool } from "react-icons/md";
import { toast } from "react-toastify";
import { apiGeneral } from "../../../api/apis";
import LoadingBaseDatos from "../../Loading/loading_base_datos";

const CrearProgramaFormacion = () => {
  // Estados locales para manejar los valores de los campos del formulario
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [modalidad, setModalidad] = useState("");
  const [nivel_programa, setNivelPrograma] = useState("");
  const [duracion, setDuracion] = useState("");
  const [loading, setLoading] = useState(false); // Estado para mostrar la pantalla de carga

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Petición POST a la API para crear el programa de formación
      const response = await apiGeneral.post("programa/create/", {
        nombre: nombre,
        descripcion: descripcion,
        modalidad: modalidad,
        nivel_programa: nivel_programa,
        duracion: parseInt(duracion)
      });

      console.log("Programa creado:", response.data);
      toast.success("Programa creado exitosamente");

      // Reseteo de campos del formulario
      setNombre("");
      setDescripcion("");
      setModalidad("");
      setNivelPrograma("");
      setDuracion("");

    } catch (error) {
      // Manejo de errores al crear el programa
      console.error("Error al crear el programa:", error.response?.data || error.message);
      toast.error("Error al crear el programa");
    } finally {
      setLoading(false); // Quita la pantalla de carga
    }
  };

  // Si el estado loading es verdadero, se muestra componente de carga
  if (loading) {
    return <LoadingBaseDatos mensaje="Creando programa de formación, por favor espere..." />;
  }

  return (
    <div className="main-right-bar">
      <NavbarAdmin />

      <div className="formacion-container">
        <p className="title">
          Crear Programa de Formación
          <span className="breadcrumb">
            Usted se encuentra en: <strong className="breadcrumb-active">Programas de Formación</strong>
          </span>
        </p>

        {/* Sección informativa con ícono */}
        <div className="form-info">
          <div className="icon"><MdSchool /></div>
          <p>
            En este espacio se podrán crear los programas de formación que estén vinculados con nosotros.<br />
            <strong>Debe ser creado para aparecer en la <span className="highlight">BASE DE DATOS</span>.</strong>
          </p>
        </div>

        {/* Formulario de creación */}
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="form-title">Nuevo Programa de Formación</h2>

          <div className="form-group">
            <label>Nombre de Programa de Formación</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required pattern="[a-zA-Z\s]+"/>
          </div>

          <div className="form-group">
            <label>Descripción de Programa de Formación</label>
            <textarea rows="3" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Modalidad</label>
              <select value={modalidad} onChange={(e) => setModalidad(e.target.value)} required>
                <option value="">Seleccione</option>
                <option value="Presencial">Presencial</option>
                <option value="Virtual">Virtual</option>
              </select>
            </div>

            <div className="form-group">
              <label>Nivel Formativo</label>
              <select value={nivel_programa} onChange={(e) => setNivelPrograma(e.target.value)} required>
                <option value="">Seleccione</option>
                <option value="tecnico">Técnico</option>
                <option value="tecnologo">Tecnólogo</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Duración <strong>(EN HORAS)</strong></label>
            <input
              type="number"
              min="1"
              value={duracion}
              onChange={(e) => setDuracion(e.target.value)}
              required
              placeholder="Ej: 40"
            />
          </div>

          {/* Botones de acción del formulario */}
          <div className="form-actions">
            <button className="btn-create" type="submit">Crear PF</button>
            <button
              className="btn-cancel"
              type="button"
              onClick={() => {
                setNombre("");
                setDescripcion("");
                setModalidad("");
                setNivelPrograma("");
                setDuracion("");
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearProgramaFormacion;
