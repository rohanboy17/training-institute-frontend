import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta-container">
        <h2>Admissions Open – Winter 2026</h2>

        <p>
          Join ARAVALI and secure your career with 100% placement support
        </p>

        <div className="final-cta-actions">
          <Link to="/apply" className="btn-primary">
          Apply Now
          </Link>

          <a
            href="/brochures/aravali-bangalore.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
