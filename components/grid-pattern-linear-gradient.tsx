"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "./magicui/grid-pattern";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeLeft, fadeUp } from "@/lib/motionVariants";
import tasmiImg from "@/assets/tasmina.png";
import { Button } from "./ui/button";

export default function GridPatternLinearGradient() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-black min-h-screen w-full">
      {/* GridPattern as background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
          )}
        />
      </div>

      {/* Main content over GridPattern */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="wrapper w-full">
          <div className="flex flex-col md:flex-row items-center justify-between min-h-screen gap-8">
            {/* Text Content */}
            <motion.div
              {...fadeLeft}
              transition={fadeLeft.transition()}
              className="w-full md:w-1/2 text-center md:text-left"
            >
            <motion.h2
                {...fadeUp}
                transition={fadeUp.transition(0.6)}
                className="hero-title font-desc-josefin mb-4"
              >
                Crafting seamless, modern web experiences —
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
                className="text-md md:text-lg text-content font-desc-josefin tracking-wide  dark:text-foreground/80 mb-6 leading-relaxed"
              >
                Specializing in React, Node.js, Next.js, and Cloud Architecture.
                Experienced in building robust, scalable, and SEO-optimized web
                applications using modern full-stack technologies and cloud-native
                solutions.
              </motion.p>

                {/* Button Section */}
              <motion.div
                {...fadeUp}
                transition={fadeUp.transition(1.3)}
                className="flex justify-center md:justify-start gap-4 mb-4"
              >
               
                <Button>1</Button>
                <Button>2</Button>
              </motion.div>
                {/* Countup Section */}
                {/* countup  */}
              <Button>Countup</Button>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
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
