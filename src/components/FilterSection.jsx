// FilterSection.jsx
function FilterSection({ title, filters, selectedFilters, onFilterChange }) {
  return (
    <div className="filter-section">
      <h3>{title}</h3>
      {filters.map(filter => (
        <div
          key={filter}
          className={`filter ${selectedFilters.includes(filter) ? 'active' : ''}`}
          onClick={() => onFilterChange(filter)} // Pasa solo el filtro
        >
          {filter} ({selectedFilters.includes(filter) ? '✓' : ''})
        </div>
      ))}
    </div>
  );
}

export default FilterSection;