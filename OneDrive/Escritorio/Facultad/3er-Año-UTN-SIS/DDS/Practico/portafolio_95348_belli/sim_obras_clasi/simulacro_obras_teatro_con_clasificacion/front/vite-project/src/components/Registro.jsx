import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Clasificacion from './clasificacion.jsx';
import '../styles/Registro.css';

const Registro = () => {
  const [datosObra, setDatosObra] = useState({
    titulo: '',
    director: '',
    idClasificacion: ''
  });

  const [registrado, setRegistrado] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDatosObra({
      ...datosObra,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(datosObra).some(field => field === '')) {
      alert('Todos los campos son obligatorios');
      return;
    }
    try {
      await axios.post('http://localhost:3001/api/obras-teatrales', datosObra);
      setRegistrado(true);
      navigate('/consulta');
    } catch (error) {
      console.error('Error al registrar la obra:', error.message);
    }
  };

  return (
    <div className="registro-container">
      <h2>Registro de Obra Teatral</h2>
      <form onSubmit={handleSubmit} className="registro-form">
        <label className="form-label">
          Título:
          <input type="text" name="titulo" value={datosObra.titulo} onChange={handleChange} className="form-input" />
        </label>
        <label className="form-label">
          Director:
          <input type="text" name="director" value={datosObra.director} onChange={handleChange} className="form-input" />
        </label>
        <Clasificacion value={datosObra.idClasificacion} onChange={handleChange} />
        <button type="submit" className="form-submit">Enviar</button>
        <button type="button" className="form-submit" onClick={() => navigate('/consulta')}>Volver</button>
      </form>
      {registrado && <p>Obra registrada correctamente</p>}
    </div>
  );
};

export default Registro;
