// Importa el layout general que contiene Navbar y Footer
import NavFooter from '../layouts/Layout';
import React from 'react';
// Importa el componente principal para mostrar el perfil de la empresa
import PerfilEmpresa from '../components/Empresa/ProfileLayout';
import Gov from '../components/BarraGov/gov';



// Componente funcional que renderiza el perfil de la empresa dentro del layout general
const PerfilPage = () => {
  return (
    <div>
      <Gov />
      <NavFooter>
      {/* Se pasa la información ficticia como props al componente del perfil */}
      <PerfilEmpresa />
    </NavFooter>
    </div>
    
  );
};

// Exporta el componente para usarlo en rutas o en otros módulos
export default PerfilPage;
