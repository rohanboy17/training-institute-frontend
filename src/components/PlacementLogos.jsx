export default function PlacementLogos() {
  const logos = [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Deloitte",
    "Cognizant",
    "Capgemini",
    "IBM",
    "HCL",
    "Tech Mahindra",
    "Amazon",
    "Flipkart",
  ];

  return (
    <section className="section">
      <h2 className="section-title">Our Placement Partners</h2>
      <p className="section-subtitle">
        Students placed across leading companies and domains
      </p>

      <div className="logos-wrap">
        <div className="logo-grid">
          {logos.map((name, i) => (
            <div key={i} className="logo-card">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
