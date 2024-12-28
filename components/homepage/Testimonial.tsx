"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Define the structure for the testimonial data
interface Testimonial {
  _id: string;
  name: string;
  role: string;
  image: string;
  feedback: string;
  rating: number;
}

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Fetch testimonials from the API, run only once when the component mounts
  const fetchTestimonials = async () => {
    try {
      const response = await fetch("/api/testimonials");
      const data = await response.json();
      if (response.ok) {
        setTestimonials(data);
      } else {
        console.error("Failed to fetch testimonials:", data.error);
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  // Cycle through testimonials: Next
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Cycle through testimonials: Previous
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Fetch testimonials only once when the component mounts
  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(nextTestimonial, 3000);
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  return (
    <motion.section
      className="relative bg-gradient-to-b from-cyan-800 to-blue-900 text-white py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center">What Clients Say</h2>
        <p className="text-gray-300 text-center mt-4">
          Real feedback from our trusted clients.
        </p>

        {/* Main Testimonial Display */}
        <div className="relative mt-16 flex flex-col items-center">
          {/* Active Testimonial */}
          {testimonials.length > 0 && (
            <motion.div
              key={testimonials[activeIndex]._id}
              className="w-full max-w-lg bg-opacity-70 backdrop-blur-md bg-gradient-to-b from-cyan-600 to-cyan-800 text-gray-100 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-24 h-24 rounded-full mx-auto border-4 border-cyan-500 shadow-lg"
              />
              <p className="mt-6 italic text-center text-gray-200">
                "{testimonials[activeIndex].feedback}"
              </p>
              <div className="mt-4 flex justify-center space-x-1 text-yellow-400">
                {[...Array(Math.floor(testimonials[activeIndex].rating))].map(
                  (_, i) => (
                    <span key={i}>★</span>
                  )
                )}
                {testimonials[activeIndex].rating % 1 !== 0 && (
                  <span className="text-yellow-200">★</span>
                )}
              </div>
              <p className="mt-4 font-bold text-center text-white">
                {testimonials[activeIndex].name}
              </p>
              <p className="text-sm text-center text-gray-300">
                {testimonials[activeIndex].role}
              </p>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-10 flex justify-center items-center space-x-6">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-gradient-to-b from-cyan-700 to-cyan-500 hover:from-cyan-600 hover:to-cyan-400 text-white flex items-center justify-center shadow-md transform hover:scale-110 transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-gradient-to-b from-cyan-700 to-cyan-500 hover:from-cyan-600 hover:to-cyan-400 text-white flex items-center justify-center shadow-md transform hover:scale-110 transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
