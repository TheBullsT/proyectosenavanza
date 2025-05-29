// Importa React y useState para manejar estado local
import React, { useState } from "react"; 
// Importa estilos específicos para este componente
import './ListarPrograma.css'; 
// Importa el componente NavbarAdmin para incluirlo en la vista
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin"; 
// Importar los iconos
import { FaEye, FaEdit, FaLock } from "react-icons/fa"; 
import { MdSchool } from "react-icons/md"; 
// Importa Link para navegación entre rutas sin recargar la página
import { Link } from "react-router-dom"; 
// Datos de ejemplo (mock) para los programas de formación
const programasMock = [
  { nombre: "<Nombre del PF>", codigo: "11111111111", nivel: "Tecnico" },
  { nombre: "<Nombre del PF>", codigo: "22222222222", nivel: "Tecnologo" },
  { nombre: "<Nombre del PF>", codigo: "33333333333", nivel: "Tecnico" },
  { nombre: "<Nombre del PF>", codigo: "44444444444", nivel: "Tecnologo" },
  { nombre: "<Nombre del PF>", codigo: "44444445555", nivel: "Tecnico" },
  { nombre: "<Nombre del PF>", codigo: "122616092803", nivel: "Tecnologo" },
  { nombre: "<Nombre del PF>", codigo: "00000000000", nivel: "Tecnologo" },
  { nombre: "<Nombre del PF>", codigo: "3456789876543", nivel: "Tecnico" },
];

// Componente funcional que lista los programas de formación
const ListarProgramas = () => {
  // Estado para almacenar el término de búsqueda ingresado por el usuario
  const [search, setSearch] = useState("");

  // Filtra la lista de programas según el código o el nombre, según el texto de búsqueda
  const filteredProgramas = programasMock.filter((pf) =>
    pf.codigo.includes(search) || pf.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main-right-bar">
      {/* Incluye la barra de navegación superior */}
      <NavbarAdmin />

      <div className="visualizar-container">
        {/* Título y breadcrumb */}
        <p className="title">
          Listar Programa de formación
          <span className="breadcrumb"> You are here: <strong className="breadcrumb-active">Empresas</strong></span>
        </p>

        {/* Información descriptiva con icono */}
        <div className="form-info">
          <div className="icon">
            <MdSchool />
          </div>
          <p>
            En este espacio se podrán listar los programas de formación que estén vinculados con nosotros.<br />
            <strong>Debe ser creada para aparecer en la <span className="highlight">BASE DE DATOS</span>.</strong>
          </p>
        </div>

        {/* Barra de búsqueda y botones de acción */}
        <div className="search-bar">
          <h2 className="empresas-label">Empresas</h2>
          <div className="grupo-botones">
            {/* Botón para agregar un nuevo programa de formación */}
            <button className="btn-agregar">Agregar PF</button>
            {/* Botón para generar un reporte (funcionalidad no implementada aquí) */}
            <button className="btn-reporte">Generar Reporte</button>
          </div>
        </div>

        {/* Tabla que muestra la lista de programas filtrados */}
        <table className="program-table">
          <thead>
            <tr>
              <th>Nombre del PF</th>
              <th>Código de PF</th>
              <th>Nivel Formativo</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Recorre el arreglo filtrado y muestra cada programa */}
            {filteredProgramas.map((pf, index) => (
              <tr key={index} className={index % 2 === 1 ? "odd" : ""}>
                <td>{pf.nombre}</td>
                <td>{pf.codigo}</td>
                <td>{pf.nivel}</td>
                {/* Iconos para acciones disponibles */}
                <td className="opciones">
                  {/* Icono para ver detalles, enlace a otra ruta */}
                  <Link to='/visualizacion-programa'><FaEye className="icon-action" title="Ver" /></Link>
                  {/* Icono para editar programa */}
                  <FaEdit className="icon-action" title="Editar" />
                  {/* Icono para eliminar programa */}
                  <FaLock className="icon-action" title="Eliminar" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Exporta el componente para usarlo en otras partes de la aplicación
export default ListarProgramas;
