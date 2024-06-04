import React from 'react';

function ResultsList({ investigaciones }) {
  return (
    <div className="results-list">
      {investigaciones.map(inv => (
        <div key={inv.id}>
          <h3>{inv.title}</h3>
          <p>{inv.area}</p>
          <p>{inv.curso}</p>
        </div>
      ))}
    </div>
  );
}

export default ResultsList;
