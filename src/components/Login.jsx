import React, { useState } from 'react';
import './login.css'; // Importa tu archivo CSS

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría tu lógica de inicio de sesión
  };

  return (
    <div className="login-container">
      <div className="logo-container"> {/* Contenedor para centrar el logo */}
        <img src="logo.png" alt="Logo de Lumen Investiga" />
      </div>
      <h2>LUMENINVESTIGA</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group"> {/* Agrupamos label e input */}
          <label htmlFor="email">Correo:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group"> {/* Agrupamos label e input */}
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
      <a href="/register">Crear cuenta</a>
    </div>
  );
}

export default Login;
