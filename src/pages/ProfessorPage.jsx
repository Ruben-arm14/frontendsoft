import React from 'react';
import SavedWork from '../components/SavedWork'; // Reutilizamos el componente SavedWork

function ProfessorPage({ investigaciones, onDeleteSavedWork }) {
  return (
    <div className="user-page"> {/* Reutilizamos la clase user-page */}
      <h2>Trabajos Subidos:</h2> {/* Cambiamos el título */}
      <div className="results-list"> 
        {investigaciones.map(work => (
          <SavedWork
            key={work.id}
            {...work}
            onDelete={onDeleteSavedWork} // Pasamos la función onDelete (si es necesaria)
          />
        ))}
      </div>
    </div>
  );
}

export default ProfessorPage;
