import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const centres = ["Bangalore", "Madras", "Gujarat"];

export default function Navbar() {
  const [text, setText] = useState("");
  const [centreIndex, setCentreIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ FIXED POSITION

  // typing animation
  useEffect(() => {
    const current = centres[centreIndex];

    if (charIndex < current.length) {
      const t = setTimeout(() => {
        setText(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 120);
      return () => clearTimeout(t);
    } else {
      const pause = setTimeout(() => {
        setCharIndex(0);
        setCentreIndex((centreIndex + 1) % centres.length);
      }, 1400);
      return () => clearTimeout(pause);
    }
  }, [charIndex, centreIndex]);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LEFT: BRAND */}
        <div className="navbar-left">
          <div className="navbar-brand">
            ARAVALI <span className="brand-divider">|</span>
            <span className="centre-box">{text}</span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="navbar-middle nav-links desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/programmes">Programmes</Link>

          <div className="nav-dropdown">
            <span className="dropdown-label">Centres ▾</span>
            <div className="dropdown-menu">
              <Link to="/centre/bangalore">Bangalore</Link>
              <Link to="/centre/madras">Madras</Link>
              <Link to="/centre/gujarat">Gujarat</Link>
            </div>
          </div>

          <Link to="/placements">Placements</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* DESKTOP SOCIAL */}
        <div className="navbar-right nav-social desktop-nav">
          <a href="#" aria-label="LinkedIn">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="#" aria-label="Facebook">
            <img src="/icons/facebook.svg" alt="Facebook" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link to="/programmes" onClick={() => setMenuOpen(false)}>Programmes</Link>

          <div className="mobile-centres">
            <span>Centres</span>
            <Link to="/centre/bangalore" onClick={() => setMenuOpen(false)}>Bangalore</Link>
            <Link to="/centre/madras" onClick={() => setMenuOpen(false)}>Madras</Link>
            <Link to="/centre/gujarat" onClick={() => setMenuOpen(false)}>Gujarat</Link>
          </div>

          <Link to="/placements" onClick={() => setMenuOpen(false)}>Placements</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          <div className="mobile-social">
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      )}
    </header>
  );
}
