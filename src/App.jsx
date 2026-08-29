import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import VarkariVolunteer from './pages/VarkariVolunteer';
import Organisers from './pages/Organisers';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="navbar-content">
            <div className="navbar-brand">
              <Link to="/" className="brand-logo">
                🙏 Seva Setu
              </Link>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
              ☰
            </button>
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/varkari-volunteer" onClick={() => setMenuOpen(false)}>
                  Varkari Volunteer
                </Link>
              </li>
              <li>
                <Link to="/organisers" onClick={() => setMenuOpen(false)}>
                  Organisers
                </Link>
              </li>
              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/varkari-volunteer" element={<VarkariVolunteer />} />
            <Route path="/organisers" element={<Organisers />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Seva Setu</h3>
              <p>Building Bridges of Service and Community</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/varkari-volunteer">Varkari Volunteer</Link>
                </li>
                <li>
                  <Link to="/organisers">Organisers</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Us</h4>
              <p>Email: info@sevasetu.org</p>
              <p>Phone: +91-XXXX-XXXX-XXXX</p>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Seva Setu. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
