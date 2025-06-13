
import HeroSection from "@/components/HomeSection/HeroSection";
import { Button } from "@/components/ui/button";
// import AboutPage from "./about/page";


export default function Home() {
  return (
  
      <main className="min-h-screen ">
        <HeroSection />

        {/* <AboutPage/> */}
        <div>
          <Button>Click me</Button>
        </div>
      </main>

  );
}
