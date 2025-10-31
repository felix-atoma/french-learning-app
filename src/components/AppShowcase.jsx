import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const features = [
    {
      icon: "📱",
      title: "Mobile First",
      description: "Learn on any device - smartphone, tablet, or computer"
    },
    {
      icon: "🎮",
      title: "Interactive Lessons",
      description: "Gamified learning with instant feedback and rewards"
    },
    {
      icon: "📚",
      title: "GES Aligned",
      description: "Curriculum perfectly aligned with Ghana Education Service syllabus"
    },
    {
      icon: "👨‍🏫",
      title: "Teacher Dashboard",
      description: "Monitor student progress and assign exercises"
    }
  ];

  const appStats = [
    { number: "10K+", label: "Active Students" },
    { number: "50+", label: "Partner Schools" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Access" }
  ];

  return (
    <section id="app" ref={sectionRef} className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            French Learning App
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our innovative digital platform that brings French learning to life for Ghanaian students.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6">Revolutionizing French Education</h3>
            <p className="text-lg text-blue-100 mb-6">
              Developed specifically for the Ghanaian educational context, our app combines cutting-edge technology 
              with proven pedagogical methods to make French learning engaging, effective, and accessible.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <h4 className="font-bold mb-1">{feature.title}</h4>
                  <p className="text-sm text-blue-200">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* App Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {appStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center bg-white/10 rounded-lg p-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#f59e0b]">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Mock Phone */}
            <div className="relative mx-auto w-64 h-[500px] bg-gray-800 rounded-[2rem] border-[12px] border-gray-900 shadow-2xl">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-700 rounded"></div>
              <div className="h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <div className="text-6xl mb-4">🇫🇷</div>
                  <h3 className="text-2xl font-bold mb-2">French Learning</h3>
                  <p className="text-blue-100">Center GH App</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-[#f59e0b] text-[#1e3a8a] px-4 py-2 rounded-full font-bold shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Download Now
            </motion.div>
          </motion.div>
        </div>

        {/* App Store Buttons */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h4 className="text-xl font-bold mb-6">Available Soon on</h4>
          <div className="flex justify-center space-x-6">
            <motion.div
              className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>📱</span>
              <span>App Store</span>
            </motion.div>
            <motion.div
              className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>🤖</span>
              <span>Play Store</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppShowcase;