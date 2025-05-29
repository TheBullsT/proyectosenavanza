import React from 'react';

// Componente funcional que recibe props para mostrar información de una empresa
const CompanyCard = ({ name, address, registrationDate, email }) => (
  <div className="company-card">
    {/* Aquí podrías poner una imagen o logo de la empresa */}
    <div className="company-image" />

    {/* Nombre de la empresa */}
    <h2 className="company-name">{name}</h2>

    {/* Contenedor con la información adicional */}
    <div className="company-info">
      {/* Barra decorativa con texto centrado */}
      <div className="barra">
        <span className="linea"></span>
        <span className="texto">Info Perfil</span>
        <span className="linea"></span>
      </div>

      {/* Información de dirección, fecha de registro y correo */}
      <div className="text-info">
        <p>{address}</p>
        <p>{registrationDate}</p>
        <p>{email}</p>
      </div>
    </div>
  </div>
);

export default CompanyCard;
