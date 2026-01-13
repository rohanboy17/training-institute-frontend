export default function Faculty() {
  return (
    <section className="section">
      <h2 className="section-title">Faculty & Leadership</h2>
      <p className="section-subtitle">
        Learn from experienced professionals and academic leaders
      </p>

      <div className="faculty-grid">
        <div className="faculty-card">
          <div className="faculty-avatar">IIT</div>
          <h3>Programme Director</h3>
          <p>IIT Alumnus | Industry Mentor</p>
        </div>

        <div className="faculty-card">
          <div className="faculty-avatar">IIM</div>
          <h3>Senior Faculty</h3>
          <p>IIM Graduate | Strategy & Marketing</p>
        </div>

        <div className="faculty-card">
          <div className="faculty-avatar">IISc</div>
          <h3>Data Science Lead</h3>
          <p>IISc | Analytics & AI</p>
        </div>
      </div>
    </section>
  );
}
