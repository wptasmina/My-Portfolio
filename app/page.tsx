import HeroSection from "@/components/HomeSection/HeroSection";
import AboutPage from "./about/page";
import ServicesPage from "./services/page";
import Projects from "@/components/Projects/Projects";
import MorganCard from "@/components/ReviewCard/MorganCard";
import Faq from "@/components/Faqs/Faq";


export default function Home() {
  return (
  
      <main className="min-h-screen ">
        <HeroSection />
        <AboutPage/>
        <ServicesPage/>
        <MorganCard/>
        <Projects />
        {/* <Skills/> */}
        {/* <Reviews/> */}
        <Faq/>
        {/* <Contact /> */}

      </main>

  );
}
