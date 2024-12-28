"use client";
import { motion } from "framer-motion";

export default function HistorySection() {
  const galleryImages = [
    { src: "https://english.cas.cn/newsroom/archive/news_archive/nu2015/201507/W020150728364997550435.jpg",caption: "Conference 2015" },
    { src: "https://media.licdn.com/dms/image/v2/D4E22AQGVRbdnQ69CNg/feedshare-shrink_800/feedshare-shrink_800/0/1733388170780?e=2147483647&v=beta&t=TwzX2YhfA5VehRRZi9kSs_vZioIWxnI_3xtAbqPHmiw", caption: "AI Summit 2018" },
    { src: "https://assets.wam.ae/resource/69q07vbf1k71frypn.jpeg", caption: "Global Expansion 2022" },
    { src: "https://cdn.prod.website-files.com/5e51f2cd33d368869635e146/6467bda61a9e113f2853aad5_LVMH-PR-Pic_CP.jpg", caption: "Innovation Award" },
    { src: "https://www.unido.org/sites/default/files/2023-07/Mr.%20Ciyong%20Zou-%20China%2024%20Interview%20Photo%201.jpg", caption: "Product Launch" },
    { src: "https://images.stockcake.com/public/1/9/a/19a14ff4-5cda-4e05-94b2-259cf107e621_large/tech-expo-scene-stockcake.jpg", caption: "Tech Expo" },
  ];

  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-cyan-950 to-cyan-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
          Our Journey
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col items-center">
          <div className="absolute inset-y-0 border-l-4 border-cyan-500 left-1/2"></div>
          <div className="space-y-16">
            {[{ year: "2015", detail: "Founded as a small consultancy firm." }, 
              { year: "2018", detail: "Delivered first enterprise AI solution." },
              { year: "2022", detail: "Expanded to serve global markets." }].map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center justify-start space-x-6 ${
                    index % 2 === 0 ? "ml-20" : "mr-20 flex-row-reverse"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Year */}
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-cyan-600 flex items-center justify-center text-xl font-bold shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.year}
                  </motion.div>
                  {/* Detail */}
                  <motion.div 
                    className="bg-cyan-800 p-6 rounded-xl shadow-2xl w-96"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-lg">{item.detail}</p>
                  </motion.div>
                </motion.div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
            Gallery of Memories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-lg font-semibold text-white">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
