import React, { useState } from "react";
import './ListarPrograma.css';
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { FaEye, FaEdit, FaLock } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const programasMock = [
  { nombre: "<Nombre del PF>", codigo: "11111111111", nivel: "Tecnico" },
  { nombre: "<Nombre del PF>", codigo: "22222222222", nivel: "Tecnologo" },
  { nombre: "<Nombre del PF>", codigo: "33333333333", nivel: "Tecnico" },
  { nombre: "<Nombre del PF>", codigo: "44444444444", nivel: "Tecnologo" },
  { nombre: "<Nombre del PF>", codigo: "44444445555", nivel: "Tecnico" },
  { nombre: "<Nombre del PF>", codigo: "122616092803", nivel: "Tecnologo" },
  { nombre: "<Nombre del PF>", codigo: "00000000000", nivel: "Tecnologo" },
  { nombre: "<Nombre del PF>", codigo: "3456789876543", nivel: "Tecnico" },
];

const ListarProgramas = () => {
  const [search, setSearch] = useState("");

  const filteredProgramas = programasMock.filter((pf) =>
    pf.codigo.includes(search) || pf.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main-right-bar">
      <NavbarAdmin />

      <div className="visualizar-container">
        <p className="title">Listar Programa de formación
          <span className="breadcrumb"> You are here: <strong className="breadcrumb-active">Empresas</strong></span></p>
        <div className="form-info">
          <div className="icon">
            < MdSchool/>
          </div>
          <p>
            En este espacio se podrán listar los programas de formación que estén vinculados con nosotros.<br />
            <strong>Debe ser creada para aparecer en la <span className="highlight">BASE DE DATOS</span>.</strong>
          </p>
        </div>

        <div className="search-bar">
          <h2 className="empresas-label">Empresas</h2>
          <div className="grupo-botones">
            <button className="btn-agregar">Agregar PF</button>
            <button className="btn-reporte">Generar Reporte</button>
          </div>
        </div>

        <table className="program-table">
          <thead>
            <tr>
              <th>Nombre del PF</th>
              <th>Código de PF</th>
              <th>Nivel Formativo</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredProgramas.map((pf, index) => (
              <tr key={index} className={index % 2 === 1 ? "odd" : ""}>
                <td>{pf.nombre}</td>
                <td>{pf.codigo}</td>
                <td>{pf.nivel}</td>
                <td className="opciones">
                  <FaEye className="icon-action" title="Ver" />
                  <FaEdit className="icon-action" title="Editar" />
                  <FaLock className="icon-action" title="Eliminar" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListarProgramas;
