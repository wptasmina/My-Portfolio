"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Logo from "./Logo";


const  Header = () => {

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background dark:bg-background-dark fixed top-0 w-full z-50 backdrop:bg-white/50 dark:bg-content/30 backdrop-blur border-b border-gray-100 dark:border-gray-800 shadow-md overflow-hidden"
    >
      <div className="wrapper py-3 w-full flex items-center justify-between ">
        {/* Left - Logo & Name */}
        {/* <Logo/> */}
        <Navbar />
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden hover:bg-gray-100 dark:hover:bg-gray-100">
          {/* <SheetDemo /> */}
        </div>
        
      </div>
    </motion.header>
  );
};

export default Header;
