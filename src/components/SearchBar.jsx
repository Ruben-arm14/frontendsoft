import React from 'react';

function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="search-button">Buscar</button>
    </div>
  );
}

export default SearchBar;
