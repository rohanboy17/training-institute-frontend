import { Link } from "react-router-dom";

export default function HomeCourses() {
  return (
    <section className="section">
      <h2 className="section-title">Programmes Across Our Centres</h2>
      <p className="section-subtitle">
        Specialised programmes designed for different career paths
      </p>

      <div className="card-grid">
        {/* Bangalore */}
        <div className="card">
          <img
            src="/images/courses/digital-marketing.jpg"
            alt="PGDM Digital Marketing Bangalore"
            className="course-image"
          />

          <h3>PGDM – Digital Marketing & Data Analytics</h3>
          <p><strong>Bangalore Centre</strong></p>

          <ul style={{ marginTop: "12px" }}>
            <li>SEO, SMM, Google Ads</li>
            <li>Excel, SQL, Power BI</li>
            <li>Live campaigns & dashboards</li>
            <li>100% Placement Support</li>
          </ul>

          <Link to="/courses" className="btn-primary">
            View Programme
          </Link>
        </div>

        {/* Madras */}
        <div className="card">
          <img
            src="/images/courses/ai-bi.jpg"
            alt="PGDM AI Business Intelligence Madras"
            className="course-image"
          />

          <h3>PGDM – AI & Business Intelligence</h3>
          <p><strong>Madras Centre</strong></p>

          <ul style={{ marginTop: "12px" }}>
            <li>AI tools & business applications</li>
            <li>Data modelling & insights</li>
            <li>Industry case studies</li>
            <li>Fast-track hybrid mode</li>
          </ul>

          <Link to="/courses" className="btn-primary">
            View Programme
          </Link>
        </div>

        {/* Gujarat */}
        <div className="card">
          <img
            src="/images/courses/manufacturing.jpg"
            alt="Manufacturing Shipping Management Gujarat"
            className="course-image"
          />

          <h3>Manufacturing & Shipping Management</h3>
          <p><strong>Gujarat Centre</strong></p>

          <ul style={{ marginTop: "12px" }}>
            <li>Manufacturing operations</li>
            <li>Logistics & supply chain</li>
            <li>Industrial exposure</li>
            <li>Operations-focused roles</li>
          </ul>

          <Link to="/courses" className="btn-primary">
            View Programme
          </Link>
        </div>
      </div>
    </section>
  );
}
