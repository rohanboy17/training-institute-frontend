import PlacementLogos from "../components/PlacementLogos";

export default function Placements() {
  return (
    <section className="section">

      {/* PAGE HEADER */}
      <h1 className="section-title">Placements at ARAVALI</h1>
      <p className="section-subtitle">
        From classroom learning to real-world careers
      </p>

      {/* HOW PLACEMENTS WORK */}
      <div className="placement-flow">
        <h2 className="section-title">Our Placement Approach</h2>

        <div className="card-grid">
          <div className="card">
            <h4>Skill Development</h4>
            <p>
              Industry-relevant curriculum, practical projects, and real-world
              exposure throughout the programme.
            </p>
          </div>

          <div className="card">
            <h4>Placement Preparation</h4>
            <p>
              Resume building, mock interviews, communication training, and
              personal branding support.
            </p>
          </div>

          <div className="card">
            <h4>Employer Connect</h4>
            <p>
              Hiring partnerships, referrals, and interview opportunities with
              aligned companies.
            </p>
          </div>
        </div>
      </div>

      {/* PLACEMENT DOMAINS */}
      <div style={{ marginTop: "80px" }}>
        <h2 className="section-title">Placement Domains</h2>
        <p className="section-subtitle">
          Our graduates are placed across diverse functional areas
        </p>

        <div className="card-grid">
          <div className="card">
            <h4>Digital Marketing</h4>
            <p>SEO, Performance Marketing, Paid Ads, Social Media</p>
          </div>

          <div className="card">
            <h4>Data Analytics</h4>
            <p>Excel, SQL, Power BI, Business Insights</p>
          </div>

          <div className="card">
            <h4>ERP, Operations & Supply Chain</h4>
            <p>SAP, Enterprise Systems, Manufacturing & Logistics</p>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="testimonial-wrap" style={{ marginTop: "100px" }}>
        <h2 className="section-title">Student Success Stories</h2>
        <p className="section-subtitle">
          Real experiences from our placed students
        </p>

        <div className="testimonial-grid">
  <div className="testimonial-card">
    <div className="testimonial-avatar">T</div>

    <p className="testimonial-text">
      “The structured placement preparation and practical projects helped me
      confidently transition into a digital marketing role.”
    </p>

    <p className="testimonial-name">Tharany Suresh</p>
    <p className="testimonial-centre">Bangalore Centre</p>
    <p className="testimonial-outcome">
      Placed in Digital Marketing Domain
    </p>
  </div>

  <div className="testimonial-card">
    <div className="testimonial-avatar">A</div>

    <p className="testimonial-text">
      “The faculty mentoring and analytics-focused training gave me strong
      clarity on industry expectations.”
    </p>

    <p className="testimonial-name">Aarthi Arivalagan</p>
    <p className="testimonial-centre">Madras Centre</p>
    <p className="testimonial-outcome">
      Placed in Data & Business Intelligence
    </p>
  </div>

  <div className="testimonial-card">
    <div className="testimonial-avatar">D</div>

    <p className="testimonial-text">
      “ARAVALI helped me rebuild my career path with confidence and
      job-oriented skills.”
    </p>

    <p className="testimonial-name">Darshan Reddy</p>
    <p className="testimonial-centre">Bangalore Centre</p>
    <p className="testimonial-outcome">
      Placed in Operations & ERP Domain
    </p>
  </div>
</div>
      </div>
    <PlacementLogos />
      {/* FINAL CTA */}
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <h2 className="section-title">
          Ready to take the next step in your career?
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
