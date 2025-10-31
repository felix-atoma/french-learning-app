import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const StatCard = ({ number, label, suffix = "", delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      className="text-center p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-educational-navy mb-2"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2, type: "spring" }}
      >
        {number}{suffix}
      </motion.div>
      <div className="text-gray-600 font-medium text-sm md:text-base">{label}</div>
    </motion.div>
  )
}

const Statistics = () => {
  const stats = [
    { number: "4-6", label: "Years students study French", suffix: "+" },
    { number: "90", label: "Exam pass rate", suffix: "%" },
    { number: "70", label: "Struggle with speaking", suffix: "%" },
    { number: "100", label: "Curriculum coverage", suffix: "%" }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-educational-navy mb-4">
            The French Learning Challenge in Ghana
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Despite years of study and high exam success rates, most students lack the confidence to hold basic conversations in French.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12 p-6 bg-educational-lightBlue rounded-2xl border border-educational-blue/20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg font-semibold text-educational-navy">
            🎯 <span className="text-educational-accent">The Gap:</span> Students know grammar and vocabulary but cannot speak confidently
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Statistics