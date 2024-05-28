import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import documentIcon from '../document-icon.png';  // Asegúrate de tener la imagen en esta ruta

function ResultItem({ title, author, rating, area, period, content, isProfessorPage, onDelete }) {
  const [currentRating, setCurrentRating] = useState(rating);
  const location = useLocation(); // Usamos el hook useLocation

  const isHomePage = location.pathname === '/';  
  const isUserPage = location.pathname === '/usuario';

  const handleStarClick = (newRating) => {
    if (isHomePage) { // Solo permitimos cambiar la calificación si estamos en la página de inicio
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
          {isHomePage && ( // Mostramos las estrellas solo si estamos en la página de inicio
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
            {isProfessorPage ? 'Detalles' : (isUserPage ? 'Eliminar' : 'Guardar investigación')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultItem;