import founderImage from "../../assets/profile/shangethana.jpg";
import {
  FaLaptopCode,
  FaPalette,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";

import "./FounderSection.css";

function FounderSection() {
  return (
    <section className="section founder">
      <div className="container founder-container">
        <div className="founder-image">
          <img
            src={founderImage}
            alt="Shangethana Puvaneswaran"
          />
        </div>

        <div className="founder-content">
          <span className="section-label">
            Founder Mindset
          </span>

          <h2>
            Building software,
            creating experiences,
            and growing a personal brand.
          </h2>

          <p>
            My goal is not only to become a software engineer,
            but also to build products that solve real-world
            problems and create long-term value.
          </p>

          <div className="founder-features">

            <div>
              <FaPalette />
              <span>UI / UX Design</span>
            </div>

            <div>
              <FaLaptopCode />
              <span>Software Development</span>
            </div>

            <div>
              <FaLightbulb />
              <span>Creative Thinking</span>
            </div>

            <div>
              <FaRocket />
              <span>Entrepreneurship</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderSection;