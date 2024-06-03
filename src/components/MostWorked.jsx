import React from 'react';

function MostWorked({ data }) {
  return (
    <div className="most-worked">
      <h3>Lo más trabajado</h3>
      <div className="most-worked-list"> {/* Agregamos un contenedor para la lista */}
        {data.map((item) => (
          <div key={item.label} className="most-worked-item">
            <span className="most-worked-label">{item.label}</span>
            <span className="most-worked-count">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MostWorked;
