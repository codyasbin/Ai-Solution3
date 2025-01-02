"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    jobTitle: "",
    jobDetails: "",
  });

  const [formStatus, setFormStatus] = useState<string>("");

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormStatus("Submitting...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Ensure all formData fields are sent
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus("Form submitted successfully!");
        // Reset the form fields
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          country: "",
          jobTitle: "",
          jobDetails: "",
        });
      } else {
        // Handle any backend errors
        setFormStatus(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      // Handle client-side errors
      setFormStatus("Failed to submit form. Please check your connection and try again.");
      console.error("Submission error:", error);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="relative h-screen bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center text-center overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <div className="relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Let's Connect
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            We are here to assist you! Whether you have questions or want to collaborate, reach out today.
          </motion.p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="py-20 bg-gradient-to-t from-cyan-600 to-blue-800 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full px-6 py-4 bg-transparent text-white placeholder-cyan-400 border-2 border-cyan-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 ease-in-out"
                placeholder="Your Full Name"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full px-6 py-4 bg-transparent text-white placeholder-cyan-400 border-2 border-cyan-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 ease-in-out"
                placeholder="Your Email"
              />
            </motion.div>

            {/* Phone Field */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full px-6 py-4 bg-transparent text-white placeholder-cyan-400 border-2 border-cyan-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 ease-in-out"
                placeholder="Your Phone (optional)"
              />
            </motion.div>

            {/* Company Field */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="block w-full px-6 py-4 bg-transparent text-white placeholder-cyan-400 border-2 border-cyan-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 ease-in-out"
                placeholder="Your Company (optional)"
              />
            </motion.div>

            {/* Country Field */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="block w-full px-6 py-4 bg-transparent text-white placeholder-cyan-400 border-2 border-cyan-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 ease-in-out"
              >
                <option value="">Select Your Country</option>
                <option value="Nepal">Nepal</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
              </select>
            </motion.div>

            {/* Job Title Field */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="block w-full px-6 py-4 bg-transparent text-white placeholder-cyan-400 border-2 border-cyan-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 ease-in-out"
                placeholder="Your Job Title (optional)"
              />
            </motion.div>

            {/* Job Details Field */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <textarea
                name="jobDetails"
                value={formData.jobDetails}
                onChange={handleChange}
                required
                className="block w-full px-6 py-4 bg-transparent text-white placeholder-cyan-400 border-2 border-cyan-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 ease-in-out"
                rows={6}
                placeholder="Tell us about your job requirements"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <button
                type="submit"
                className="w-full py-4 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-600 transition duration-300 ease-in-out"
              >
                {formStatus === "Submitting..." ? "Submitting..." : "Submit Message"}
              </button>
            </motion.div>
          </form>

          {/* Success Message */}
          {formStatus === "Form submitted successfully!" && (
            <div className="mt-8 text-center text-white  font-semibold">
              Thank you! Your message has been successfully submitted.
            </div>
          )}

          {/* Error Message */}
          {formStatus === "Failed to submit form. Please try again." && (
            <div className="mt-8 text-center text-red-500 font-semibold">
              Something went wrong, please try again later.
            </div>
          )}
        </div>
      </motion.section>
    </div>
  );
}
