import React, { useState } from "react";
import './VisualizarPrograma.css';
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
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
  { nombre: "<Nombre del PF>", codigo: "12345678987654321", nivel: "Tecnico" },
];

const VisualizarProgramas = () => {
  const [search, setSearch] = useState("");

  const filteredProgramas = programasMock.filter((pf) =>
    pf.codigo.includes(search) || pf.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main-right-bar">
      <NavbarAdmin />

      <div className="visualizar-container">
        <p className="title">Visualizar Programa de Formacion
          <span className="breadcrumb"> You are here: <strong className="breadcrumb-active">Programas de Formacion</strong></span>
        </p>

        <div className="form-info">
          <div className="icon"><MdSchool /></div>
          <p>
            En este espacio se podran visualizar los programas de formacion que esten vinculados con nosotros.<br />
            <strong>Debe ser creada para aparecer en la <span className="highlight">BASE DE DATOS</span>.</strong>
          </p>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Codigo de Programa de Formación"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn-agregar">Agregar PF</button>
        </div>

        <h3 className="sub-title">Programas de Formacion</h3>

        <table className="program-table">
          <thead>
            <tr>
              <th>Nombre del PF</th>
              <th>Codigo de PF</th>
              <th>Nivel Formativo</th>
            </tr>
          </thead>
          <tbody>
            {filteredProgramas.map((pf, index) => (
              <tr key={index}>
                <td>{pf.nombre}</td>
                <td>{pf.codigo}</td>
                <td>{pf.nivel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VisualizarProgramas;
