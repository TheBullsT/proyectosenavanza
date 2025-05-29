import React from "react";
// Importa los estilos CSS específicos para este componente
import './ModificarPrograma.css'; 
// Importa el componente NavbarAdmin para usar en esta vista
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin"; 
// Importar los iconos
import { MdSchool } from "react-icons/md"; 

// Componente funcional ModificarProgramaFormacion
const ModificarProgramaFormacion = () => {
  return (
    // Contenedor principal del contenido del lado derecho
    <div className="main-right-bar">
      {/* Barra de navegación del administrador */}
      <NavbarAdmin />

      {/* Contenedor principal del formulario y contenido */}
      <div className="formacion-container">

        {/* Título y breadcrumb que indica la ubicación dentro de la app */}
        <p className="title">
          Modificar Programa de Formacion
          <span className="breadcrumb">
            You are here: <strong className="breadcrumb-active">Programas de Formacion</strong>
          </span>
        </p>

        {/* Sección informativa con ícono y explicación */}
        <div className="form-info">
          <div className="icon">
            <MdSchool /> {/* Ícono de escuela */}
          </div>
          <p>
            En este espacio se podran modificar los programas de formacion que esten vinculados con nosotros.<br />
            <strong>Debe ser creada para aparecer en la <span className="highlight">BASE DE DATOS</span>.</strong>
          </p>
        </div>

        {/* Nombre del programa a modificar, aquí representado como texto placeholder */}
        <p className="program-name">&lt;Nombre del Programa de Formacion&gt;</p>

        {/* Formulario para modificar el programa de formación */}
        <form className="form">
          {/* Campo para el nombre del programa */}
          <div className="form-group">
            <label>Nombre de Programa de Formacion</label>
            <input type="text" />
          </div>

          {/* Campo para la descripción del programa */}
          <div className="form-group">
            <label>Descripcion de Programa de Formacion</label>
            <textarea rows="3" />
          </div>

          {/* Fila con dos campos select para modalidad y nivel formativo */}
          <div className="form-row">
            {/* Modalidad del programa */}
            <div className="form-group">
              <label>Modalidad</label>
              <select>
                <option>Seleccione</option>
                <option>Presencial</option>
                <option>Virtual</option>
              </select>
            </div>

            {/* Nivel formativo del programa */}
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

          {/* Campo select para duración del programa */}
          <div className="form-group">
            <label>Duracion</label>
            <select>
              <option>Seleccione</option>
              <option>1 mes</option>
              <option>3 meses</option>
              <option>6 meses</option>
            </select>
          </div>

          {/* Botones para modificar o cancelar */}
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
