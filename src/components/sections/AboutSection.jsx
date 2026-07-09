import { FaLightbulb, FaRocket, FaUserTie } from "react-icons/fa";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="section about-section">
      <div className="container about-container">
        <div className="about-content">
          <span className="section-label">About Me</span>

          <h2>Designing, coding, and building a future business mindset.</h2>

          <p>
            I am Shangethana Puvaneswaran, a computing student focused on
            software development, UI/UX design, and digital product creation.
            My dream is to become an entrepreneur, so this portfolio represents
            both my technical journey and my personal brand.
          </p>

          <p>
            I enjoy creating clean interfaces, responsive websites, mobile app
            concepts, database systems, and meaningful digital solutions that
            solve real problems.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <FaLightbulb />
            <h3>Vision</h3>
            <p>To become a creative entrepreneur who builds useful digital products.</p>
          </div>

          <div className="about-card">
            <FaRocket />
            <h3>Mission</h3>
            <p>To improve design and coding skills through real projects and innovation.</p>
          </div>

          <div className="about-card">
            <FaUserTie />
            <h3>Brand</h3>
            <p>A modern personal brand combining designing, coding, and leadership.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;