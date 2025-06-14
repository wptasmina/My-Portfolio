"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import tasmiImg from "@/assets/tasmina.png";
import { GridPattern } from "./magicui/grid-pattern";
import { motion } from 'framer-motion';    //lib/motionVariants
import { fadeLeft, fadeUp } from "@/lib/motionVariants";
import { GradientButton } from "./ui/gradient-button";
import { ArrowDownTrayIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Counts from "./HomeSection/border-beam-demo-3";
import { DotPattern } from "./magicui/dot-pattern";


export default function GridPatternLinearGradient() {
  return (
    <section className=" relative overflow-hidden bg-zinc-50 dark:bg-black min-h-screen w-full">
      {/* GridPattern as background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 section-gradientImg animate-pulse">
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
          )}
        />

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

      </div>

      {/* Main content over GridPattern */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="wrapper w-full">
          <div className="md:mt-0 lg:mt-0 flex flex-col-reverse md:flex-row items-center justify-between min-h-screen gap-8">
            {/* Text Content */}
            <motion.div            

              {...fadeLeft}
              transition={fadeLeft.transition()}
              className="w-full md:w-2/3 text-center md:text-left lg:mt-15 md:mt-0 pb-10 md:pb-0"
            >
              <motion.h2
                {...fadeUp}
                transition={fadeUp.transition(0.6)}
                className="hero-title font-desc-josefin mb-4"
              >
                Crafting seamless, modern <br/>
                <span className=" ml-2 text-transparent bg-clip-text bg-gradient-to-r from-heroText to-blue-400">
                   web experiences —
                </span>
              </motion.h2>
              <motion.h1
                {...fadeUp}
                transition={fadeUp.transition(0.5)}
                className="hero-title font-title-oswald hero-title-color mb-4"
              >
                Full Stack
                <motion.span
                  {...fadeUp}
                  transition={fadeUp.transition(0.8)}
                  className="hero-title-color ml-2"
                >
                  Developer
                </motion.span>
              </motion.h1>

              <motion.p
                {...fadeUp}
                transition={fadeUp.transition(1.1)}
                className="text-sm md:text-md lg:text-lg text-content font-desc-josefin tracking-wide  dark:text-foreground/80 mb-6 leading-relaxed md:pr-10 lg:pr-40"
              >
                Specializing in React, Node.js, Next.js, and Cloud Architecture.
                Experienced in building robust, scalable, and SEO-optimized web
                applications using modern full-stack technologies and
                cloud-native solutions.
              </motion.p>

              {/* Button Section */}
              <motion.div
                {...fadeUp}
                transition={fadeUp.transition(1.3)}
                className="flex justify-center md:justify-start gap-4 mb-6"
              >
                <GradientButton
                  icon={<PhoneIcon className="h-4 w-4" />}
                  onClick={() =>
                    window.open("https://wa.me/8801581543966", "_blank")
                  }
                >
                  Contact Me
                </GradientButton>

                <GradientButton
                  icon={
                    <ArrowDownTrayIcon className="h-4 w-4 animate-bounce" />
                  }
                  onClick={() => window.open("/resume.pdf", "_blank")}
                >
                  Download CV
                </GradientButton>
              </motion.div>
              {/* Countup Section */}
              <Counts />
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="w-full md:w-1/3 flex justify-center mt-20 md:mt-0"
              {...fadeUp}
              transition={fadeUp.transition(1.5)}
            >
              <Image
                src={tasmiImg}
                width={400}
                height={400}
                alt="avatar image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
