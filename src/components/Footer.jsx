import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const centres = ["Bangalore", "Madras", "Gujarat"];

export default function Footer() {
  const [text, setText] = useState("");
  const [centreIndex, setCentreIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // typing animation (isolated, no layout shift)
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
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [charIndex, centreIndex]);

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT: Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            ARAVALI <span className="footer-centre">{text}</span>
          </div>
          <p className="footer-desc">
            Industry-ready education with placement-focused programmes across India.
          </p>
        </div>

        {/* MIDDLE: Links */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programmes">Programmes</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/placements">Placements</Link>
          <Link to="/contact">Admissions</Link>
        </div>

        {/* RIGHT: Social */}
        <div className="footer-social">
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Instagram">Instagram</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 ARAVALI. All rights reserved.
      </div>
    </footer>
  );
}
