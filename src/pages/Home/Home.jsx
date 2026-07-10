import HeroSection from "../../components/sections/HeroSection";
import FounderSection from "../../components/sections/FounderSection";
import AboutSection from "../../components/sections/AboutSection";
import SkillsSection from "../../components/sections/SkillsSection";
import ShowcaseSection from "../../components/sections/ShowcaseSection";
import ProjectsSection from "../../components/sections/ProjectsSection";
import LeadershipSection from "../../components/sections/LeadershipSection";
import ContactSection from "../../components/sections/ContactSection";

function Home() {
  return (
    <main>
      <HeroSection />
      <FounderSection />
      <AboutSection />
      <SkillsSection />
      <ShowcaseSection />
      <ProjectsSection />
      <LeadershipSection />
      <ContactSection />
    </main>
  );
}

export default Home;