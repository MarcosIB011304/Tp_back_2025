import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Registro.css';

const Registro = () => {
  const [datosProyecto, setDatosProyecto] = useState({
    repositoryId: '',
    userName: '',
    repositoryName: '',
    description: '',
    lastUpdate: '',
    language: '',
    stars: '',
    tags: '',
    url: ''
  });

  const [errors, setErrors] = useState({});
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDatosProyecto({
      ...datosProyecto,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(datosProyecto);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Enviando datos del proyecto:', datosProyecto);

    try {
      const response = await axios.post('http://localhost:3001/api/repositories', datosProyecto);
      console.log('Respuesta del servidor:', response);
      setRegistroExitoso(true);
    } catch (error) {
      console.error('Error al registrar el proyecto:', error.response ? error.response.data : error.message);
    }
  };

  const validateForm = (formData) => {
    let errors = {};

    if (formData.userName.trim().includes(' ')) {
      errors.userName = 'El nombre de usuario no debe contener espacios';
    }
    if (formData.repositoryName.trim().includes(' ')) {
      errors.repositoryName = 'El nombre del repositorio no debe contener espacios';
    }
    if (formData.description.trim() === '') {
      errors.description = 'La descripción es requerida';
    }
    if (formData.language.trim() === '') {
      errors.language = 'El lenguaje es requerido';
    }
    if (formData.url.trim() === '') {
      errors.url = 'La URL es requerida';
    }
    if (isNaN(formData.stars)) {
      errors.stars = 'Las stars deben ser un número válido';
    }
    if (formData.tags.trim().split(/\s*,\s*/).some(tag => tag.includes(' '))) {
      errors.tags = 'Los tags deben estar separados por comas y sin espacios';
    }

    return errors;
  };

  return (
    <div className="registro-container">
      <h2>Agregar Proyecto</h2>
      <form onSubmit={handleSubmit} className="registro-form">
        <div className="form-group">
          <label className="form-label">Usuario:</label>
          <input type="text" name="userName" value={datosProyecto.userName} onChange={handleChange} className="form-input" required />
          {errors.userName && <div className="form-error">{errors.userName}</div>}
        </div>

        <div className="form-group">
          <label className="form-label">Nombre del Repositorio:</label>
          <input type="text" name="repositoryName" value={datosProyecto.repositoryName} onChange={handleChange} className="form-input" required />
          {errors.repositoryName && <div className="form-error">{errors.repositoryName}</div>}
        </div>

        <div className="form-group">
          <label className="form-label">Descripción:</label>
          <textarea name="description" value={datosProyecto.description} onChange={handleChange} className="form-input" required></textarea>
          {errors.description && <div className="form-error">{errors.description}</div>}
        </div>

        <div className="form-group">
          <label className="form-label">Última Actualización:</label>
          <input type="date" name="lastUpdate" value={datosProyecto.lastUpdate} onChange={handleChange} className="form-input" required />
        </div>

        <div className="form-group">
          <label className="form-label">Lenguaje:</label>
          <input type="text" name="language" value={datosProyecto.language} onChange={handleChange} className="form-input" required />
          {errors.language && <div className="form-error">{errors.language}</div>}
        </div>

        <div className="form-group">
          <label className="form-label">Stars:</label>
          <input type="number" name="stars" value={datosProyecto.stars} onChange={handleChange} className="form-input" required />
          {errors.stars && <div className="form-error">{errors.stars}</div>}
        </div>

        <div className="form-group">
          <label className="form-label">Tags:</label>
          <input type="text" name="tags" value={datosProyecto.tags} onChange={handleChange} className="form-input" required />
          {errors.tags && <div className="form-error">{errors.tags}</div>}
        </div>

        <div className="form-group">
          <label className="form-label">URL:</label>
          <input type="url" name="url" value={datosProyecto.url} onChange={handleChange} className="form-input" required />
          {errors.url && <div className="form-error">{errors.url}</div>}
        </div>

        <button type="submit" className="form-submit">Enviar</button>
        <button type="button" className="form-submit" onClick={() => navigate('/')}>Volver</button>

        {registroExitoso && (
          <p className="registro-exitoso">El proyecto se registró correctamente.</p>
        )}
      </form>
    </div>
  );
};

export default Registro;
