import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';
import '../styles/Busqueda.css';

function Busqueda({ investigaciones, searchTerm, setSearchTerm, selectedFilters, handleFilterChange }) {
  const [filters, setFilters] = useState({
    area: {},
    curso: {},
  });

  useEffect(() => {
    const newFilters = {
      area: {},
      curso: {},
    };

    investigaciones.forEach(inv => {
      if (inv.area && !newFilters.area[inv.area]) {
        newFilters.area[inv.area] = 0;
      }
      newFilters.area[inv.area] = (newFilters.area[inv.area] || 0) + 1;

      if (inv.curso && !newFilters.curso[inv.curso]) {
        newFilters.curso[inv.curso] = 0;
      }
      newFilters.curso[inv.curso] = (newFilters.curso[inv.curso] || 0) + 1;
    });

    setFilters(newFilters);
  }, [investigaciones]);

  return (
    <div>
      <Header />

      <div className="content">
        {/* Se movieron los filtros a la derecha de la barra de búsqueda */}
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
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
            handleFilterChange={(value) => handleFilterChange('curso', value)}
          />
        </div> 
      </div>
    </div>
  );
}

export default Busqueda;
