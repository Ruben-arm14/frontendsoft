// ResultsList.jsx
import React from 'react';
import ResultItem from './ResultItem';

function ResultsList({ investigaciones }) {
  return (
    <div className="results-list">
      <h2>Resultados ({investigaciones.length})</h2>
      {investigaciones.length > 0 ? (
        investigaciones.map(investigacion => ( // Cambiamos inv por investigacion
          <ResultItem key={investigacion.id} investigacion={investigacion} /> // Pasamos investigacion como prop
        ))
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
}

export default ResultsList;
