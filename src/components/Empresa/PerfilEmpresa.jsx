import React from 'react';
import CompanyCard from './CompanyCard';
import CompanyDetails from './CompanyDetails';
import './PerfilEmpresa.css';

const ProfileLayout = ({ company, details }) => (
    <div className="profile-layout">
      <div className='title'><h1>Informacion de Perfil</h1></div> 
      <div className='barra2'>
        <span className='linea2'></span>
      </div>
      
      <nav className="breadcrumb">Home / Perfil</nav>
      <div className="main-section">
        <CompanyCard {...company} />
        <CompanyDetails data={details} />
      </div>
      <footer className="footer-section">
        <p>Aquí habrá un mensaje relacionado a que esta<br></br> visualizando el perfil de la empresa.</p>
        <button className="edit-button">Editar</button>
      </footer>
    </div>
  );
  
  export default ProfileLayout;