// App.js
import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import LoginForm from '../src/components/login'; // Asegúrate de que esta ruta sea correcta

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const loginFormRef = useRef(null);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleClickOutside = (event) => {
    if (loginFormRef.current && !loginFormRef.current.contains(event.target)) {
      handleCloseLoginForm();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="logo-text">
          <img src="/logo.jpg" alt="Lynx Logo" className="navbar-logo" />
        </div>
        <span className="navbar-brand">LYNX</span>
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="/" className="navbar-link active">Inicio</a>
          </li>
          <li className="navbar-item">
            <a href="/servicios" className="navbar-link">Servicios</a>
          </li>
          <li className="navbar-item">
            <a href="/contacto" className="navbar-link">Contacto</a>
          </li>
        </ul>
        <div className='buttom'>
          <button className="auth-button login" onClick={handleLoginClick}>Iniciar Sesión</button>
          <button className="auth-button register">Registrarse</button>
        </div>
      </nav>

      <div className="content">
        <h1 className="title">Encuentra el talento perfecto, sin esfuerzo</h1>
        <p className="description">
          Brindamos soporte al proceso de reclutamiento y selección en el área de recursos humanos 
          de empresas IT en Córdoba, basándose en un motor de análisis impulsado por inteligencia artificial, IA.
        </p>
        <button className="discover-button">Descúbrelo</button>
      </div>

      {showLoginForm && (
        <div ref={loginFormRef}>
          <LoginForm onClose={handleCloseLoginForm} />
        </div>
      )}
    </div>
  );
}

export default App;
