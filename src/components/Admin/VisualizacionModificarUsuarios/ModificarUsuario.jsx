// Importaciones necesarias para React y hooks
import React, { useEffect, useState } from "react";
// Importación de hooks de enrutamiento
import { useParams, useNavigate } from "react-router-dom";
// Navbar para la vista de administrador
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
// Icono para la sección de usuario
import { MdPeopleAlt } from "react-icons/md";
// Cliente API para solicitudes HTTP
import { apiEmpresa, apiGeneral } from "../../../api/apis";
// Componente de carga para la base de datos
import LoadingBaseDatos from "../../Loading/loading_base_datos";
// Estilos CSS para la vista
import './ModificarUsuario.css';
// Notificaciones de éxito/error
import { toast } from "react-toastify";

const ModificarUsuario = () => {
    const { id } = useParams(); // Obtener ID del usuario desde la URL
    const navigate = useNavigate(); // Hook para navegación
    const [usuario, setUsuario] = useState(null); // Estado para almacenar datos del usuario
    const [loading, setLoading] = useState(true); // Estado para mostrar carga
    const [form, setForm] = useState({
        username: "",
        password: "",
        rol: "",
        email: "",
        empresa: {
            id: null, 
            documento: "", 
            numero_documento: "", 
            razon_social: "",
            telefono: "",
            correo_electronico: "",
            direccion: "",
            actividad_economica: "", 
            estado: ""
        }
    });


    // Cargar datos del usuario al montar el componente
    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                const response = await apiGeneral.get(`/users/${id}/`);
                const userData = response.data;

                setUsuario(userData);
                setForm({
                    ...userData,
                    empresa: {
                        ...form.empresa,
                        ...userData.empresa
                    }
                });

            } catch (error) {
                console.error("Error al obtener datos del usuario:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsuario();
    }, [id]);

    // Maneja cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Si se intenta modificar un campo de solo lectura, simplemente ignora el evento
        const readOnlyFields = ["empresa.documento", "empresa.numero_documento", "empresa.actividad_economica"];
        if (readOnlyFields.includes(name)) {
            return;
        }

        if (name.startsWith("empresa.")) {
            const field = name.split(".")[1];
            setForm({
                ...form,
                empresa: { ...form.empresa, [field]: value }
            });
        } else {
            // Maneja 'username' y 'email'
            setForm({ ...form, [name]: value });
        }
    };

    // Envía los datos modificados al servidor
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { empresa, ...userData } = form; // separa usuario y empresa
        const empresaId = empresa.id;

        if (!empresaId) {
            toast.error("Error: No se encontró la ID de la empresa para actualizar.");
            console.error("ID de empresa faltante para la actualización.");
            return;
        }

        try {
            await apiGeneral.put(`/users/${id}/`, userData);
            await apiEmpresa.put(`/update/${empresaId}/`, empresa);

            toast.success("Usuario y empresa modificados con éxito");
            navigate("/listar-usuarios");
        } catch (error) {
            console.error("Error al modificar usuario o empresa:", error);
            let errorMessage = "Error al modificar los datos.";
            if (error.response && error.response.data) {
                console.error("Detalle del error del servidor:", error.response.data);
                errorMessage += " Revise la consola para detalles de validación.";
            }
            toast.error(errorMessage);
        }
    };



    if (loading) return <LoadingBaseDatos />;
    if (!usuario) return <p>No se encontró el usuario.</p>;

    return (
        <div className="main-right-bar">
            <NavbarAdmin />

            {/* Contenedor principal  */}
            <div className="modificar-usuario-contenido">
                <div className="modificar-usuario-container">
                    {/* Título de la vista  */}
                    <h1 className="titulo-usuario">
                        Modificar Usuario
                        <span className="breadcrumb-usuario">
                            Usted se encuentra en:{" "}
                            <strong className="breadcrumb-actual-usuario">Usuarios</strong>
                        </span>
                    </h1>

                    {/* Caja de información con icono  */}
                    <div className="icon-box-usuario">
                        <div className="icon-usuario">
                            <MdPeopleAlt />
                        </div>
                        <p>
                            Aquí puedes modificar la información de un usuario registrado.
                            <br />
                            <strong>
                                Los cambios se guardarán en la{" "}
                                <span className="highlight">BASE DE DATOS</span>.
                            </strong>
                        </p>
                    </div>

                    {/* Formulario de modificación  */}
                    <form className="formulario-usuario" onSubmit={handleSubmit}>
                        <h2 className="subtitulo-usuario">{form.username}</h2>

                        {/* Fila para Nombre de Usuario y Correo Electrónico (Usuario) */}
                        <div className="form-row-usuario">
                            <div className="campo-form-usuario campo-nombre-usuario">
                                <label>Nombre de Usuario</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={form.username}
                                    onChange={handleChange}
                                    placeholder="Ingrese su nuevo nombre de usuario"
                                />
                            </div>
                            <div className="campo-form-usuario">
                                <label>Correo Electrónico (Usuario)</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Ingrese el nuevo correo electrónico"
                                />
                            </div>
                        </div>

                        {/* Fila para Razón Social, Documento y Actividad económica */}
                        <div className="form-row-usuario">
                            <div className="campo-form-usuario">
                                <label>Razón Social</label>
                                <input
                                    type="text"
                                    name="empresa.razon_social"
                                    value={form.empresa.razon_social}
                                    onChange={handleChange}
                                    pattern="[a-zA-Z\s]+"
                                    placeholder="Ingrese la razón social nueva"
                                />
                            </div>

                            <div className="campo-form-usuario">
                                <label>Actividad Económica</label>
                                <input
                                    type="text"
                                    name="empresa.actividad_economica"
                                    value={form.empresa.actividad_economica}
                                    readOnly // 
                                />
                            </div>
                            <div className="campo-form-usuario">
                                <label>Tipo de Documento</label>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    name="empresa.documento"
                                    value={form.empresa.documento}
                                    readOnly // 
                                />
                            </div>
                            <div className="campo-form-usuario">
                                <label>Número de Documento</label>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    name="empresa.numero_documento"
                                    value={form.empresa.numero_documento}
                                    readOnly // 
                                />
                            </div>
                            <div className="campo-form-usuario">
                                <label>Estado</label>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    name="empresa.estado"
                                    value={form.empresa.estado}
                                    onChange={handleChange}
                                    readOnly
                                />
                            </div>

                            {/* Correo Electrónico de la Empresa (Lo mantengo editable para sincronización) */}
                            <div className="campo-form-usuario">
                                <label>Correo Electrónico (Empresa)</label>
                                <input
                                    type="email"
                                    name="empresa.correo_electronico"
                                    value={form.empresa.correo_electronico}
                                    onChange={handleChange} 
                                    placeholder="Ingrese el nuevo correo electrónico de la empresa"
                                />
                            </div>
                        </div>

                        {/* Fila para Dirección y Teléfono  */}
                        <div className="form-row-usuario">
                            <div className="campo-form-usuario">
                                <label>Dirección</label>
                                <input
                                    type="text"
                                    name="empresa.direccion"
                                    value={form.empresa.direccion}
                                    onChange={handleChange} 
                                    placeholder="Ingrese la dirección nueva"
                                />
                            </div>
                            <div className="campo-form-usuario">
                                <label>Teléfono</label>
                                <input
                                    type="tel"
                                    min="0"
                                    inputMode="numeric"
                                    minLength={10}
                                    maxLength={12}
                                    name="empresa.telefono"
                                    value={form.empresa.telefono}
                                    onChange={handleChange} 
                                    pattern="^3[0-9]{9}$"
                                    placeholder="Ingrese el número de teléfono"
                                />
                            </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="boton-contenedor-usuario">
                            <button type="submit" className="boton-modificar-usuario">
                                Modificar Usuario
                            </button>
                            <button
                                type="button"
                                className="boton-regresar-usuario"
                                onClick={() => navigate(-1)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModificarUsuario;