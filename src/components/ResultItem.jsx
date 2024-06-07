// components/ResultItem.jsx
import React from 'react';

function ResultItem({ inv }) {
  return (
    <div className="result-item">
      <h3>{inv.title}</h3>
      <p>Autor: {inv.author}</p> 
      <p>Área: {inv.area}</p>
      <p>Curso: {inv.curso}</p>
      {/* Agrega aquí otros detalles de la investigación */}
      {/* Ejemplo: */}
      <div className="rating">
        {/* Lógica para mostrar las estrellas de calificación */}
      </div>
      <button className="save-button">Guardar investigación</button>
    </div>
  );
}

export default ResultItem;
