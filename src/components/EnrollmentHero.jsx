// components/EnrollmentHero.jsx
import React from 'react'
import { motion } from 'framer-motion'

const EnrollmentHero = () => {
  return (
    <section id="enrollment-hero" className="min-h-screen bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(30deg, transparent 49%, #f59e0b 50%, transparent 51%),
            linear-gradient(-30deg, transparent 49%, #f59e0b 50%, transparent 51%)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-[#f59e0b] text-[#1e3a8a] px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>🚀</span>
              <span>Start Your French Journey Today</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Master French with
              <span className="text-[#f59e0b] block">Ghana's #1 Institute</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Join 10,000+ successful students who transformed their French skills with our proven methods, 
              certified instructors, and Ghanaian-context curriculum.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
              {[
                { number: '95%', label: 'Success Rate' },
                { number: '10K+', label: 'Students' },
                { number: '50+', label: 'Schools' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#f59e0b] mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="#enrollment-form"
                className="bg-[#f59e0b] text-[#1e3a8a] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#eab308] transition-colors shadow-lg text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                📝 Enroll Now
              </motion.a>
              <motion.a
                href="https://wa.me/233591038729"
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors shadow-lg text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                💬 WhatsApp Us
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <span>✅</span>
                <span>GES Curriculum Aligned</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✅</span>
                <span>Certified Instructors</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✅</span>
                <span>Flexible Payment Plans</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-white text-center">
          <div className="text-sm mb-2">Scroll to Enroll</div>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default EnrollmentHero