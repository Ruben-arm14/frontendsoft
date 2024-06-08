import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaFileAlt } from 'react-icons/fa';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Header from '../components/Header';
import logoicon from '../images/perfil.png';
import styles from '../styles/DetalleInvestigacion.module.css';
import data from '../data/db.json'; // Importar los datos desde el archivo db.json

function DetalleInvestigacion() {
    const { id } = useParams();
    const [rating, setRating] = useState(0);
    const [investigacion, setInvestigacion] = useState(null); // Estado para almacenar la investigación

    useEffect(() => {
        // Buscar la investigación por ID
        const investigacionEncontrada = data.investigaciones.find(item => item.id === parseInt(id));
        setInvestigacion(investigacionEncontrada);
    }, [id]);

    const handleStarClick = (value) => {
        setRating(value);
    };

    return (
        <div>
            <Header />
            <div className={styles.detalleContainer}>
                <button className={styles.regresarButton}>← Regresar</button>
                {investigacion && (
                    <>
                        <h2 className={styles.title}>{investigacion.title}</h2>
                        <div className={styles.header}>
                            <FaFileAlt className={styles.documentIcon} />
                            <div>
                                <p className={styles.description}>{investigacion.abstract}</p>
                            </div>
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.infoRow}>
                                <div className={styles.infoColumn}>
                                    <div className={styles.infoItem}>
                                        <p className={styles.infoLabel}>Autor:</p>
                                        <p className={styles.tag}>{investigacion.autor}</p>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <p className={styles.infoLabel}>Asesor:</p>
                                        <p className={styles.tag}>{investigacion.asesor}</p>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <p className={styles.infoLabel}>Profesor:</p>
                                        <p className={styles.tag}>{investigacion.profesor}</p>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <p className={styles.infoLabel}>Periodo:</p>
                                        <p className={styles.tag}>{investigacion.periodo}</p>
                                    </div>
                                </div>
                                <div className={styles.infoColumn}>
                                    <div className={styles.infoItem}>
                                        <p className={styles.infoLabel}>Curso:</p>
                                        <p className={styles.tag}>{investigacion.curso}</p>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <p className={styles.infoLabel}>Área / Subárea:</p>
                                        <p className={styles.tag}>{investigacion.area} / {investigacion.subarea}</p>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <p className={styles.infoLabel}>ODS:</p>
                                        <p className={styles.tag}>{investigacion.ods.join(', ')}</p>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <p className={styles.infoLabel}>Keywords:</p>
                                        <p className={styles.tag}>{investigacion.keywords.join(', ')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.ratingSection}>
                            <p>Valora este trabajo:</p>
                            <div className={styles.starRating}>
                                {[1, 2, 3, 4, 5].map((value) =>
                                    value <= rating ? (
                                        <AiFillStar
                                            key={value}
                                            className={styles.star}
                                            onClick={() => handleStarClick(value)}
                                        />
                                    ) : (
                                        <AiOutlineStar
                                            key={value}
                                            className={styles.star}
                                            onClick={() => handleStarClick(value)}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                        <div className={styles.commentSection}>
                            <h3>Comenta acerca de este trabajo</h3>
                            <textarea className={styles.commentTextArea} />
                            <button className={styles.submitButton}>Enviar</button>
                        </div>
                        <div className={styles.commentsContainer}>
                            <h3>Comentarios</h3>
                            <div className={styles.comment}>
                                <img
                                    className={styles.commentImage}
                                    src={logoicon}
                                    alt="Perfil"
                                />
                                <div className={styles.commentContent}>
                                    <p className={styles.commentUser}>Usuario</p>
                                    <p className={styles.commentDate}>Fecha del comentario</p>
                                    <p>Contenido del comentario</p>
                                </div>
                            </div>
                            {/* Aquí van los demás comentarios */}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default DetalleInvestigacion;
