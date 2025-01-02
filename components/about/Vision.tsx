"use client";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-cyan-900 via-cyan-700 to-cyan-500 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
          Shaping Tomorrow: Our Vision, Mission, and Core Values
        </h2>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Vision Section */}
          <motion.div
            className="relative flex flex-col justify-center items-center p-12 text-center bg-gradient-to-br from-cyan-800 via-cyan-600 to-cyan-400 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.h3
              className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Our Vision: Embracing Change
            </motion.h3>
            <motion.p
              className="mt-6 text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              We aim to drive transformation by leveraging cutting-edge technologies, striving to make the world smarter and more connected for everyone.
            </motion.p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            className="relative flex flex-col justify-center items-center p-12 text-center bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-500 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.h3
              className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Our Mission: Redefining Progress
            </motion.h3>
            <motion.p
              className="mt-6 text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              To harness the potential of AI and data science to create practical, forward-thinking solutions that empower individuals and organizations.
            </motion.p>
          </motion.div>

        </div>

        {/* Core Values Section */}
        <motion.div
          className="mt-16 p-12 rounded-lg shadow-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">Our Fundamental Principles</h3>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              className="bg-white p-10 rounded-lg shadow-xl hover:scale-105 transition-all duration-300 transform"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <img
                src="https://png.pngtree.com/png-clipart/20241213/original/pngtree-light-bulb-glowing-blue-star-shaped-energy-inside-illuminated-electric-idea-png-image_17808125.png"
                alt="Creativity"
                className="w-24 h-24 rounded-full mx-auto mb-6"
              />
              <h4 className="text-2xl font-semibold text-cyan-600">Creativity</h4>
              <p className="text-gray-700 mt-4">
                We challenge conventional thinking by encouraging bold, innovative ideas that drive meaningful change in every project we undertake.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-10 rounded-lg shadow-xl hover:scale-105 transition-all duration-300 transform"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <img
                src="https://w7.pngwing.com/pngs/58/89/png-transparent-data-integrity-honesty-value-others-blue-text-logo.png"
                alt="Honesty"
                className="w-30 h-24 rounded-full mx-auto mb-6"
              />
              <h4 className="text-2xl font-semibold text-cyan-600">Honesty</h4>
              <p className="text-gray-700 mt-4">
                Integrity is the bedrock of our culture, where transparency, accountability, and truth guide our every decision and action.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-10 rounded-lg shadow-xl hover:scale-105 transition-all duration-300 transform"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmgw3Kh7LTdLJbzqmd5m7e4dsi3sZpnLSHag&s"
                alt="Quality"
                className="w-30 h-24 rounded-full mx-auto mb-6"
              />
              <h4 className="text-2xl font-semibold text-cyan-600">Quality</h4>
              <p className="text-gray-700 mt-4">
                We are dedicated to delivering solutions of the highest standard, ensuring that every product we create makes a lasting impact.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
