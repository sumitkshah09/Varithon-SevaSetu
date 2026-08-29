import { Link } from "react-router-dom";
import { useLanguage } from "../language/languageContext";
import { translations } from "../language/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const { language } = useLanguage();
  const t = translations[language];
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          🙏 Seva Setu
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            {t.navbar.home}
          </Link>
          <Link to="/volunteer" className="nav-link" onClick={() => setMenuOpen(false)}>
            {t.navbar.volunteer}
          </Link>
          <Link to="/organisers" className="nav-link" onClick={() => setMenuOpen(false)}>
            {t.navbar.organisers}
          </Link>
          <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>
            {t.navbar.contact}
          </a>
        </div>

        <LanguageSwitcher />
      </div>
    </nav>
  );
}
