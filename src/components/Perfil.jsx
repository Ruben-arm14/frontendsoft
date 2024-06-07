import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FormInput from '../components/common/FormInput';
import ProfilePicture from '../images/perfil.png';
import styles from '../styles/Perfil.module.css';

function Perfil() {
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

  useEffect(() => {
    // Simulación de carga de datos desde localStorage (reemplaza con tu lógica real)
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
      setUpdatedData({ ...updatedData, fotoPerfil: file });
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedData(userData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos al backend y actualizar el estado userData
    // ... (implementa tu lógica de envío de datos y manejo de errores)
  };

  if (isLoading) {
    return <div>Cargando datos del perfil...</div>;
  }

  return (
    <div>
      <Header />

      {/* Contenedor principal del perfil */}
      <div className={styles.profileContent}>
        <h2 className={styles.profileTitle}>Mi perfil</h2>

        <div className={styles.perfilContainer}>
          {/* Sección de la imagen */}
          <div className={styles.imageSection}>
            <img src={updatedData.fotoPerfil ? URL.createObjectURL(updatedData.fotoPerfil) : ProfilePicture} alt="Foto de perfil" />

            {isEditing && ( 
              <div className={styles.buttonContainer}>
                <label htmlFor="fotoPerfil">Cambiar foto</label>
                <input type="file" id="fotoPerfil" name="fotoPerfil" onChange={handleImageChange} />
              </div>
            )}
          </div>

          {/* Contenedor del formulario y el header */}
          <div className={styles.formContent}>
            {/* Pestañas */}
            <div className={styles.profileHeader}>
              <div className={styles.tabs}>
                <button className={styles.activeTab}>Información de la cuenta</button>
                <button>Trabajos guardados</button>
              </div>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit}>
              <div className={styles.inputRow}>
                <div className={styles.formGroup}>
                  <FormInput
                    label="Nombres"
                    type="text"
                    name="nombres"
                    value={isEditing ? updatedData.nombres : userData.nombres}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                  <FormInput
                    label="Apellidos"
                    type="text"
                    name="apellidos"
                    value={isEditing ? updatedData.apellidos : userData.apellidos}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                  <FormInput
                    label="Código"
                    type="text"
                    name="codigo"
                    value={isEditing ? updatedData.codigo : userData.codigo}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                  <FormInput
                    label="Correo"
                    type="email"
                    name="correo"
                    value={isEditing ? updatedData.correo : userData.correo}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              {/* Botones */}
              <div className={styles.buttonContainer}>
                {isEditing ? (
                  <>
                    <button type="submit" className={styles.modificarButton}>Guardar Cambios</button>
                    <button type="button" onClick={handleCancelClick} className={styles.cancelarButton}>Cancelar</button>
                  </>
                ) : (
                  <button type="button" onClick={handleEditClick} className={styles.editarButton}>Editar Perfil</button>
                )}
                <button type="button" className={styles.cambiarContrasenaButton}>Cambiar contraseña</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
