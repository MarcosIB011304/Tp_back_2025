import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Clasificacion = ({ onChange, value }) => {
  const [clasificaciones, setClasificaciones] = useState([]);

  useEffect(() => {
    const fetchClasificaciones = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/clasificaciones');
        setClasificaciones(response.data);
      } catch (error) {
        console.error('Error al obtener las clasificaciones:', error);
      }
    };

    fetchClasificaciones();
  }, []);

  return (
    <div className="form-group">
      <label className="form-label">Clasificación:</label>
      <select name="idClasificacion" value={value} onChange={onChange} className="form-input">
        <option value="">Selecciona una clasificación</option>
        {clasificaciones.map(clasificacion => (
          <option key={clasificacion.id} value={clasificacion.id}>{clasificacion.titulo}</option>
        ))}
      </select>
    </div>
  );
};

export default Clasificacion;
