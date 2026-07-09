import { FaGraduationCap, FaLightbulb, FaRocket, FaUserTie } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <main className="section about-page">
      <div className="container">
        <span className="section-label center">About Me</span>
        <h1 className="section-title">A designer, developer, and future entrepreneur.</h1>
        <p className="section-subtitle">
          I am Shangethana Puvaneswaran, a computing student passionate about
          building modern digital products through design, coding, and innovation.
        </p>

        <div className="about-page-grid">
          <div className="about-page-card">
            <FaGraduationCap />
            <h3>Education</h3>
            <p>HND in Computing / Software Engineering at ESOFT Metro Campus.</p>
          </div>

          <div className="about-page-card">
            <FaLightbulb />
            <h3>Interest</h3>
            <p>UI/UX design, software development, mobile apps, AI, and IoT systems.</p>
          </div>

          <div className="about-page-card">
            <FaRocket />
            <h3>Goal</h3>
            <p>To become an entrepreneur and build a strong personal digital brand.</p>
          </div>

          <div className="about-page-card">
            <FaUserTie />
            <h3>Brand</h3>
            <p>Designing ideas. Coding solutions. Building future brands.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;