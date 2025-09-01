import React from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-main">
        {/* Left: Contact Info */}
        <div className="contact-left">
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>teenadevray24@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h4>Phone</h4>
              <p>+91 6264330153</p>
            </div>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Address</h4>
              <p>Ramanand Nagar, Indore</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-icons">
            <a href="https://github.com/Teena-2658" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/teena-devray-3a6078276/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-right">
          <form action="https://formspree.io/f/your_form_id" method="POST" className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
