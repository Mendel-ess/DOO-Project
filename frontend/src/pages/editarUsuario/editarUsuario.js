import React, { useState } from 'react';
import "./user.css"

function EditarUsuario() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    fetch('http://127.0.0.1:3003/users/modify', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username,
          password,
          email
        })     
      })
      .then(response => {
        if (response.status == 200) {
          alert('USUARIO ACTUALIZADO CON EXITO')
        }
        if(response.status === 409){
          alert('EL USUARIO NO EXISTE');
        }
        if(response.status === 500){
          alert('ERROR, REVISE LA CONSOLA')
        }
      })
        .catch(err => {
          console.log(err);
        });

    // Limpiar el formulario después del envío exitoso
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container" >
      <h1>Editar Usuario</h1>
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

export default EditarUsuario;