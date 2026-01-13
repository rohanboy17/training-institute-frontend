import { Link } from "react-router-dom";
import FacultyGrid from "./FacultyGrid";

export default function FacultySection() {
  return (
    <section className="section">
      <h2 className="section-title">Our Faculty</h2>
      <p className="section-subtitle">
        Learn from experienced professors, directors, and industry mentors
      </p>

      {/* Preview only (first 4 faculty members) */}
      <FacultyGrid limit={4} />

      <div style={{ marginTop: "32px", textAlign: "center" }}>
        <Link to="/faculty" className="btnemi-outline">
          View All Faculty
        </Link>
      </div>
    </section>
  );
}
