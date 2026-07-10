import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import {
  FaArrowRight,
  FaCode,
  FaPalette,
  FaDownload,
} from "react-icons/fa";

import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="hero-badge"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Future Entrepreneur • Designer • Developer
          </motion.span>

          <h1>
            Building My Own Brand Through
            <span>Design &amp; Code</span>
          </h1>

          <div className="hero-typed">
            I am a{" "}
            <ReactTyped
              strings={[
                "UI/UX Designer",
                "Software Developer",
                "Creative Problem Solver",
                "Future Entrepreneur",
              ]}
              typeSpeed={55}
              backSpeed={35}
              backDelay={1300}
              loop
            />
          </div>

          <p>
            I am Shangethana Puvaneswaran, a computing student passionate about
            creating modern digital products, professional user interfaces,
            software systems, and future business ideas.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View Projects
              <FaArrowRight />
            </Link>

            <a
              href="/Shangethana-Puvaneswaran-CV.pdf"
              className="btn btn-outline"
              download
            >
              Download CV
              <FaDownload />
            </a>
          </div>

          <div className="hero-highlights">
            <Link to="/designing">
              <FaPalette />
              <span>Designing</span>
            </Link>

            <Link to="/coding">
              <FaCode />
              <span>Coding</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="hero-card-header">
            <span>Personal Brand</span>

            <div className="status-badge">
              <span className="status-dot"></span>
              Available
            </div>
          </div>

          <h3>Designing ideas. Coding solutions.</h3>

          <p>
            Building useful digital experiences while developing the mindset,
            confidence, and skills required to become an entrepreneur.
          </p>

          <div className="hero-stats">
            <div>
              <strong>10+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>2</strong>
              <span>Main Areas</span>
            </div>

            <div>
              <strong>2026</strong>
              <span>Journey</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;