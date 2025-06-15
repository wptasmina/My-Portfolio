"use client";

import { Service } from "@/types";
import { MagicCard } from "../magicui/magic-card";
import { ShimmerButton } from "../magicui/shimmer-button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ServicesCard = ({ icon: Icon, title, description }: Service) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const gradientColor = mounted
    ? theme === "dark"
      ? "#262626"
      : "#D9D9D955"
    : "#D9D9D955";

  return (
    <section className="flex flex-col h-full overflow-hidden">
      <div className="group relative overflow-hidden flex flex-col h-full">
        <MagicCard
          className="relative overflow-hidden glass rounded-2xl p-8 gradient-border transition-all duration-300 hover:-translate-y-1 flex flex-col flex-grow"
          gradientColor={gradientColor}
        >
          {/* Icon Section */}
          <div className="mb-6 animate-float">
            <ShimmerButton className="rounded-full p-3">
              <span className="shimmerButton-span ">
                <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </span>
            </ShimmerButton>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold">{title}</h3>

          {/* Description */}
          <p className="text-content dark:text-gray-400 text-md leading-relaxed flex-grow">
            {description}
          </p>
        </MagicCard>
      </div>
    </section>
  );
};

export default ServicesCard;
