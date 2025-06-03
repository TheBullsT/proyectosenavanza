import React from 'react';
import CompanyCard from './CompanyCard';        // Componente para mostrar resumen de la empresa
import CompanyDetails from './EditCompanyDetails'; // Componente para mostrar detalles editables
import './PerfilEmpresa.css';                     // Estilos CSS para este layout
import { useNavigate } from 'react-router-dom';  // Hook para navegación programática
import { useRef } from 'react';
import Snackbar from '../ToastNotification/Snackbar';

const SnackbarType = {
  sucess: 'sucess',
  fail: 'fail',
}
const ProfileLayout = ({ company, details }) => {
  const snackbarRef = useRef(null)

  const navigate = useNavigate();

  // Función para navegar al perfil
  const IraPerfil = () => {
    navigate('/perfil');
  };

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

      {/* Breadcrumb para indicar ubicación */}
      <nav className="breadcrumb">Home / Editar Perfil</nav>

      {/* Sección principal con tarjeta resumen y detalles */}
      <div className="main-section">
        {/* Paso las props de la empresa para mostrar en la tarjeta */}
        <CompanyCard {...company} />

        {/* Paso los detalles para el componente editable */}
        <CompanyDetails data={details} />
      </div>

      {/* Pie de página con mensaje y botones */}
      <footer className="footer-section-2">
        <p>
          Aquí habrá un mensaje relacionado a <br />
          que está <br />
          visualizando el perfil de la empresa.
        </p>
        {/* Botón cancelar que vuelve al perfil */}
        <button className="cancel-button" onClick={IraPerfil}>Cancelar</button>

        {/* Botón guardar que también vuelve al perfil (puedes cambiarlo para guardar cambios) */}
        <button className="edit-button"  onClick={() => {snackbarRef.current.show();}}>Guardar</button>
        <Snackbar ref={snackbarRef} message='Action Completed!' type={SnackbarType.sucess} />
      </footer>
    </div>
  );
};

export default ProfileLayout;
