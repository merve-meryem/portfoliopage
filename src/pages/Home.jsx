import React from "react";
import home from "../assets/home.jpeg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" flex justify-center mt-30 flex-col lg:flex-row px-4 sm:px-8 md:px-12 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="relative ">
          <img
            src={home}
            className=" rounded-full max-w-[200px] lg:max-w-[300px] m-auto"
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className=" relative lg:h-full lg:w-1/2 mt-8 flex flex-col gap-8 items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Hello!</h1>
          <p className="md:text-2xl">I'm, Merve Meryem Koyuncu</p>
          <span className="md:text-xl">Frontend Developer</span>

          <div className="flex  gap-4">
            <Link
              to="/portfolio"
              className="px-4 py-3 rounded-lg ring-1 ring-black bg-black text-white"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-4 py-3 rounded-lg ring-1 ring-black"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
