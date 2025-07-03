import React, { useEffect, useState} from 'react';
// Importar APIS
import { apiCreateEmpresa } from '../../api/apis';
// Importar pantalla de carga
import LoadingDatos from '../Loading/loading_datos';



const CompanyDetails = () => {

  const [empresa, setEmpresa] = useState(null);
  const [loadingDatos, setLoadingDatos] = useState(true);

  useEffect(() =>{
    const fethEmpresa = async () => {
      setLoadingDatos(true);
      try{
        const response = await apiCreateEmpresa.get("",
          { withCredentials: true},
        );
        setEmpresa(response.data.empresa);
      }catch(error){
        console.error("Error al traer datos de la empresa", error);
      }finally{
        setLoadingDatos(false);
      }
    };
    fethEmpresa();
  },[]);

    if (loadingDatos) return <LoadingDatos />;
    if(!empresa) return <p>No hay datos para mostrar.</p>;


  return(
  <div className="company-details">
    {/* Cada bloque muestra un campo con su título y el dato correspondiente */}
    <div>

      {/* Tipo de documento */}
      <strong>Tipo de Documento:</strong><br />
      <div className='answer-details'>{empresa.documento}</div>
      <hr />
    </div>
    <div>
      {/* Número de documento */}
      <strong>Número de Documento:</strong><br />
      <div className='answer-details'>{empresa.numero_documento}</div>
      <hr />
    </div>
    <div>
      {/* Información de la empresa */}
      <strong>Nombre de la empresa:</strong><br />
      <div className='answer-details'>{empresa.razon_social}</div>
      <hr />
    </div>
    <div>
      {/* Contacto */}
      <strong>Teléfono Fijo:</strong><br />
      <div className='answer-details'>{empresa.telefono}</div>
      <hr />
    </div>
    <div>
      {/* Contacto */}
      <strong>Teléfono Móvil:</strong><br />
      <div className='answer-details'>{empresa.telefono}</div>
      <hr />
    </div>
    <div>
      {/* Correo Electrónico */}
      <strong>Correo Electrónico:</strong><br />
      <div className='answer-details'>{empresa.correo_electronico}</div>
      <hr />
    </div>
    <div>
      {/* Dirección Actual */}
      <strong>Dirección Actual:</strong><br />
      <div className='answer-details'>{empresa.direccion}</div>
      <hr />
    </div>
    <div>
      {/* Actividad Económica */}
      <strong>Actividad Económica:</strong><br />
      <div className='answer-details'>{empresa.actividad_economica}</div>
      <hr />
    </div>
  </div>
  );
}

export default CompanyDetails;
