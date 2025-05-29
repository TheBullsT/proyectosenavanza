import React from 'react';

const CompanyDetails = ({ data }) => (
  <div className="company-details">
    {/* Cada bloque representa un campo con título y valor */}
    {/* Tipo de documento */}
    <div className='blocked'>
      <strong>Tipo de Documento:</strong><br />
      <div className='answer-details'>{data.documentType}</div>
      <hr />
    </div>

    {/* Número de documento */}
    <div className='blocked'>
      <strong>Número de Documento:</strong><br />
      <div className='answer-details'>{data.documentNumber}</div>
      <hr />
    </div>

    {/* Información de la empresa */}
    <div className='blocked'>
      <strong>Nombre de la empresa:</strong><br />
      <div className='answer-details'>{data.name}</div>
      <hr />
    </div>

    {/* Contacto */}
    <div className='blocked'>
      <strong>Teléfono Fijo:</strong><br />
      <div className='answer-details'>{data.landline}</div>
      <hr />
    </div>

    {/* Telefono */}
    <div className='blocked'>
      <strong>Teléfono Móvil:</strong><br />
      <div className='answer-details'>{data.mobile}</div>
      <hr />
    </div>

    {/* Correo Electrónico */}
    <div className='blocked'>
      <strong>Correo Electrónico:</strong><br />
      <div className='answer-details'>{data.email}</div>
      <hr />
    </div>

    {/* Dirección Actual */}
    <div className='blocked'>
      <strong>Dirección Actual:</strong><br />
      <div className='answer-details'>{data.currentAddress}</div>
      <hr />
    </div>

    {/* Actividad Económica */}
    <div className='blocked'>
      <strong>Actividad Económica:</strong><br />
      <div className='answer-details'>{data.economicActivity}</div>
      <hr />
    </div>
  </div>
);

export default CompanyDetails;
