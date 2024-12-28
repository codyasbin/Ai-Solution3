"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function CaseStudy() {
  return (
    <motion.section
      className="bg-gradient-to-b from-gray-50 to-gray-100 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">
          Transformative Case Studies
        </h2>
        <p className="text-gray-600 text-center mt-4">
          Discover real-world examples of how we’ve driven growth and efficiency through AI-powered solutions.
        </p>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {/* Card 1 */}
          <motion.div
            className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://anadea.info/blog/retail-automation/retail_automation_hu4bec7d9caa27a1922c2a34a6719fb67a_201249_0x0_q75_h2_.webp"
              alt="Retail Automation"
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-semibold">Retail Automation</h3>
              <p className="text-sm mt-2">
                Revolutionized inventory management, reducing stock shortages by 30%.
              </p>
            </div>
            <Link
              href="about"
              className="absolute top-4 right-4 bg-cyan-600 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-cyan-700"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfd_wCOO8cTEvPt5HUgKnsmhWyTtRZLhsKtQ&s"
              alt="Financial Analytics"
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-semibold">Financial Analytics</h3>
              <p className="text-sm mt-2">
                Delivered AI-powered insights for smarter investment decisions.
              </p>
            </div>
            <Link
              href="about"
              className="absolute top-4 right-4 bg-cyan-600 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-cyan-700"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyNUWuGNUogpewOevs432GXp0CxmnYYGExg&s"
              alt="Healthcare Optimization"
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-semibold">Healthcare Optimization</h3>
              <p className="text-sm mt-2">
                Improved patient care efficiency by 40% through AI-driven healthcare solutions.
              </p>
            </div>
            <Link
              href="about"
              className="absolute top-4 right-4 bg-cyan-600 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-cyan-700"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
