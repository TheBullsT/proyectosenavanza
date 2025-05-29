import React from 'react';

const CompanyDetails = ({ data }) => (
  <div className="company-details">
    {/* Cada bloque muestra un campo con su título y el dato correspondiente */}
    <div>

      {/* Tipo de documento */}
      <strong>Tipo de Documento:</strong><br />
      <div className='answer-details'>{data.documentType}</div>
      <hr />
    </div>
    <div>
      {/* Número de documento */}
      <strong>Número de Documento:</strong><br />
      <div className='answer-details'>{data.documentNumber}</div>
      <hr />
    </div>
    <div>
      {/* Información de la empresa */}
      <strong>Nombre de la empresa:</strong><br />
      <div className='answer-details'>{data.name}</div>
      <hr />
    </div>
    <div>
      {/* Contacto */}
      <strong>Teléfono Fijo:</strong><br />
      <div className='answer-details'>{data.landline}</div>
      <hr />
    </div>
    <div>
      {/* Contacto */}
      <strong>Teléfono Móvil:</strong><br />
      <div className='answer-details'>{data.mobile}</div>
      <hr />
    </div>
    <div>
      {/* Correo Electrónico */}
      <strong>Correo Electrónico:</strong><br />
      <div className='answer-details'>{data.email}</div>
      <hr />
    </div>
    <div>
      {/* Dirección Actual */}
      <strong>Dirección Actual:</strong><br />
      <div className='answer-details'>{data.currentAddress}</div>
      <hr />
    </div>
    <div>
      {/* Actividad Económica */}
      <strong>Actividad Económica:</strong><br />
      <div className='answer-details'>{data.economicActivity}</div>
      <hr />
    </div>
  </div>
);

export default CompanyDetails;
