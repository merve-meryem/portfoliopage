import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Navlink from "./Navlink";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaWindowClose } from "react-icons/lia";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
function Header() {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-24 justify-end md:justify-between flex items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className=" hidden md:flex gap-4 w-1/2">
        {links.map((link) => (
          <Navlink link={link} key={link.title} />
        ))}
      </div>
      <div className=" hidden md:flex flex-row items-end gap-4 ">
        <a href="https://github.com/merve-meryem" target="_blank">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/mervemeryemkoyuncu" target="_blank">
          <FaLinkedin />
        </a>
      </div>
      {/*Responsive Menu*/}
      <div className="md:hidden">
        {/*Button*/}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-5 h-1 flex-col justify-between z-50 relative"
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-6  h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-6 my-1 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-6 my-1 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
      </div>
      {/* Menu Lıst*/}
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
        >
          {links.map((link) => (
            <motion.div
              variants={listItemVariants}
              key={link.title}
              className=""
            >
              <Link to={link.url}>{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default Header;
