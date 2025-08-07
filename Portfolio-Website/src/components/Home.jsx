import { motion } from "framer-motion";
import myPic from "/Profile.png"
import '../index.css'
import {useState, useEffect} from "react"
import {NavLink} from 'react-router-dom'
import { FaReact } from "react-icons/fa";



export const Home = () => {

  const roles = ["Learner", "Student", "Tech Enthusiast"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="min-h-[80vh] px-6 md:px-20 py-10 flex flex-col md:flex-row items-center  bg-gray-950 text-white font-sans  md:justify-between justify-center text-center md:text-left">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-400 select-none">
            Hi, I'm Shreyash
            <span className="inline-block animate-bounce">👋</span>
          </h1>
          <motion.p
            className="text-gray-300 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I’m a{" "}
            <span className="text-indigo-500 inline-block min-w-[140px] text-center">
              {roles[index]}
            </span>
            , passionate about building modern web technology.
          </motion.p>
          <br></br>
          <p className="max-w-xl text-gray-200 mb-6 text-justify">
            I'm 3rd-year IT student at SGGSIE&T Nanded who loves crafting clean
            UIs and solving real-world problems through code. This is my
            portfolio showcasing what I build, how I learn, and where I'm
            headed.
          </p>

          <div className="mt-6 flex gap-2">
            <NavLink
              to="/projects"
              className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition"
            >
              View Projects
            </NavLink>
            <a
              href="/Resume.docx"
              download
              className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition text-center"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-8 md:mt-0 md:ml-30"
        >
          <img
            src={myPic}
            alt="My Profile"
            className=" rounded-full border-4 border-indigo-500 shadow-lg object-cover w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64"
          />
        </motion.div>
      </div>
      <p className="italic text-gray-500 mt-0 text-center bg-gray-950">
        "Learning today's technology to build tomorrow's future."
      </p>
    </>
  );
};
