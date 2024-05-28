import React from 'react';
import profileIcon from '../perfil.png'; // Asegúrate de tener la imagen en tu carpeta src/assets/images

function Header() {
    return (
      <header className="header">
        <h1>Lumen Investiga</h1>
        <div className="profile-container">
          <span className="profile-text">Perfil</span> {/* Texto primero */}
          <img src={profileIcon} alt="Profile icon" className="profile-icon" /> {/* Ícono después */}
        </div>
      </header>
    );
  }
export default Header;
