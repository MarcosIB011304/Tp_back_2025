import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Registro from './components/Registro.jsx';
import Consulta from './components/Consulta.jsx';
import './Menu.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <h1>Bienvenido a la Aplicación</h1>
      <button className="home-button" onClick={() => navigate('/nuevo-repositorio')}>Agregar Proyecto</button>
      <button className="home-button" onClick={() => navigate('/lista-repositorios')}>Listar Proyectos</button>
    </div>
  );
}

function Menu() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="navbar-logo">DDS Open Source Registry</div>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Inicio</Link>
            </li>
            <li className="navbar-item">
              <Link to="/lista-repositorios" className="navbar-link">Proyectos</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuevo-repositorio" element={<Registro />} />
          <Route path="/lista-repositorios" element={<Consulta />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Menu;