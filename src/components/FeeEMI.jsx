export default function FeeEMI() {
  return (
    <section className="section">
      <h2 className="section-title">Course Fee & Easy EMI Options</h2>
      <p className="section-subtitle">
        Transparent pricing with flexible payment support
      </p>

      <div className="fee-box">
        <div className="fee-amount">₹ 1,50,000</div>
        <p className="fee-note">
          Complete PGDM Programme with Placement Support
        </p>

        <div className="emi-grid">
          <div className="emi-card">
            💳 Full Payment <br /> (Discount Available)
          </div>

          <div className="emi-card">
            📆 Installment Plan <br /> Monthly / Quarterly
          </div>

          <div className="emi-card">
            🏦 Education Loan <br /> EMI starting ₹3,000/month
          </div>
        </div>

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
