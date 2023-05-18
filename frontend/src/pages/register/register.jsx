import React, { useState } from 'react';
import "./register.css"

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor

    // Limpiar el formulario después del envío exitoso
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container" >
      <h1>Registro</h1>
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
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          placeholder='Contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Registro</button>
      </form>
    </div>
  );
}

export default Register;
