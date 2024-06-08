import React from 'react';

function FilterSection({ title, filters, selectedFilters, handleFilterChange, className }) {
  return (
    <div className={className}>
      <h3>{title}</h3>
      {filters.map(filter => (
        <div
          key={filter}
          className={`${className} ${selectedFilters.includes(filter) ? 'active' : ''}`}
          onClick={() => handleFilterChange(filter)}
        >
          {filter} ({selectedFilters.filter(item => item === filter).length})
        </div>
      ))}
    </div>
  );
}

export default FilterSection;
