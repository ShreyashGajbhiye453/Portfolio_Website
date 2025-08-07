import { motion } from "framer-motion";
import myPic from "/Profile.png"; // Replace with your actual image path

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const About = () => {
  return (
    <div className="min-h-screen px-4 md:px-20 py-10 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white">
      {/* Intro Section */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          I'm a passionate Web Developer and Lifelong Learner. I enjoy building
          things that live on the internet, from websites to apps, and
          everything in between.
        </p>
      </motion.div>

      {/* Photo + Description */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <motion.img
          src={myPic}
          alt="My Profile"
          className="w-52 h-52 rounded-full object-cover shadow-xl border-4 border-gray-300 dark:border-gray-700"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        />

        <motion.div
          className="text-left md:w-2/3"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold mb-2">Who am I?</h2>
          <p className="text-lg">
            I'm Shreyash Rajesh Gajbhiye, currently pursuing IT Engineering. I love combining
            design and logic to solve real-world problems. I'm constantly
            evolving, learning new tech, and building meaningful digital
            experiences.
          </p>
        </motion.div>
      </div>

      {/* Tech Stack Highlights */}
      <motion.div variants={fadeIn} initial="hidden" animate="visible">
        <h2 className="text-2xl font-semibold mb-6 text-center">Tech Stack</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center select-none">
          {["HTML", "CSS", "JavaScript", "React", "Java", "Tailwindcss"].map(
            (tech, i) => (
              <motion.div
                key={i}
                className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg shadow hover:scale-105 transition"
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.div>
            )
          )}
        </div>
      </motion.div>

      {/* Optional: Personal Mission */}
      <motion.div
        className="mt-16 max-w-3xl mx-auto text-center"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-semibold mb-4">My Mission</h2>
        <p className="text-lg">
          My goal is to build applications that solve real-life problems and
          improve people’s lives. I believe in creating clean, efficient, and
          accessible software for everyone.
        </p>
      </motion.div>
      <motion.div
        className="mt-12 text-center italic text-xl text-gray-600 dark:text-gray-400"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        “Enjoy every moment.”
      </motion.div>
    </div>
  );
};
