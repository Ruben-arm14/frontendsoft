import React from 'react';
import ResultItem from './ResultItem';
import '../styles/Resultados.module.css'; // Make sure the CSS file is imported

function ResultsList({ investigaciones }) {
  return (
    <div className="results-list">
      <h2>Resultados ({investigaciones.length})</h2>
      {investigaciones.length > 0 ? (
        investigaciones.map(inv => (
          <ResultItem key={inv.id} inv={inv} />
        ))
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
}

export default ResultsList;
