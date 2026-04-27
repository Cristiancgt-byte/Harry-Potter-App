import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FavoriteProvider } from './favoritesContext'; 
import Home from './Home';
import Favoritos from './Favoritos';
import Original from './Original';
import Informativa from './Informativa';
import Usuarios from './Usuarios';
import './App.css';

function App() {
  return (
    <FavoriteProvider>
      <Router>
        <header className="app-header">
          <div className="logo">POTTER<span>APP</span></div>
          <nav className="nav-menu">
            <Link to="/">Inicio</Link>
            <Link to="/favoritos">Favoritos</Link>
            <Link to="/original">Invocador</Link>
            <Link to="/informativa">Info</Link>
            <Link to="/usuarios">Perfil</Link>
          </nav>
        </header>

        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/original" element={<Original />} />
            <Route path="/informativa" element={<Informativa />} />
            <Route path="/usuarios" element={<Usuarios />} />
          </Routes>
        </main>
      </Router>
    </FavoriteProvider>
  );
}

export default App;