import NavFooter from '../layouts/Layout'; // Layout principal con Navbar y Footer
import React from 'react';
// Componente para editar el perfil de la empresa
import EditarPerfilEmpresa from '../components/Empresa/EditarPerfilEmpresa';
import Gov from '../components/BarraGov/gov';

// Componente funcional que renderiza la página para editar perfil de la empresa
const EditarPerfilPage = () => {
  return (
    <div>
      <Gov />
      {/*Usamos el layout NavFooter que incluye navegación y pie de página*/}
      <NavFooter>
        {/* Pasamos los datos dummy como props al componente EditarPerfilEmpresa */}
        <EditarPerfilEmpresa />
      </NavFooter>
    </div>
    
  );
};

export default EditarPerfilPage;