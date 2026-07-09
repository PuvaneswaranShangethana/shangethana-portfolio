import { Link } from "react-router-dom";
import { FaArrowRight, FaCode, FaPalette } from "react-icons/fa";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">Future Entrepreneur • Designer • Developer</span>

          <h1>
            Building My Own Brand Through
            <span> Design & Code</span>
          </h1>

          <p>
            I am Shangethana Puvaneswaran, a computing student passionate about
            creating modern digital products, UI designs, software systems, and
            future business ideas.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View Projects <FaArrowRight />
            </Link>

            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>

          <div className="hero-highlights">
            <div><FaPalette /><span>Designing</span></div>
            <div><FaCode /><span>Coding</span></div>
          </div>
        </div>

        <div className="hero-card">
          <h3>Personal Brand</h3>
          <p>Designing ideas. Coding solutions. Building future brands.</p>

          <div className="hero-stats">
            <div>
              <strong>10+</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>2</strong>
              <span>Main Skills</span>
            </div>
            <div>
              <strong>2026</strong>
              <span>Journey</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;