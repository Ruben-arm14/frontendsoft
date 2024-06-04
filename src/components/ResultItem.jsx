// components/ResultItem.jsx
import React from 'react';

function ResultItem({ inv }) { // Recibe la investigación como prop

  return (
    <div className="result-item">
      <h3>{inv.title}</h3>
      <p>Área: {inv.area}</p>
      <p>Curso: {inv.curso}</p>
      {/* ... otros detalles de la investigación que quieras mostrar ... */}
    </div>
  );
}

export default ResultItem;
