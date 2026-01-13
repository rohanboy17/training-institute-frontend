export default function Placement() {
  return (
    <section className="section">
      <h2 className="section-title">100% Placement Record</h2>
      <p className="section-subtitle">
        Our students are successfully placed across industries
      </p>

      {/* Placement Domains */}
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
          <h4>SAP / ERP</h4>
          <p>Enterprise Systems • Operations</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonial-wrap">
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
    </section>
  );
}
