import React, { useEffect, useState } from "react";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import "./ListarEmpresa.css";
import { Link } from 'react-router-dom';
import { MdHomeRepairService } from "react-icons/md";
import { FaEye, FaEdit, FaLock } from "react-icons/fa";
import { apiEmpresa } from "../../../api/apis";
import LoadingBaseDatos from "../../Loading/loading_base_datos";

const Listar_Empresa = () => {
  const [empresas, setEmpresas] = useState([]);
  const [loadingBaseDatos, setLoadingBaseDatos] = useState(true);

  // Obtener las empresas desde la API
  const obtenerEmpresas = async () => {
    setLoadingBaseDatos(true);
    try {
      const response = await apiEmpresa.get("", {
        headers: {
          "Content-Type": "application/json"
        }
      });
      setEmpresas(response.data);
    } catch (error) {
      console.error("Error al obtener las empresas:", error);
    } finally {
      setLoadingBaseDatos(false);
    }
  };

  useEffect(() => {
    obtenerEmpresas();
  }, []);

  if (loadingBaseDatos) return <LoadingBaseDatos />;
  if (!empresas || empresas.length === 0) return <p>No hay empresas registradas.</p>;

  return (
    <div className="empresa-container">
      <NavbarAdmin />

      <div className="visualizar-empresa-contenido">
        <p className="title">
          Listar Empresa
          <span className="breadcrumb"> You are here: <strong className="breadcrumb-active">Empresas</strong></span>
        </p>

        <div className="form-info">
          <div className="icon">
            <MdHomeRepairService />
          </div>
          <p>
            En este espacio podrás ver absolutamente todas las empresas<br />
            que <strong>están registradas en la BASE DE DATOS.</strong>
          </p>
        </div>

        <div className="header-bar">
          <h2 className="empresas-label">Empresas</h2>
          <div className="button-group">
            <button className="add-button">Agregar Empresa</button>
            <button className="report-button">Generar Reporte</button>
          </div>
        </div>

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
            {empresas.map((empresa, index) => (
              <tr key={empresa.id} className={index % 2 === 0 ? 'odd' : ''}>
                <td><strong>{empresa.razon_social}</strong></td>
                <td>{empresa.telefono}</td>
                <td>{empresa.direccion}</td>
                <td className="opciones">
                  <Link to={`/visualizacion-empresa/${empresa.id}`}><FaEye className="icon-action" /></Link>
                  <Link to={`/editar-empresa/${empresa.id}`}><FaEdit className="icon-action" /></Link>
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
