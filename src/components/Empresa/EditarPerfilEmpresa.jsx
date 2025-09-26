import React, { useEffect, useState } from 'react';
import { apiPerfil } from '../../api/apis';
import LoadingDatos from '../Loading/loading_datos';
import { useNavigate } from 'react-router-dom';
// Importar las notificaciones
import { toast } from 'react-toastify';
import './PerfilEmpresa.css';

const EditarPerfilEmpresa = () => {
    // Estado que almacena la información de la empresa
    const [empresa, setEmpresa] = useState(null);
    // Estado para controlar si los datos están cargando
    const [loadingDatos, setLoadingDatos] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Función para obtener los datos de la empresa desde el backend
        const fetchEmpresa = async () => {
            setLoadingDatos(true);
            try {
                const response = await apiPerfil.get("", {
                    headers: { 'Content-Type': 'application/json' }
                });
                setEmpresa(response.data); // Guardar datos recibidos en el estado
            } catch (error) {
                console.error("Error al traer los datos de la empresa", error);
            } finally {
                setLoadingDatos(false); // Finaliza el estado de carga
            }
        };
        fetchEmpresa(); // Ejecuta la petición al montar el componente
    }, []);

    // Muestra un componente de carga mientras se obtienen los datos
    if (loadingDatos) return <LoadingDatos />;
    if (!empresa) return <p>No hay datos para mostrar.</p>;

    // Función para actualizar el estado al modificar los campos editables
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmpresa(prev => ({ ...prev, [name]: value }));
    };

    // Función para enviar los datos actualizados al backend
    const handleGuardar = async () => {
        try {
            console.log('Datos a guardar:', empresa);
            const actu = await apiPerfil.put(" ", empresa);
            console.log(actu.data);
            toast.success("Datos guardados correctamente");
            navigate('/perfil'); // Redirige después de guardar
        } catch (error) {
            console.error("Error al guardar:", error);
            toast.error("Error al guardar los datos");
        }
    };

    // Redirige a la vista del perfil sin guardar cambios
    const irAPerfil = () => navigate('/perfil');

    return (
        <div className="profile-layout">
            {/* Encabezado de la página */}
            <div className="title-empresa">
                <h1>Editar Información de Perfil</h1>
            </div>

            {/* Barra decorativa bajo el título */}
            <div className="barra-empresa">
                <span className="linea2"></span>
            </div>

            {/* Ruta de navegación */}
            <nav className="breadcrumb">Inicio / Editar Perfil</nav>

            {/* Contenedor principal con información y formulario */}
            <div className="main-section">
                {/* Tarjeta con datos generales de la empresa */}
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

                {/* Lista con detalles de la empresa y campos editables */}
                <div className="company-details">
                    <div>
                        <div className="blocked">
                            <strong>Tipo de Documento:</strong><br />
                        </div>
                        <div className="answer-details">{empresa.documento}</div>
                        <hr />
                    </div>

                    <div>
                        <div className="blocked">
                            <strong>Número de Documento:</strong><br />
                        </div>
                        <div className="answer-details">{empresa.numero_documento}</div>
                        <hr />
                    </div>

                    <div>
                        <div className="blocked">
                            <strong>Nombre de la Empresa:</strong><br />
                        </div>
                        <div className="answer-details">{empresa.razon_social}</div>
                        <hr />
                    </div>
                    <div>
                        <strong>Teléfono Móvil:</strong><br />
                            <input 
                            type="tel" 
                            min='0' 
                            inputMode="numeric" 
                            pattern="^3[0-9]{9}$" 
                            minLength={10} maxLength={12} 
                            onChange={(e) => setTelefono(e.target.value)} value={telefono}  
                            required 
                            placeholder="Ingrese el número de teléfono" />
                        <hr />
                    </div>

                    <div>
                        <strong>Correo Electrónico:</strong><br />
                        <input
                            className="answer-details"
                            type='email'
                            name="correo_electronico"
                            value={empresa.correo_electronico}
                            onChange={handleChange}
                            placeholder='Ingrese su correo electrónico'
                        />
                        <hr />
                    </div>

                    <div>
                        <strong>Dirección Actual:</strong><br />
                        <input
                            className="answer-details"
                            type='text'
                            name="direccion"
                            value={empresa.direccion}
                            onChange={handleChange}
                            placeholder='Ingrese su dirección actual'
                        />
                        <hr />
                    </div>

                    <div>
                        <div className="blocked">
                            <strong>Actividad Económica:</strong><br />
                        </div>
                        <div className="answer-details">{empresa.actividad_economica}</div>
                        <hr />
                    </div>
                </div>
            </div>

            {/* Controles para guardar o cancelar cambios */}
            <footer className="footer-section-1">
                <p>
                    Estás editando el perfil de <br />
                    <strong>{empresa.razon_social}</strong>
                </p>
                <button className="cancel-button" onClick={irAPerfil}>Cancelar</button>
                <button className="edit-button" onClick={handleGuardar}>Guardar</button>
            </footer>
        </div>
    );
};

export default EditarPerfilEmpresa;
