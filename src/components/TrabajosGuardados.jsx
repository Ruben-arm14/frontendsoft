import React from 'react';

function TrabajosGuardados({ investigaciones, role }) { // Recibe investigaciones y role como props
  // Lógica para filtrar trabajos según el rol (usuario o profesor)
  const trabajosFiltrados = investigaciones.filter(inv => {
    if (role === 'usuario') {
      return inv.guardadoPorUsuario; // Filtrar por trabajos guardados por el usuario (implementa esta lógica)
    } else if (role === 'profesor') {
      return inv.autor === userData.nombres; // Usar userData.nombres
    }
    return false; 
  });

  return (
    <div className="trabajos-guardados-container">
      <h2>{role === 'usuario' ? 'Trabajos Guardados' : 'Trabajos Subidos'}</h2>
      <ul>
        {trabajosFiltrados.map(inv => (
          <li key={inv.id}>{inv.title}</li> // Muestra el título del trabajo (puedes personalizar esto)
        ))}
      </ul>
    </div>
  );
}

export default TrabajosGuardados;
