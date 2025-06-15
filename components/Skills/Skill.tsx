//components\ui\timeline.tsx

"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Compare } from "@/components/ui/compare";
import { AnimatedListDemo } from "./AnimatedList";

export function Skill() {
  const data = [
    {
      title: "2025 – Full Stack Apps",
      content: (
        <div>
          <p className="mb-6 text-sm md:text-base text-gray-700 dark:text-gray-200">
            Focused on building secure and scalable backend systems. Delivered
            end-to-end solutions using MERN stack and Firebase. Implemented
            real-time features and integrated payment gateways.
          </p>
          <ul className="space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6">
            <li>✅ REST & GraphQL APIs</li>
            <li>✅ Authentication & Authorization</li>
            <li>✅ Cloud & CI/CD Integration</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/projects/chat-app.png"
              alt="Chat App"
              className="rounded-xl w-full h-28 md:h-44 lg:h-56 object-cover shadow-md"
            />
            <img
              src="/projects/recipe-finder.png"
              alt="Recipe Finder"
              className="rounded-xl w-full h-28 md:h-44 lg:h-56 object-cover shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024 – Backend Development",
      content: (
        <div>
          <p className="mb-6 text-sm md:text-base text-gray-700 dark:text-gray-200">
            Engineered scalable APIs using Node.js, Express, and MongoDB.
            Integrated real-time functionality using WebSockets.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/projects/chat-app.png"
              alt="Chat App"
              className="rounded-xl w-full h-28 md:h-44 lg:h-56 object-cover shadow-md"
            />
            <img
              src="/projects/recipe-finder.png"
              alt="Recipe App"
              className="rounded-xl w-full h-28 md:h-44 lg:h-56 object-cover shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 – Frontend Development",
      content: (
        <div>
          <p className="mb-6 text-sm md:text-base text-gray-700 dark:text-gray-200">
            Specialized in modern UI frameworks including React, Next.js, and
            Tailwind CSS. Built responsive, accessible, and high-performing web
            interfaces.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/projects/portfolio-website.jpg"
              alt="Portfolio"
              className="rounded-xl w-full h-28 md:h-44 lg:h-56 object-cover shadow-md"
            />
            <img
              src="/projects/task-manager.webp"
              alt="Task Manager"
              className="rounded-xl w-full h-28 md:h-44 lg:h-56 object-cover shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022 – Design & Optimization",
      content: (
        <div>
          <p className="mb-4 text-sm md:text-base text-gray-700 dark:text-gray-200">
            Focused on UX/UI design and frontend performance. Emphasized
            consistency, accessibility, and animation.
          </p>
          <ul className="space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6">
            <li>🎨 Designed intuitive UI/UX</li>
            <li>⚡ Improved load times with lazy loading</li>
            <li>🧠 Mastered animation using Framer Motion</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/projects/e-commerce-website.png"
              alt="E-commerce Site"
              className="rounded-xl w-full h-28 md:h-44 lg:h-56 object-cover shadow-md"
            />
            <img
              src="/projects/expense-tracker.webp"
              alt="Tracker"
              className="rounded-xl w-full h-28 md:h-44 lg:h-56 object-cover shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Highlights & Growth",
      content: (
        <div>
          <p className="mb-4 text-sm md:text-base text-gray-700 dark:text-gray-200">
            Reflecting on my continuous learning journey and accomplishments.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <AnimatedListDemo />

            <Compare
              firstImage="https://assets.aceternity.com/code-problem.png"
              secondImage="https://assets.aceternity.com/code-solution.png"
              firstImageClassName="object-cover object-left-top"
              secondImageClassName="object-cover object-left-top"
              className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
              slideMode="hover"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="timeline"
      className=" bg-background text-foreground relative w-full overflow-clip"
    >
      <div>
        {/* <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
          My Web Development Journey
        </h2> */}
        <Timeline data={data} />
      </div>
    </section>
  );
}
