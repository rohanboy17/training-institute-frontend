import { Link } from "react-router-dom";

export default function Programmes() {
  return (
    <section className="section">
      <h1 className="section-title">Our Programmes</h1>
      <p className="section-subtitle">
        Specialised programmes designed for different career paths across our centres
      </p>

      <div className="card-grid">
        {/* Bangalore */}
        <div className="card">
          <h3>PGDM – Digital Marketing & Data Analytics</h3>
          <p><strong>Bangalore Centre</strong></p>

          <ul>
            <li>SEO, Ads & Performance Marketing</li>
            <li>Excel, SQL, Power BI</li>
            <li>Live projects & campaigns</li>
            <li>100% Placement Support</li>
          </ul>

          <Link to="/centre/bangalore" className="btn-primary">
            View Bangalore Programme
          </Link>
        </div>

        {/* Madras */}
        <div className="card">
          <h3>PGDM – AI & Business Intelligence</h3>
          <p><strong>Madras Centre</strong></p>

          <ul>
            <li>AI tools for business decisions</li>
            <li>Data modelling & analytics</li>
            <li>Industry case studies</li>
            <li>Fast-track hybrid model</li>
          </ul>

          <Link to="/centre/madras" className="btn-primary">
            View Madras Programme
          </Link>
        </div>

        {/* Gujarat */}
        <div className="card">
          <h3>Manufacturing & Shipping Management</h3>
          <p><strong>Gujarat Centre</strong></p>

          <ul>
            <li>Manufacturing operations</li>
            <li>Logistics & supply chain</li>
            <li>Industrial exposure</li>
            <li>Operations-focused roles</li>
          </ul>

          <Link to="/centre/gujarat" className="btn-primary">
            View Gujarat Programme
          </Link>
        </div>
      </div>

      <p
        style={{
          marginTop: "40px",
          textAlign: "center",
          color: "#6b7280",
          fontSize: "14px",
        }}
      >
        All programmes follow ARAVALI’s Learn & Earn model with dedicated placement support.
      </p>
    </section>
  );
}
