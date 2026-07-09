import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="section contact-section">
      <div className="container contact-container">
        <div className="contact-content">
          <span className="section-label">Contact</span>
          <h2>Let’s build something meaningful together.</h2>
          <p>
            I am open to learning opportunities, collaborations, design work,
            development projects, and future business ideas.
          </p>

          <div className="contact-links">
            <a href="mailto:your-email@gmail.com">
              <FaEnvelope /> your-email@gmail.com
            </a>

            <a href="https://github.com/" target="_blank">
              <FaGithub /> GitHub
            </a>

            <a href="https://www.linkedin.com/in/shangethana11" target="_blank">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="5" placeholder="Your Message"></textarea>
          <button type="button" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;