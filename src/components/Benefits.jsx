import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const BenefitItem = ({ benefit, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      className="text-center group"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -15 }}
    >
      <motion.div 
        className="w-20 h-20 bg-gradient-to-br from-educational-gold to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
        whileHover={{ 
          scale: 1.2,
          rotate: 360,
        }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-educational-navy font-bold text-2xl">{index + 1}</span>
      </motion.div>
      <h3 className="text-2xl font-bold text-educational-navy mb-4 group-hover:text-educational-blue transition-colors">
        {benefit.title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-lg">
        {benefit.description}
      </p>
      <motion.div
        className="mt-4 text-educational-gold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
      >
        ↑
      </motion.div>
    </motion.div>
  )
}

const Benefits = () => {
  const benefits = [
    {
      title: "Enhanced School Image",
      description: "Position your institution as a forward-thinking, digitally innovative educational leader in Ghana's competitive academic landscape."
    },
    {
      title: "Improved Student Fluency",
      description: "Transform students from passive learners to confident French speakers who can excel in both exams and real-world conversations."
    },
    {
      title: "Teacher Time Optimization",
      description: "Reduce lesson preparation time by 60% with ready-made exercises, automated assessments, and progress tracking tools."
    },
    {
      title: "Parent Engagement Boost",
      description: "Strengthen parent-school relationships with transparent progress reports and visible learning outcomes."
    },
    {
      title: "Practical Skill Development",
      description: "Bridge the gap between theoretical knowledge and practical communication skills needed for real-life situations."
    },
    {
      title: "Cultural Relevance",
      description: "Increase student engagement and retention with content that reflects Ghanaian culture and everyday experiences."
    }
  ]

  return (
    <section id="benefits" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-0 w-72 h-72 bg-educational-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-educational-blue rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span>🏆</span>
            <span>Proven Benefits</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-educational-navy mb-6">
            Transformative Benefits for Your School
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience measurable improvements in student performance, teacher efficiency, and overall educational outcomes with our customized French learning solution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} benefit={benefit} index={index} />
          ))}
        </div>

        {/* ROI Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-educational-blue to-educational-navy rounded-3xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-educational-gold">
            Return on Investment
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "60%", label: "Reduction in teacher preparation time" },
              { number: "45%", label: "Improvement in student speaking confidence" },
              { number: "80%", label: "Increase in parent satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-educational-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-educational-lightBlue">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits