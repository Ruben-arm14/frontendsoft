import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';
import ResultsList from '../components/ResultsList';
import '../styles/Busqueda.css';

function Busqueda({ investigaciones, searchTerm, setSearchTerm, selectedFilters, handleFilterChange }) {
  const [filters, setFilters] = useState({
    area: {},
    curso: {}
  });

  useEffect(() => {
    // Lógica de filtrado
    const filteredInvestigaciones = investigaciones.filter(inv => {
        const titleMatch = inv.title.toLowerCase().includes(searchTerm.toLowerCase());
        const areaMatch = selectedFilters.area.length === 0 || selectedFilters.area.includes(inv.area);
        const periodMatch = selectedFilters.curso.length === 0 || selectedFilters.curso.includes(inv.curso);
        return titleMatch && areaMatch && periodMatch;
    });

    // Calcular filtros y conteos
    const newFilters = {
      area: {},
      curso: {},
    };
    filteredInvestigaciones.forEach(inv => { 
      if (inv.area && !newFilters.area[inv.area]) {
        newFilters.area[inv.area] = 0;
      }
      if (inv.area) {
        newFilters.area[inv.area]++;
      }

      if (inv.curso && !newFilters.curso[inv.curso]) {
        newFilters.curso[inv.curso] = 0;
      }
      if (inv.curso) {
        newFilters.curso[inv.curso]++;
      }
    });

    setFilters(newFilters); // Actualiza los filtros

    // ... (resto del JSX)
  }, [investigaciones, searchTerm, selectedFilters]); // Todas las dependencias necesarias

  return (
    <div>
      <Header />
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
            handleFilterChange={(value) => handleFilterChange('curso', value)}
          />
        </div>

        <ResultsList investigaciones={filteredInvestigaciones} />
      </div>
    </div>
  );
}

export default Busqueda;
