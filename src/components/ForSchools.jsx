import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ForSchools = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const [currentImage, setCurrentImage] = useState(0);
  const [progress, setProgress] = useState(0);

  // School-focused hero images
  const schoolImages = [
    {
      id: 1,
      title: "Interactive Classroom Learning",
      description: "Students engaging with our French learning platform in a school computer lab",
      placeholder: "🏫",
      color: "from-blue-500/20 to-purple-600/20"
    },
    {
      id: 2,
      title: "Teacher Dashboard",
      description: "Real-time monitoring of student progress and performance analytics",
      placeholder: "📊",
      color: "from-green-500/20 to-yellow-500/20"
    },
    {
      id: 3,
      title: "Exam Preparation",
      description: "Specialized BECE and WASSCE French exam practice sessions",
      placeholder: "🎯",
      color: "from-red-500/20 to-pink-600/20"
    },
    {
      id: 4,
      title: "Cultural Immersion",
      description: "Students experiencing French culture through interactive lessons",
      placeholder: "🌍",
      color: "from-purple-500/20 to-indigo-600/20"
    },
    {
      id: 5,
      title: "Progress Tracking",
      description: "Comprehensive reporting for teachers and school administrators",
      placeholder: "📈",
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

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

  // Auto-advance images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % schoolImages.length);
      setProgress(0);
    }, 5000);

    return () => clearInterval(interval);
  }, [schoolImages.length]);

  // Progress animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 100);

    return () => clearTimeout(timer);
  }, [currentImage]);

  const goToImage = (index) => {
    setCurrentImage(index);
    setProgress(0);
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  };

  return (
    <section id="schools" ref={sectionRef} className="py-20 bg-gradient-to-br from-[#fef3c7] to-white">
      <div className="container mx-auto px-4">
        {/* Hero Carousel Section */}
        <motion.div
          className="mb-16 rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-64 md:h-80 lg:h-96 bg-gradient-to-br from-[#1e3a8a] to-[#3730a3]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 }
                }}
                className={`absolute inset-0 w-full h-full bg-gradient-to-br ${schoolImages[currentImage].color} flex items-center justify-center p-8`}
              >
                <div className="text-center text-white max-w-4xl">
                  <div className="text-6xl md:text-7xl mb-4">
                    {schoolImages[currentImage].placeholder}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    {schoolImages[currentImage].title}
                  </h2>
                  <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                    {schoolImages[currentImage].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicator */}
            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm rounded-full p-3">
              <div className="relative w-12 h-12">
                <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="2"
                  />
                  <motion.circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#FBBF24"
                    strokeWidth="2"
                    strokeDasharray="100"
                    strokeDashoffset={100 - progress}
                    initial={{ strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: 100 - progress }}
                    transition={{ duration: 4.9, ease: "linear" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                  {currentImage + 1}/{schoolImages.length}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {schoolImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage
                      ? 'bg-[#f59e0b] scale-125'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => goToImage((currentImage - 1 + schoolImages.length) % schoolImages.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300"
            >
              ‹
            </button>
            <button
              onClick={() => goToImage((currentImage + 1) % schoolImages.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300"
            >
              ›
            </button>

            {/* School Badge */}
            <div className="absolute top-6 left-6 bg-[#f59e0b] text-[#1e3a8a] px-4 py-2 rounded-full font-bold text-sm">
              🏫 For Schools & Institutions
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
            transition={{ duration: 0.6, delay: 0.4 }}
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
                  className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
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
            transition={{ duration: 0.6, delay: 0.6 }}
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
          transition={{ duration: 0.6, delay: 0.8 }}
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
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
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
          transition={{ duration: 0.6, delay: 1.2 }}
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