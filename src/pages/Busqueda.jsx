import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';
import ResultsList from '../components/ResultsList';
import investigaciones from '../data/db.json';
import '../styles/Busqueda.css';

function Busqueda() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    area: [],
    curso: [],
  });

  // Cargar investigaciones desde db.json (reemplaza con tu lógica real)
  const [investigaciones, setInvestigaciones] = useState([]);
  useEffect(() => {
    setInvestigaciones(db.json.investigaciones); // Asumiendo que db.json tiene la propiedad 'investigaciones'
  }, []);

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

  const filteredInvestigaciones = investigaciones.filter(inv => {
    const titleMatch = inv.title.toLowerCase().includes(searchTerm.toLowerCase());
    const areaMatch = selectedFilters.area.length === 0 || selectedFilters.area.includes(inv.area);
    const periodMatch = selectedFilters.curso.length === 0 || selectedFilters.curso.includes(inv.curso);
    return titleMatch && areaMatch && periodMatch;
  });

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
