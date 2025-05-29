import React from "react";
// Importar los estilos
import './crearprograma.css';
// Importar el componente NavBar
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
// Importar los iconos
import { MdSchool } from "react-icons/md";

const CrearProgramaFormacion = () => {
  return (
    <div className="main-right-bar">
      <NavbarAdmin /> {/* Barra de navegación superior */}

      <div className="formacion-container">
        {/* Título principal con ruta de navegación */}
        <p className="title">
          Crear Programa de Formación
          <span className="breadcrumb">
            You are here: <strong className="breadcrumb-active">Programas de Formación</strong>
          </span>
        </p>

        {/* Sección de información explicativa con ícono */}
        <div className="form-info">
          <div className="icon"><MdSchool /></div>
          <p>
            En este espacio se podrán crear los programas de formación que estén vinculados con nosotros.<br />
            <strong>Debe ser creada para aparecer en la <span className="highlight">BASE DE DATOS</span>.</strong>
          </p>
        </div>

        {/* Formulario para crear un nuevo programa */}
        <form className="form">
          <h2 className="form-title">Nuevo Programa de Formación</h2>

          {/* Campo para el nombre del programa */}
          <div className="form-group">
            <label>Nombre de Programa de Formación</label>
            <input type="text" />
          </div>

          {/* Campo para la descripción */}
          <div className="form-group">
            <label>Descripción de Programa de Formación</label>
            <textarea rows="3" />
          </div>

          {/* Fila con dos selectores: Modalidad y Nivel Formativo */}
          <div className="form-row">
            <div className="form-group">
              <label>Modalidad</label>
              <select>
                <option>Seleccione</option>
                <option>Presencial</option>
                <option>Virtual</option>
              </select>
            </div>

            <div className="form-group">
              <label>Nivel Formativo</label>
              <select>
                <option>Seleccione</option>
                <option>Técnico</option>
                <option>Tecnológico</option>
                <option>Operario</option>
              </select>
            </div>
          </div>

          {/* Selector para la duración */}
          <div className="form-group">
            <label>Duración</label>
            <select>
              <option>Seleccione</option>
              <option>1 mes</option>
              <option>3 meses</option>
              <option>6 meses</option>
            </select>
          </div>

          {/* Botones para crear o cancelar */}
          <div className="form-actions">
            <button className="btn-create" type="submit">Crear PF</button>
            <button type="button" className="btn-cancel">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearProgramaFormacion;
