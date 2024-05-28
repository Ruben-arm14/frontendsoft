import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  // Array con las rutas donde NO quieres mostrar la navegación
  const excludedPaths = ['/usuario', '/profesor'];

  return (
    <nav>
      <ul>
        {!excludedPaths.includes(location.pathname) && ( // Renderiza los enlaces solo si NO estamos en las rutas excluidas
          <>
            <li><Link to="/usuario">Usuario</Link></li>
            <li><Link to="/profesor">Profesor</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
