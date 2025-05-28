import React from "react";
import './ModificarPrograma.css';
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { MdSchool } from "react-icons/md";

const ModificarProgramaFormacion = () => {
  return (
    <div className="main-right-bar">
      <NavbarAdmin />
      <div className="formacion-container">
        <p className="title">Modificar Programa de Formacion
          <span className="breadcrumb"> You are here: <strong className="breadcrumb-active">Programas de Formacion</strong></span>
        </p>

        <div className="form-info">
          <div className="icon"><MdSchool /></div>
          <p>
            En este espacio se podran modificar los programas de formacion que esten vinculados con nosotros.<br />
            <strong>Debe ser creada para aparecer en la <span className="highlight">BASE DE DATOS</span>.</strong>
          </p>
        </div>

        <p className="program-name">&lt;Nombre del Programa de Formacion&gt;</p>

        <form className="form">
          <div className="form-group">
            <label>Nombre de Programa de Formacion</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Descripcion de Programa de Formacion</label>
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
            <label>Duracion</label>
            <select>
              <option>Seleccione</option>
              <option>1 mes</option>
              <option>3 meses</option>
              <option>6 meses</option>
            </select>
          </div>

          <div className="form-actions">
            <button className="btn-modify" type="submit">Modificar PF</button>
            <button type="button" className="btn-cancel">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModificarProgramaFormacion;
