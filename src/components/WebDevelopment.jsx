import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const WebDevelopment = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const [currentImage, setCurrentImage] = useState(0);
  const [progress, setProgress] = useState(0);

  // Web development hero images with floating and rotating animations
  const webDevImages = [
    {
      id: 1,
      title: "Responsive School Websites",
      description: "Beautiful, mobile-friendly websites that work perfectly on all devices",
      placeholder: "💻",
      color: "from-blue-500/20 to-purple-600/20",
      float: { y: [-10, 10, -10], rotate: [-5, 5, -5] }
    },
    {
      id: 2,
      title: "Mobile Applications",
      description: "Native iOS and Android apps for parent-teacher communication",
      placeholder: "📱",
      color: "from-green-500/20 to-emerald-600/20",
      float: { y: [10, -10, 10], rotate: [5, -5, 5] }
    },
    {
      id: 3,
      title: "Learning Management Systems",
      description: "Custom LMS platforms for seamless online education",
      placeholder: "🎓",
      color: "from-orange-500/20 to-red-500/20",
      float: { y: [-15, 15, -15], rotate: [-8, 8, -8] }
    },
    {
      id: 4,
      title: "Technical Support & Maintenance",
      description: "24/7 support to keep your digital platforms running smoothly",
      placeholder: "🛠️",
      color: "from-purple-500/20 to-pink-600/20",
      float: { y: [15, -15, 15], rotate: [8, -8, 8] }
    },
    {
      id: 5,
      title: "E-commerce & Payment Systems",
      description: "Secure payment solutions for school fees and services",
      placeholder: "💰",
      color: "from-teal-500/20 to-blue-600/20",
      float: { y: [-12, 12, -12], rotate: [-6, 6, -6] }
    }
  ];

  const services = [
    {
      icon: "🎓",
      title: "School Websites",
      description: "Professional, responsive websites designed specifically for educational institutions with student portals, news sections, and event calendars.",
      features: ["Responsive Design", "Student Portals", "Event Management", "News & Updates"]
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Native mobile applications for iOS and Android that enhance parent-teacher communication and student engagement.",
      features: ["Parent Communication", "Push Notifications", "Grade Access", "Event Reminders"]
    },
    {
      icon: "💻",
      title: "Learning Management Systems",
      description: "Custom LMS platforms that integrate with your existing curriculum and provide seamless online learning experiences.",
      features: ["Course Management", "Assignment Tracking", "Progress Monitoring", "Resource Library"]
    },
    {
      icon: "🛠️",
      title: "Technical Support",
      description: "Ongoing maintenance, updates, and technical support to ensure your digital platforms run smoothly.",
      features: ["24/7 Support", "Regular Updates", "Security Monitoring", "Backup Services"]
    }
  ];

  const features = [
    {
      icon: "⚡",
      title: "Fast & Responsive",
      description: "Lightning-fast websites optimized for all devices"
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Enterprise-grade security with regular backups"
    },
    {
      icon: "🎨",
      title: "Custom Design",
      description: "Unique designs that reflect your school's identity"
    },
    {
      icon: "📊",
      title: "Analytics Ready",
      description: "Built-in analytics to track engagement and performance"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "₵2,500",
      period: "one-time",
      description: "Perfect for small schools starting their online presence",
      features: [
        "5-Page Responsive Website",
        "Basic Contact Forms",
        "Mobile Optimization",
        "1 Year Hosting",
        "Basic SEO Setup",
        "3 Months Support"
      ],
      bestFor: "Small Schools & Nurseries"
    },
    {
      name: "Professional",
      price: "₵4,500",
      period: "one-time",
      description: "Comprehensive solution for growing educational institutions",
      features: [
        "10-Page Custom Website",
        "Student Portal",
        "Event Calendar",
        "News Blog",
        "Gallery System",
        "1 Year Hosting & SSL",
        "6 Months Support",
        "Basic Training"
      ],
      popular: true,
      bestFor: "Primary & JHS Schools"
    },
    {
      name: "Enterprise",
      price: "₵7,500",
      period: "one-time",
      description: "Full-featured platform for large schools and institutions",
      features: [
        "Unlimited Pages",
        "Custom LMS Integration",
        "Parent Mobile App",
        "Payment System",
        "Advanced Analytics",
        "2 Years Hosting & SSL",
        "1 Year Support",
        "Full Training Package"
      ],
      bestFor: "SHS & Large Institutions"
    }
  ];

  // Auto-advance images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % webDevImages.length);
      setProgress(0);
    }, 5000);

    return () => clearInterval(interval);
  }, [webDevImages.length]);

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
    enter: { opacity: 0, scale: 1.1, x: 100 },
    center: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, scale: 0.9, x: -100 }
  };

  return (
    <section id="web-development" ref={sectionRef} className="py-20 bg-gradient-to-br from-[#fef3c7] to-white">
      <div className="container mx-auto px-4">
        {/* Hero Carousel Section with Moving & Rotating Images */}
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
                  opacity: { duration: 0.7 },
                  scale: { duration: 0.7 },
                  x: { duration: 0.7 }
                }}
                className={`absolute inset-0 w-full h-full bg-gradient-to-br ${webDevImages[currentImage].color} flex items-center justify-center p-8`}
              >
                {/* Floating and Rotating Main Icon */}
                <motion.div
                  className="text-center text-white max-w-4xl"
                  animate={webDevImages[currentImage].float}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="text-6xl md:text-7xl mb-4">
                    {webDevImages[currentImage].placeholder}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    {webDevImages[currentImage].title}
                  </h2>
                  <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                    {webDevImages[currentImage].description}
                  </p>
                </motion.div>

                {/* Floating Background Elements */}
                <motion.div
                  className="absolute top-10 left-10 text-4xl opacity-20"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🌐
                </motion.div>
                <motion.div
                  className="absolute bottom-10 right-10 text-3xl opacity-20"
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  💻
                </motion.div>
                <motion.div
                  className="absolute top-1/2 left-1/4 text-2xl opacity-15"
                  animate={{
                    y: [10, -10, 10],
                    rotate: [45, -45, 45],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  📱
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicator */}
            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm rounded-full p-3">
              <div className="relative w-12 h-12">
                <motion.svg 
                  className="w-12 h-12 transform -rotate-90" 
                  viewBox="0 0 36 36"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
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
                </motion.svg>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                  {currentImage + 1}/{webDevImages.length}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {webDevImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage
                      ? 'bg-[#f59e0b] scale-125'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={() => goToImage((currentImage - 1 + webDevImages.length) % webDevImages.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              ‹
            </motion.button>
            <motion.button
              onClick={() => goToImage((currentImage + 1) % webDevImages.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              ›
            </motion.button>

            {/* Web Development Badge */}
            <motion.div
              className="absolute top-6 left-6 bg-[#f59e0b] text-[#1e3a8a] px-4 py-2 rounded-full font-bold text-sm"
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💻 Web Development Services
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-[#1e3a8a] text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span>💻</span>
            <span>Edutech Solutions</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
            Web Development for Schools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As education technology specialists, we build powerful, engaging websites and digital platforms 
            that help Ghanaian schools thrive in the digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="text-4xl mb-4"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="text-[#f59e0b] mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Rest of the component remains the same */}
        {/* Why Choose Our Web Services */}
        <motion.div
          className="bg-[#1e3a8a] rounded-2xl p-8 md:p-12 text-white mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-[#f59e0b]">
                Why Schools Choose Our Web Development Services
              </h3>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                With our unique background in education technology and French language teaching, 
                we understand exactly what schools need to succeed online.
              </p>
              <div className="space-y-4">
                {[
                  "🎯 Education-First Approach: We prioritize educational outcomes in every design decision",
                  "🌍 Local Context: Solutions tailored for Ghanaian schools and communities",
                  "📚 Dual Expertise: Combined knowledge in education and technology",
                  "🚀 Proven Results: Successful implementations across multiple schools",
                  "💫 Ongoing Support: Continuous improvement and technical assistance"
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <span className="text-[#f59e0b] mt-1">✓</span>
                    <span className="text-blue-100">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <motion.div 
                    className="text-2xl mb-2"
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                  <p className="text-blue-200 text-xs">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pricing Packages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-[#1e3a8a] text-center mb-4">Website Packages</h3>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose the perfect package for your school's needs. All packages include responsive design and mobile optimization.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`bg-white rounded-2xl shadow-xl border-2 ${
                  pkg.popular ? 'border-[#f59e0b] relative' : 'border-gray-200'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#f59e0b] text-[#1e3a8a] px-4 py-1 rounded-full font-bold text-sm">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-[#1e3a8a] mb-2">{pkg.name}</h4>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-[#f59e0b]">{pkg.price}</span>
                    <span className="text-gray-500 ml-2">/{pkg.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-500 mb-2">Best for:</div>
                    <div className="text-[#1e3a8a] font-medium">{pkg.bestFor}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-[#f59e0b] mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    className={`w-full py-3 rounded-lg font-bold transition-colors ${
                      pkg.popular 
                        ? 'bg-[#1e3a8a] text-white hover:bg-[#1e40af]' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your School's Digital Presence?
          </h3>
          <p className="text-xl text-[#dbeafe] mb-8 max-w-2xl mx-auto">
            Let's build a website that showcases your school's excellence and enhances communication with parents and students.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              href="#contact"
              className="bg-[#f59e0b] text-[#1e3a8a] px-8 py-3 rounded-lg font-bold hover:bg-[#eab308] transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Free Consultation
            </motion.a>
            <motion.a
              href="#portfolio"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#1e40af] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View School Portfolio
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebDevelopment;