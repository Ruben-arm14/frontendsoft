import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import '../styles/busqueda.css';

function Busqueda() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    area: [],
    curso: [],
  });
  const [filters, setFilters] = useState({});

  // Lógica para cargar los datos de investigaciones (reemplaza con tu lógica real)
  const [investigaciones, setInvestigaciones] = useState([]);

  useEffect(() => {
    // Simulación de carga de datos (reemplaza con tu lógica real)
    const fetchedData = [
      { id: 1, title: 'Investigación sobre software', area: 'Software', curso: 'Seminario I' },
      { id: 2, title: 'Proyecto de IoT', area: 'IoT', curso: 'TPI' },
      { id: 3, title: 'Estudio de Cloud Computing', area: 'Cloud Computing', curso: 'Seminario II' },
    ];
    setInvestigaciones(fetchedData);
  }, []); // Ejecutar solo una vez al montar el componente

  useEffect(() => {
    const newFilters = {
      area: {},
      curso: {},
    };

    investigaciones.forEach(inv => {
      if (!newFilters.area[inv.area]) {
        newFilters.area[inv.area] = 0;
      }
      newFilters.area[inv.area]++;

      if (!newFilters.curso[inv.curso]) {
        newFilters.curso[inv.curso] = 0;
      }
      newFilters.curso[inv.curso]++;
    });

    setFilters(newFilters);
  }, [investigaciones]); // Actualiza los filtros cuando cambien las investigaciones

  const handleFilterChange = (filterType, filterValue) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(filterValue)
        ? prevFilters[filterType].filter(item => item !== filterValue)
        : [...prevFilters[filterType], filterValue]
    }));
  };

  const filteredInvestigaciones = investigaciones.filter(inv => {
    const titleMatch = inv.title.toLowerCase().includes(searchTerm.toLowerCase());
    const areaMatch = selectedFilters.area.length === 0 || selectedFilters.area.includes(inv.area);
    const periodMatch = selectedFilters.curso.length === 0 || selectedFilters.curso.includes(inv.curso);
    return titleMatch && areaMatch && periodMatch;
  });

  return (
    <div className="busqueda-container">
      <h2>Lo más trabajado</h2>

      <div className="filter-section">
        <h3>Área</h3>
        {Object.entries(filters.area).map(([area, count]) => (
          <div
            key={area}
            className={`filter ${selectedFilters.area.includes(area) ? 'active' : ''}`}
            onClick={() => handleFilterChange('area', area)}
          >
            {area} ({count})
          </div>
        ))}
      </div>

      <div className="filter-section">
        <h3>Curso</h3>
        {Object.entries(filters.curso).map(([curso, count]) => (
          <div
            key={curso}
            className={`filter ${selectedFilters.curso.includes(curso) ? 'active' : ''}`}
            onClick={() => handleFilterChange('curso', curso)}
          >
            {curso} ({count})
          </div>
        ))}
      </div>

      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

      <div className="results-list">
        {filteredInvestigaciones.map(inv => (
          <div key={inv.id}>
            <h3>{inv.title}</h3>
            <p>Área: {inv.area}</p>
            <p>Curso: {inv.curso}</p>
            {/* ... otros detalles de la investigación ... */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Busqueda;
