'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Main() {
  return (
    <section id="main" className="relative h-screen bg-gradient-to-br from-cyan-800 via-cyan-700 to-blue-800 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-cyan-400 opacity-20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 opacity-30 rounded-full blur-[100px]"></div>
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
          Unlock the Future with AI Innovation
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-base md:text-lg lg:text-2xl text-gray-200 max-w-3xl mx-auto mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Empower your business with intelligent solutions that enhance efficiency, decision-making, and growth.
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
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-4">
              Intelligent Automation
            </h2>
            <p className="text-sm md:text-base text-gray-100 group-hover:text-gray-200">
              Optimize processes and boost productivity with AI-driven automation tailored to your needs.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="group bg-gradient-to-br from-blue-700 to-cyan-600 p-6 md:p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-4">
              Predictive Analytics
            </h2>
            <p className="text-sm md:text-base text-gray-100 group-hover:text-gray-200">
              Leverage data to forecast trends, identify opportunities, and make informed decisions.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="group bg-gradient-to-br from-cyan-600 to-blue-700 p-6 md:p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-4">
              Seamless Integration
            </h2>
            <p className="text-sm md:text-base text-gray-100 group-hover:text-gray-200">
              Effortlessly incorporate AI technologies into your existing systems for enhanced performance.
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
            Discover More Solutions
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
