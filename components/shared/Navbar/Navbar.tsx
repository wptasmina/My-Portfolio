"use client";

import {
  Sheet,
  SheetClose,
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
import { Logo } from "./Logo";

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
        ? `block text-base font-medium ${
            isActive
              ? "text-heroText"
              : "text-gray-900 dark:text-white hover:text-heroText"
          }`
        : `transition-colors uppercase md:text-md text-xs font-medium ${
            isActive
              ? "font-semibold text-heroText hover:text-heroText dark:text-heroText"
              : "dark:text-white/80 text-content hover:text-heroText hover:dark:text-heroText"
          }`;

      const link = (
        <Link href={href} key={href}>
          <motion.div
            className={classes}
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
            {label}
          </motion.div>
        </Link>
      );

      return isMobile ? (
        <SheetClose asChild key={href}>
          {link}
        </SheetClose>
      ) : (
        <div key={href}>{link}</div>
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
      <div className="max-w-7xl mx-auto px-4 py-3 w-full">
        <div className="flex items-center justify-between">
          {/* Server-side logo and name */}
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center justify-center gap-4 dark:bg-background px-4 py-2 border border-gray-100 dark:border-gray-900 rounded-full">
            {renderMenuItems()}
          </div>

          {/* Social Links & Theme Toggle */}
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
                    <div className="py-4 flex flex-col gap-5 border-none outline-none px-8">
                      {renderMenuItems(true)}
                    </div>
                    <div className="h-px bg-gray-200 dark:bg-gray-800 my-6" />
                    <div className="flex gap-3">
                      {renderSocialLinks()}
                      <ModeToggle />
                    </div>
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
