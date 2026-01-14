export default function BangaloreCourse() {
  return (
    <section className="section course-section">

      {/* IMAGE */}
      <img
        src="/images/courses/digital-marketing.jpg"
        alt="PGDM Digital Marketing Bangalore"
        className="course-banner"
      />

      <h2 className="section-title">
        PGDM – Digital Marketing & Data Analytics
      </h2>

      <p className="section-subtitle">
        Bangalore Centre · 6 Months · Weekend Hybrid
      </p>

      <div className="card-grid">
        <div className="card">
          <h3>Digital Marketing</h3>
          <p>SEO, SMM, Google Ads, Performance Campaigns</p>
        </div>

        <div className="card">
          <h3>Data Analytics</h3>
          <p>Excel, SQL, Power BI, Business Dashboards</p>
        </div>

        <div className="card">
          <h3>Placement Preparation</h3>
          <p>Interview training, CV, LinkedIn, mock interviews</p>
        </div>
      </div>
    </section>
  );
}
