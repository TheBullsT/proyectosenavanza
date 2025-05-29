import React from 'react';
// Layout general con Navbar y Footer
import NavFooter from '../layouts/Layout';  
// Componente que contiene el formulario del diagnóstico empresarial
import FormLayout from '../components/DiagnosticoEmpresarial/Formulario';

const DiagnosticoEmpresarial = () => {
    return (
        // Renderiza el layout principal y dentro incluye el formulario
        <NavFooter>
            <FormLayout />
        </NavFooter>
    );
}
export default DiagnosticoEmpresarial;
