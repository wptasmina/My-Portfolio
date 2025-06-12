"use client";

import { motion } from "framer-motion";
// import Navbar from "./Navbar";
import Logo from "./Logo";


const  Header = () => {

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background/60 dark:bg-background-dark border-b border-gray-200 dark:border-gray-700 fixed top-0 left-0 right-0 z-50 shadow-md mb-10 md:mb-0 md:border-b-0 md:bg-transparent md:dark:bg-transparent md:backdrop-blur-md md:dark:backdrop-blur-md"
    >
      <div className="wrapper py-3 w-full">
        {/* Left - Logo & Name */}
        <Logo/>
        {/* <Navbar /> */}
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden hover:bg-gray-100 dark:hover:bg-gray-100">
          {/* <SheetDemo /> */}
        </div>
        
      </div>
    </motion.header>
  );
};

export default Header;
