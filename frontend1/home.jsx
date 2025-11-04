import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center mt-10 p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-violet-800"
      >
        Welcome to MockMate 🎯
      </motion.h1>
      <p className="text-gray-700 max-w-xl mt-4">
        MockMate is your AI-powered mock interview coach.  
        Practice real interview questions, get instant feedback,  
        and level up your confidence for your dream job!
      </p>
      <button className="mt-6 bg-violet-700 text-white px-6 py-3 rounded-xl hover:bg-violet-800 transition">
        Start Practicing
      </button>
    </div>
  );
}
