import React from 'react';

function SearchBarResultado({ searchTerm, onSearch }) {
  return (
    <div className="barraresultado">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="searchresultado-button">Buscar</button>
    </div>
  );
}

export default SearchBarResultado;
