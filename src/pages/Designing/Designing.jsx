import { FaFigma, FaMobileAlt, FaPaintBrush, FaPenNib } from "react-icons/fa";
import "./Designing.css";

const designWorks = [
  {
    icon: <FaFigma />,
    title: "UI/UX Design",
    text: "Modern mobile and web interface designs using Figma.",
  },
  {
    icon: <FaMobileAlt />,
    title: "App Screens",
    text: "Login pages, dashboards, registration screens, and app layouts.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Branding",
    text: "Personal branding, colour systems, and visual identity ideas.",
  },
  {
    icon: <FaPenNib />,
    title: "Creative Design",
    text: "Posters, social media designs, wireframes, and presentation visuals.",
  },
];

function Designing() {
  return (
    <main className="section designing-page">
      <div className="container">
        <span className="section-label center">Designing</span>
        <h1 className="section-title">Creative design work with modern UI thinking.</h1>
        <p className="section-subtitle">
          This page presents my designing side, including UI/UX, Figma layouts,
          branding ideas, wireframes, and creative visual work.
        </p>

        <div className="design-grid">
          {designWorks.map((item, index) => (
            <div className="design-card" key={index}>
              <div className="design-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Designing;