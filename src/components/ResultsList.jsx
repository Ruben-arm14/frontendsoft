import React from 'react';

function ResultsList({ investigaciones }) {
  return (
    <div className="results-list">
      <h2>Resultados (1-{investigaciones.length})</h2>
      {investigaciones.map(inv => (
        <div key={inv.id}>
          <h3>{inv.title}</h3>
          <p>Área: {inv.area}</p>
          <p>Curso: {inv.curso}</p>
          {/* ... otros detalles de la investigación ... */}
        </div>
      ))}
    </div>
  );
}

export default ResultsList;
