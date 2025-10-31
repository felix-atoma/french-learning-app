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
    { icon: "👨‍🏫", number: "15+", text: "Certified Teachers" },
    { icon: "🏅", number: "98%", text: "DELF Pass Rate" },
    { icon: "💼", number: "5+", text: "Years Experience" },
  ];

  // Split badges into three rows
  const topRow = badges.slice(0, 3);
  const middleRow = badges.slice(3, 6);
  const bottomRow = badges.slice(6, 9);

  const carouselVariants = {
    animate: {
      x: [0, -100, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const carouselVariantsRight = {
    animate: {
      x: [0, 100, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  const CarouselRow = ({ items, direction = 'left', delay = 0 }) => (
    <motion.div
      className="flex space-x-8 py-4"
      variants={direction === 'left' ? carouselVariants : carouselVariantsRight}
      initial="initial"
      animate="animate"
      style={{ x: direction === 'right' ? 100 : 0 }}
    >
      {/* Double the items for seamless looping */}
      {[...items, ...items].map((badge, index) => (
        <motion.div
          key={index}
          className="flex-shrink-0 w-48 bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
          whileHover={{ y: -5, scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: delay + (index % items.length) * 0.1 }}
        >
          <div className="text-center">
            <div className="text-3xl mb-3 hover:scale-110 transition-transform duration-300">
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
    </motion.div>
  );

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
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

        {/* Carousel Container */}
        <div className="space-y-6">
          {/* Top Row - Moves Left */}
          <div className="overflow-hidden">
            <CarouselRow items={topRow} direction="left" delay={0.2} />
          </div>

          {/* Middle Row - Moves Right */}
          <div className="overflow-hidden">
            <CarouselRow items={middleRow} direction="right" delay={0.4} />
          </div>

          {/* Bottom Row - Moves Left */}
          <div className="overflow-hidden">
            <CarouselRow items={bottomRow} direction="left" delay={0.6} />
          </div>
        </div>

        {/* Static Grid Fallback for smaller screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 lg:hidden">
          {badges.slice(0, 6).map((badge, index) => (
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
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider font-semibold">
            Partnered With Leading Institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['🏫', '📚', '🎯', '🌟', '💡', '🚀'].map((icon, index) => (
              <motion.div 
                key={index} 
                className="text-4xl grayscale hover:grayscale-0 transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;