import React, { useState, useContext } from 'react';
import "./login.css"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/Auth/AuthContext';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validar los datos ingresados (aquí puedes agregar tu lógica de autenticación)
    fetch('http://localhost:3003/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(res => {
      if( res.status == 404){
        alert('EL USUARIO NO EXISTE');
      }
      if (res.status == 401){
        alert('CONTRASEÑA INCORRECTA');
      }
      if(res.status == 200){
        login();
        navigate('/');
      }
      if(res.status === 500) {
        alert('ERROR, REVISE LA CONSOLA');
      }
      
    })
    .catch(err => {
      console.log(err);
    })

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
        <button type="submit" >Login</button>
      </form>
    </div>
  );
}

export default Login;
