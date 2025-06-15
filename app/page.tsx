import HeroSection from "@/components/HomeSection/HeroSection";
import AboutPage from "./about/page";
import Projects from "@/components/Projects/Projects";
import Login from "@/components/Login";




export default function Home() {
  return (
  
      <main className="min-h-screen ">
        <HeroSection />
        <AboutPage/>
        <Projects />
        <Login />

      </main>

  );
}
