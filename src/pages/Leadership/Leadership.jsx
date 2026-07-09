import { FaBriefcase, FaHandsHelping, FaPeopleCarry, FaUsers } from "react-icons/fa";
import "./Leadership.css";

const leadershipItems = [
  {
    icon: <FaUsers />,
    title: "Leo Club Involvement",
    text: "Participated in club activities, leadership work, teamwork, and event coordination.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Community Service",
    text: "Supported social service projects that create value for people and the community.",
  },
  {
    icon: <FaPeopleCarry />,
    title: "Project Teamwork",
    text: "Worked with teams in planning, organizing, reporting, and completing project tasks.",
  },
  {
    icon: <FaBriefcase />,
    title: "Entrepreneurial Growth",
    text: "Developing confidence, responsibility, communication, and personal branding skills.",
  },
];

function Leadership() {
  return (
    <main className="section leadership-page">
      <div className="container">
        <span className="section-label center">Leadership</span>
        <h1 className="section-title">Leadership, service, and entrepreneurial growth.</h1>
        <p className="section-subtitle">
          This page highlights my involvement in teamwork, community projects,
          leadership activities, and my journey toward becoming an entrepreneur.
        </p>

        <div className="leadership-page-grid">
          {leadershipItems.map((item, index) => (
            <div className="leadership-page-card" key={index}>
              <div className="leadership-page-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Leadership;