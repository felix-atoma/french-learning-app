import React from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-6 h-6 bg-educational-gold/20 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-4 h-4 bg-educational-blue/20 rounded-full"
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-educational-navy/10 rounded-full"
        animate={{
          y: [0, -50, 0],
          x: [0, 40, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Spider web design elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="web" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" className="text-educational-blue"/>
              <path d="M50,50 L100,50 M50,50 L50,100 M50,50 L0,50 M50,50 L50,0" 
                    stroke="currentColor" strokeWidth="0.5" className="text-educational-blue"/>
              <path d="M50,50 L75,25 M50,50 L75,75 M50,50 L25,75 M50,50 L25,25" 
                    stroke="currentColor" strokeWidth="0.5" className="text-educational-blue"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#web)" />
        </svg>
      </div>
    </div>
  )
}

export default AnimatedBackground