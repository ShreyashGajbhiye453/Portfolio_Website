import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaCode, // ✅ Add this as a replacement
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiGithub,
} from "react-icons/si";


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skills = {
  Frontend: [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
  ],
  Backend: [
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
  ],
  Tools: [
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <FaCode />, name: "VS Code" },
    { icon: <FaDatabase />, name: "MongoDB Compass" },
  ],
};

export const Skills = () => {
  return (
    <div className="min-h-screen px-6 md:px-20 py-10 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white">
      {/* Title */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Skills</h1>
        <p className="text-lg max-w-xl mx-auto">
          Here are some technologies and tools I’ve been working with recently.
        </p>
      </motion.div>

      {/* Skill Sections */}
      <div className="space-y-12">
        {Object.entries(skills).map(([category, skillList], idx) => (
          <motion.div
            key={idx}
            className="mb-6"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {category}
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
              {skillList.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-5 rounded-lg shadow-md w-full"
                >
                  <div className="text-3xl text-blue-500 dark:text-white">
                    {skill.icon}
                  </div>
                  <p className="text-sm font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
