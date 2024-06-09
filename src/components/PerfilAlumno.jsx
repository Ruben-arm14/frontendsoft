import React, { useState, useEffect } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Header from './Header';
import FormInput from './common/FormInput';
import ProfilePicture from '../images/perfil.png'; // Cambiada la imagen predeterminada
import styles from '../styles/PerfilAlumno.module.css';
import trabajosStyles from '../styles/TrabajosGuardados.module.css';

function PerfilAlumno() {
  const [userData, setUserData] = useState({
    nombres: '',
    apellidos: '',
    codigo: '',
    correo: '',
    fotoPerfil: null,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({ ...userData });
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('informacion');
  const [trabajosGuardados, setTrabajosGuardados] = useState([
    {
      id: 1,
      title: 'Investigación 1',
      description: 'Descripción de la investigación 1',
      image: 'https://via.placeholder.com/100',
      rating: 4,
    },
    {
      id: 2,
      title: 'Investigación 2',
      description: 'Descripción de la investigación 2',
      image: 'https://via.placeholder.com/100',
      rating: 5,
    },
  ]);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      setUserData(storedUserData);
      setUpdatedData(storedUserData);
    }
    setIsLoading(false);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedData({ ...updatedData, fotoPerfil: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    setUserData(updatedData);
    localStorage.setItem('userData', JSON.stringify(updatedData));
  };

  const handleStarClick = (value) => {
    console.log('Valoración:', value);
  };

  if (isLoading) {
    return <div>Cargando datos del perfil...</div>;
  }

  return (
    <div>
      <Header />
      <div className={styles.profileContent}>
        <h2 className={styles.profileTitle}>Mi perfil</h2>
        <div className={styles.profileHeader}>
          <div className={styles.tabs}>
            <button
              className={activeTab === 'informacion' ? styles.activeTab : ''}
              onClick={() => setActiveTab('informacion')}
            >
              <span className={activeTab === 'informacion' ? styles.tabActiveText : styles.tabText}>Información de la cuenta</span>
            </button>
            <button
              className={activeTab === 'trabajos' ? styles.activeTab : ''}
              onClick={() => setActiveTab('trabajos')}
            >
              <span className={activeTab === 'trabajos' ? styles.tabActiveText : styles.tabText}>Trabajos guardados</span>
            </button>
          </div>
        </div>
        <div className={styles.perfilContainer}>
          {activeTab === 'informacion' && (
            <div className={styles.formContent} style={{ margin: 'auto', width: '60%' }}>
              <form onSubmit={handleSubmit}>
                <div className={styles.inputRow}>
                  <div className={styles.formGroup}>
                    <FormInput
                      label="Nombres"
                      type="text"
                      name="nombres"
                      value={updatedData.nombres}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                    <FormInput
                      label="Apellidos"
                      type="text"
                      name="apellidos"
                      value={updatedData.apellidos}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                    <FormInput
                      label="Código"
                      type="text"
                      name="codigo"
                      value={updatedData.codigo}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                    <FormInput
                      label="Correo"
                      type="email"
                      name="correo"
                      value={updatedData.correo}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <button type="button" className={styles.modificarButton}>Modificar</button>
                  <button type="button" className={styles.cambiarContrasenaButton}>Cambiar contraseña</button>
                </div>
              </form>
              <div className={styles.imageSection}>
                <img
                  src={updatedData.fotoPerfil ? updatedData.fotoPerfil : ProfilePicture}
                  alt="Foto de perfil"
                />
                <label className={styles.cambiarFotoButton} htmlFor="fotoPerfil" style={{ marginLeft: '-10px' }}> {/* Modificación aquí */}
                  Cambiar foto
                  <input
                    type="file"
                    id="fotoPerfil"
                    name="fotoPerfil"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
            </div>
          )}
          {activeTab === 'trabajos' && (
            trabajosGuardados.map(trabajo => (
              <div key={trabajo.id} className={trabajosStyles.trabajoItem}>
                <img src={trabajo.image} alt="Trabajo" className={trabajosStyles.trabajoImage} />
                <div className={trabajosStyles.trabajoInfo}>
                  <h3 className={trabajosStyles.trabajoTitle}>{trabajo.title}</h3>
                  <p className={trabajosStyles.trabajoDescription}>{trabajo.description}</p>
                  <div className={trabajosStyles.trabajoRating}>
                    {[1, 2, 3, 4, 5].map(value => (
                      value <= trabajo.rating ? (
                        <AiFillStar
                          key={value}
                          className={trabajosStyles.star}
                          onClick={() => handleStarClick(value)}
                        />
                      ) : (
                        <AiOutlineStar
                          key={value}
                          className={trabajosStyles.star}
                          onClick={() => handleStarClick(value)}
                        />
                      )
                    ))}
                  </div>
                  <button className={trabajosStyles.removeButton}>Eliminar del perfil</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default PerfilAlumno;
