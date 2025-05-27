import React from "react";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import "./VisualizarEmpresa.css";
import { MdHomeRepairService } from "react-icons/md";


const EmpresaList = () => {
  const empresas = Array(9).fill({
    nombre: '<Nombre de la empresa>',
    telefono: '+57 300 000 0000',
    direccion: 'Cra#0 Trans #0 - 00',
  });

  return (
    <div className="empresa-container">
        <NavbarAdmin />
        <div className="visualizar-empresa-contenido">
        <h1 className="titulo">
          Visualizar Empresa
          <span className="breadcrumb">You are here: <strong className="breadcrumb-actual">Empresas</strong></span>
        </h1>

        <div className="info-box">
          <div className="icon"><MdHomeRepairService/><i className="fas fa-home"></i></div>
          <p>
            En este espacio podrás visualizar la empresa que desees,<br />
            <strong>siempre y cuando esté registrada en la BASE DE DATOS.</strong>
          </p>
        </div>

        <div className="search-add">
          <input type="text" placeholder="Buscar empresa" className="search-input" />
          <button className="add-button">Agregar Empresa</button>
        </div>

        <h2 className="empresas-heading">Empresas</h2>

        <table className="empresa-table">
          <thead>
            <tr>
              <th>Nombre de la empresa</th>
              <th>Número de Teléfono Actual</th>
              <th>Dirección Actual</th>
            </tr>
          </thead>
          <tbody>
            {empresas.map((empresa, index) => (
              <tr key={index} className={index % 2 === 0 ? 'odd' : ''}>
                <td><strong>{empresa.nombre}</strong></td>
                <td>{empresa.telefono}</td>
                <td>{empresa.direccion}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  );
};

export default EmpresaList;