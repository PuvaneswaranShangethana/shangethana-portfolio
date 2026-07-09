import { FaCode, FaDatabase, FaFigma, FaMobileAlt, FaPaintBrush, FaRobot } from "react-icons/fa";
import "./SkillsSection.css";

const skills = [
  {
    icon: <FaFigma />,
    title: "UI/UX Design",
    text: "Figma layouts, wireframes, mobile screens, and modern interface designs.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Brand Design",
    text: "Creative visual identity, posters, social media designs, and digital branding.",
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    text: "Responsive websites using React, HTML, CSS, JavaScript, and modern tools.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    text: "Flutter mobile application UI and user-friendly app screen design.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Systems",
    text: "MySQL, SQL Server, ER diagrams, relational database design, and queries.",
  },
  {
    icon: <FaRobot />,
    title: "AI / IoT Ideas",
    text: "AI-assisted systems, IoT concepts, safety systems, and innovation projects.",
  },
];

function SkillsSection() {
  return (
    <section className="section skills-section">
      <div className="container">
        <span className="section-label">My Skills</span>
        <h2 className="section-title">Designing and coding skills for digital product building.</h2>
        <p className="section-subtitle">
          My portfolio is divided into two main areas: creative designing and technical coding.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;