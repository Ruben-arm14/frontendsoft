import React from 'react';
import MostWorked from '../components/MostWorked';
import FilterSection from '../components/FilterSection';
import ResultsList from '../components/ResultsList';

function SearchPage({ filteredInvestigaciones, searchTerm, selectedFilters, handleFilterChange }) {
  // Datos para "Lo más trabajado" (puedes obtenerlos de tu fuente de datos)
  const mostWorkedData = [
    { label: 'Software', count: 55 },
    { label: 'IoT', count: 32 },
    { label: 'Cloud Computing', count: 27 },
    { label: 'Seminario I', count: 127 },
    { label: 'TPI', count: 96 },
    { label: 'Seminario II', count: 45 },
  ];

  return (
    <div className="content">
      <div className="right-side">
        <MostWorked data={mostWorkedData} />
        <div className="filter-container">
          <FilterSection selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
        </div>
      </div>
      <ResultsList investigaciones={filteredInvestigaciones} />
    </div>
  );
}

export default SearchPage;
