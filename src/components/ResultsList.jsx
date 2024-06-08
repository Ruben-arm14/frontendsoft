// components/ResultsList.jsx
import React from 'react';
import ResultItem from './ResultItem';
import resultadosStyles from '../styles/Resultados.module.css'; // Importa los estilos

function ResultsList({ investigaciones }) {
  return (
    <div className={resultadosStyles['results-list']}>
      <h2 className={resultadosStyles['results-title']}>Resultados ({investigaciones.length})</h2> {/* Mueve "Resultados" hacia la derecha */}
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
