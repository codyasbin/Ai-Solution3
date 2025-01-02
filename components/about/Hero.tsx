"use client";
import { motion } from "framer-motion";

export default function Hecyanction() {
  return (
    <motion.section
      className="relative h-screen bg-gradient-to-br from-cyan-800 via-cyan-900 to-cyan-700 text-white flex flex-col justify-center items-center text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome to the <span className="text-cyan-300">Future of Innovation</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-6 text-xl md:text-2xl text-gray-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Harness the power of AI to propel your business towards greater efficiency, smarter decision-making, and sustainable growth.
        </motion.p>

        {/* Action Section */}
        <motion.div
          className="mt-8 space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <motion.button
            className="px-6 py-3 bg-cyan-600 rounded-full text-lg font-semibold shadow-lg hover:bg-cyan-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Solutions
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-transparent border-2 border-cyan-600 rounded-full text-lg font-semibold text-cyan-200 hover:bg-cyan-600 hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
