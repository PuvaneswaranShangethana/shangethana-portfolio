import { FaCode, FaDatabase, FaDesktop, FaMobileAlt, FaRobot, FaWifi } from "react-icons/fa";
import "./Coding.css";

const codingWorks = [
  {
    icon: <FaCode />,
    title: "Web Development",
    text: "React, HTML, CSS, JavaScript, responsive websites, and dashboards.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    text: "Flutter mobile applications with clean UI and modern user experience.",
  },
  {
    icon: <FaDesktop />,
    title: "Desktop Systems",
    text: "C# Windows Forms systems for pharmacy, food delivery, and admin modules.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Systems",
    text: "SQL Server, MySQL, ER diagrams, table creation, and database queries.",
  },
  {
    icon: <FaRobot />,
    title: "AI Projects",
    text: "AI-based ideas, risk prediction concepts, and smart decision systems.",
  },
  {
    icon: <FaWifi />,
    title: "IoT Projects",
    text: "ESP32, wearable device concepts, SOS systems, sensors, and GSM alerts.",
  },
];

function Coding() {
  return (
    <main className="section coding-page">
      <div className="container">
        <span className="section-label center">Coding</span>
        <h1 className="section-title">Software development work and technical projects.</h1>
        <p className="section-subtitle">
          This page presents my coding side, including web applications, mobile apps,
          desktop systems, database projects, AI ideas, and IoT-based solutions.
        </p>

        <div className="coding-grid">
          {codingWorks.map((item, index) => (
            <div className="coding-card" key={index}>
              <div className="coding-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Coding;