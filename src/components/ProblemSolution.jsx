import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ProblemSolution = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 })
  const [currentHeroImage, setCurrentHeroImage] = useState(0)

  // Hero images data - replace with your actual image paths
  const heroImages = [
    {
      url: "/images/hero-1.jpg", // Replace with your image path
      title: "Bridging the Gap in French Education",
      subtitle: "From exam success to real conversational fluency"
    },
    {
      url: "/images/hero-2.jpg", // Replace with your image path
      title: "Ghanaian Context, Global Language",
      subtitle: "Cultural relevance meets effective language learning"
    },
    {
      url: "/images/hero-3.jpg", // Replace with your image path
      title: "Interactive Learning Experience",
      subtitle: "Engaging tools for modern students"
    },
    {
      url: "/images/hero-4.jpg", // Replace with your image path
      title: "Teacher-Student Connection",
      subtitle: "Seamless classroom to home learning journey"
    }
  ]

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  const problems = [
    {
      icon: "❌",
      title: "Low Student Motivation",
      description: "Traditional methods fail to engage digital-native students, leading to poor participation and interest in French classes."
    },
    {
      icon: "🔇",
      title: "Limited Listening Practice",
      description: "Insufficient audio materials and pronunciation exercises prevent students from developing proper speaking skills."
    },
    {
      icon: "🏠",
      title: "Classroom-Home Disconnect",
      description: "No effective bridge between school lessons and home practice, limiting reinforcement opportunities."
    },
    {
      icon: "📱",
      title: "Outdated Teaching Tools",
      description: "Lack of modern, digital resources aligned with the national syllabus and Ghanaian context."
    }
  ]

  const solutions = [
    {
      icon: "🎯",
      title: "Culturally Relevant Content",
      description: "Uses Ghanaian names, voices, and real-life scenarios that students can relate to and understand."
    },
    {
      icon: "🗣️",
      title: "Interactive Pronunciation",
      description: "Click-to-hear functionality with native and Ghanaian French speaker audio for proper accent development."
    },
    {
      icon: "📚",
      title: "Syllabus-Aligned Curriculum",
      description: "Complete coverage of GES French syllabus with term-based lesson plans and exercises."
    },
    {
      icon: "👨‍🏫",
      title: "Teacher-Centric Design",
      description: "Supports teaching objectives with ready-made exercises, assessments, and progress tracking."
    }
  ]

  return (
    <div className="relative">
      {/* Hero Section with Transitioning Images */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroImage}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImages[currentHeroImage].url})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-educational-navy/60"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white px-4 max-w-4xl mx-auto"
              >
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {heroImages[currentHeroImage].title}
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-educational-gold mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  {heroImages[currentHeroImage].subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <button className="bg-educational-gold text-educational-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Discover Our Solution
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentHeroImage === index 
                  ? 'bg-educational-gold scale-125' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-center"
          >
            <div className="text-sm mb-2">Scroll to explore</div>
            <div className="text-2xl">↓</div>
          </motion.div>
        </motion.div>
      </section>

      {/* Original Problem-Solution Content */}
      <section ref={sectionRef} className="py-20 bg-gradient-to-br from-educational-cream to-educational-lightBlue">
        <div className="container mx-auto px-4">
          {/* Problem Section */}
          <motion.div
            id="problem"
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span>🚨</span>
                <span>The Challenge</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-educational-navy mb-4">
                Why Students Struggle with French Speaking
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                After 4-6 years of study, students can pass written exams but freeze when asked to speak. Here's why:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-3xl mb-4">{problem.icon}</div>
                  <h3 className="text-xl font-semibold text-educational-navy mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution Section */}
          <motion.div
            id="solution"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span>💡</span>
                <span>Our Innovative Solution</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-educational-navy mb-4">
                The Customized French Learning App
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Designed specifically for Ghanaian learners to bridge the gap between exam success and real conversational fluency
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-3xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-semibold text-educational-navy mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Differentiator */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-educational-navy text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-educational-gold">
                What Makes Our App Different?
              </h3>
              <p className="text-lg md:text-xl text-educational-lightBlue leading-relaxed">
                Unlike foreign apps, our platform integrates <strong>Ghanaian culture, names, and real-life situations</strong> that students encounter daily. 
                We don't just teach French - we teach French <strong>in the Ghanaian context</strong>, making learning relatable, memorable, and practical.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProblemSolution