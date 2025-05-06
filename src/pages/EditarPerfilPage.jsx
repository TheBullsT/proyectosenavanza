import NavFooter from '../layouts/Layout';
import React from 'react';
import ProfileLayout from '../components/Empresa/EditarPerfilEmpresa';

const dummyCompany = {
  name: 'Nombre Empresa',
  address: 'Dirección Empresa',
  registrationDate: 'Fecha de Registro de la Empresa',
  email: 'correo@empresa.com',
};

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

const EditarPerfilPage = () => {
  return (
    <NavFooter>
    <ProfileLayout company={dummyCompany} details={dummyDetails} />
    </NavFooter>
  );
};

export default EditarPerfilPage;
