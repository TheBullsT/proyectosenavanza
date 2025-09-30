import React, { useEffect, useState } from 'react';
import { apiPerfil } from '../../api/apis';
import LoadingDatos from '../Loading/loading_datos';
import { useNavigate } from 'react-router-dom';
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
                // 💡 Mejora: Muestra un error al usuario si la carga inicial falla
                toast.error("No se pudieron cargar los datos del perfil.");
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

    // 💡 CAMBIO CLAVE: Función para enviar los datos, ahora recibe el evento del formulario.
    const handleGuardar = async (e) => {
        // Detiene el envío por defecto del formulario (recarga de página)
        // PERMITE QUE LA VALIDACIÓN NATIVA DE HTML SE EJECUTE PRIMERO.
        e.preventDefault();

        // Si la validación nativa fallara (ej: campo requerido vacío), 
        // esta línea no se alcanzaría porque el navegador mostraría un error.
        // Si llegamos aquí, los datos cumplen con las reglas de HTML.

        try {
            console.log('Datos a guardar:', empresa);
            // El endpoint correcto es solo '/', no ' '.
            const actu = await apiPerfil.put("/", empresa);
            console.log(actu.data);
            toast.success("Datos guardados correctamente");
            navigate('/perfil'); // Redirige después de guardar
        } catch (error) {
            console.error("Error al guardar:", error);
            // 💡 Mejora: Mostrar un mensaje más específico si es posible.
            toast.error("Error al guardar los datos. Revisa la consola para más detalles.");
        }
    };

    // Redirige a la vista del perfil sin guardar cambios
    const irAPerfil = () => navigate('/perfil');

    return (
        <div className="profile-layout">
            {/* ... Resto del encabezado ... */}
            <div className="title-empresa">
                <h1>Editar Información de Perfil</h1>
            </div>
            <div className="barra-empresa">
                <span className="linea2"></span>
            </div>
            <nav className="breadcrumb">Inicio / Editar Perfil</nav>

            <div className="main-section">
                {/* ... Tarjeta de la empresa ... */}
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

                {/*  CAMBIO CLAVE: Agregamos onSubmit={handleGuardar} al formulario */}
                <form
                    method='PUT'
                    className="company-details"
                    onSubmit={handleGuardar} // ¡Aquí adjuntamos la función!
                >
                    {/* Campos no editables */}
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

                    {/* Campos editables con validación HTML nativa */}
                    <div>
                        <strong>Teléfono Móvil:</strong><br />
                        <input
                            className="answer-details"
                            name='telefono'
                            type="tel"
                            // Validación para móvil colombiano
                            pattern="3[0-9]{9}"
                            title="El teléfono debe tener 10 dígitos y empezar por 3 (formato móvil colombiano)."
                            inputMode="numeric"
                            minLength={10}
                            maxLength={10}
                            required // ¡Asegura que no esté vacío!
                            value={empresa.telefono || ''} // Usar || '' para evitar warning si es null/undefined
                            onChange={handleChange}
                            placeholder="Ingrese el número de teléfono"
                        />
                        <hr />
                    </div>

                    <div>
                        <strong>Correo Electrónico:</strong><br />
                        <input
                            className="answer-details"
                            type='email' // ¡Valida formato de correo!
                            name="correo_electronico"
                            required // ¡Asegura que no esté vacío!
                            value={empresa.correo_electronico || ''}
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
                            required // ¡Asegura que no esté vacío!
                            value={empresa.direccion || ''}
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
                    <footer className="footer-section-1">
                        <button className="cancel-button" type='button' onClick={irAPerfil}>Cancelar</button>
                        {/* El botón de 'Guardar' ahora solo necesita type='submit' */}
                        <button className="edit-button" type='submit'>Guardar</button>
                    </footer>
                </form>
            </div>

            {/* ... Resto del pie de página ... */}
            <footer className="footer-section-1">
                <p>
                    Estás editando el perfil de <br />
                    <strong>{empresa.razon_social}</strong>
                </p>
            </footer>
        </div>
    );
};

export default EditarPerfilEmpresa;