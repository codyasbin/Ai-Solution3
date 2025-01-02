"use client";
import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-cyan-900 to-cyan-700 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl text-transparent font-extrabold mb-12 bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
          Meet the Team
        </h2>

        {/* Grid Layout for Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 px-4">
          {/* Team Member 1 */}
          <motion.div
            className="bg-gradient-to-br from-cyan-800 via-cyan-600 to-cyan-400 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src="/shanta.png"
              alt="Shanta Kunwar"
              className="w-full h-64 object-cover border-b-4 border-cyan-600"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-cyan-100">Shanta Ranabhat</h3>
              <p className="text-gray-300">CEO</p>
            </div>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            className="bg-gradient-to-br from-cyan-800 via-cyan-600 to-cyan-400 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img
              src="https://preview.redd.it/need-a-professional-linkedin-dp-10-v0-70h81qppi5dd1.jpeg?width=1825&format=pjpg&auto=webp&s=c968025af97c66db3fa679ddc4c56274e8e78e38"
              alt="Daniel Carter"
              className="w-full h-64 object-cover border-b-4 border-cyan-600"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-cyan-100">Daniel Carter</h3>
              <p className="text-gray-300">CTO</p>
            </div>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            className="bg-gradient-to-br from-cyan-800 via-cyan-600 to-cyan-400 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <img
              src="https://img.freepik.com/free-photo/woman-student-studying-laptop-cafe_1303-28924.jpg?semt=ais_hybrid"
              alt="Sophia Lee"
              className="w-full h-64 object-cover border-b-4 border-cyan-600"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-cyan-100">Sophia Lee</h3>
              <p className="text-gray-300">Lead AI Engineer</p>
            </div>
          </motion.div>

          {/* Team Member 4 */}
          <motion.div
            className="bg-gradient-to-br from-cyan-800 via-cyan-600 to-cyan-400 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/037/098/807/small_2x/ai-generated-a-happy-smiling-professional-man-light-blurry-office-background-closeup-view-photo.jpg"
              alt="Ethan Scott"
              className="w-full h-64 object-cover border-b-4 border-cyan-600"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-cyan-100">Ethan Scott</h3>
              <p className="text-gray-300">Marketing Director</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
