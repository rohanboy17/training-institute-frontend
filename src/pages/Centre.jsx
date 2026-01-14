import { useParams } from "react-router-dom";

export default function Centre() {
  const { name } = useParams();

  const data = {
    bangalore: {
      title: "ARAVALI Bangalore",
      specialization: "PGDM – Digital Marketing & Data Analytics",
      image: "/images/centres/bangalore.jpg",
      address:
        "Foundry House, OMBR Layout, Opp. St. George College, Banaswadi, Bengaluru 560043",
      about:
        "The Bangalore centre is the flagship campus of ARAVALI, offering industry-aligned PGDM programmes with strong placement support and real-world exposure.",
      brochure: "/brochures/aravali-bangalore.pdf",
    },
    madras: {
      title: "ARAVALI Madras",
      specialization: "PGDM – Artificial Intelligence & Business Intelligence",
      image: "/images/centres/madras.jpg",
      address:
        "QMC Campus (Sea-View Centre), Near Marina Beach, Chennai 600004",
      about:
        "The Madras centre focuses on AI and Business Intelligence programmes, combining academic depth with practical industry exposure.",
      brochure: "/brochures/aravali-madras.pdf",
    },
    gujarat: {
      title: "ARAVALI Gujarat",
      specialization: "Manufacturing & Shipping Management",
      image: "/images/centres/gujarat.jpg",
      address: "Gujarat Centre – Address to be updated",
      about:
        "The Gujarat centre specialises in manufacturing, logistics, and shipping management with strong industrial exposure.",
      brochure: "/brochures/aravali-gujarat.pdf",
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
    <section className="section centre-page">

      {/* HERO IMAGE */}
      <img
        src={centre.image}
        alt={centre.title}
        className="centre-banner"
      />

      <h1 className="section-title">{centre.title}</h1>
      <p className="section-subtitle">{centre.specialization}</p>

      <div className="centre-grid">

        {/* ABOUT */}
        <div className="centre-card">
          <h3>About This Centre</h3>
          <p>{centre.about}</p>
        </div>

        {/* CONTACT */}
        <div className="centre-card">
          <h3>Location & Contact</h3>
          <p>{centre.address}</p>

          <a
            href={centre.brochure}
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
