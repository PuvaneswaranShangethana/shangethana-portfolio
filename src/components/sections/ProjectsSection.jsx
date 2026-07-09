import { FaArrowRight } from "react-icons/fa";
import "./ProjectsSection.css";

const projects = [
  {
    title: "SafeSphere AI",
    category: "AI / IoT Mobile App",
    description:
      "A personal safety system using AI, IoT wearable device, SOS alert, and real-time risk prediction.",
  },
  {
    title: "SmartMed Pharmacy",
    category: "C# Desktop System",
    description:
      "A pharmacy management system with admin and customer modules, medicine management, cart, and orders.",
  },
  {
    title: "YathraDepotX",
    category: "Web Application",
    description:
      "A public transport depot management system with routes, vehicles, drivers, schedules, and reports.",
  },
];

function ProjectsSection() {
  return (
    <section className="section projects-section">
      <div className="container">
        <span className="section-label center">Featured Projects</span>
        <h2 className="section-title">Selected projects that show my growth.</h2>
        <p className="section-subtitle">
          These projects highlight my journey in software development, UI design,
          database systems, AI ideas, and real-world problem solving.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <a href="/projects">
                View Details <FaArrowRight />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;