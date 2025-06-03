// Importa el layout general que contiene Navbar y Footer
import NavFooter from '../layouts/Layout';
import React from 'react';
// Importa el componente principal para mostrar el perfil de la empresa
import ProfileLayout from '../components/Empresa/PerfilEmpresa';
import Gov from '../components/BarraGov/gov';


// Datos ficticios de la empresa para pasar como props
const dummyCompany = {
  name: 'Nombre Empresa',
  address: 'Dirección Empresa',
  registrationDate: 'Fecha de Registro de la Empresa',
  email: 'correo@empresa.com',
};

// Detalles ficticios adicionales de la empresa
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

// Componente funcional que renderiza el perfil de la empresa dentro del layout general
const PerfilPage = () => {
  return (
    <div>
      <Gov />
      <NavFooter>
      {/* Se pasa la información ficticia como props al componente del perfil */}
      <ProfileLayout company={dummyCompany} details={dummyDetails} />
    </NavFooter>
    </div>
    
  );
};

// Exporta el componente para usarlo en rutas o en otros módulos
export default PerfilPage;
