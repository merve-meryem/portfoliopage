import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import filmler from "../assets/filmler.jpg";
import watchlist from "../assets/watchlist.jpg";
import currency from "../assets/currency.png";
import fungi from "../assets/Fungistore.png";
import pizza from "../assets/pizzareact.png";
import { useHistory } from "react-router-dom";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const myprojects = [
  {
    id: 1,
    color: "from-green-50 to-yellow-50",
    title: "FUNGI STORE E-COMMERCE",
    img: fungi,
    link: "https://fungistore.vercel.app/",
  },
  {
    id: 2,
    color: "from-yellow-50 to-orange-50",
    title: "WATCHLIST",
    img: watchlist,
    link: "https://redux-watchlist-rho.vercel.app/",
  },
  {
    id: 3,
    color: "from-orange-50 to-red-50",
    title: "MOVIES APP",
    img: filmler,
    link: "https://redux-filmler-solution-nu.vercel.app/movies",
  },
  {
    id: 4,
    color: "from-red-50 to-purple-50",
    title: "PIZZA E-COMMERCE REACT",
    img: pizza,
    link: "https://e-commerce-pizza-react-n38c.vercel.app/",
  },

  {
    id: 5,
    color: "from-purple-50 to-violet-50",
    title: "CURRENCY",
    img: currency,
    link: "https://currency-red-five.vercel.app/",
  },
];

function Portfolio() {
  const ref = useRef();
  const history = useHistory();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-full h-[calc(100vh-6rem)] flex flex-col gap-10 items-center justify-center text-3xl sm:text-5xl md:text-8xl text-center">
          MY PROJECTS
          <div>
            <IoArrowDownCircleOutline className="w-10" />
          </div>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-yellow-50 to-green-50" />
            {myprojects.map((prj) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${prj.color}`}
                key={prj.id}
              >
                <div className="flex flex-col gap-4 text-white">
                  <h1 className="text-2xl text-gray-800">{prj.title} </h1>
                  <div className="relative w-100 h-64 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] ">
                    <img src={prj.img} />
                  </div>
                  <div className="">
                    <div>
                      <a
                        href={prj.link}
                        target="_blank"
                        className="flex justify-end"
                      >
                        <button className="p-2 text-xs md:p-2   text-black  bg-yellow-300 font-semibold rounded-4xl">
                          See Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items justify-center text-center bg-blue-50">
        <h1 className="text-4xl font-bold">Do you have a project?</h1>
        <div className="relative">
          <button
            className="rounded-full cursor-pointer hover:bg-black hover:text-amber-50 font-bold text-2xl w-40 h-40 bg-amber-300"
            onClick={() => history.push("/contact")}
          >
            Hire Me
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Portfolio;
