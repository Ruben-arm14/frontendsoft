// Busqueda.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';
import '../styles/Busqueda.css';

function Busqueda() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    area: [],
    curso: [],
  });
  const [filters, setFilters] = useState({
    area: {},
    curso: {},
  });

  // Cargar datos de investigaciones (reemplaza con tu lógica real)
  const [investigaciones, setInvestigaciones] = useState([]);

  useEffect(() => {
    // Simulación de carga de datos desde db.json
    setInvestigaciones([
      { id: 1, title: 'Investigación 1', area: 'Software', curso: 'Seminario I' },
      { id: 2, title: 'Investigación 2', area: 'IoT', curso: 'TPI' },
      { id: 3, title: 'Investigación 3', area: 'Software', curso: 'Seminario II' },
      { id: 4, title: 'Investigación 4', area: 'Cloud Computing', curso: 'Seminario I' },
      // ... más investigaciones
    ]);
  }, []);

  const handleFilterChange = (filterType, filterValue) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(filterValue)
        ? prevFilters[filterType].filter(item => item !== filterValue)
        : [...prevFilters[filterType], filterValue]
    }));
  };

  return (
    <div>
      <Header />
      <div className="busqueda-container">
        <div className="filters">
        <h2>Los más trabajado</h2>
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
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
    </div>
  );
}

export default Busqueda;