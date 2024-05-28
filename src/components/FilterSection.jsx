import React from 'react';

function FilterSection({ selectedFilters, onFilterChange }) {
  const areas = ["IoT", "Software", "Cloud Computing", "Inteligencia Artificial"];
  const periods = ["2023-2", "2023-1", "2022-2"]; // Actualiza los períodos

  return (
    <div className="filter-section">
      <h3>Filtros</h3>
      <h4>Área</h4>
      <div className="checkbox-group"> {/* Agrupamos los checkboxes de área */}
        {areas.map(area => (
          <label key={area}>
            <div className="checkbox-container">
              <input 
                type="checkbox" 
                value={area} 
                checked={selectedFilters.area.includes(area)}
                onChange={() => onFilterChange('area', area)} 
              />
              {area}
            </div>
          </label>
        ))}
      </div>

      <h4>Período</h4>
      <div className="checkbox-group"> {/* Agrupamos los checkboxes de período */}
        {periods.map(period => (
          <label key={period}>
            <div className="checkbox-container">
              <input 
                type="checkbox" 
                value={period} 
                checked={selectedFilters.period.includes(period)}
                onChange={() => onFilterChange('period', period)} 
              />
              {period}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterSection;
