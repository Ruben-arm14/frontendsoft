import React from 'react';

function SavedWork({ title, author, onDelete }) {
  return (
    <div className="result-item">
      <img src="/document-icon.png" alt="Document icon" />
      <div>
        <h3>{title}</h3>
        <p className="author">{author}</p>
        {/* ... (otros detalles si los tienes) ... */}
        <button className="delete-button" onClick={onDelete}>Eliminar</button>
      </div>
      {/* Eliminamos el div de rating */}
    </div>
  );
}

export default SavedWork;
