import React from 'react';
import CompanyCard from './CompanyCard';
import CompanyDetails from './EditCompanyDetails';
import './PerfilEmpresa.css';
import { useNavigate } from 'react-router-dom';

const ProfileLayout = ({ company, details }) => {
  const navigate = useNavigate();

  const IraPerfil = () =>{
    navigate('/perfil');
  }
  return (

    <div className="profile-layout">
      <div className='title'><h1>Informacion de Perfil</h1></div> 
      <div className='barra2'>
        <span className='linea2'></span>
      </div>
      
      <nav className="breadcrumb">Home / Editar Perfil</nav>
      <div className="main-section">
        <CompanyCard {...company} />
        <CompanyDetails data={details} />
      </div>
      <footer className="footer-section">
        <p>Aquí habrá un mensaje relacionado a que esta<br></br> visualizando el perfil de la empresa.</p>
        <button className='cancel-button' onClick={IraPerfil} >Cancelar</button>
        <button className="edit-button" onClick={IraPerfil}>Guardar</button>
      </footer>
    </div>
  )
};
  
  export default ProfileLayout;