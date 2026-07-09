import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <main className="section contact-page">
      <div className="container contact-page-container">
        <div>
          <span className="section-label">Contact</span>
          <h1>Let’s connect and create something valuable.</h1>
          <p>
            I am open to collaborations, portfolio feedback, design projects,
            coding projects, and future business ideas.
          </p>

          <div className="contact-page-links">
            <a href="mailto:your-email@gmail.com"><FaEnvelope /> your-email@gmail.com</a>
            <a href="https://github.com/" target="_blank"><FaGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/shangethana11" target="_blank"><FaLinkedin /> LinkedIn</a>
            <a href="https://www.youtube.com/@CinematicHeartbeat" target="_blank"><FaYoutube /> YouTube</a>
          </div>
        </div>

        <form className="contact-page-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="6" placeholder="Your Message"></textarea>
          <button type="button" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;