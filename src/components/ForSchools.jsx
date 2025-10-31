import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ForSchools = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const benefits = [
    {
      icon: "📊",
      title: "Performance Dashboard",
      description: "Real-time tracking of student progress and class performance"
    },
    {
      icon: "👨‍🏫",
      title: "Teacher Training",
      description: "Comprehensive training for your French teachers"
    },
    {
      icon: "📚",
      title: "Curriculum Integration",
      description: "Seamless integration with your school's existing curriculum"
    },
    {
      icon: "🎯",
      title: "Exam Preparation",
      description: "Specialized preparation for BECE and WASSCE French exams"
    }
  ];

  const partnershipTiers = [
    {
      name: "Basic",
      price: "₵50/student",
      features: [
        "App access for students",
        "Basic teacher dashboard",
        "Email support",
        "Progress reports"
      ]
    },
    {
      name: "Premium",
      price: "₵80/student",
      features: [
        "Everything in Basic",
        "Advanced analytics",
        "Teacher training sessions",
        "Priority support",
        "Custom exercises"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Everything in Premium",
        "Custom curriculum development",
        "Dedicated account manager",
        "On-site training",
        "API integration"
      ]
    }
  ];

  return (
    <section id="schools" ref={sectionRef} className="py-20 bg-gradient-to-br from-[#fef3c7] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
            For Schools & Institutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your French language program with our comprehensive school partnership packages.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-[#1e3a8a] mb-6">Why Partner With Us?</h3>
            <p className="text-lg text-gray-600 mb-6">
              We understand the unique challenges Ghanaian schools face in teaching French. Our program is designed to 
              complement your existing curriculum while providing measurable results.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-3xl flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h4 className="font-bold text-[#1e3a8a] mb-1">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#dbeafe]">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6 text-center">Partnership Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <span className="text-gray-700">Improved student performance in French exams</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <span className="text-gray-700">Reduced teacher workload with automated assessments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <span className="text-gray-700">Parent engagement through progress tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <span className="text-gray-700">Cost-effective compared to traditional methods</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <span className="text-gray-700">Regular updates aligned with GES curriculum changes</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partnership Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-[#1e3a8a] text-center mb-12">Partnership Packages</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`bg-white rounded-2xl shadow-xl border-2 ${
                  tier.popular ? 'border-[#f59e0b] relative' : 'border-gray-200'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#f59e0b] text-[#1e3a8a] px-4 py-1 rounded-full font-bold text-sm">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-[#1e3a8a] mb-2">{tier.name}</h4>
                  <div className="text-3xl font-bold text-[#f59e0b] mb-6">{tier.price}</div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="text-[#f59e0b] mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    className={`w-full py-3 rounded-lg font-bold ${
                      tier.popular 
                        ? 'bg-[#1e3a8a] text-white hover:bg-[#1e40af]' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    } transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 bg-[#1e3a8a] rounded-2xl p-8 text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your French Program?</h3>
          <p className="text-xl text-[#dbeafe] mb-6">Schedule a demo with our school partnership team.</p>
          <motion.a
            href="#contact"
            className="bg-[#f59e0b] text-[#1e3a8a] px-8 py-3 rounded-lg font-bold hover:bg-[#eab308] transition-colors inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a School Demo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ForSchools;