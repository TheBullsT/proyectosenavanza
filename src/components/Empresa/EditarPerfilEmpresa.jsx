import React, { useEffect, useState } from 'react';
import { apiPerfil } from '../../api/apis';
import { apiEmpresa } from '../../api/apis';
import LoadingDatos from '../Loading/loading_datos';
import { useNavigate } from 'react-router-dom';
// Importar las notificaciones
import { toast } from 'react-toastify';
import './PerfilEmpresa.css';

const EditarPerfilEmpresa = () => {
  const [empresa, setEmpresa] = useState(null);
  const [loadingDatos, setLoadingDatos] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmpresa = async () => {
      setLoadingDatos(true);
      try {
        const response = await apiPerfil.get("", {
          headers: { 'Content-Type': 'application/json' }
        });
        setEmpresa(response.data);
      } catch (error) {
        console.error("Error al traer los datos de la empresa", error);
      } finally {
        setLoadingDatos(false);
      }
    };
    fetchEmpresa();
  }, []);

  if (loadingDatos) return <LoadingDatos />;
  if (!empresa) return <p>No hay datos para mostrar.</p>;

  // Actualizar campos editables
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpresa(prev => ({ ...prev, [name]: value }));
  };

  // Guardar cambios (aquí implementas tu PUT)
  const handleGuardar = async () => {
    try {
      console.log('Datos a guardar:', empresa);
      const actu = await apiEmpresa.put(`update/`, empresa);

      console.log(actu.data);
      toast.success("Datos guardados correctamente")
      navigate('/perfil');
    } catch (error) {
      console.error("Error al guardar:", error);
      toast.error("Error al guardar los datos");
    }
  };

  const iraPerfil = () => navigate('/perfil');

  return (
    <div className="profile-layout">
      {/* Título principal */}
      <div className="title-empresa">
        <h1>Editar Información de Perfil</h1>
      </div>

      {/* Barra decorativa */}
      <div className="barra-empresa">
        <span className="linea2"></span>
      </div>

      {/* Breadcrumb */}
      <nav className="breadcrumb">Home / Editar Perfil</nav>

      {/* Sección principal */}
      <div className="main-section">
        {/* === Company Card === */}
        <div className="company-card">
          <div className="company-image" />
          <h2 className="company-name">{empresa.razon_social}</h2>
          <div className="company-info">
            <div className="barra">
              <span className="linea"></span>
              <span className="texto">Info Perfil</span>
              <span className="linea"></span>
            </div>
            <div className="text-info">
              <p>{empresa.direccion}</p>
              <p>{empresa.correo_electronico}</p>
            </div>
          </div>
        </div>

        {/* === Company Details === */}
        <div className="company-details">
          <div>
            <div className="blocked">
              <strong>Tipo de Documento:</strong><br />
            </div>
            <div className="answer-details">{empresa.documento}</div>
            <hr />
          </div>

          <div>
            <div className="blocked">
              <strong>Número de Documento:</strong><br />
            </div>
            <div className="answer-details">{empresa.numero_documento}</div>
            <hr />
          </div>

          <div>
            <div className="blocked">
              <strong>Nombre de la empresa:</strong><br />
            </div>
            <div className="answer-details">{empresa.razon_social}</div>
            <hr />
          </div>
          <div>
            <strong>Teléfono Móvil:</strong><br />
            <input
              className="answer-details"
              name="telefono"
              value={empresa.telefono}
              onChange={handleChange}
            />
            <hr />
          </div>

          <div>
            <strong>Correo Electrónico:</strong><br />
            <input
              className="answer-details"
              name="correo_electronico"
              value={empresa.correo_electronico}
              onChange={handleChange}
            />
            <hr />
          </div>

          <div>
            <strong>Dirección Actual:</strong><br />
            <input
              className="answer-details"
              name="direccion"
              value={empresa.direccion}
              onChange={handleChange}
            />
            <hr />
          </div>

          <div>
            <div className="blocked">
              <strong>Actividad Económica:</strong><br />
            </div>
            <div className="answer-details">{empresa.actividad_economica}</div>
            <hr />
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <footer className="footer-section-1">
        <p>
          Estas editando el perfil de <br />
          <strong>{empresa.razon_social}</strong>
        </p>
        <button className="cancel-button" onClick={iraPerfil}>Cancelar</button>
        <button className="edit-button" onClick={handleGuardar}>Guardar</button>
      </footer>
    </div>
  );
};

export default EditarPerfilEmpresa;
