import React from 'react';
import { useNavigate } from 'react-router-dom';
import CompanyCard from './CompanyCard';
import CompanyDetails from './CompanyDetails';
import './PerfilEmpresa.css';

const ProfileLayout = ({ company, details }) => {
  const navigate = useNavigate();

  const editar = () => {
    navigate('/editarperfil');
  };

  return (
    <div className="profile-layout">
      <div className='title-empresa'><h1>Informacion de Perfil</h1></div> 
      <div className='barra-empresa'>
        <span className='linea2'></span>
      </div>
      
      <nav className="breadcrumb">Home / Perfil</nav>
      <div className="main-section">
        <CompanyCard {...company} />
        <CompanyDetails data={details} />
      </div>
      <footer className="footer-section-1">
        <p>Aquí habrá un mensaje relacionado a <br /> que esta<br></br> visualizando el perfil de la empresa.</p>
        <button className="edit-button" onClick={editar}>Editar</button>
      </footer>
    </div>
  );
};

export default ProfileLayout;
