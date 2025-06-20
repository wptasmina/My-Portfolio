import { ShinyButton } from "../magicui/shiny-button";
import SectionTitle from "../shared/CustomStyle/SectionTitle/SectionTitle";
import SignupFormDemo from "../signup-form-demo";
import SidebarCard from "./SidebarCard";

export default function Contacts() {
  return (
    <section
      id="project"
      className="min-h-screen relative overflow-hidden bg-zinc-50 dark:bg-black/40 pt-4 pb-20 "
    >
      <div className="wrapper ">
        <div className="text-center relative z-10 mb-10 pt-8">
          <div className="text-center relative">
            {/* Shiny Button */}
            <ShinyButton>Let&apos;s Contact</ShinyButton>
            <SectionTitle
              heading="Let's Collaborate and Begin the work"
              subHeading="Explore a collection of projects that showcase my growth and commitment to building impactful, user-focused web solutions."
            />
          </div>

        

        </div>
      </div>

     <div className="grid md:grid-cols-2 border">
          <div className="border">
             <SignupFormDemo />
          </div>

          <SidebarCard />
         </div>

    </section>
  );
}
