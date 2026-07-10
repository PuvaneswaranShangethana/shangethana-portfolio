import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div>
          <h3>
            Shangethana<span>.</span>
          </h3>
          <p>
            Designing ideas. Coding solutions. Building future brands.
          </p>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/@PuvaneswaranShangethana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shangethana11"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.youtube.com/@CinematicHeartbeat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube Channel"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      <p className="footer-copy">
        © 2026 Shangethana Puvaneswaran. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;