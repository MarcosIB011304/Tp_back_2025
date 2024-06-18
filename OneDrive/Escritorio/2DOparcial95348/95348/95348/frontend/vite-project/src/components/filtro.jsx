import React from 'react';

const Filtro = ({ filtro, setFiltro }) => {
  return (
    <div className="filter-container">
      <label htmlFor="filter">Filtro:</label>
      <input 
        type="text" 
        id="filter" 
        className="filter-input" 
        value={filtro} 
        onChange={(e) => setFiltro(e.target.value)} 
      />
      <button className="filter-button" onClick={() => setFiltro(filtro)}>Filtrar</button>
    </div>
  );
};

export default Filtro;
