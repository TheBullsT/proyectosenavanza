import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { MdPeopleAlt } from "react-icons/md";
import { apiGeneral } from "../../../api/apis";
import LoadingBaseDatos from "../../Loading/loading_base_datos";
import './ModificarUsuario.css';
import { toast } from "react-toastify";

const ModificarUsuario = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: ""
  });

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await apiGeneral.get(`/users/${id}/`);
        setUsuario(response.data);
        setForm(response.data);
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsuario();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiGeneral.put(`/users/${id}/`, form);
      toast.success("Usuario modificado con éxito");
      navigate("/listar-usuarios");
    } catch (error) {
      console.error("Error al modificar usuario:", error);
      toast.error("Error al modificar el usuario");
    }
  };

  if (loading) return <LoadingBaseDatos />;
  if (!usuario) return <p>No se encontró el usuario.</p>;

  return (
    <div className="main-right-bar">
      <NavbarAdmin />

      <div className="modificar-usuario-contenido">
        <div className="modificar-usuario-container">
          <h1 className="titulo-usuario">
            Modificar Usuario
            <span className="breadcrumb-usuario">
              Usted se encuentra en: <strong className="breadcrumb-actual-usuario">Usuarios</strong>
            </span>
          </h1>

          <div className="icon-box-usuario">
            <div className="icon-usuario">
              <MdPeopleAlt />
            </div>
            <p>
              Aquí puedes modificar la información de un usuario registrado.<br />
              <strong>Los cambios se guardarán en la <span className="highlight">BASE DE DATOS</span>.</strong>
            </p>
          </div>

          <form className="formulario-usuario" onSubmit={handleSubmit}>
            <h2 className="subtitulo-usuario">{form.username}</h2>

            <div className="campo-form-usuario campo-nombre-usuario">
              <label>Nombre de Usuario</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
              />
            </div>

            <div className="grid-doble-usuario">
              <div className="campo-form-usuario">
                <label>Nombre</label>
                <input
                  type="text"
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                />
              </div>
              <div className="campo-form-usuario">
                <label>Apellido</label>
                <input
                  type="text"
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="campo-form-usuario">
              <label>Correo Electrónico</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="boton-contenedor-usuario">
              <button type="submit" className="boton-modificar-usuario">
                Modificar Usuario
              </button>
              <button type="button" className="boton-regresar-usuario" onClick={() => navigate(-1)}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModificarUsuario;
