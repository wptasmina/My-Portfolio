'use client'

import Link from "next/link";
import SectionTitle from "../shared/CustomStyle/SectionTitle/SectionTitle";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ShinyButton } from "../magicui/shiny-button";
import { RainbowButton } from "@/components/magicui/rainbow-button";

const Projects = () => {
  return (
    <section id="project" className="min-h-screen bg-zinc-50 dark:bg-black/60 py-10 relative overflow-hidden">
      <div className="wrapper ">
        <div className="text-center relative z-10 mb-10">
          {/* Shiny Button */}
          <ShinyButton>Recent Projects</ShinyButton>
          <SectionTitle
            heading="Showcase of My Work"
            subHeading="Explore a collection of projects that showcase my growth and commitment to building impactful, user-focused web solutions."
          />
        </div>
        {/* More content here */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.slice(0, 8).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* AllProject button  */}
        <div className="text-center mt-12">
          <Link href="/projects">
            <RainbowButton variant="outline">See All Projects</RainbowButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
