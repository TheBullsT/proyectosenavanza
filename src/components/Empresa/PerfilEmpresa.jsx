import React, { useEffect, useState } from 'react';
// Importar APIS
import { apiPerfil } from '../../api/apis';
//Importar Loading
import LoadingDatos from '../Loading/loading_datos';
import { useNavigate } from 'react-router-dom';
import CompanyCard from './CompanyCard';
import CompanyDetails from './CompanyDetails';

import './PerfilEmpresa.css';



const ProfileLayout = ({ company, details }) => {

    const navigate = useNavigate();
    const [empresa, setEmpresa] = useState(null);
    const [loadinDatos, setLoadingDatos] = useState(true);

    useEffect(() => {
        const fetchEmpresa = async () => {
            setLoadingDatos(true);
            try {
                const response = await apiPerfil.get("", {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setEmpresa(response.data);
            } catch (error) {
                console.log("Error al traer los datos de la empresa", error);
            } finally {
                setLoadingDatos(false);
            }
        };
        fetchEmpresa();
    }, []);


    if (loadinDatos) return < LoadingDatos />;
    if (!empresa) return <p>No hay datos para mostrar.</p>;

    // Función para redirigir a la página de edición de perfil
    const editar = () => {
        navigate('/editarperfil');
    };

    return (
        <div className="profile-layout">
            {/* Título principal */}
            <div className='title-empresa'>
                <h1>Informacion de Perfil</h1>
            </div>

            {/* Barra decorativa o separadora */}
            <div className='barra-empresa'>
                <span className='linea2'></span>
            </div>

            {/* Breadcrumb para navegación */}
            <nav className="breadcrumb">Home / Perfil</nav>

            {/* Sección principal donde se muestran los detalles */}
            <div className="main-section">
                <CompanyCard {...company} />
                <CompanyDetails data={details} />
            </div>

            {/* Pie de página con mensaje y botón para editar */}
            <footer className="footer-section-1">
                <p>
                    Estas revisando tu perfil <br />
                    llamado <br />
                    {empresa.razon_social}
                </p>
                <button className="edit-button" onClick={editar}>Editar</button>

            </footer>
        </div>
    );
};

export default ProfileLayout;
