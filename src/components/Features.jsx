import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const FeatureCard = ({ feature, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
      initial={{ opacity: 0, y: 50, rotateY: 90 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: 90 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        borderColor: '#f59e0b'
      }}
    >
      <motion.div 
        className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {feature.icon}
      </motion.div>
      <h3 className="text-2xl font-bold text-educational-navy mb-4 group-hover:text-educational-blue transition-colors">
        {feature.title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-6">
        {feature.description}
      </p>
      <div className="space-y-2">
        {feature.benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            className="flex items-center space-x-2 text-sm text-gray-500"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.1 + idx * 0.1 }}
          >
            <div className="w-1.5 h-1.5 bg-educational-gold rounded-full"></div>
            <span>{benefit}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "Curriculum-Based Learning",
      description: "Complete alignment with Ghana Education Service French syllabus for each academic term and class level.",
      benefits: [
        "GES syllabus compliance",
        "Term-based lesson plans",
        "Class-level appropriate content",
        "Exam-focused exercises"
      ]
    },
    {
      icon: "🗣️",
      title: "Interactive Pronunciation",
      description: "Advanced click-to-hear functionality with both native French and Ghanaian French speaker recordings.",
      benefits: [
        "Click any word to hear pronunciation",
        "Slow and normal speed options",
        "Ghanaian accent examples",
        "Voice recording comparison"
      ]
    },
    {
      icon: "🎮",
      title: "Engaging Learning Games",
      description: "Fun, educational games and quizzes that reinforce vocabulary, grammar, and conversation skills.",
      benefits: [
        "Vocabulary building games",
        "Grammar practice quizzes",
        "Conversation simulations",
        "Progress-based challenges"
      ]
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Comprehensive dashboard for teachers to monitor student performance and identify areas needing improvement.",
      benefits: [
        "Real-time progress monitoring",
        "Performance analytics",
        "Individual student reports",
        "Class-wide performance insights"
      ]
    },
    {
      icon: "✍️",
      title: "Essay Writing Support",
      description: "Specialized tools and guides for J.H.S. 3 students to master French essay writing and topic discussions.",
      benefits: [
        "Essay structure guides",
        "Topic vocabulary builders",
        "Writing templates",
        "Common phrase library"
      ]
    },
    {
      icon: "🏫",
      title: "School Customization",
      description: "White-label solution that can be branded with your school's identity, colors, and even custom syllabus.",
      benefits: [
        "School branding integration",
        "Custom color schemes",
        "School logo placement",
        "Custom syllabus support"
      ]
    }
  ]

  return (
    <section id="features" className="py-20 bg-educational-lightBlue relative overflow-hidden">
      {/* Animated web background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bigWeb" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="4" fill="currentColor" className="text-educational-blue"/>
              <path d="M100,100 L200,100 M100,100 L100,200 M100,100 L0,100 M100,100 L100,0" 
                    stroke="currentColor" strokeWidth="1" className="text-educational-blue"/>
              <path d="M100,100 L150,50 M100,100 L150,150 M100,100 L50,150 M100,100 L50,50" 
                    stroke="currentColor" strokeWidth="1" className="text-educational-blue"/>
              <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" fill="none"/>
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bigWeb)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-educational-blue text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span>🌟</span>
            <span>Comprehensive Feature Set</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-educational-navy mb-6">
            Powerful Features for Effective Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our app combines pedagogical excellence with cutting-edge technology to deliver an immersive French learning experience tailored for Ghanaian students.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Technical Features Summary */}
        <motion.div
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-educational-gold/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: "📱", label: "Mobile First Design" },
              { icon: "🌐", label: "Offline Capability" },
              { icon: "🔒", label: "Secure Platform" },
              { icon: "🔄", label: "Regular Updates" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-semibold text-educational-navy">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features