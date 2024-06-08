import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';
import styles from '../styles/BusquedaSearchBar.module.css'; // Importar el CSS module específico
import filterStyles from '../styles/FilterSectionBusqueda.module.css'; // Importar el CSS específico para FilterSection en Busqueda
import '../styles/busqueda.css';

function Busqueda({ investigaciones, searchTerm, setSearchTerm, selectedFilters, handleFilterChange }) {
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

  return (
    <div>
      <Header />

      <div className="content">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} className={styles.searchBar} /> {/* Aplicar el estilo específico */}
        <div className="filters">
          <FilterSection
            title="Área"
            filters={Object.keys(filters.area)}
            selectedFilters={selectedFilters.area}
            handleFilterChange={(value) => handleFilterChange('area', value)}
            className={filterStyles.filterSection}
          />
          <FilterSection
            title="Curso"
            filters={Object.keys(filters.curso)}
            selectedFilters={selectedFilters.curso}
            handleFilterChange={(value) => handleFilterChange('curso', value)}
            className={filterStyles.filterSection}
          />
        </div>
      </div>
    </div>
  );
}

export default Busqueda;
