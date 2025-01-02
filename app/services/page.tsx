"use client";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section with Cyan-Blue Gradient */}
      <motion.section
        className="relative h-screen bg-gradient-to-b from-cyan-900 to-cyan-800 text-white flex items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-wide"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Revolutionizing Your Digital Experience with <span className="text-cyan-300">Innovative Solutions</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Discover how our creative solutions can enhance your business efficiency and customer experience.
          </motion.p>
        </div>
      </motion.section>

      {/* Service Section 1 - Cloud Integration */}
      <motion.section
        className="relative py-20 bg-white text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Cloud Integration</h2>
            <p className="text-lg text-gray-600 text-center lg:text-left">
              Seamlessly connect your systems to the cloud, enabling scalable solutions and boosting your operational flexibility.
            </p>
            <motion.button
              className="mt-6 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Learn More
            </motion.button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <motion.img
              src="/strategy.png"
              alt="Cloud Integration"
              className="rounded-lg shadow-xl h-96 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </motion.section>

      {/* Service Section 2 - Data-Driven Insights */}
      <motion.section
        className="relative py-20 bg-cyan-800 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 flex justify-center">
            <motion.img
              src="./analysis.png"
              alt="Data Insights"
              className="rounded-lg shadow-xl h-96 hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <h2 className="text-3xl font-extrabold text-white mb-4">Data-Driven Insights</h2>
            <p className="text-lg text-gray-300 text-center lg:text-left">
              Leverage real-time data to unlock powerful insights, optimize strategies, and predict future trends.
            </p>
            <motion.button
              className="mt-6 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Explore Insights
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Service Section 3 - Process Automation */}
      <motion.section
        className="relative py-20 bg-white text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Process Automation</h2>
            <p className="text-lg text-gray-600 text-center lg:text-left">
              Automate repetitive tasks, streamline operations, and empower your team to focus on higher-level decision-making.
            </p>
            <motion.button
              className="mt-6 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Start Automating
            </motion.button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <motion.img
              src="/automation.png"
              alt="Process Automation"
              className="rounded-lg h-96 shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="py-16 bg-gradient-to-b from-cyan-700 to-cyan-600 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 mb-12">
            How Our Solutions Streamline Your Business
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Step 1 - Consult */}
            <motion.div
              className="flex flex-col items-center bg-cyan-800 p-8 rounded-xl shadow-xl w-64 transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-16 h-16 mb-4 bg-cyan-600 text-white rounded-full flex items-center justify-center text-lg font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                1
              </motion.div>
              <h3 className="text-xl font-semibold">Consult</h3>
              <p className="text-gray-300 mt-2 text-center">
                We assess your current processes and design a roadmap for digital transformation.
              </p>
            </motion.div>

            {/* Step 2 - Develop */}
            <motion.div
              className="flex flex-col items-center bg-cyan-800 p-8 rounded-xl shadow-xl w-64 transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-16 h-16 mb-4 bg-cyan-600 text-white rounded-full flex items-center justify-center text-lg font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                2
              </motion.div>
              <h3 className="text-xl font-semibold">Develop</h3>
              <p className="text-gray-300 mt-2 text-center">
                We create custom solutions that integrate seamlessly with your existing systems.
              </p>
            </motion.div>

            {/* Step 3 - Implement */}
            <motion.div
              className="flex flex-col items-center bg-cyan-800 p-8 rounded-xl shadow-xl w-64 transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-16 h-16 mb-4 bg-cyan-600 text-white rounded-full flex items-center justify-center text-lg font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                3
              </motion.div>
              <h3 className="text-xl font-semibold">Implement</h3>
              <p className="text-gray-300 mt-2 text-center">
                Our team ensures smooth deployment and provides continuous support to optimize results.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
