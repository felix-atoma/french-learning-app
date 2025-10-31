import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AppCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Interactive Pronunciation",
      description: "Click any word to hear correct French pronunciation with Ghanaian accent examples",
      image: "/photos/app-screenshot-1.jpg",
      color: "from-blue-500 to-cyan-500",
      features: ["Click-to-hear audio", "Ghanaian voices", "Slow & normal speed"]
    },
    {
      title: "Ghanaian Context Learning",
      description: "Learn French using familiar Ghanaian names, places, and everyday situations",
      image: "/photos/app-screenshot-2.jpg",
      color: "from-educational-gold to-yellow-500",
      features: ["Local names", "Market scenarios", "School contexts"]
    },
    {
      title: "Curriculum Aligned Exercises",
      description: "Complete GES syllabus coverage with term-based lessons and assessments",
      image: "/photos/app-screenshot-3.jpg",
      color: "from-green-500 to-emerald-500",
      features: ["GES syllabus", "Term-based", "Exam preparation"]
    },
    {
      title: "Progress Tracking Dashboard",
      description: "Real-time monitoring for teachers and detailed progress reports for parents",
      image: "/photos/app-screenshot-1.jpg",
      color: "from-purple-500 to-pink-500",
      features: ["Teacher dashboard", "Parent reports", "Performance analytics"]
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="relative h-80 md:h-96 lg:h-[500px] bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20 shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className={`absolute inset-4 bg-gradient-to-br ${slides[currentSlide].color} rounded-2xl p-6 flex flex-col justify-center items-center text-white text-center`}
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 1.2, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {/* App Screen Mockup */}
          <div className="bg-black/20 rounded-2xl p-4 mb-6 w-full max-w-xs mx-auto border border-white/10">
            <div className="bg-white/10 rounded-lg p-4 h-48 flex flex-col justify-center items-center">
              <div className="text-4xl mb-4">{slides[currentSlide].features[0]?.icon || "📱"}</div>
              <h3 className="text-xl font-bold mb-2">{slides[currentSlide].title}</h3>
              <p className="text-sm opacity-90">{slides[currentSlide].description}</p>
            </div>
          </div>

          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-4"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {slides[currentSlide].title}
          </motion.h3>
          <motion.p 
            className="text-lg md:text-xl opacity-90 mb-6 max-w-md"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {slides[currentSlide].description}
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {slides[currentSlide].features.map((feature, index) => (
              <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {feature}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125 shadow-lg' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Demo Link */}
      <motion.div 
        className="absolute top-6 right-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <a 
          href="https://p4-3.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-educational-gold text-educational-navy px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-400 transition-colors shadow-lg"
        >
          Live Demo →
        </a>
      </motion.div>
    </div>
  )
}

export default AppCarousel