// Layout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

function Layout() {
  const location = useLocation();

  return (
    <>
      <Outlet /> {/* Renderiza el contenido de la ruta actual primero */}
      {location.pathname !== '/' && <Header />} 
    </>
  );
}

export default Layout;
