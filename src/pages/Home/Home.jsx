import HeroSection from "../../components/sections/HeroSection";
import AboutSection from "../../components/sections/AboutSection";
import SkillsSection from "../../components/sections/SkillsSection";
import ShowcaseSection from "../../components/sections/ShowcaseSection";
import ProjectsSection from "../../components/sections/ProjectsSection";

function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ShowcaseSection />
      <ProjectsSection />
    </main>
  );
}

export default Home;