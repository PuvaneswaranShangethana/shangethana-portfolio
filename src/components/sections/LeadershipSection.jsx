import { FaHandsHelping, FaUsers, FaBriefcase } from "react-icons/fa";
import "./LeadershipSection.css";

const leadership = [
  {
    icon: <FaUsers />,
    title: "Leo Club Leadership",
    text: "Experience in club activities, event participation, teamwork, and community service.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Community Projects",
    text: "Involvement in meaningful projects that support people, places, and social impact.",
  },
  {
    icon: <FaBriefcase />,
    title: "Entrepreneurial Mindset",
    text: "Focused on building a personal brand, digital products, and future business ideas.",
  },
];

function LeadershipSection() {
  return (
    <section className="section leadership-section">
      <div className="container">
        <span className="section-label center">Leadership</span>
        <h2 className="section-title">Building confidence beyond coding.</h2>
        <p className="section-subtitle">
          My journey includes teamwork, responsibility, leadership, and the mindset to build something of my own.
        </p>

        <div className="leadership-grid">
          {leadership.map((item, index) => (
            <div className="leadership-card" key={index}>
              <div className="leadership-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeadershipSection;