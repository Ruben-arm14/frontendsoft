import React from 'react';
import SavedWork from '../components/SavedWork';
import FilterSection from '../components/FilterSection';
import ResultItem from '../components/ResultItem';

function UserPage({ savedWorks, onDeleteSavedWork, investigaciones, selectedFilters, handleFilterChange }) {
  const articulos = investigaciones ? investigaciones.filter(inv => inv.type === "articulo") : [];

  return (
    <div className="user-page">
      <h2>Trabajos Guardados:</h2>
      <div className="content">
        <div className="filter-container"> {/* Movemos los filtros a la derecha */}
          <h3 className="filter-title">Filtros</h3>
          <FilterSection selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
        </div>
        <div className="saved-works-and-articles"> {/* Movemos los trabajos y artículos a la izquierda */}
          <div className="results-list">
            {savedWorks.map(work => (
              <SavedWork key={work.id} {...work} onDelete={onDeleteSavedWork} />
            ))}
          </div>
          <div className="results-list">
            {articulos.slice(0, 2).map(articulo => (
              <ResultItem key={articulo.id} {...articulo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
