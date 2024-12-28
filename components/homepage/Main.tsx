'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Main() {
  return (
    <section id="main" className="relative h-screen bg-gradient-to-br from-cyan-800 via-cyan-700 to-blue-800 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-cyan-500 opacity-30 rounded-full blur-3xl md:w-72 md:h-72"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-600 opacity-40 rounded-full blur-2xl md:w-96 md:h-96"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Animated Headline */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transform Your Vision with AI
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-base md:text-lg lg:text-2xl text-gray-200 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover tailored solutions that harness cutting-edge AI to drive growth, innovation, and exceptional user experiences.
        </motion.p>

        {/* Features Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Feature 1 */}
          <motion.div
            className="group bg-gradient-to-br from-cyan-600 to-blue-700 p-6 md:p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-4">AI Automation</h2>
            <p className="text-sm md:text-base text-gray-100 group-hover:text-gray-200">
              Streamline repetitive tasks with intelligent automation, saving time and reducing operational errors.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="group bg-gradient-to-br from-blue-700 to-cyan-600 p-6 md:p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-4">Data-Driven Insights</h2>
            <p className="text-sm md:text-base text-gray-100 group-hover:text-gray-200">
              Unlock actionable insights with AI-driven data analysis for smarter decision-making.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="group bg-gradient-to-br from-cyan-600 to-blue-700 p-6 md:p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-4">Custom AI Solutions</h2>
            <p className="text-sm md:text-base text-gray-100 group-hover:text-gray-200">
              Personalized AI solutions tailored to meet the unique needs of your business.
            </p>
          </motion.div>
        </motion.div>

        {/* Call-to-Action Button */}
        <Link href="/services">
          <motion.button
            className="mt-12 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-base md:text-lg rounded-full shadow-xl hover:scale-110 transition-all"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(6, 182, 212, 1)", // Cyan glow effect
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Solutions
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
