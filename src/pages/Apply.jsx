import { Link } from "react-router-dom";

export default function Apply() {
  return (
    <section className="section apply-page">
      {/* Header */}
      <div className="apply-header">
        <h1 className="section-title">Apply for Admission</h1>
        <p className="section-subtitle">
          Take the first step towards a career-focused future with ARAVALI
        </p>
      </div>

      <div className="apply-wrapper">
        {/* LEFT – Trust / Info */}
        <div className="apply-info">
          <h3>Why Apply with ARAVALI?</h3>

          <ul className="apply-points">
            <li>✔ 100% Placement Assistance</li>
            <li>✔ Industry-driven curriculum</li>
            <li>✔ Faculty from IIT, IIM & Industry</li>
            <li>✔ Learn & Earn opportunities</li>
            <li>✔ Hybrid & Weekend programmes</li>
          </ul>

          <div className="apply-contact">
            <p><strong>Admissions Team</strong></p>
            <p>Email: admissions@aravali.edu.in</p>
            <p>Phone: +91 9XXXXXXXXX</p>
          </div>
        </div>

        {/* RIGHT – Application Form */}
        <form className="apply-form">
          <h3>Admission Enquiry Form</h3>

          <div className="form-grid">
            <input type="text" placeholder="Full Name*" required />
            <input type="email" placeholder="Email Address*" required />
            <input type="tel" placeholder="Mobile Number*" required />

            <select required>
              <option value="">Preferred Centre*</option>
              <option>Bangalore</option>
              <option>Madras</option>
              <option>Gujarat</option>
            </select>

            <select required>
              <option value="">Programme Interested*</option>
              <option>PGDM – Digital Marketing & Data Analytics</option>
              <option>PGDM – AI & Business Intelligence</option>
              <option>Manufacturing & Shipping Management</option>
            </select>
          </div>

          <textarea
            rows="4"
            placeholder="Your message or query (optional)"
          ></textarea>

          <button type="submit" className="btn-primary apply-submit">
            Submit Application
          </button>

          <p className="apply-note">
            Our counsellor will contact you within 24 hours.
          </p>
        </form>
      </div>

      {/* Back option */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <Link to="/" className="btnemi-outline">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
