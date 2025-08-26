import React, { useEffect, useState } from 'react';
import { apiPerfil } from '../../api/apis';
import LoadingDatos from '../Loading/loading_datos';
import { useNavigate } from 'react-router-dom';
import './PerfilEmpresa.css';

const PerfilEmpresa = () => {
    // Estado para almacenar los datos de la empresa
    const [empresa, setEmpresa] = useState(null);
    // Estado para manejar la carga de datos
    const [loadingDatos, setLoadingDatos] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Función para obtener datos de la empresa desde la API
        const fetchEmpresa = async () => {
            setLoadingDatos(true);
            try {
                const response = await apiPerfil.get("", {
                    headers: { 'Content-Type': 'application/json' }
                });
                setEmpresa(response.data); // Guarda los datos obtenidos en el estado
            } catch (error) {
                console.error("Error al traer los datos de la empresa", error);
            } finally {
                setLoadingDatos(false); // Finaliza el estado de carga
            }
        };
        fetchEmpresa(); // Ejecuta la función al montar el componente
    }, []);

    // Muestra pantalla de carga mientras se obtienen los datos
    if (loadingDatos) return <LoadingDatos />;
    // Si no hay datos de empresa, muestra mensaje
    if (!empresa) return <p>No hay datos para mostrar.</p>;

    // Funciones de navegación
    const editar = () => navigate('/editarperfil');
    const irAPerfil = () => navigate('/perfil');

    return (
        <div className="profile-layout">
            {/* Título principal */}
            <div className="title-empresa">
                <h1>Información de Perfil</h1>
            </div>

            {/* Barra decorativa */}
            <div className="barra-empresa">
                <span className="linea2"></span>
            </div>

            {/* Ruta de navegación */}
            <nav className="breadcrumb">Inicio / Perfil</nav>

            {/* Sección principal con tarjeta y detalles */}
            <div className="main-section">
                {/* Tarjeta de la empresa */}
                <div className="company-card">
                    <div className="company-image" />
                    <h2 className="company-name">{empresa.razon_social}</h2>
                    <div className="company-info">
                        <div className="barra">
                            <span className="linea"></span>
                            <span className="texto">Información del Perfil</span>
                            <span className="linea"></span>
                        </div>
                        <div className="text-info">
                            <p>{empresa.direccion}</p>
                            <p>{empresa.correo_electronico}</p>
                        </div>
                    </div>
                </div>

                {/* Detalles adicionales de la empresa */}
                <div className="company-details">
                    <div>
                        <strong>Tipo de Documento:</strong><br />
                        <div className="answer-details">{empresa.documento}</div>
                        <hr />
                    </div>
                    <div>
                        <strong>Número de Documento:</strong><br />
                        <div className="answer-details">{empresa.numero_documento}</div>
                        <hr />
                    </div>
                    <div>
                        <strong>Nombre de la Empresa:</strong><br />
                        <div className="answer-details">{empresa.razon_social}</div>
                        <hr />
                    </div>
                    <div>
                        <strong>Teléfono Móvil:</strong><br />
                        <div className="answer-details">{empresa.telefono}</div>
                        <hr />
                    </div>
                    <div>
                        <strong>Correo Electrónico:</strong><br />
                        <div className="answer-details">{empresa.correo_electronico}</div>
                        <hr />
                    </div>
                    <div>
                        <strong>Dirección Actual:</strong><br />
                        <div className="answer-details">{empresa.direccion}</div>
                        <hr />
                    </div>
                    <div>
                        <strong className='blocked'>Actividad Económica:</strong><br />
                        <div className="answer-details">{empresa.actividad_economica}</div>
                        <hr />
                    </div>
                </div>
            </div>

            {/* Pie de página con botón de edición */}
            <footer className="footer-section-1">
                <p>
                    Estás revisando el perfil de <br />
                    <strong>{empresa.razon_social}</strong>
                </p>
                <button className="edit-button" onClick={editar}>Editar</button>
            </footer>
        </div>
    );
};

export default PerfilEmpresa;
