import HeroSection from "../../components/sections/HeroSection";
import AboutSection from "../../components/sections/AboutSection";
import SkillsSection from "../../components/sections/SkillsSection";
import ShowcaseSection from "../../components/sections/ShowcaseSection";
import ProjectsSection from "../../components/sections/ProjectsSection";
import LeadershipSection from "../../components/sections/LeadershipSection";

function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ShowcaseSection />
      <ProjectsSection />
      <LeadershipSection />
    </main>
  );
}

export default Home;