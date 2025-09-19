// Importaciones necesarias para React y hooks
import React, { useEffect, useState } from "react";
// Importación de hooks de enrutamiento
import { useParams, useNavigate } from "react-router-dom";
// Navbar para la vista de administrador
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
// Icono para la sección de usuario
import { MdPeopleAlt } from "react-icons/md";
// Cliente API para solicitudes HTTP
import { apiGeneral } from "../../../api/apis";
// Componente de carga para la base de datos
import LoadingBaseDatos from "../../Loading/loading_base_datos";
// Estilos CSS para la vista
import './ModificarUsuario.css';
// Notificaciones de éxito/error
import { toast } from "react-toastify";

const ModificarUsuario = () => {
  const { id } = useParams(); // Obtener ID del usuario desde la URL
  const navigate = useNavigate(); // Hook para navegación
  const [usuario, setUsuario] = useState(null); // Estado para almacenar datos del usuario
  const [loading, setLoading] = useState(true); // Estado para mostrar carga
  const [form, setForm] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: ""
  });

  // Cargar datos del usuario al montar el componente
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

  // Maneja cambios en los campos del formulario
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Envía los datos modificados al servidor
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

      {/* Contenedor principal */}
      <div className="modificar-usuario-contenido">
        <div className="modificar-usuario-container">
          {/* Título de la vista */}
          <h1 className="titulo-usuario">
            Modificar Usuario
            <span className="breadcrumb-usuario">
              Usted se encuentra en: <strong className="breadcrumb-actual-usuario">Usuarios</strong>
            </span>
          </h1>

          {/* Caja de información con icono */}
          <div className="icon-box-usuario">
            <div className="icon-usuario">
              <MdPeopleAlt />
            </div>
            <p>
              Aquí puedes modificar la información de un usuario registrado.<br />
              <strong>Los cambios se guardarán en la <span className="highlight">BASE DE DATOS</span>.</strong>
            </p>
          </div>

          {/* Formulario de modificación */}
          <form className="formulario-usuario" onSubmit={handleSubmit}>
            <h2 className="subtitulo-usuario">{form.username}</h2>

            {/* Campo usuario */}
            <div className="campo-form-usuario campo-nombre-usuario">
              <label>Nombre de Usuario</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
              />
            </div>

            {/* Campo email */}
            <div className="campo-form-usuario">
              <label>Correo Electrónico</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            {/* Numero de documento */}
            <div className="campo-form-usuario">
              <label>Número de Documento</label>
              <input
                type="number"
                name="number"
                value={form.empresa.numero_documento}
                onChange={handleChange}
                disabled
              />
            </div>
            {/* Razón Social */}
            <div className="campo-form-usuario">
              <label>Razón Social</label>
              <input
                type="text"
                name="text"
                value={form.empresa.razon_social}
                onChange={handleChange}
              />
            </div>
            {/* Dirección*/}
            <div className="campo-form-usuario">
              <label>Dirección</label>
              <input
                type="text"
                name="text"
                value={form.empresa.direccion}
                onChange={handleChange}
              />
            </div>

            {/* Telefono */}
            <div className="campo-form-usuario">
              <label>Telefono</label>
              <input
                type="tel"
                name="tel"
                value={form.empresa.telefono}
                onChange={handleChange}
              />
            </div>


            {/* Botones de acción */}
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
