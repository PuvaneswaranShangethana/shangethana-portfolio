import { Link } from "react-router-dom";
import { FaArrowRight, FaCode, FaPalette } from "react-icons/fa";
import "./ShowcaseSection.css";

function ShowcaseSection() {
  return (
    <section className="section showcase-section">
      <div className="container">
        <span className="section-label center">Portfolio Areas</span>
        <h2 className="section-title">My work is divided into designing and coding.</h2>
        <p className="section-subtitle">
          This portfolio presents both my creative design work and my technical development projects.
        </p>

        <div className="showcase-grid">
          <div className="showcase-card">
            <FaPalette className="showcase-icon" />
            <h3>Designing</h3>
            <p>UI/UX screens, Figma designs, wireframes, posters, branding, and creative layouts.</p>
            <Link to="/designing">
              View Designing <FaArrowRight />
            </Link>
          </div>

          <div className="showcase-card">
            <FaCode className="showcase-icon" />
            <h3>Coding</h3>
            <p>React websites, Flutter apps, C# systems, database projects, AI and IoT solutions.</p>
            <Link to="/coding">
              View Coding <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;