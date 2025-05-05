import React from 'react';
const CompanyDetails = ({ data }) => (
    <div className="company-details">
      <div className='blocked'><strong>Tipo de Documento:</strong><br /><div className='answer-details'>{data.documentType}</div><hr /> </div>
      <div className='blocked'><strong>Número de Documento:</strong><br /><div className='answer-details'>  {data.documentNumber}</div><hr /> </div>
      <div className='blocked'><strong>Nombre de la empresa:</strong><br /><div className='answer-details'>  {data.name}</div><hr /> </div>
      <div><strong>Teléfono Fijo:</strong><br /><div className='answer-details'>  {data.landline}</div><hr /> </div>
      <div><strong>Teléfono Móvil:</strong><br /><div className='answer-details'>  {data.mobile}</div><hr /> </div>
      <div><strong>Correo Electrónico:</strong><br /><div className='answer-details'>  {data.email}</div><hr /> </div>
      <div><strong>Dirección Actual:</strong><br /><div className='answer-details'>  {data.currentAddress}</div><hr /> </div>
      <div><strong>Actividad Económica:</strong><br /><div className='answer-details'>  {data.economicActivity}</div><hr /> </div>
    </div>
  );

export default CompanyDetails;