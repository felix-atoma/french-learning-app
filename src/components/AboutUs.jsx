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
      const increment = end / (duration * 60); // 60fps
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

  // Handle percentage values
  const displayValue = value.includes('%') 
    ? `${count}%`
    : value.includes('+')
    ? `${count}+`
    : count.toString();

  return <span ref={ref}>{displayValue}</span>;
};

const AboutUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const features = [
    {
      icon: "🎯",
      title: "Our Mission",
      description: "To provide exceptional French language education that empowers Ghanaians with global communication skills and cultural understanding, fostering international opportunities and cross-cultural connections."
    },
    {
      icon: "👁️",
      title: "Our Vision",
      description: "To establish Ghana as a hub for French language excellence in West Africa, creating a generation of globally competent professionals and fostering stronger international partnerships."
    },
    {
      icon: "⭐",
      title: "Our Values",
      description: "Excellence in education, innovative teaching methodologies, cultural sensitivity, measurable student success, and meaningful community impact."
    }
  ];

  const milestones = [
    { year: "2018", event: "Institutional Foundation", description: "Established with 20 pioneering students" },
    { year: "2020", event: "Digital Transformation", description: "Launched comprehensive e-learning platform" },
    { year: "2022", event: "National Expansion", description: "Partnership network expanded to 50+ educational institutions" },
    { year: "2024", event: "Educational Excellence", description: "Milestone of 10,000+ successfully trained students" }
  ];

  const stats = [
    { number: "98%", label: "Student Satisfaction Rate", duration: 2.5 },
    { number: "50+", label: "Educational Partnerships", duration: 2 },
    { number: "15+", label: "Certified Instructors", duration: 1.5 },
    { number: "5+", label: "Years of Excellence", duration: 1 }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🏆</span>
            <span>Ghana's Premier French Institution</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Excellence in <span className="text-blue-700">French Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Since 2018, we have been at the forefront of French language education in Ghana, 
            combining pedagogical excellence with innovative technology to deliver transformative learning experiences.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                <AnimatedCounter value={stat.number} duration={stat.duration} />
              </div>
              <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Heritage</h3>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Founded by a consortium of distinguished French linguists and educational technologists, 
                    French Learning Center GH emerged from a clear vision: to revolutionize French language 
                    acquisition in Ghana through contextually relevant pedagogy.
                  </p>
                  <p>
                    Our journey began in a modest Accra classroom and has evolved into a comprehensive 
                    educational ecosystem serving diverse learners across Ghana through both traditional 
                    and digital learning modalities.
                  </p>
                </div>
              </div>

              {/* Value Proposition Card */}
              <motion.div
                className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-8 rounded-2xl shadow-2xl"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-2xl font-bold mb-6 text-amber-400">Educational Distinction</h4>
                <div className="grid gap-4">
                  {[
                    "Ghanaian-owned with international standards",
                    "DELF/DALF certified instructors",
                    "GES curriculum integration",
                    "Proven pedagogical methodologies",
                    "Hybrid learning flexibility"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-blue-100">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: "#3b82f6"
                }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Institutional Timeline</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our journey of growth, innovation, and educational impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center font-bold text-white text-lg mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-amber-400 to-blue-500"></div>
                  )}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {milestone.event}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;