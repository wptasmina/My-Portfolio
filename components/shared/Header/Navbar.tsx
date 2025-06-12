"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import ModeToggle from "./ModeToggle";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/wptasmina",
      icon: <FaGithub />,
    },
    {
      label: "Linkedin",
      href: "https://www.linkedin.com/in/wptasmina",
      icon: <FaLinkedinIn />,
    },
  ];

  return (
    <header className="bg-heroBg/50 fixed w-full backdrop-blur-2xl border-b">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center gap-2"
          >
            <div className="relative overflow-hidden h-8 w-8 rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-heroText to-tertiary animate-spin-slow rounded-full [mask-image:linear-gradient(transparent,white)]" />
              <div className="absolute inset-[2px] bg-content rounded-full flex items-center justify-center z-10">
                <span className="font-bold bg-gradient-to-r from-heroText to-tertiary bg-clip-text text-transparent">
                  <Link href="/">TS</Link>
                </span>
              </div>
            </div>
            <h2 className="font-semibold dark:text-white/90 text-content group-hover:text-heroText transition-colors">
              Tasmina Akter
            </h2>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
