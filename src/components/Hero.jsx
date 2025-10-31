import React from 'react'
import { motion } from 'framer-motion'
import AppCarousel from './AppCarousel'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section className="bg-gradient-to-br from-educational-blue via-educational-navy to-purple-900 text-white py-20 md:py-28 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 bg-educational-gold/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-10 left-10 w-16 h-16 bg-educational-gold/30 rounded-full"
        animate={{
          scale: [1, 2, 1],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between"
        >
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-educational-gold/20 text-educational-gold px-4 py-2 rounded-full text-sm font-medium mb-6 border border-educational-gold/30"
            >
              <span>🎯</span>
              <span>Customized for Ghanaian Students</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Transforming French Education in{' '}
              <span className="text-educational-gold">Ghana</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl mb-8 text-educational-lightBlue leading-relaxed"
            >
              Bridging the gap between exam success and real conversational fluency with our culturally-relevant French Learning App
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.a 
                href="#trial" 
                className="bg-educational-gold text-educational-navy px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                🚀 Start Free 1-Month Trial
              </motion.a>
              <motion.a 
                href="#demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-white hover:text-educational-blue transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                📱 View Live Demo
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center space-x-6 text-sm text-educational-lightBlue"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>GES Syllabus Aligned</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Teacher Dashboard</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Progress Tracking</span>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <AppCarousel />
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                opacity=".25" 
                className="fill-current text-educational-cream"/>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                opacity=".5" 
                className="fill-current text-educational-cream"/>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                className="fill-current text-educational-cream"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero