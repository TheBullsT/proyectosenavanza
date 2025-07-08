import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Estilos
import "./ListarEmpresa.css";

// Componentes e íconos
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { MdHomeRepairService } from "react-icons/md";
import { FaEye, FaEdit, FaLock } from "react-icons/fa";

// Notificaciones
import { toast } from "react-toastify";

// API
import { apiEmpresa } from "../../../api/apis";

const Listar_Empresa = () => {
  const [empresas, setEmpresas] = useState([]);

  // Cargar empresas desde la API
  useEffect(() => {
    const obtenerEmpresas = async () => {
      try {
        const response = await apiEmpresa.get("/");
        setEmpresas(response.data);
      } catch (error) {
        console.error("Error al obtener las empresas:", error);
        toast.error("Error al cargar las empresas.");
      }
    };

    obtenerEmpresas();
  }, []);

  return (
    <div className="empresa-container">
      <NavbarAdmin />

      <div className="visualizar-empresa-contenido">
        {/* Título con breadcrumb */}
        <p className="title">
          Listar Empresa
          <span className="breadcrumb">
            You are here: <strong className="breadcrumb-active">Empresas</strong>
          </span>
        </p>

        {/* Introducción */}
        <div className="form-info">
          <div className="icon">
            <MdHomeRepairService />
          </div>
          <p>
            En este espacio podrás ver absolutamente todas las empresas<br />
            que <strong>están registradas en la BASE DE DATOS.</strong>
          </p>
        </div>

        {/* Encabezado y botones */}
        <div className="header-bar">
          <h2 className="empresas-label">Empresas</h2>
          <div className="button-group">
            <Link to="/crear-empresa" className="add-button">Agregar Empresa</Link>
            <button className="report-button">Generar Reporte</button>
          </div>
        </div>

        {/* Tabla de empresas */}
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
            {empresas.length > 0 ? (
              empresas.map((empresa, index) => (
                <tr key={empresa.id} className={index % 2 === 0 ? "odd" : ""}>
                  <td><strong>{empresa.razon_social}</strong></td>
                  <td>{empresa.telefono}</td>
                  <td>{empresa.direccion}</td>
                  <td className="opciones">
                    <Link to={`/visualizacion-empresa/${empresa.id}`}>
                      <FaEye className="icon-action" title="Ver" />
                    </Link>
                    <Link to={`/editar-empresa/${empresa.id}`}>
                      <FaEdit className="icon-action" title="Editar" />
                    </Link>
                    <FaLock className="icon-action" title="Desactivar" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No hay empresas registradas.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listar_Empresa;
