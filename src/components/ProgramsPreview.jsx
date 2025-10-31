// components/ProgramsPreview.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ProgramsPreview = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 })

  const programs = [
    {
      name: "Beginner French",
      price: "₵300",
      duration: "3 Months",
      description: "Start your French journey with basic vocabulary and conversations",
      features: ["Basic Vocabulary", "Simple Conversations", "Cultural Basics"]
    },
    {
      name: "Intermediate French",
      price: "₵550",
      duration: "6 Months",
      description: "Build fluency with advanced grammar and complex conversations",
      features: ["Grammar Mastery", "Reading Skills", "Writing Practice"]
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-6">Our French Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive French courses designed for all levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              className="bg-gradient-to-br from-[#dbeafe] to-white rounded-2xl p-6 shadow-lg border border-[#dbeafe]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">{program.name}</h3>
              <div className="text-[#f59e0b] font-bold text-xl mb-3">{program.price}</div>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <ul className="space-y-2 mb-6">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-[#f59e0b] mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.a
                href="/programs"
                className="bg-[#1e3a8a] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1e40af] transition-colors inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Programs
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramsPreview