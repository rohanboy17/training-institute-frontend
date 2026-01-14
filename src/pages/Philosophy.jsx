export default function PhilosophyPage() {
  return (
    <section className="section philosophy-page">

      {/* HERO */}
      <img
        src="/images/philosophy/philosophy-hero.jpg"
        alt="ARAVALI Philosophy"
        className="philosophy-hero"
      />

      <h1 className="section-title">Our Philosophy</h1>

      <p className="section-subtitle">
        At ARAVALI, education is not a transaction — it is a transformation.
      </p>

      {/* CORE PHILOSOPHY */}
      <div className="philosophy-text">
        <p>
          We believe professional education must be deeply connected with
          industry realities. Our programmes are designed to develop not only
          technical skills, but also mindset, ethics, and long-term career
          readiness.
        </p>

        <p>
          Students are not customers. They are our brand ambassadors.
          Every outcome we deliver reflects our responsibility as educators.
        </p>
      </div>

      {/* QUOTES */}
      <div className="philosophy-quotes">

        <div className="philosophy-quote">
          <img
            src="/images/philosophy/varun-arya.jpg"
            alt="Prof. Varun Arya"
          />
          <div>
            <p className="quote-text">
              “We are in the education of business.
              Not in the business of education.”
            </p>
            <p className="quote-author">
              Prof. Varun Arya
            </p>
            <p className="quote-role">
              Founder Director · IIT Delhi · IIM Ahmedabad
            </p>
          </div>
        </div>

        <div className="philosophy-quote reverse">
          <img
            src="/images/philosophy/amlan-bhattacharya.jpg"
            alt="Prof. Amlan Bhattacharya"
          />
          <div>
            <p className="quote-text">
              “The student is not a customer.
              The student is our responsibility.”
            </p>
            <p className="quote-author">
              Prof. Amlan Bhattacharya
            </p>
            <p className="quote-role">
              Programme Director · University of Wales (UK)
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
