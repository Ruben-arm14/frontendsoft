// FilterSection.jsx
import React from 'react';

function FilterSection({ title, filters, selectedFilters, handleFilterChange }) {
  return (
    <div className="filter-section">
      <h3>{title}</h3>
      {filters.map(filter => (
        <div
          key={filter}
          className={`filter ${selectedFilters.includes(filter) ? 'active' : ''}`}
          onClick={() => handleFilterChange(filter)}
        >
          {filter} ({selectedFilters.filter(item => item === filter).length}) {/* Corrección aquí */}
        </div>
      ))}
    </div>
  );
}

export default FilterSection;
