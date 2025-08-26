import React, { useEffect, useState } from "react";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import "./ListarEmpresa.css";
import { Link } from 'react-router-dom';
import { MdHomeRepairService } from "react-icons/md";
import { FaEye, FaEdit, FaLock, FaLockOpen } from "react-icons/fa";
import { apiEmpresa } from "../../../api/apis";
import LoadingBaseDatos from "../../Loading/loading_base_datos";
import { toast } from "react-toastify";

const Listar_Empresa = () => {
  const [empresas, setEmpresas] = useState([]); // Lista de empresas obtenidas de la API
  const [loadingBaseDatos, setLoadingBaseDatos] = useState(true); // Estado para mostrar el loader
  const [search, setSearch] = useState(""); // Barra de búsqueda

  // Función para obtener empresas desde la API
  const obtenerEmpresas = async () => {
    setLoadingBaseDatos(true);
    try {
      const response = await apiEmpresa.get("", {
        headers: {
          "Content-Type": "application/json"
        }
      });
      setEmpresas(response.data); // Guardar las empresas en el estado
    } catch (error) {
      console.error("Error al obtener las empresas:", error);
    } finally {
      setLoadingBaseDatos(false); // Ocultar el loader
    }
  };

  useEffect(() => {
    obtenerEmpresas(); // Llamar a la API al cargar el componente
  }, []);

  // Función para cambiar estado de la empresa (activar/desactivar)
  const cambiarEstadoEmpresa = async (empresa) => {
    const nuevoEstado = empresa.estado === 1 ? 2 : 1; // Cambia entre activo (1) y desactivado (2)

    try {
      await apiEmpresa.put(`update/${empresa.id}/`, {
        estado: nuevoEstado
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      obtenerEmpresas(); // Refrescar lista después del cambio
      toast.success("Estado cambiado con éxito");
    } catch (error) {
      console.error("Error al cambiar el estado de la empresa:", error);
      toast.error("Error al cambiar el estado de la empresa");
    }
  };

  // Filtrar empresas según el texto de búsqueda
  const filteredEmpresas = empresas.filter((empresa) =>
    empresa.razon_social.toLowerCase().includes(search.toLowerCase())
  );

  // Mostrar loader mientras carga la base de datos
  if (loadingBaseDatos) return <LoadingBaseDatos />;
  // Mostrar mensaje si no hay empresas registradas
  if (!empresas || empresas.length === 0) return <p>No hay empresas registradas.</p>;

  return (
    <div className="empresa-container">
      <NavbarAdmin /> {/* Barra de navegación del administrador */}

      <div className="visualizar-empresa-contenido">
        <p className="title">
          Listar Empresa
          <span className="breadcrumb"> Usted se encuentra en: <strong className="breadcrumb-active">Empresas</strong></span>
        </p>

        {/* Información introductoria */}
        <div className="form-info">
          <div className="icon">
            <MdHomeRepairService />
          </div>
          <p>
            En este espacio podrás ver absolutamente todas las empresas<br />
            que <strong>están registradas en la BASE DE DATOS.</strong>
          </p>
        </div>

        {/* Encabezado con botones de acción */}
        <div className="header-bar">
          <h2 className="empresas-label">Empresas</h2>
          <div className="button-group">
            <button className="add-button">Agregar Empresa</button>
            <button className="report-button">Generar Reporte</button>
          </div>
        </div>

        {/* Barra de búsqueda */}
        <input
          type="text"
          placeholder="Buscar por nombre de empresa"
          className="input-busqueda"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Tabla con listado de empresas */}
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
            {filteredEmpresas.map((empresa, index) => (
              <tr key={empresa.id} className={index % 2 === 0 ? 'odd' : ''}>
                <td><strong>{empresa.razon_social}</strong></td>
                <td>{empresa.telefono}</td>
                <td>{empresa.direccion}</td>
                <td className="opciones">
                  {/* Botón para ver detalles */}
                  <Link to={`/visualizacion-empresa/${empresa.id}`}>
                    <FaEye className="icon-action" />
                  </Link>
                  {/* Botón para editar */}
                  <Link to={`/modificar-empresa/${empresa.id}`}>
                    <FaEdit className="icon-action" />
                  </Link>
                  {/* Botón para activar/desactivar */}
                  {empresa.estado === 1 ? (
                    <FaLockOpen
                      className="icon-action icon-lock"
                      title="Desactivar empresa"
                      onClick={() => cambiarEstadoEmpresa(empresa)}
                      style={{ cursor: 'pointer' }}
                    />
                  ) : (
                    <FaLock
                      className="icon-action icon-lock"
                      title="Activar empresa"
                      onClick={() => cambiarEstadoEmpresa(empresa)}
                      style={{ cursor: 'pointer' }}
                    />
                  )}
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
