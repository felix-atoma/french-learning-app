import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace(/[^0-9]/g, ''));
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  const displayValue = value.includes('%') 
    ? `${count}%`
    : value.includes('+')
    ? `${count}+`
    : count.toString();

  return <span ref={ref}>{displayValue}</span>;
};

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const features = [
    {
      icon: "📱",
      title: "Mobile First Design",
      description: "Optimized for all devices with seamless cross-platform experience"
    },
    {
      icon: "🎮",
      title: "Gamified Learning",
      description: "Interactive exercises with progress tracking and achievement systems"
    },
    {
      icon: "📚",
      title: "GES Curriculum",
      description: "Fully aligned with Ghana Education Service standards and requirements"
    },
    {
      icon: "👨‍🏫",
      title: "Teacher Analytics",
      description: "Comprehensive dashboard for monitoring student performance and progress"
    }
  ];

  const appStats = [
    { number: "10K+", label: "Active Learners", duration: 2.5 },
    { number: "50+", label: "Partner Institutions", duration: 2 },
    { number: "95%", label: "Completion Rate", duration: 2.2 },
    { number: "24/7", label: "Platform Availability", duration: 1 }
  ];

  const platforms = [
    { icon: "🍎", name: "iOS App Store", status: "Coming Soon" },
    { icon: "🤖", name: "Google Play", status: "Coming Soon" },
    { icon: "💻", name: "Web Platform", status: "Live" }
  ];

  return (
    <section id="app" ref={sectionRef} className="py-24 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3730a3] text-white relative overflow-hidden">
      
      {/* Spider Web Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border-2 border-white rounded-full opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-white rounded-full opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white rounded-full opacity-40"></div>
        
        {/* Web Lines */}
        <div className="absolute top-1/4 left-1/4 w-96 h-0.5 bg-white opacity-20 transform -rotate-45 origin-left"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-0.5 bg-white opacity-20 transform rotate-45 origin-left"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-0.5 bg-white opacity-20 transform rotate-90 origin-left"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-0.5 bg-white opacity-20 origin-left"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 text-6xl opacity-20"
        animate={{ rotate: 360, y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        📱
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-4xl opacity-20"
        animate={{ rotate: -360, y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        🎮
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <span>🚀</span>
            <span>Innovative Learning Technology</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            French Learning <span className="text-amber-400">Digital Platform</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Experience the future of French language education with our cutting-edge digital platform, 
            designed specifically for Ghanaian students and educational institutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-4xl font-bold mb-8 text-white">Revolutionizing French Education</h3>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Our platform represents a paradigm shift in language education, combining artificial intelligence, 
              adaptive learning algorithms, and culturally relevant content to deliver unprecedented learning outcomes.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-400/20 rounded-xl flex items-center justify-center text-xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">{feature.title}</h4>
                      <p className="text-blue-200 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* App Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {appStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-2">
                    <AnimatedCounter value={stat.number} duration={stat.duration} />
                  </div>
                  <div className="text-blue-200 text-sm font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Phone Mockup Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center"
          >
            {/* Main Phone Mockup */}
            <div className="relative w-80 h-[600px] bg-gray-900 rounded-[3rem] border-[14px] border-gray-800 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-6 bg-gray-800 rounded-b-2xl z-20"></div>
              
              {/* Screen Content */}
              <div className="h-full bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700 rounded-[2rem] overflow-hidden relative">
                {/* App Header */}
                <div className="pt-12 px-6 text-center">
                  <div className="text-6xl mb-4">🇫🇷</div>
                  <h3 className="text-2xl font-bold text-white mb-2">French Learning</h3>
                  <p className="text-blue-100 text-sm">Center GH Platform</p>
                </div>

                {/* Floating UI Elements */}
                <motion.div
                  className="absolute top-40 left-6 w-24 h-24 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <span className="text-2xl">📚</span>
                </motion.div>

                <motion.div
                  className="absolute top-60 right-8 w-20 h-20 bg-amber-400/30 rounded-2xl backdrop-blur-sm border border-amber-400/40 flex items-center justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <span className="text-2xl">🎯</span>
                </motion.div>

                {/* Progress Bar */}
                <div className="absolute bottom-32 left-6 right-6 bg-white/10 rounded-full h-3">
                  <motion.div
                    className="bg-amber-400 h-full rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2, delay: 1.5 }}
                  />
                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="flex justify-between text-white text-2xl">
                    <span>🏠</span>
                    <span>📊</span>
                    <span>👤</span>
                    <span>⚙️</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Download Badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 px-6 py-3 rounded-2xl font-bold shadow-2xl"
              animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center space-x-2">
                <span>⬇️</span>
                <span className="text-sm">Download</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Platform Availability */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h4 className="text-2xl font-bold mb-8 text-white">Platform Availability</h4>
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h5 className="font-bold text-white mb-2">{platform.name}</h5>
                <div className={`text-sm font-semibold ${
                  platform.status === "Live" ? "text-green-400" : "text-amber-400"
                }`}>
                  {platform.status}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppShowcase;