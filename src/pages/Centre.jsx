import { useParams } from "react-router-dom";

export default function Centre() {
  const { name } = useParams();

  const data = {
    bangalore: {
      title: "ARAVALI Bangalore",
      specialization: "PGDM – Digital Marketing & Data Analytics",
      tags: ["100% Placement", "Learn & Earn", "Weekend Hybrid"],
      address:
        "Foundry House, OMBR, Opp. St. George College, Banaswadi, Bengaluru 560043",
      about:
        "The Bangalore centre is the flagship campus offering PGDM with strong industry exposure and placement support.",
    },
    madras: {
      title: "ARAVALI Madras",
      specialization: "PGDM – Artificial Intelligence & Business Intelligence",
      tags: ["AI-BI", "Fast-Track", "Industry Projects"],
      address:
        "QMC Campus (Sea-View Centre), Near Marina Beach, Chennai 600004",
      about:
        "The Madras centre focuses on AI & BI with practical labs and real-world applications for modern careers.",
    },
    gujarat: {
      title: "ARAVALI Gujarat",
      specialization: "Manufacturing & Shipping Management",
      tags: ["Operations", "Supply Chain", "Industrial Exposure"],
      address: "Gujarat Centre – Address to be updated",
      about:
        "The Gujarat centre specializes in manufacturing, shipping, and operations with hands-on industry exposure.",
    },
  };

  const centre = data[name];

  if (!centre) {
    return (
      <section className="section">
        <h2 className="section-title">Centre not found</h2>
      </section>
    );
  }

  return (
    <section className="section">
      {/* HERO */}
      <div className="centre-hero">
        <h1 className="section-title">{centre.title}</h1>
        <p className="section-subtitle">{centre.specialization}</p>

        <div className="centre-tags">
          {centre.tags.map((tag, i) => (
            <span key={i} className="centre-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* FIXED CONTENT LAYOUT */}
      <div className="centre-content">
        {/* LEFT */}
        <div className="centre-main">
          <h3>About this Centre</h3>
          <p>{centre.about}</p>
        </div>

        {/* RIGHT */}
        <div className="centre-side">
          <h3>Contact & Location</h3>
          <p>{centre.address}</p>

          <a
            href="/brochures/aravali-bangalore.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginTop: "20px", display: "inline-block" }}
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
