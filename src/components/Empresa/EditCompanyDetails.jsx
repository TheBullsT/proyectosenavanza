import React, { useState, useEffect } from 'react';
import { apiPerfil } from '../../api/apis';
import LoadingDatos from '../Loading/loading_datos';

const CompanyDetails = () => {
    const [empresa, setEmpresa] = useState(null);
    const [loadingDatos, setLoadingDatos] = useState(true);

    useEffect(() => {
        const fetchEmpresa = async () => {
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

    if (loadingDatos) return <LoadingDatos />;
    if (!empresa) return <p>No hay datos para mostrar.</p>;

    // Función para manejar cambios en campos editables
    const handleChange = (e) => {
        setEmpresa({
            ...empresa,
            [e.target.name]: e.target.value,
        });
    };

    // Función para guardar cambios
    const handleSave = async () => {
        try {
            await apiGeneral.put("", userData, { withCredentials: true });
            alert("Datos actualizados correctamente");
        } catch (error) {
            console.error("Error al guardar los cambios:", error);
        }
    };

    return (
        <div className="company-details">
            <div className='blocked'>
                <strong>Tipo de Documento:</strong><br />
                <div className='answer-details'>{empresa.documento}</div>
                <hr />
            </div>

            <div className='blocked'>
                <strong>Número de Documento:</strong><br />
                <div className='answer-details'>{empresa.numero_documento}</div>
                <hr />
            </div>

            {/* Editable: Razon Social */}
            <div className='blocked'>
                <strong>Nombre de la empresa:</strong><br />
                <input
                    type="text"
                    name="razon_social"
                    value={empresa.razon_social}
                    onChange={handleChange}
                />
                <hr />
            </div>

            {/* Editable: Telefono */}
            <div className='blocked'>
                <strong>Teléfono:</strong><br />
                <input
                    type="text"
                    name="telefono"
                    value={empresa.telefono}
                    onChange={handleChange}
                />
                <hr />
            </div>

            <div className='blocked'>
                <strong>Correo Electrónico:</strong><br />
                <div className='answer-details'>{empresa.correo_electronico}</div>
                <hr />
            </div>

            <div className='blocked'>
                <strong>Dirección Actual:</strong><br />
                <div className='answer-details'>{empresa.direccion}</div>
                <hr />
            </div>

            <div className='blocked'>
                <strong>Actividad Económica:</strong><br />
                <div className='answer-details'>{empresa.actividad_economica}</div>
                <hr />
            </div>
        </div>
    );
};

export default CompanyDetails;
