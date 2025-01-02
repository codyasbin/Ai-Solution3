"use client";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section with Split Layout */}
      <motion.section
        className="relative flex flex-col lg:flex-row items-center h-screen bg-gradient-to-r from-cyan-900 to-blue-800 text-white px-6 lg:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-snug"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Empowering Your Business with <span className="text-cyan-300">Creative Solutions</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-300"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Unlock efficiency and elevate customer experiences with our transformative services.
          </motion.p>
        </div>
        <motion.div
          className="lg:w-1/2 flex justify-center mt-10 lg:mt-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <img
            src="https://amaris.com/wp-content/uploads/2023/04/Digital-Solutions2.png"
            alt="Digital Solutions"
            className="w-96 h-56 rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <motion.div
            className="flex flex-col items-center bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/strategy.png" alt="Cloud Integration" className="h-32 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Cloud Integration</h2>
            <p className="text-gray-600 text-center">
              Connect seamlessly to the cloud for scalable and efficient operations.
            </p>
            <button className="mt-4 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold rounded-lg">
              Learn More
            </button>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="flex flex-col items-center bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img src="./analysis.png" alt="Data Insights" className="h-32 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Data-Driven Insights</h2>
            <p className="text-gray-600 text-center">
              Use data to optimize strategies and predict future trends.
            </p>
            <button className="mt-4 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold rounded-lg">
              Explore Insights
            </button>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="flex flex-col items-center bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/automation.png" alt="Process Automation" className="h-32 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Process Automation</h2>
            <p className="text-gray-600 text-center">
              Streamline operations and focus on strategic goals.
            </p>
            <button className="mt-4 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold rounded-lg">
              Start Automating
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section - Vertical Timeline */}
      <motion.section
        className="py-16 bg-gradient-to-b from-cyan-700 to-cyan-500 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12">How It Works</h2>
          <div className="space-y-12">
            {/* Step 1 */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center font-semibold text-lg mr-6">
                1
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Consult</h3>
                <p className="text-gray-200 mt-2">
                  Analyze current processes and plan for transformation.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center font-semibold text-lg mr-6">
                2
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Develop</h3>
                <p className="text-gray-200 mt-2">
                  Create tailored solutions to fit your systems.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center font-semibold text-lg mr-6">
                3
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Implement</h3>
                <p className="text-gray-200 mt-2">
                  Ensure smooth deployment and continuous optimization.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
