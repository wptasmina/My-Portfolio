import HeroSection from "@/components/HomeSection/HeroSection";
import Projects from "@/components/Projects/Projects";
import ServicePage from "./services/page";
// import AboutPage from "./about/page";


export default function Home() {
  return (
  
      <main className="min-h-screen ">
        <HeroSection />

        {/* <AboutPage/> */}
        <ServicePage/>
       <Projects />
      </main>

  );
}
