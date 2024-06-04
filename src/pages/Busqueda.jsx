import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';
import ResultsList from '../components/ResultsList';
import '../styles/Busqueda.css';

function Busqueda() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    area: [],
    curso: [],
  });
  const [investigaciones, setInvestigaciones] = useState([]);

  useEffect(() => {
    // Lógica para cargar datos de investigaciones (reemplaza con tu lógica real)
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10') // Ejemplo de carga de datos desde una API
      .then(response => response.json())
      .then(data => setInvestigaciones(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Ejecutar solo una vez al montar el componente

  const handleFilterChange = (filterType, filterValue) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(filterValue)
        ? prevFilters[filterType].filter(item => item !== filterValue)
        : [...prevFilters[filterType], filterValue]
    }));
  };

  // Lógica de filtrado
  const filteredInvestigaciones = investigaciones.filter(inv => {
    const titleMatch = inv.title.toLowerCase().includes(searchTerm.toLowerCase());
    const areaMatch = selectedFilters.area.length === 0 || selectedFilters.area.includes(inv.area || ''); // Asegúrate de que inv.area exista
    const cursoMatch = selectedFilters.curso.length === 0 || selectedFilters.curso.includes(inv.curso || ''); // Asegúrate de que inv.curso exista
    return titleMatch && areaMatch && cursoMatch;
  });

  // Calcular filtros disponibles y sus conteos
  const filters = {
    area: {},
    curso: {},
  };

  filteredInvestigaciones.forEach(inv => {
    if (inv.area && !filters.area[inv.area]) {
      filters.area[inv.area] = 0;
    }
    filters.area[inv.area] = (filters.area[inv.area] || 0) + 1;

    if (inv.curso && !filters.curso[inv.curso]) {
      filters.curso[inv.curso] = 0;
    }
    filters.curso[inv.curso] = (filters.curso[inv.curso] || 0) + 1;
  });

  return (
    <div>
      <Header />
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} /> {/* Mover SearchBar fuera de filters */}

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
      </div>
      <div className="results-container"> {/* Contenedor para los resultados */}
        <ResultsList investigaciones={filteredInvestigaciones} />
      </div>
    </div>
  );
}

export default Busqueda;