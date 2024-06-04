import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';
import ResultsList from '../components/ResultsList';
import '../styles/Busqueda.css';
import investigaciones from '../data/db.json';

function Busqueda({ searchTerm, setSearchTerm, selectedFilters, handleFilterChange }) {
  const [filters, setFilters] = useState({ // Inicializa filters con objetos vacíos
    area: {},
    curso: {}
  });

  useEffect(() => {
    const newFilters = {
      area: {},
      curso: {},
    };

    investigaciones.forEach(inv => {
      if (!newFilters.area[inv.area]) {
        newFilters.area[inv.area] = 0;
      }
      newFilters.area[inv.area]++;

      if (!newFilters.curso[inv.curso]) {
        newFilters.curso[inv.curso] = 0;
      }
      newFilters.curso[inv.curso]++;
    });

    setFilters(newFilters);
  }, []);

  return (
    <div className="busqueda-container">
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

      <div className="content">
        <div className="filters">
          <FilterSection 
            title="Área"
            filters={Object.keys(filters.area)}
            selectedFilters={selectedFilters.area}
            handleFilterChange={(value) => handleFilterChange('area', value)}
          />
          <FilterSection
            title="Curso"
            filters={Object.keys(filters.curso)}
            selectedFilters={selectedFilters.curso}
            handleFilterChange={(value) => handleFilterChange('curso', value)} // Corregido
          />
        </div>
        <ResultsList investigaciones={investigaciones} searchTerm={searchTerm} selectedFilters={selectedFilters}/> 
      </div>
    </div>
  );
}
export default Busqueda;