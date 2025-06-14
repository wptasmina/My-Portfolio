import HeroSection from "@/components/HomeSection/HeroSection";
import AboutPage from "./about/page";
import Projects from "@/components/Projects/Projects";
import ServicePage from "./services/page";




export default function Home() {
  return (
  
      <main className="min-h-screen ">
        <HeroSection />
        <AboutPage/>
        <ServicePage />
        <Projects />
        
      </main>

  );
}
