import React from "react";
import { motion } from "framer-motion";
import aboutimg from "../assets/aboutimg.jpg"
function About() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/*container */}
      <div className="min-h-screen p-2 sm:p-4 md:p-6 lg:p-10 xl:p-24 gap-8 overflow-scroll lg:flex ">
        {/*text container*/}
        <div className=" flex flex-col  md:gap-8 lg:gap-12 xl:gap-32">
          {/*biography container*/}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg"> I graduated from the Turkish Military Academy in 2014 with degrees in Systems Engineering and Business Administration and served for nearly 11 years in various roles. I later transitioned into the software industry and completed training in Frontend development. As a Junior Frontend Developer, I focus on building clean, user-centered interfaces using React, JavaScript, HTML, and CSS. </p>
          </div>
          {/*skills container*/}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">SKILLS</h1>
            <div className="flex flex-wrap gap-4">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TailwindCSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bootsrap
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                VS Code
              </div>
               
            </div>
          </div>
        </div>
        {/*svg container*/}
        <div className="w-1/2 h-1/2  ">
          <img src={aboutimg}/>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
