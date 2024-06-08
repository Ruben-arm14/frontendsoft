// components/ResultItem.jsx
import React, { useState } from 'react';
import resultadosStyles from '../styles/Resultados.module.css'; // Importa los estilos
import documentIcon from '../images/document-icon.png'; // Importa la imagen del icono de documento

function ResultItem({ inv }) {
  const [rating, setRating] = useState(0); // Estado para la calificación

  // Función para guardar la investigación
  const handleGuardarInvestigacion = () => {
    // Agrega aquí la lógica para guardar la investigación
    console.log('Investigación guardada:', inv.title);
  };

  // Función para manejar el clic en una estrella
  const handleStarClick = (star) => {
    // Si la estrella ya estaba seleccionada, quitar la calificación
    if (star === rating) {
      setRating(0);
    } else {
      setRating(star); // Establecer la calificación
    }
  };

  return (
    <div className={resultadosStyles['result-item']}>
      {/* Imagen del icono a la izquierda */}
      <div className={resultadosStyles['image-container']}>
        <img src={documentIcon} alt="Icono de documento" className={resultadosStyles['image']} />
      </div>
      {/* Contenido */}
      <div className={resultadosStyles['content-container']}>
        <h3>{inv.title}</h3>
        <p>Autor: {inv.author}</p>
        <p>Área: {inv.area}</p>
        <p>Curso: {inv.curso}</p>
      </div>
      {/* Estrellas y botón para guardar la investigación */}
      <div className={resultadosStyles['action-container']}>
        {/* Sección de calificación con estrellas */}
        <div className={resultadosStyles.rating}>
          {[1, 2, 3, 4, 5].map((star, index) => (
            <span
              key={index}
              className={star <= rating ? resultadosStyles.star + ' ' + resultadosStyles.active : resultadosStyles.star}
              onClick={() => handleStarClick(star)}
            >
              &#9733;
            </span>
          ))}
        </div>
        {/* Botón para guardar la investigación */}
        <button className={resultadosStyles['save-button']} onClick={handleGuardarInvestigacion}>Guardar investigación</button>
      </div>
    </div>
  );
}

export default ResultItem;
