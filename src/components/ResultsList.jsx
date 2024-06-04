import React from 'react';

function ResultsList({ investigaciones }) {
  return (
    <div className="results-list">
      <h2>Resultados (1-{investigaciones.length})</h2> {/* Título de resultados */}
      {investigaciones.map(inv => (
        <div key={inv.id} className="result-item">
          {/* ... (resto del contenido de cada investigación) ... */}
        </div>
      ))}
    </div>
  );
}

export default ResultsList;
