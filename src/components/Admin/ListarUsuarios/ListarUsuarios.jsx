import React, { useEffect, useState } from "react";
import './ListarUsuarios.css'; // Puedes reutilizar el mismo CSS o copiarlo como ListarUsuarios.css
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { FaEye, FaEdit, FaLock } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { apiGeneral } from "../../../api/apis";
import LoadingBaseDatos from "../../Loading/loading_base_datos";

const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuarios = async () => {
      setLoading(true);
      try {
        const response = await apiGeneral.get("users/");
        setUsuarios(response.data);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  const filteredUsuarios = usuarios.filter(
    (user) =>
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <LoadingBaseDatos />;
  }

  return (
    <div className="main-right-bar">
      <NavbarAdmin />

      <div className="visualizar-container">
        <p className="title">
          Listar Usuarios
          <span className="breadcrumb"> You are here: <strong className="breadcrumb-active">Usuarios</strong></span>
        </p>

        <div className="form-info">
          <div className="icon"><MdPeople /></div>
          <p>
            En este espacio podrás listar todos los usuarios registrados en el sistema.<br />
            <strong>Recuerda que están en la <span className="highlight">BASE DE DATOS</span>.</strong>
          </p>
        </div>

        <div className="search-bar">
          <h2 className="empresas-label">Usuarios</h2>
          <div className="grupo-botones">
            <button className="btn-reporte">Generar Reporte</button>
          </div>
        </div>

        <input
          type="text"
          placeholder="Buscar por nombre o correo"
          className="input-busqueda"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <table className="program-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Correo</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsuarios.map((user, index) => (
              <tr key={user.id} className={index % 2 === 1 ? "odd" : ""}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className="opciones">
                  <Link to={`/visualizacion-usuarios/${user.id}`}>
                    <FaEye className="icon-action" title="Ver" />
                  </Link>
                  <Link to={`/modificar-usuarios/${user.id}`}>
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

export default ListarUsuarios;
