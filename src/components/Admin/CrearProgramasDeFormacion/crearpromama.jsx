import React from "react";
import './crearprograma.css';
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { MdSchool } from "react-icons/md";

const CrearProgramaFormacion = () => {
  return (
    <div className="main-right-bar">
      <NavbarAdmin />

      <div className="formacion-container">
        <p className="title">Crear Programa de Formación
          <span className="breadcrumb"> You are here: <strong className="breadcrumb-active">Programas de Formación</strong></span>
        </p>

        <div className="form-info">
          <div className="icon"><MdSchool /></div>
          <p>
            En este espacio se podrán crear los programas de formación que estén vinculados con nosotros.<br />
            <strong>Debe ser creada para aparecer en la <span className="highlight">BASE DE DATOS</span>.</strong>
          </p>
        </div>

        <form className="form">
          <h2 className="form-title">Nuevo Programa de Formación</h2>

          <div className="form-group">
            <label>Nombre de Programa de Formación</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Descripción de Programa de Formación</label>
            <textarea rows="3" />
          </div>

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

          <div className="form-group">
            <label>Duración</label>
            <select>
              <option>Seleccione</option>
              <option>1 mes</option>
              <option>3 meses</option>
              <option>6 meses</option>
            </select>
          </div>

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
