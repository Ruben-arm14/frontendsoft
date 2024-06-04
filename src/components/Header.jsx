import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileIcon from '../images/perfil.png'; // Corregir la ruta de la imagen
import '../index.css'; // Corregir la ruta del CSS


function Header() {
  const location = useLocation();

  return (
    <header className="header">
      {location.pathname !== '/' && ( 
        <Link to="/" className="home-link">Home Page</Link>
      )}

      <h1>Lumen Investiga</h1>

      <div className="profile-container">
        {location.pathname === '/usuario' ? ( 
          <>
            <span className="profile-text">Hola, Juan</span>
            <img src={profileIcon} alt="Profile icon" className="profile-icon" />
          </>
        ) : location.pathname === '/profesor' ? ( 
            <>
              <span className="profile-text">Hola, Profe</span>
              <img src={profileIcon} alt="Profile icon" className="profile-icon" />
            </>
          ) : null}
      </div>
    </header>
  );
}

export default Header;
