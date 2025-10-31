import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Trial = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 })

  const trialFeatures = [
    {
      icon: "✅",
      title: "Full Platform Access",
      description: "Complete access to all features, lessons, and tools for teachers and students"
    },
    {
      icon: "👨‍🏫",
      title: "Teacher Training",
      description: "Comprehensive onboarding and training sessions for your teaching staff"
    },
    {
      icon: "📞",
      title: "Dedicated Support",
      description: "Priority technical and academic support throughout the trial period"
    },
    {
      icon: "📊",
      title: "Progress Analytics",
      description: "Full access to student progress tracking and performance analytics"
    }
  ]

  const subscriptionPlans = [
    {
      name: "Basic",
      price: "₵Custom",
      period: "per student/year",
      features: [
        "Full app access",
        "Basic support",
        "Standard updates",
        "Progress tracking"
      ]
    },
    {
      name: "Premium",
      price: "₵Custom",
      period: "per student/year",
      features: [
        "All Basic features",
        "Priority support",
        "Advanced analytics",
        "Custom branding",
        "Parent portal access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      period: "school-wide license",
      features: [
        "All Premium features",
        "Dedicated account manager",
        "Custom syllabus integration",
        "API access",
        "White-label solution"
      ]
    }
  ]

  return (
    <section id="trial" ref={sectionRef} className="py-20 bg-gradient-to-br from-educational-navy to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-educational-gold rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-educational-blue rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Free Trial Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-educational-gold text-educational-navy px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span>🎁</span>
            <span>Special Limited Offer</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Free 1-Month Trial
          </h2>
          <p className="text-xl md:text-2xl text-educational-lightBlue max-w-3xl mx-auto mb-8 leading-relaxed">
            Experience the full power of our French Learning App with no commitment. See the transformation in your students' confidence and skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {/* Trial Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-educational-gold">
              During Your Free Trial
            </h3>
            <div className="space-y-6">
              {trialFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-educational-gold/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-2xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-educational-lightBlue">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Demo Access */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-educational-gold">
              Explore Our Platform
            </h3>
            <p className="text-educational-lightBlue mb-6 text-lg">
              Get immediate access to our sample platform and experience the features firsthand.
            </p>
            
            <motion.a 
              href="https://p4-3.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-educational-gold text-educational-navy text-center py-4 rounded-xl font-bold text-lg mb-4 hover:bg-yellow-400 transition-colors shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              🚀 Access Live Demo Platform
            </motion.a>
            
            <div className="text-center text-educational-lightBlue text-sm">
              <p>📍 Best viewed on mobile browser for full pronunciation functionality</p>
              <p className="mt-2">📱 Optimized for smartphones and tablets</p>
            </div>

            <motion.div
              className="mt-6 p-4 bg-educational-blue/30 rounded-xl border border-educational-gold/20"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-center font-semibold">
                💡 <strong>Pro Tip:</strong> Try the pronunciation features on the demo to experience the interactive learning!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Subscription Plans */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-educational-gold">
            Flexible Subscription Plans
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {subscriptionPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 ${
                  plan.popular 
                    ? 'border-educational-gold shadow-2xl scale-105' 
                    : 'border-white/20'
                } relative`}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-educational-gold text-educational-navy px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <h4 className="text-2xl font-bold text-center mb-4">{plan.name}</h4>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-educational-lightBlue"> {plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="text-educational-gold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-educational-gold text-educational-navy hover:bg-yellow-400'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.name === 'Enterprise' ? 'Request Quote' : 'Get Started'}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-xl text-educational-lightBlue mb-6">
            Ready to transform French learning at your school?
          </p>
          <motion.a
            href="#contact"
            className="inline-block bg-educational-gold text-educational-navy px-12 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Free Trial Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Trial