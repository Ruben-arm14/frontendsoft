import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styles from '../styles/TrabajosGuardados.module.css';

function TrabajosGuardados({ investigaciones, role }) {
  const handleRemove = (id) => {
    // Lógica para eliminar el trabajo del perfil
  };

  if (investigaciones.length === 0) {
    return <div className={styles.emptyMessage}>No tienes trabajos guardados.</div>;
  }

  return (
    <div className={styles.trabajosContainer}>
      {investigaciones.map((investigacion) => (
        <div key={investigacion.id} className={styles.trabajoItem}>
          <img src={investigacion.image} alt={investigacion.title} className={styles.trabajoImage} />
          <div className={styles.trabajoInfo}>
            <h3 className={styles.trabajoTitle}>{investigacion.title}</h3>
            <p className={styles.trabajoDescription}>{investigacion.description}</p>
          </div>
          <div className={styles.trabajoRating}>
            {[1, 2, 3, 4, 5].map((value) =>
              value <= investigacion.rating ? (
                <AiFillStar key={value} className={styles.star} />
              ) : (
                <AiOutlineStar key={value} className={styles.star} />
              )
            )}
          </div>
          <button className={styles.removeButton} onClick={() => handleRemove(investigacion.id)}>
            Eliminar del perfil
          </button>
        </div>
      ))}
    </div>
  );
}

export default TrabajosGuardados;
