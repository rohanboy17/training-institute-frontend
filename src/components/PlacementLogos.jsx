import { useRef, useEffect } from "react";

const logos = [
  "/images/placements/amazon.png",
  "/images/placements/infosys.png",
  "/images/placements/tcs.png",
  "/images/placements/wipro.png",
  "/images/placements/accenture.png",
  "/images/placements/deloitte.png",
  "/images/placements/cognizant.png",
  "/images/placements/capgemini.png",
];

export default function PlacementLogos() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const isPausedRef = useRef(false);

  const startAutoScroll = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      if (!sliderRef.current || isPausedRef.current) return;

      sliderRef.current.scrollLeft += 1;
    }, 25);
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleManualScroll = (amount) => {
    isPausedRef.current = true;
    stopAutoScroll();

    sliderRef.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });

    // Resume auto-scroll after user interaction
    setTimeout(() => {
      isPausedRef.current = false;
      startAutoScroll();
    }, 1200);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Start from middle for infinite illusion
    slider.scrollLeft = slider.scrollWidth / 2;

    startAutoScroll();

    // Pause on hover (desktop)
    slider.addEventListener("mouseenter", stopAutoScroll);
    slider.addEventListener("mouseleave", startAutoScroll);

    return () => {
      stopAutoScroll();
      slider.removeEventListener("mouseenter", stopAutoScroll);
      slider.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  return (
    <section className="section placement-logos">
      <h2 className="section-title">Our Students Are Placed With</h2>
      <p className="section-subtitle">
        Hiring partners across industries and domains
      </p>

      <div className="logo-slider-wrapper">
        {/* LEFT ARROW */}
        <button
          className="logo-nav left"
          onClick={() => handleManualScroll(-300)}
          aria-label="Scroll Left"
        >
          ‹
        </button>

        {/* SLIDER */}
        <div className="logo-slider" ref={sliderRef}>
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo} alt="Placement Company Logo" />
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          className="logo-nav right"
          onClick={() => handleManualScroll(300)}
          aria-label="Scroll Right"
        >
          ›
        </button>
      </div>
    </section>
  );
}
