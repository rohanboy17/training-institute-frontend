import { Link } from "react-router-dom";

export default function Centres() {
  return (
    <section className="section">
      <h2 className="section-title">Our Centres</h2>
      <p className="section-subtitle">Choose your preferred location</p>

      <div className="card-grid">
        <div className="card">
          <h3>Bangalore</h3>
          <p>PGDM | 100% Placement</p>
          <Link to="/centre/bangalore" className="btn-primary">
            View Centre
          </Link>
        </div>

        <div className="card">
          <h3>Madras</h3>
          <p>AI & BI Institute</p>
          <Link to="/centre/madras" className="btn-primary">
            View Centre
          </Link>
        </div>

        <div className="card">
          <h3>Gujarat</h3>
          <p>Manufacturing & Shipping</p>
          <Link to="/centre/gujarat" className="btn-primary">
            View Centre
          </Link>
        </div>
      </div>
    </section>
  );
}
