import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const allProjects = [
  {
    title: "TO-Do APP",
    description: "Manage your daily work load.",
    tech: ["React", "Tailwindcss"],
    category: "React",
    image: "/To-Do.png",
    github:
      "https://github.com/ShreyashGajbhiye453/Projects/blob/main/dist/Screenshot%202025-08-03%20170905.png",
    demo: "https://shreyashtodo.netlify.app/",
  },
  {
    title: "Attendance Logger",
    description: "QR-based attendance logger with full stack integration.",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Fullstack",
    image: "/attendance.png",
    github: "https://github.com/yourusername/attendance-logger",
    demo: "https://attendance.example.com",
  },
  {
    title: "Portfolio Website",
    description: "My personal developer portfolio site.",
    tech: ["React", "Tailwind"],
    category: "Frontend",
    image: "/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourname.dev",
  },
  // Add more projects here
];

const categories = ["All", "Frontend", "React", "Node.js", "Fullstack"];

export const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter(
          (project) =>
            project.category === filter || project.tech.includes(filter)
        );

  return (
    <div className="min-h-screen px-6 md:px-20 py-10 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white">
      {/* Title */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Projects</h1>
        <p className="text-lg max-w-2xl mx-auto">
          A selection of personal and academic projects I’ve worked on.
        </p>
      </motion.div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 text-sm rounded-full border 
              ${
                filter === cat
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "border-gray-400 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-5 shadow hover:shadow-xl transition"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9 }}
              layout
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="rounded-lg mb-4 h-40 w-full object-contain hover:transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              />

              <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-300 dark:bg-gray-700 px-2 py-1 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-xl">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <FaGithub />
                </a>
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
