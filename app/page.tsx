import HeroSection from "@/components/HomeSection/HeroSection";
import AboutPage from "./about/page";
import ServicesPage from "./services/page";
import Projects from "@/components/Projects/Projects";
import MorganCard from "@/components/ReviewCard/MorganCard";


export default function Home() {
  return (
  
      <main className="min-h-screen ">
        <HeroSection />
        <AboutPage/>
        <ServicesPage/>
        <MorganCard/>
        <Projects />

        {/* <Contact /> */}

      </main>

  );
}
