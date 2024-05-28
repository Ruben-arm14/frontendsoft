import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import documentIcon from '../document-icon.png';  // Asegúrate de tener la imagen en esta ruta

function ResultItem({ title, author, rating, area, period, content, onDelete }) {
  const [currentRating, setCurrentRating] = useState(rating);
  const location = useLocation();
  const isUserPage = location.pathname === '/usuario';

  const handleStarClick = (newRating) => {
    if (!isUserPage) { // Solo permitimos cambiar la calificación si no estamos en la página de usuario
      setCurrentRating(newRating);
    }
  };

  return (
    <div className="result-item">
      <img src={documentIcon} alt="Document icon" />
      <div>
        <h3>{title}</h3>
        <p className="author">{author}</p>
        <p className="content">{content}</p>
        <div className="rating-and-save">
          {!isUserPage && ( // Mostramos las estrellas solo si NO estamos en la página de usuario
            <div className="rating">
              {[...Array(5)].map((star, index) => (
                <span
                  key={index}
                  className={index < currentRating ? 'star checked' : 'star'}
                  onClick={() => handleStarClick(index + 1)}
                >
                  ★
                </span>
              ))}
            </div>
          )}
          <button className="save-button" onClick={onDelete}>
            {isUserPage ? 'Eliminar' : 'Guardar investigación'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultItem;
