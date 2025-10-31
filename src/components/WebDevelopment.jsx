// components/WebDevelopment.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const WebDevelopment = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

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

  return (
    <section id="web-development" ref={sectionRef} className="py-20 bg-gradient-to-br from-[#fef3c7] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
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
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
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
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-[#f59e0b] mt-1">✓</span>
                    <span className="text-blue-100">{item}</span>
                  </div>
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
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
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