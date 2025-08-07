import "../index.css";
import { NavLink } from "react-router-dom";
import {motion} from "framer-motion"

export const Navbar = () =>{

    const LinkActivation = ({ isActive }) =>
      isActive
        ? "select-none border-b-2 border-indigo-500 text-indigo-400 transition-all duration-100 ease-in-out hover: transition duration-300 delay-70 ease-in-out"
        : "select-none border-b-2 border-transparent text-gray-300 hover:border-indigo-400 hover:text-indigo-300 transition-all duration-300";
    

    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="sticky top-0"
        >
          <div className="py-4 bg-gray-900  backdrop-blur-md flex flex-col md:flex-row justify-between items-center shadow-md font-sans">
            <div className="Logo text-gray-300 font-bold px-4 text-2xl mb-2 md:mb-0 select-none">
              Shreyash.dev
            </div>
            <div>
              <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-10 px-4 md:px-10 text-base font-medium ">
                <li>
                  <NavLink to="/" className={LinkActivation}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={LinkActivation}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className={LinkActivation}>
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/skills" className={LinkActivation}>
                    Skills
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </>
    );
        }
