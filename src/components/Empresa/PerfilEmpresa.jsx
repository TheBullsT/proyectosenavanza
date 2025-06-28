import React from 'react';
import { useNavigate } from 'react-router-dom';
import CompanyCard from './CompanyCard';
import CompanyDetails from './CompanyDetails';

import './PerfilEmpresa.css';



const ProfileLayout = ({ company, details }) => {

  const navigate = useNavigate();

  // Función para redirigir a la página de edición de perfil
  const editar = () => {
    navigate('/editarperfil');
  };

  return (
    <div className="profile-layout">
      {/* Título principal */}
      <div className='title-empresa'>
        <h1>Informacion de Perfil</h1>
      </div>

      {/* Barra decorativa o separadora */}
      <div className='barra-empresa'>
        <span className='linea2'></span>
      </div>

      {/* Breadcrumb para navegación */}
      <nav className="breadcrumb">Home / Perfil</nav>

      {/* Sección principal donde se muestran los detalles */}
      <div className="main-section">
        <CompanyCard {...company} />
        <CompanyDetails data={details} />
      </div>

      {/* Pie de página con mensaje y botón para editar */}
      <footer className="footer-section-1">
        <p>
          Aquí habrá un mensaje relacionado a <br />
          que esta<br />
          visualizando el perfil de la empresa.
        </p>
        <button className="edit-button" onClick={editar}>Editar</button>

      </footer>
    </div>
  );
};

export default ProfileLayout;
