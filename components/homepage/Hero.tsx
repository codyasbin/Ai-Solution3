// components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import TypingAnimation component and disable SSR
const TypingAnimation = dynamic(() => import("../animations/TypingAnimation"), {
  ssr: false,
});

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  // Set the client-side state to true after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Don't render the Hero until after the client has loaded

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.png')", // Keeping the original background image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        {/* Typing Animation for Headline */}
        <TypingAnimation text="Transforming Ideas into Reality" />
        {/* Tagline */}
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          Experience the future of innovation with intuitive AI solutions.
        </p>

        {/* Glowing Learn More Button */}
        <motion.button
          className="mt-6 px-6 py-3 bg-cyan-600 text-white font-semibold text-lg rounded-full shadow-md"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 15px rgba(6, 182, 212, 1)", // cyan glow effect remains the same
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            // Scroll to the "features" section on the current page
            console.log("button clicked");

            const featureSection = document.getElementById("main");

            if (featureSection) {
              featureSection.scrollIntoView({ behavior: "smooth" });
            } else {
              console.error("Element with id 'features' not found.");
            }
          }}
        >
          Learn More
        </motion.button>
      </div>
    </div>
  );
}
