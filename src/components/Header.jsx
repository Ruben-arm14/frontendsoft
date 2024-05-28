import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileIcon from '../perfil.png'; // Asegúrate de tener la imagen en tu carpeta src/assets/images

function Header() {
    const location = useLocation();
  
    return (
      <header className="header">
        {location.pathname === '/usuario' ? ( // Renderizado condicional
          <>
            <Link to="/" className="home-link">Home Page</Link>
            <h1>Lumen Investiga</h1>
            <div className="profile-container">
              <span className="profile-text">Hola, Juan</span>
              <img src={profileIcon} alt="Profile icon" className="profile-icon" />
            </div>
          </>
        ) : ( // Renderizado para otras páginas
          <>
            <h1>Lumen Investiga</h1>
            <div className="profile-container">
              <span className="profile-text">Perfil</span>
              <img src={profileIcon} alt="Profile icon" className="profile-icon" />
            </div>
          </>
        )}
      </header>
    );
  }
  
  export default Header;
