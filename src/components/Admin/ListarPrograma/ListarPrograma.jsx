import React, { useEffect, useState } from "react";
import './ListarPrograma.css';
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { FaEye, FaEdit, FaLock, FaLockOpen, FaTrash } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { apiGeneral } from "../../../api/apis";
import LoadingBaseDatos from "../../Loading/loading_base_datos";
import { toast } from "react-toastify";

const ListarProgramas = () => {
  const [programas, setProgramas] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Obtener programas
  const fetchProgramas = async () => {
    setLoading(true);
    try {
      const response = await apiGeneral.get("programas/");
      setProgramas(response.data);
    } catch (error) {
      console.error("Error al obtener programas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProgramas();
  }, []);

  // Cambiar estado del programa
  const cambiarEstadoPrograma = async (programa) => {
    const nuevoEstado = programa.estado === 1 ? 2 : 1;
    try {
      await apiGeneral.put(`programa/${programa.id}/`, {
        estado: nuevoEstado,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success(`Estado cambiado correctamente`);
      fetchProgramas();
    } catch (error) {
      console.error("Error al cambiar estado:", error);
      toast.error("Error al cambiar estado");
    }
  };

  // Eliminar programa
  const eliminarPrograma = async (programaId) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este programa?")) {
      try {
        await apiGeneral.delete(`programa/${programaId}/`);
        toast.success("Programa eliminado");
        fetchProgramas();
      } catch (error) {
        console.error("Error al eliminar:", error);
        toast.error("Error al eliminar el programa");
      }
    }
  };


  const filteredProgramas = programas.filter((pf) =>
    pf.id.toString().includes(search) ||
    pf.nombre.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <LoadingBaseDatos />;

  return (
    <div className="main-right-bar">
      <NavbarAdmin />

      <div className="visualizar-container">
        <p className="title">
          Listar Programa de formación
          <span className="breadcrumb"> You are here: <strong className="breadcrumb-active">Programas</strong></span>
        </p>

        <div className="form-info">
          <div className="icon"><MdSchool /></div>
          <p>
            En este espacio se podrán listar los programas de formación que estén vinculados.<br />
            <strong>Debe estar creado en la <span className="highlight">BASE DE DATOS</span>.</strong>
          </p>
        </div>

        <div className="search-bar">
          <h2 className="empresas-label">Programas</h2>
          <div className="grupo-botones">
            <button className="btn-agregar" onClick={() => navigate("/crear-programa")}>Agregar PF</button>
            <button className="btn-reporte">Generar Reporte</button>
          </div>
        </div>

        <input
          type="text"
          placeholder="Buscar por nombre"
          className="input-busqueda"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <table className="program-table">
          <thead>
            <tr>
              <th>Nombre del PF</th>
              <th>Nivel Formativo</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredProgramas.map((pf, index) => (
              <tr key={pf.id} className={index % 2 === 1 ? "odd" : ""}>
                <td>{pf.nombre}</td>
                <td>{pf.nivel_programa}</td>
                <td className="opciones">
                  <Link to={`/visualizacion-programa/${pf.id}`}>
                    <FaEye className="icon-action" title="Ver" />
                  </Link>
                  <Link to={`/modificar-programa/${pf.id}`}>
                    <FaEdit className="icon-action" title="Editar" />
                  </Link>
                  {pf.estado === 1 ? (
                    <FaLockOpen
                      className="icon-action icon-lock"
                      title="Desactivar"
                      onClick={() => cambiarEstadoPrograma(pf)}
                      style={{ cursor: 'pointer' }}
                    />
                  ) : (
                    <FaLock
                      className="icon-action icon-lock"
                      title="Activar"
                      onClick={() => cambiarEstadoPrograma(pf)}
                      style={{ cursor: 'pointer' }}
                    />
                  )}
                  <FaTrash
                    className="icon-action icon-delete"
                    title="Eliminar"
                    onClick={() => eliminarPrograma(pf.id)}
                    style={{ cursor: 'pointer', marginLeft: '10px' }}
                  />
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
