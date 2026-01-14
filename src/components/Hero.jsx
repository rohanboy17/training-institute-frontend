import { useEffect, useState } from "react";

const images = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Background Images */}
      <div className="hero-slider">
        {images.map((img, index) => (
          <div
            key={index}
            className={`hero-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Fast-Track PGDM with{" "}
            <span>100% Placement Support</span>
          </h1>

          <p>
            Faculty from IIT-IIM-IISc • Learn & Earn Model • Weekend Hybrid Programme
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Apply Now</button>

            <a
              href="/brochures/aravali-bangalore.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="hero-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === current ? "dot active" : "dot"}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
}
