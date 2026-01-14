export default function Contact() {
  return (
    <section className="section">
      <h1 className="section-title">Contact Us</h1>
      <p className="section-subtitle">
        Reach out to us for admissions, courses, or centre details
      </p>

      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>ARAVALI Bangalore</h3>
          <p>Foundry House, OMBR, Banaswadi, Bengaluru</p>
          <p>📞 +91 88675 64920</p>
          <p>✉️ aravali.bangalore@gmail.com</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Phone Number" required />

          <select required>
            <option value="">Select Centre</option>
            <option>Bangalore</option>
            <option>Madras</option>
            <option>Gujarat</option>
          </select>

          <textarea placeholder="Your Message" rows="4"></textarea>

          <button className="btn-primary">Submit Enquiry</button>
        </form>
      </div>
    </section>
  );
}
