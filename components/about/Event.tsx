"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const events = [
  {
    title: "AI Conference 2024",
    date: "Jan 15, 2024",
    location: "San Francisco, CA",
    description: "Explore the latest advancements in AI and network with industry leaders.",
    image: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2024/12/IGF2024closing.png", // Replace with actual image URL
  },
  {
    title: "Webinar: AI in Healthcare",
    date: "Feb 20, 2024",
    location: "Online Event",
    description: "Discover how AI is revolutionizing the healthcare industry.",
    image: "https://www.strategyand.pwc.com/m1/en/strategic-foresight/sector-strategies/healthcare/ai-powered-healthcare-solutions/img01-section1.jpg", // Replace with actual image URL
  },
  {
    title: "Tech Expo 2024",
    date: "March 5, 2024",
    location: "New York, NY",
    description: "Experience groundbreaking tech innovations at this year’s expo.",
    image: "https://www.berginsight.com/static/4c1fec4aae795d730ff27e4674a1ced6/7ab21/Amsterdam.jpg", // Replace with actual image URL
  },
];

export default function EventsSection() {
  return (
    <motion.section
      className="py-20 bg-cyan-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
          Featured Upcoming Events
        </h2>

        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row items-center justify-between bg-cyan-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            >
              {/* Event Image */}
              <div className="lg:w-1/3">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-r-none"
                />
              </div>

              {/* Event Details */}
              <div className="p-8 lg:w-2/3 text-left">
                <h3 className="text-3xl font-semibold text-white">{event.title}</h3>
                <p className="text-md text-gray-300 my-4">{event.date} | {event.location}</p>
                <p className="text-lg text-gray-200">{event.description}</p>
                <Link href={"contact"}>
                  <button className="mt-6 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                    Register Now
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
