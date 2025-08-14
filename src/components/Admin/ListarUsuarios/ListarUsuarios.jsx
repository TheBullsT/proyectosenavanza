import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance'; // Importa configuración de Axios
import { FaEdit, FaLock } from 'react-icons/fa';
import '../../styles/ListarUsuarios.css';

const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]); // Estado para almacenar lista de usuarios
  const [filtro, setFiltro] = useState(''); // Estado para controlar el filtro de búsqueda

  // useEffect para cargar los usuarios al montar el componente
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axiosInstance.get('/usuarios/'); // Llamada GET a la API
        setUsuarios(response.data); // Guarda los usuarios en el estado
      } catch (error) {
        console.error('Error al obtener los usuarios:', error); // Manejo de error
      }
    };

    fetchUsuarios(); // Se ejecuta la función para traer los datos
  }, []);

  // Filtra usuarios según el texto ingresado en el input
  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.username.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="listar-usuarios">
      <h2>Lista de Usuarios</h2>

      {/* Input para filtrar usuarios por nombre */}
      <input
        type="text"
        placeholder="Buscar usuario..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="filtro-usuarios"
      />

      {/* Tabla que lista los usuarios */}
      <table>
        <thead>
          <tr>
            <th>Nombre de usuario</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.username}</td>
              <td>{usuario.email}</td>
              <td>
                {/* Botón para editar usuario */}
                <Link to={`/usuarios/editar/${usuario.id}`} className="btn-editar">
                  <FaEdit />
                </Link>

                {/* Icono de candado (bloqueo) sin funcionalidad implementada aún */}
                <button className="btn-bloquear">
                  <FaLock />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarUsuarios;
