"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GradientButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  children: ReactNode;
};

export function GradientButton({ icon, children, className, ...props }: GradientButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "flex items-center gap-2 text-xs md:text-base md:px-5 md:py-2 px-4 py-2.5 rounded-full bg-gradient-to-b from-zinc-950 to-[#03a5f0] text-white focus:ring-2 focus:ring-heroText hover:shadow-xl transition duration-200",
        className
      )}
    >
      {icon} {children}
    </button>
  );
}
