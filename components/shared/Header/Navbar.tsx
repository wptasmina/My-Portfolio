"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ModeToggle";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Bars3Icon } from "@heroicons/react/24/solid";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/wptasmina", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/wptasmina", icon: <FaLinkedinIn /> },
];

const Navbar = () => {
  const pathname = usePathname();

  const renderMenuItems = (isMobile = false) =>
    menuItems.map(({ label, href }, index) => {
      const isActive = pathname === href;
      const classes = isMobile
        ? `block text-base font-medium ${isActive ? "text-heroText" : "text-gray-900 dark:text-white hover:text-heroText"}`
        : `transition-colors uppercase md:text-md text-xs font-medium ${
            isActive
              ? "font-semibold text-heroText hover:text-heroText dark:text-heroText"
              : "dark:text-white/80 text-content hover:text-heroText hover:dark:text-heroText"
          }`;

      return (
        <motion.div
          key={href}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            delay: index * 0.1,
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Link href={href} className={classes}>
            {label}
          </Link>
        </motion.div>
      );
    });

  const renderSocialLinks = () =>
    socialLinks.map(({ href, icon }) => (
      <Link
        key={href}
        href={href}
        target="_blank"
        className="p-2 rounded-lg bg-content-text text-amber-50 dark:bg-white/5 dark:hover:bg-heroText/10 transition-colors hover:text-heroText border border-gray-900"
      >
        {icon}
      </Link>
    ));

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full dark:bg-background/30 backdrop:bg-white/50 backdrop-blur border-b border-gray-200 dark:border-gray-900 z-50 shadow overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center gap-1 group"
          >
            <div className="relative overflow-hidden h-8 w-8 rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-heroText to-tertiary animate-spin-slow rounded-full [mask-image:linear-gradient(transparent,white)]" />
              <div className="absolute inset-[2px] bg-content-text rounded-full flex items-center justify-center z-10">
                <span className="font-bold font-desc-josefin bg-gradient-to-r from-heroText to-tertiary bg-clip-text text-transparent">
                  <Link href="/">TS</Link>
                </span>
              </div>
            </div>
            <h2 className="font-semibold font-geist-sans dark:text-white/90 text-content group-hover:text-heroText transition-colors">
              Tasmina Akter
            </h2>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center justify-center gap-4 dark:bg-background px-4 py-2 border border-gray-100 dark:border-gray-900 rounded-full">
            {renderMenuItems()}
          </div>

          {/* Desktop Social + Theme Toggle */}
          <div className="hidden md:flex items-center justify-end gap-4 group">
            <div className="w-px h-6 bg-black/10 dark:bg-white/10 mx-2 hidden md:block" />
            {renderSocialLinks()}
            <ModeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center justify-center">
            <Sheet>
              <SheetTrigger asChild>
                <div className="bg-gray-900 p-1 rounded-md cursor-pointer">
                  <Bars3Icon className="w-6 h-6 text-white" />
                </div>
              </SheetTrigger>
              <SheetContent side="right" className="w-[260px] sm:w-[320px]">
                <SheetHeader>
                  <SheetTitle className="text-lg font-semibold mt-6">
                    Tasmina
                  </SheetTitle>
                  <SheetDescription>
                    <div className="py-4 space-y-4">{renderMenuItems(true)}</div>
                    <div className="h-px bg-gray-700 my-4" />
                    <div className="flex gap-3">{renderSocialLinks()} <ModeToggle /></div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
