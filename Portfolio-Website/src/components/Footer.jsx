import "../index.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {motion} from "framer-motion"


export const Footer = () => {

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-900 text-gray-300 max-w-8xl mx-auto px-4 md:px-10 py-10 flex flex-col items-center justify-center gap-2 md:gap-6 font-sans">
            <div className="text-indigo-500 font-bold select-none">
              Shreyash.dev
            </div>
            <div>
              <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8  sm:px-10  md:gap-10 px-4 md:px-10 text-base font-medium ">
                <li>
                  <NavLink to="/" className="hover:text-white">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="hover:text-white">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className="hover:text-white">
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/skills" className="hover:text-white">
                    Skills
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex gap-4 md:gap-10 text-2xl text-gray-400 font-bold">
              <a
                href="https://github.com/ShreyashGajbhiye453"
                className="hover:text-indigo-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/shreyash-rajesh-gajbhiye-332bb7312"
                className="hover:text-indigo-400 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="2023bit042@sggs.ac.in"
                className="hover:text-indigo-400 transition"
              >
                <FaEnvelope />
              </a>
            </div>
            <p className="italic text-gray-400 mt-6">
              "Code. Create. Learn. Repeat."
            </p>
            <a onClick={goTop} className="text-gray-500 cursor-pointer">
              Back To Top
            </a>
            <div className="select-none">
              © 2025 Shreyash. All rights reserved.
            </div>
          </div>
        </motion.div>
      </>
    );
}