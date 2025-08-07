import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {useNavigate} from "react-router"

const ErrorPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
     navigate(-1)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-8">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-7xl font-bold text-red-500"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl mt-4 font-semibold"
      >
        Page Not Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 text-gray-600"
      >
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-8 flex gap-3"
      >
        <Link
          to="/"
          className="px-6 py-3 bg-black text-white rounded-full shadow hover:bg-gray-800 transition duration-300"
        >
          Back to Home
        </Link>
        <Link
          onClick={goBack}
          className="px-6 py-3 bg-black text-white rounded-full shadow hover:bg-gray-800 transition duration-300"
        >
         Go Back
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
