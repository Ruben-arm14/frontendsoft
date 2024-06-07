import React from 'react';

const userData = { nombres: 'profesor' }; // Definir userData aquí

function TrabajosGuardados({ investigaciones, role }) {
  const trabajosFiltrados = investigaciones.filter(inv => {
    if (role === 'usuario') {
      return inv.guardadoPorUsuario;
    } else if (role === 'profesor') {
      return inv.autor === userData.nombres;
    }
    return false;
  });

  return (
    <div className="trabajos-guardados-container">
      <h2>{role === 'usuario' ? 'Trabajos Guardados' : 'Trabajos Subidos'}</h2>
      <ul>
        {trabajosFiltrados.map(inv => (
          <li key={inv.id}>{inv.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrabajosGuardados;
