import React, { useState } from 'react';
import logo from '../logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación simple de campos (puedes agregar más validaciones)
    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // Aquí iría la lógica para enviar los datos al backend y autenticar al usuario
    // ...

    // Ejemplo de redirección exitosa (debes implementar la lógica real)
    window.location.href = '/resultados';
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <img src={logo} alt="Logo de la aplicación" className="logo" style={{ marginBottom: '20px' }} />
      {error && <p className="error-message">{error}</p>}
      <div className="form-group">
        <label htmlFor="email">Correo</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Ingresar</button>
      <button type="button">Crear cuenta</button>
    </form>
);
}

export default Login;
