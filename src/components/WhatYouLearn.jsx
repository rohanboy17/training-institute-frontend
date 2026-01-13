export default function WhatYouLearn() {
  return (
    <section className="section">
      <h2 className="section-title">What You Will Learn</h2>
      <p className="section-subtitle">
        Industry-relevant skills that make you job-ready from day one
      </p>

      <div className="learn-grid">
        <div className="learn-card">
          <h3>Digital Marketing</h3>
          <ul>
            <li>SEO & Content Marketing</li>
            <li>Social Media Marketing</li>
            <li>Google Ads & Analytics</li>
            <li>Performance Campaigns</li>
          </ul>
        </div>

        <div className="learn-card">
          <h3>Data Analytics & BI</h3>
          <ul>
            <li>Advanced Excel</li>
            <li>SQL & Databases</li>
            <li>Power BI & Dashboards</li>
            <li>Business Insights</li>
          </ul>
        </div>

        <div className="learn-card">
          <h3>Career & Placement Skills</h3>
          <ul>
            <li>Resume & Interview Prep</li>
            <li>Communication Skills</li>
            <li>Corporate Etiquette</li>
            <li>Personal Branding</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
