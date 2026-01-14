import { Link } from "react-router-dom";

export default function Philosophy() {
  return (
    <section className="section philosophy-preview">
      <h2 className="section-title">Our Philosophy</h2>

      <p className="section-subtitle">
        Education that builds careers, character, and confidence
      </p>

      <div className="philosophy-grid">
        <div className="philosophy-item">
          <h3>Industry First</h3>
          <p>
            Curriculum designed with industry leaders to ensure every skill
            taught is relevant, practical, and employable.
          </p>
        </div>

        <div className="philosophy-item">
          <h3>Learning by Doing</h3>
          <p>
            Hands-on projects, live case studies, and real-world exposure form
            the core of our teaching approach.
          </p>
        </div>

        <div className="philosophy-item">
          <h3>Career Focused</h3>
          <p>
            From day one, we prepare students for interviews, workplace
            challenges, and long-term professional growth.
          </p>
        </div>
      </div>

      <div className="philosophy-cta">
        <Link to="/philosophy" className="btn-primary">
          Read Our Philosophy
        </Link>
      </div>
    </section>
  );
}
