import React, { useEffect, useState } from 'react';
import { apiPerfil } from '../../api/apis';
import LoadingDatos from '../Loading/loading_datos';
import { useNavigate } from 'react-router-dom';
import './PerfilEmpresa.css';

const PerfilEmpresa = () => {
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

  // Funciones
  const editar = () => navigate('/editarperfil');
  const iraPerfil = () => navigate('/perfil');

  return (
    <div className="profile-layout">
      {/* Título principal */}
      <div className="title-empresa">
        <h1>Información de Perfil</h1>
      </div>

      {/* Barra decorativa */}
      <div className="barra-empresa">
        <span className="linea2"></span>
      </div>

      {/* Breadcrumb */}
      <nav className="breadcrumb">Home / Perfil</nav>

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
            <strong>Tipo de Documento:</strong><br />
            <div className="answer-details">{empresa.documento}</div>
            <hr />
          </div>
          <div>
            <strong>Número de Documento:</strong><br />
            <div className="answer-details">{empresa.numero_documento}</div>
            <hr />
          </div>
          <div>
            <strong>Nombre de la empresa:</strong><br />
            <div className="answer-details">{empresa.razon_social}</div>
            <hr />
          </div>
          <div>
            <strong>Teléfono Móvil:</strong><br />
            <div className="answer-details">{empresa.telefono}</div>
            <hr />
          </div>
          <div>
            <strong>Correo Electrónico:</strong><br />
            <div className="answer-details">{empresa.correo_electronico}</div>
            <hr />
          </div>
          <div>
            <strong>Dirección Actual:</strong><br />
            <div className="answer-details">{empresa.direccion}</div>
            <hr />
          </div>
          <div>
            <strong className='blocked'>Actividad Económica:</strong><br />
            <div className="answer-details">{empresa.actividad_economica}</div>
            <hr />
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <footer className="footer-section-1">
        <p>
          Estas revisando el perfil de <br />
          <strong> {empresa.razon_social}</strong>
        </p>
        <button className="edit-button" onClick={editar}>Editar</button>
      </footer>
    </div>
  );
};

export default PerfilEmpresa;
