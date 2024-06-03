// Layout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Header />}
      <Outlet /> {/* Renderiza el contenido de la ruta actual */}
    </>
  );
}

export default Layout;
