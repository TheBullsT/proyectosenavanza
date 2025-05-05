import React from 'react';
const CompanyCard = ({ name, address, registrationDate, email }) => (
    <div className="company-card">
      <div className="company-image" />
      <h2 className="company-name">{name} </h2>
      <div className="company-info">
        <div className='barra'>
          <span className='linea'></span>
          <span className='texto'>Info Perfil</span>
          <span className='linea'></span>
        </div>
        <div className='text-info'>
          <p>{address}</p>
          <p>{registrationDate}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
export default CompanyCard;