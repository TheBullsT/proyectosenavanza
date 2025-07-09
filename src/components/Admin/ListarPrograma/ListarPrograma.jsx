import React, { useEffect, useState } from "react";
import './ListarPrograma.css';
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { FaEye, FaEdit, FaLock } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { apiGeneral } from "../../../api/apis";
import LoadingBaseDatos from "../../Loading/loading_base_datos"; // Componente de carga

const ListarProgramas = () => {
  const [programas, setProgramas] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
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

    fetchProgramas();
  }, []);

  const filteredProgramas = programas.filter((pf) =>
    pf.id.includes(search) || pf.nombre.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <LoadingBaseDatos />;
  }

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
            En este espacio se podrán listar los programas de formación que estén vinculados con nosotros.<br />
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
                  <FaLock className="icon-action" title="Eliminar (no disponible)" />
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
