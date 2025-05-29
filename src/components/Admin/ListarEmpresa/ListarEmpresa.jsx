import React from "react";
// Importar el componente NavBar
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
// Importar los estilos
import "./ListarEmpresa.css";
// Para enlaces internos sin recargar la página
import { Link } from 'react-router-dom';
// Importar los iconos
import { MdHomeRepairService } from "react-icons/md";
import { FaEye, FaEdit, FaLock } from "react-icons/fa";

const Listar_Empresa = () => {
  // Arreglo con 8 elementos idénticos que simulan empresas registradas
  const empresas = Array(8).fill({
    nombre: '<Nombre de la empresa>',
    telefono: '+57 300 000 0000',
    direccion: 'Cra#0 Trans #0 - 00',
  });

  return (
    <div className="empresa-container">
      {/* Incluye el navbar admin */}
      <NavbarAdmin />

      <div className="visualizar-empresa-contenido">
        {/* Título principal con breadcrumb */}
        <p className="title">
          Listar Empresa
          <span className="breadcrumb"> You are here: <strong className="breadcrumb-active">Empresas</strong></span>
        </p>

        {/* Información descriptiva con icono */}
        <div className="form-info">
          <div className="icon">
            <MdHomeRepairService />
          </div>
          <p>
            En este espacio podras ver absolutamente todas las empresas<br />
            que <strong>estan registradas en la BASE DE DATOS.</strong>
          </p>
        </div>

        {/* Barra de título secundario y botones */}
        <div className="header-bar">
          <h2 className="empresas-label">Empresas</h2>
          <div className="button-group">
            {/* Botones para agregar empresa y generar reporte */}
            <button className="add-button">Agregar Empresa</button>
            <button className="report-button">Generar Reporte</button>
          </div>
        </div>

        {/* Tabla que lista las empresas */}
        <table className="empresa-table">
          <thead>
            <tr>
              <th>Nombre de la empresa</th>
              <th>Número de Teléfono Actual</th>
              <th>Dirección Actual</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapeo del arreglo para mostrar cada empresa */}
            {empresas.map((empresa, index) => (
              <tr key={index} className={index % 2 === 0 ? 'odd' : ''}>
                <td><strong>{empresa.nombre}</strong></td>
                <td>{empresa.telefono}</td>
                <td>{empresa.direccion}</td>
                {/* Acciones para ver, editar y eliminar */}
                <td className="opciones">
                  <Link to='/visualizacion-empresa'><FaEye className="icon-action" /></Link>
                  <FaEdit className="icon-action" />
                  <FaLock className="icon-action" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listar_Empresa;
