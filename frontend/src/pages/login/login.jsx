import React, { useState } from 'react';
import "./login.css"


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validar los datos ingresados (aquí puedes agregar tu lógica de autenticación)
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
    } else {
      alert('Invalid username or password. Please try again.');
    }

    // Limpiar el formulario
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesion</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Nombre:</label>
        <input
          type="text"
          id="username"
          placeholder='Nombre'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          placeholder='contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
