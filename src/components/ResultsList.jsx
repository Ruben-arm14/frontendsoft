import React from 'react';
import ResultItem from './ResultItem';

function ResultsList({ investigaciones, searchTerm, selectedFilters }) {
  const filteredInvestigaciones = investigaciones.filter(inv => {
    const titleMatch = inv.title.toLowerCase().includes(searchTerm.toLowerCase());
    const areaMatch = selectedFilters.area.length === 0 || selectedFilters.area.includes(inv.area);
    const cursoMatch = selectedFilters.curso.length === 0 || selectedFilters.curso.includes(inv.curso);
    return titleMatch && areaMatch && cursoMatch;
  });

  return (
    <div className="results-list">
      <h2>Resultados ({filteredInvestigaciones.length})</h2>
      {filteredInvestigaciones.length > 0 ? (
        filteredInvestigaciones.map(inv => (
          <ResultItem key={inv.id} inv={inv} />
        ))
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
}

export default ResultsList;