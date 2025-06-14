"use client";
import React from "react";
import { DotPattern } from "../magicui/dot-pattern";
import ServicesCard from "./ServicesCard";
import { ShinyButton } from "../magicui/shiny-button";
import { services } from "@/data/services";
import SectionTitle from "../shared/CustomStyle/SectionTitle/SectionTitle";
import { cn } from "@/lib/utils";


 
const Service = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen bg-zinc-50 dark:bg-black/60 py-10  overflow-hidden"
    >
    <div className="wrapper">
       

      <div className="text-center relative z-10 mb-10">
        <ShinyButton>Services</ShinyButton>
        <SectionTitle
         heading={`Crafting Impactful Digital Experiences`}

         subHeading={`Turning bold ideas into beautiful, high-performance web solutions—
powered by modern technology and thoughtful design.`}
         />
      </div>
       <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServicesCard key={index} {...service}
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Service;