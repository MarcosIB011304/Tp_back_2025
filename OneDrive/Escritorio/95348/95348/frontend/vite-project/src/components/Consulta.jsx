import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Consulta.css';
import { useNavigate } from 'react-router-dom';
import Filtro from './filtro.jsx';

const Consulta = () => {
  const [repositorios, setRepositorios] = useState([]);
  const [filtro, setFiltro] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRepositorios = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/repositories');
        setRepositorios(response.data);
      } catch (error) {
        console.error('Error al obtener los repositorios:', error);
      }
    };

    fetchRepositorios();
  }, []);

  const handleFiltrar = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/repositories?filter=${filtro}`);
      setRepositorios(response.data);
    } catch (error) {
      console.error('Error al filtrar los repositorios:', error);
    }
  };

  const calculateDaysSinceUpdate = (lastUpdate) => {
    const now = new Date();
    const updateDate = new Date(lastUpdate);
    const differenceInTime = now - updateDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

    return differenceInDays === 0 ? 'hoy' : `${differenceInDays} días`;
  };

  const formatLikes = (likes) => {
    return `${likes}Mil`;
  };

  return (
    <div className="consulta-container">
      <h2>Listado de Proyectos
        <button className="consulta-button" onClick={() => navigate('/nuevo-repositorio')}>Agregar Proyecto</button>
      </h2> 
      
      <Filtro filtro={filtro} setFiltro={setFiltro} onFiltrar={handleFiltrar} />
      
      <table className="consulta-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Repositorio</th>
            <th>Usuario</th>
            <th>Actualizado hace</th>
            <th>Likes</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {repositorios.map((repo, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{repo.repositoryName}</td>
              <td>{repo.userName}</td>
              <td>{calculateDaysSinceUpdate(repo.lastUpdate)}</td>
              <td>{formatLikes(repo.stars)}</td>
              <td>
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                  {repo.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='consulta-button' onClick={() => navigate('/')}>Volver</button>
    </div>
  );
};

export default Consulta;
