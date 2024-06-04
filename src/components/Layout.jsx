import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

function Layout() {
  const location = useLocation();

  return (
    <div>
      <Outlet />  {/* Renderiza Outlet primero */}
      {location.pathname !== '/' && <Header />} 
    </div>
  );
}

export default Layout;
