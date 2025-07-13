import React from "react";
import "./styles.css";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Whether you’re a student, parent, or partner, we’d love to hear from
            you. Reach out with any questions or collaboration ideas!
          </p>
          <div className="contact-detail">
            <h4>📍 Address</h4>
            <p>Achievoquest HQ, Bengaluru, Karnataka 560001</p>

            <h4>📞 Phone</h4>
            <p>+91 98765 43210</p>

            <h4>✉️ Email</h4>
            <p>support@achievoquest.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Write your message..." required />
            </div>
            <button type="submit" className="submit-btn">
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
