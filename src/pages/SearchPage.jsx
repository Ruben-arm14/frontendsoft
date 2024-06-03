import React from 'react';
import MostWorked from '../components/MostWorked';
import FilterSection from '../components/FilterSection';
import ResultsList from '../components/ResultsList';
import '../pages/SearchPage.css'; // Asegúrate de tener la ruta correcta a tu CSS

function SearchPage({ investigaciones, searchTerm, selectedFilters, handleFilterChange }) {
  // Datos para "Lo más trabajado" (debes obtenerlos de tu fuente de datos real)
  const mostWorkedData = [
    { label: 'Software', count: 55 },
    { label: 'IoT', count: 32 },
    { label: 'Cloud Computing', count: 27 },
    { label: 'Seminario I', count: 127 },
    { label: 'TPI', count: 96 },
    { label: 'Seminario II', count: 45 },
  ];

  // Filtrar investigaciones dentro del componente
  const filteredInvestigaciones = investigaciones.filter(inv => {
    const titleMatch = inv.title.toLowerCase().includes(searchTerm.toLowerCase());
    const areaMatch = selectedFilters.area.length === 0 || selectedFilters.area.includes(inv.area);
    const periodMatch = selectedFilters.period.length === 0 || selectedFilters.period.includes(inv.period);
    return titleMatch && areaMatch && periodMatch;
  });

  return (
    <div className="content">
      <div className="right-side"> {/* Cambia 'left-side' a 'right-side' */}
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
