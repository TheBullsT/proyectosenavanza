import NavFooter from '../layouts/Layout'; // Layout principal con Navbar y Footer
import React from 'react';
// Componente para editar el perfil de la empresa
import ProfileLayout from '../components/Empresa/EditarPerfilEmpresa';
import Gov from '../components/BarraGov/gov';

// Datos dummy o de prueba para la empresa
const dummyCompany = {
  name: 'Nombre Empresa',
  address: 'Dirección Empresa',
  registrationDate: 'Fecha de Registro de la Empresa',
  email: 'correo@empresa.com',
};

// Datos dummy o de prueba con detalles adicionales de la empresa
const dummyDetails = {
  documentType: 'NIT',
  documentNumber: '1234567890',
  name: 'Nombre Empresa',
  landline: '3333335',
  mobile: '987654321',
  email: 'correo@empresa.com',
  currentAddress: 'Dirección Completa',
  economicActivity: 'Mucho Dinero',
};

// Componente funcional que renderiza la página para editar perfil de la empresa
const EditarPerfilPage = () => {
  return (
    <div>
      <Gov />
      {/*Usamos el layout NavFooter que incluye navegación y pie de página*/}
      <NavFooter>
        {/* Pasamos los datos dummy como props al componente ProfileLayout */}
        <ProfileLayout company={dummyCompany} details={dummyDetails} />
      </NavFooter>
    </div>
    
  );
};

export default EditarPerfilPage;
