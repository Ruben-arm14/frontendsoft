import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';
import ResultsList from '../components/ResultsList';
import styles from '../styles/Busqueda.module.css';

function Resultados() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    area: [],
    curso: [],
  });
  const [investigaciones, setInvestigaciones] = useState([]);

  useEffect(() => {
    // Lógica para cargar datos de investigaciones (reemplaza con tu lógica real)
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10') 
      .then(response => response.json())
      .then(data => {
        // Adapta los datos de la API al formato de tu aplicación
        const investigacionesAdaptadas = data.map(item => ({
          id: item.id,
          title: item.title,
          area: 'Área ' + (item.id % 3 + 1), // Ejemplo de asignación de área
          curso: 'Curso ' + (item.id % 2 + 1) // Ejemplo de asignación de curso
        }));
        setInvestigaciones(investigacionesAdaptadas);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
    const areaMatch = selectedFilters.area.length === 0 || selectedFilters.area.includes(inv.area);
    const cursoMatch = selectedFilters.curso.length === 0 || selectedFilters.curso.includes(inv.curso);
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
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

      <div className={styles.content}>
        <div className={styles.filters}>
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

export default Resultados;