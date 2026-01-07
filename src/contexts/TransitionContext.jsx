import { AnimatePresence, motion } from "framer-motion";
import { createContext } from "react";
import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

export const TransitionContext = createContext();

export default function TransitionContextProvider({ children }) {
  const location = useLocation();

  return (
    <TransitionContext.Provider>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="relative w-screen h-screen bg-blue-50"
        >
          {/* <motion.div
            className="relative h-screen w-screen fixed bg-green-100 rounded-b-[100px] z-40"
            
            animate={{ height: "0vh" }}
            exit={{ height: "140vh" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          /> */}
          {/* <motion.div
            className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default bg-re z-50 w-fit h-fit"
            initial={{ opacity:1 }}
            animate={{ opacity:0 }}
            exit={{ opacity:0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >{location.pathname.substring(1)} </motion.div> */}
          <motion.div
            className="h-screen w-screen fixed bg-yellow-50 rounded-t-[100px] bottom-0 z-40"
            initial={{ height: "140vh" }}
            animate={{ height: "0vh", transition: { delay: 0.5 } }}
          />

          <div className="relative z-10 h-24">
            <Header />
          </div>

          <div className="relative z-0 h-[calc(100vh-6rem)]">{children}</div>
        </motion.div>
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
