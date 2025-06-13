// components/Navbar/ServerNavbar.tsx
import Link from "next/link";
import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
    className="flex items-center gap-2 group">
      <div className="relative overflow-hidden h-8 w-8 rounded-full">
        <div className="absolute inset-0 bg-gradient-to-r from-heroText to-tertiary animate-spin-slow rounded-full [mask-image:linear-gradient(transparent,white)]" />
        <div className="absolute inset-[2px] bg-content-text rounded-full flex items-center justify-center z-10">
          <span className="font-bold font-desc-josefin bg-gradient-to-r from-heroText to-tertiary bg-clip-text text-transparent">
            <Link href="/">TS</Link>
          </span>
        </div>
      </div>
      <h2 className="font-semibold font-geist-sans text-content group-hover:text-heroText">
        Tasmina Akter
      </h2>
    </motion.div>
  );
};
