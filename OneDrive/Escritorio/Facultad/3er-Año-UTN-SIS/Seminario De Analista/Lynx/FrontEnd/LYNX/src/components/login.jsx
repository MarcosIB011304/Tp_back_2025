// LoginForm.js
import React, { useState } from 'react';
import "../styles/login_style.css"; // Asegúrate de que esta ruta sea correcta
import logo from "/logo.jpg"; // Cambia esta ruta al logo real

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
    console.log('Iniciar sesión con:', { email, password });
  };

  return (
    <div className="login-form-overlay">
      <div className="login-form-container">
        <button className="close-button" onClick={onClose}>X</button>
        <img src={logo} alt="Lynx Logo" className="logo" />
        <h2>Bienvenido a Lynx</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Empresa</label>
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
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Recordar Email</label>
          </div>
          <div className="button-container">
            <button type="submit" className="auth-button login">Entrar</button>
            <button type="button" className="auth-button register">Registrarse</button>
          </div>
          <div className="google-login">
            <a href="/auth/google">Iniciar sesión con Google</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
