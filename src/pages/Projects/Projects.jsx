import { FaLaptopCode, FaMobileAlt, FaRobot } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    icon: <FaRobot />,
    title: "SafeSphere AI",
    type: "AI / IoT / Mobile App",
    description:
      "AI-driven personal safety assistance system with SOS alerts, IoT wearable support, GSM alerts, and risk prediction.",
  },
  {
    icon: <FaLaptopCode />,
    title: "YathraDepotX",
    type: "React / Node / MySQL",
    description:
      "Smart public transport depot management system with routes, vehicles, drivers, schedules, reports, and admin control.",
  },
  {
    icon: <FaMobileAlt />,
    title: "SmartMed Pharmacy",
    type: "C# / SQL Server",
    description:
      "Pharmacy management system with admin dashboard, medicine management, customer ordering, cart, and reports.",
  },
];

function Projects() {
  return (
    <main className="section projects-page">
      <div className="container">
        <span className="section-label center">Projects</span>
        <h1 className="section-title">My featured academic and personal projects.</h1>
        <p className="section-subtitle">
          These projects show my skills in software development, UI design,
          database design, AI concepts, and problem solving.
        </p>

        <div className="projects-page-grid">
          {projects.map((project, index) => (
            <article className="projects-page-card" key={index}>
              <div className="projects-page-icon">{project.icon}</div>
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;