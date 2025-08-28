import React, { useEffect, useState } from "react";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import "./ListarEmpresa.css";
import { Link } from 'react-router-dom';
import { MdHomeRepairService } from "react-icons/md";
import { FaEye, FaEdit, FaLock, FaLockOpen } from "react-icons/fa";
import { apiEmpresa } from "../../../api/apis";
import LoadingBaseDatos from "../../Loading/loading_base_datos";
import { toast } from "react-toastify";
import { jsPDF } from "jspdf";

const Listar_Empresa = () => {
  // Estado para guardar las empresas obtenidas desde la API
  const [empresas, setEmpresas] = useState([]);

  // Estado para mostrar u ocultar el loader
  const [loadingBaseDatos, setLoadingBaseDatos] = useState(true);

  // Estado para controlar el texto ingresado en la barra de búsqueda
  const [search, setSearch] = useState("");

  // Función para obtener la lista de empresas desde el backend
  const obtenerEmpresas = async () => {
    setLoadingBaseDatos(true); // Activar loader mientras carga
    try {
      const response = await apiEmpresa.get("", {
        headers: { "Content-Type": "application/json" }
      });
      setEmpresas(response.data); // Guardar empresas en el estado
    } catch (error) {
      console.error("Error al obtener las empresas:", error);
    } finally {
      setLoadingBaseDatos(false); // Ocultar loader
    }
  };

  // Llamar a la API cuando se carga el componente
  useEffect(() => {
    obtenerEmpresas();
  }, []);

  // Función para cambiar el estado de una empresa (activar o desactivar)
  const cambiarEstadoEmpresa = async (empresa) => {
    const nuevoEstado = empresa.estado === 1 ? 2 : 1; // Alterna entre 1 (activo) y 2 (inactivo)
    try {
      await apiEmpresa.put(`update/${empresa.id}/`, {
        estado: nuevoEstado
      }, {
        headers: { "Content-Type": "application/json" }
      });

      obtenerEmpresas(); // Refrescar lista después de actualizar
      toast.success("Estado cambiado con éxito");
    } catch (error) {
      console.error("Error al cambiar el estado:", error);
      toast.error("Error al cambiar el estado de la empresa");
    }
  };

  // Función para generar y descargar el reporte PDF de empresas
  const generarReportePDF = () => {
    const doc = new jsPDF();

    // Título del reporte
    doc.setFontSize(18);
    doc.text("Reporte de Empresas", 20, 20);

    doc.setFontSize(12);
    let y = 40; // posición inicial vertical del contenido

    // Recorrer todas las empresas y agregarlas al PDF
    empresas.forEach((empresa, index) => {
      doc.text(`${index + 1}. ${empresa.razon_social}`, 20, y);
      doc.text(`Teléfono: ${empresa.telefono || "N/A"}`, 20, y + 8);
      doc.text(`Dirección: ${empresa.direccion || "N/A"}`, 20, y + 16);
      doc.text(`Estado: ${empresa.estado === 1 ? "Activo" : "Inactivo"}`, 20, y + 24);

      y += 35; // espacio entre empresas

      // Si llega al final de la hoja, agregar una nueva página
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });

    // Descargar el archivo generado
    doc.save("reporte_empresas.pdf");
  };

  // Filtrar empresas según el texto de búsqueda
  const filteredEmpresas = empresas.filter((empresa) =>
    empresa.razon_social.toLowerCase().includes(search.toLowerCase())
  );

  // Mostrar loader mientras carga la información
  if (loadingBaseDatos) return <LoadingBaseDatos />;

  // Mostrar mensaje si no existen empresas
  if (!empresas || empresas.length === 0) return <p>No hay empresas registradas.</p>;

  return (
    <div className="empresa-container">
      {/* Barra de navegación del administrador */}
      <NavbarAdmin />

      <div className="visualizar-empresa-contenido">
        {/* Título y breadcrumb */}
        <p className="title">
          Listar Empresa
          <span className="breadcrumb"> Usted se encuentra en: <strong className="breadcrumb-active">Empresas</strong></span>
        </p>

        {/* Sección informativa */}
        <div className="form-info">
          <div className="icon"><MdHomeRepairService /></div>
          <p>
            En este espacio podrás ver absolutamente todas las empresas<br />
            que <strong>están registradas en la BASE DE DATOS.</strong>
          </p>
        </div>

        {/* Encabezado con botones de acción */}
        <div className="header-bar">
          <h2 className="empresas-label">Empresas</h2>
          <div className="button-group">
            {/* Botón para agregar empresa (falta enlazarlo a la ruta de creación) */}
            <button className="add-button">Agregar Empresa</button>

            {/* Botón para generar reporte PDF */}
            <button className="report-button" onClick={generarReportePDF}>
              Generar Reporte
            </button>
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

        {/* Tabla con el listado de empresas */}
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
                  {/* Ver detalles */}
                  <Link to={`/visualizacion-empresa/${empresa.id}`}>
                    <FaEye className="icon-action" />
                  </Link>
                  {/* Editar empresa */}
                  <Link to={`/modificar-empresa/${empresa.id}`}>
                    <FaEdit className="icon-action" />
                  </Link>
                  {/* Cambiar estado empresa */}
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
