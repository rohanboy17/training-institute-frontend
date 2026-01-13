export default function Placements() {
  return (
    <section className="section">
      <h1 className="section-title">Placements at ARAVALI</h1>
      <p className="section-subtitle">
        Career-focused education with real placement outcomes
      </p>

      {/* Placement Highlights */}
      <div className="card-grid">
        <div className="card placement-card">
          <h4>100% Placement Support</h4>
          <p>Dedicated placement assistance until final offer</p>
        </div>

        <div className="card placement-card">
          <h4>Learn & Earn Model</h4>
          <p>Industry exposure alongside classroom learning</p>
        </div>

        <div className="card placement-card">
          <h4>Industry-Oriented Roles</h4>
          <p>Roles aligned to current market demand</p>
        </div>
      </div>

      {/* Placement Domains */}
      <h2 className="section-title" style={{ marginTop: "80px" }}>
        Placement Domains
      </h2>
      <p className="section-subtitle">
        Our students are placed across multiple domains
      </p>

      <div className="card-grid">
        <div className="card placement-card">
          <h4>Digital Marketing</h4>
          <p>SEO • Ads • Performance Marketing</p>
        </div>

        <div className="card placement-card">
          <h4>Data Analytics</h4>
          <p>Excel • SQL • Power BI</p>
        </div>

        <div className="card placement-card">
          <h4>SAP / ERP & Operations</h4>
          <p>Enterprise systems & business operations</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonial-wrap">
        <h2 className="section-title">Student Success Stories</h2>
        <p className="section-subtitle">
          Hear directly from our placed students
        </p>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="testimonial-avatar">T</div>
            <p className="testimonial-text">
              “ARAVALI Bangalore was a game-changer in my life.”
            </p>
            <p className="testimonial-name">Tharany Suresh</p>
            <p className="testimonial-centre">Bangalore Centre</p>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-avatar">A</div>
            <p className="testimonial-text">
              “Best environment and job-oriented learning experience.”
            </p>
            <p className="testimonial-name">Aarthi Arivalagan</p>
            <p className="testimonial-centre">Madras Centre</p>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-avatar">D</div>
            <p className="testimonial-text">
              “Great institute to restart and settle my career.”
            </p>
            <p className="testimonial-name">Darshan Reddy</p>
            <p className="testimonial-centre">Bangalore Centre</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div style={{ marginTop: "80px", textAlign: "center" }}>
        <h2 className="section-title">
          Ready to start your career journey with ARAVALI?
        </h2>

        <div className="course-actions">
          <button className="btn-primary">Apply Now</button>

          <a
            href="/brochures/aravali-bangalore.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btnemi-outline"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
