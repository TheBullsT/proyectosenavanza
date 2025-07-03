import React, { useEffect, useState } from 'react';
// Importar APIS
import { apiPerfil } from '../../api/apis';
// Importar el loading
import LoadingDatos from '../Loading/loading_datos';

// Componente funcional que recibe props para mostrar información de una empresa
const CompanyCard = () => {
    const [empresa, setEmpresa] = useState(null);
    const [loadinDatos, setLoadingDatos] = useState(true)

    useEffect(() => {
        const fechtEmpresa = async () => {
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
            }finally{
                setLoadingDatos(false);
            }
        }
        fechtEmpresa();
    }, []);

    if (loadinDatos) return <LoadingDatos />;
    if (!empresa) return <p>No hay datos para mostrar.</p>;

    return (
        <div className="company-card">
            {/* Aquí podrías poner una imagen o logo de la empresa */}
            <div className="company-image" />

            {/* Nombre de la empresa */}
            <h2 className="company-name">{empresa.razon_social}</h2>

            {/* Contenedor con la información adicional */}
            <div className="company-info">
                {/* Barra decorativa con texto centrado */}
                <div className="barra">
                    <span className="linea"></span>
                    <span className="texto">Info Perfil</span>
                    <span className="linea"></span>
                </div>

                {/* Información de dirección, fecha de registro y correo */}
                <div className="text-info">
                    <p>{empresa.direccion}</p>
                    {/* <p>{registrationDate}</p> */}
                    <p>{empresa.correo_electronico}</p>
                </div>
            </div>
        </div>
    );
};

export default CompanyCard;
