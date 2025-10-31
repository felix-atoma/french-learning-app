// components/TrustBadges.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TrustBadges = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  const badges = [
    { icon: "🏆", number: "10,000+", text: "Students Trained" },
    { icon: "⭐", number: "4.9/5", text: "Student Rating" },
    { icon: "🎓", number: "95%", text: "Success Rate" },
    { icon: "🤝", number: "50+", text: "Partner Schools" },
    { icon: "📱", number: "24/7", text: "App Access" },
    { icon: "🇬🇭", number: "100%", text: "Ghanaian Context" },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
            Trusted by Ghanaian Educators
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proven results and excellence in French language education across Ghana
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group-hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {badge.icon}
                </div>
                <div className="text-2xl font-bold text-[#1e3a8a] mb-1">
                  {badge.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {badge.text}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider font-semibold">
            Partnered With Leading Institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['🏫', '📚', '🎯', '🌟', '💡', '🚀'].map((icon, index) => (
              <div key={index} className="text-4xl grayscale hover:grayscale-0 transition-all duration-300">
                {icon}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;