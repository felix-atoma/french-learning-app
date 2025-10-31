// components/Portfolio.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Portfolio = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "St. Mary's Senior High School",
      description: "Comprehensive school website with student portal, event calendar, and news blog system.",
      category: "website",
      image: "🏫",
      features: ["Responsive Design", "Student Portal", "Event Management", "News Blog"],
      url: "https://stmarys-gh.edu.gh",
      status: "Live",
      duration: "4 weeks",
      schoolType: "Senior High School"
    },
    {
      id: 2,
      title: "Ridge Church School Mobile App",
      description: "Parent communication app with push notifications, grade access, and event reminders.",
      category: "mobile",
      image: "📱",
      features: ["iOS & Android", "Push Notifications", "Grade Portal", "Event Alerts"],
      url: "#",
      status: "Live",
      duration: "6 weeks",
      schoolType: "Primary School"
    },
    {
      id: 3,
      title: "Accra Academy LMS Integration",
      description: "Custom Learning Management System integrated with existing school curriculum.",
      category: "lms",
      image: "💻",
      features: ["Course Management", "Assignment Tracking", "Progress Reports", "Resource Library"],
      url: "#",
      status: "In Development",
      duration: "8 weeks",
      schoolType: "Senior High School"
    },
    {
      id: 4,
      title: "Zion Girls School Website",
      description: "Beautiful, responsive website showcasing school achievements and programs.",
      category: "website",
      image: "🎓",
      features: ["Gallery System", "Admission Forms", "Staff Directory", "News Updates"],
      url: "https://ziongirls.edu.gh",
      status: "Live",
      duration: "3 weeks",
      schoolType: "Junior High School"
    },
    {
      id: 5,
      title: "Presbyterian Boys Parent Portal",
      description: "Secure parent portal for fee payments, result checking, and communication.",
      category: "portal",
      image: "🔐",
      features: ["Payment System", "Result Portal", "Message Center", "Document Storage"],
      url: "#",
      status: "Live",
      duration: "5 weeks",
      schoolType: "Senior High School"
    },
    {
      id: 6,
      title: "Morning Star Basic School",
      description: "Complete digital transformation for a basic school with limited previous tech experience.",
      category: "website",
      image: "⭐",
      features: ["Simple CMS", "Photo Gallery", "Contact Forms", "Mobile Friendly"],
      url: "https://morningstarbasic.edu.gh",
      status: "Live",
      duration: "2 weeks",
      schoolType: "Basic School"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: portfolioItems.length },
    { id: 'website', name: 'School Websites', count: portfolioItems.filter(item => item.category === 'website').length },
    { id: 'mobile', name: 'Mobile Apps', count: portfolioItems.filter(item => item.category === 'mobile').length },
    { id: 'lms', name: 'LMS Systems', count: portfolioItems.filter(item => item.category === 'lms').length },
    { id: 'portal', name: 'Parent Portals', count: portfolioItems.filter(item => item.category === 'portal').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const stats = [
    { number: "15+", label: "Schools Served" },
    { number: "12", label: "Live Websites" },
    { number: "8", label: "Mobile Apps" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-[#f59e0b] text-[#1e3a8a] px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span>💼</span>
            <span>Our Work</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
            School Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful web development projects for Ghanaian schools. 
            Each solution is tailored to meet the unique needs of educational institutions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-md border border-gray-200">
              <div className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#1e3a8a] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{item.image}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'Live' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2 group-hover:text-[#1e40af] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{item.schoolType}</span>
                  <span>Completed in {item.duration}</span>
                </div>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-700 mb-3">Key Features:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-[#dbeafe] text-[#1e3a8a] px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {item.url !== '#' && (
                    <motion.a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#1e3a8a] text-white py-2 rounded-lg text-sm font-semibold text-center hover:bg-[#1e40af] transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Visit Site
                    </motion.a>
                  )}
                  <motion.button
                    className="flex-1 border border-[#1e3a8a] text-[#1e3a8a] py-2 rounded-lg text-sm font-semibold hover:bg-[#1e3a8a] hover:text-white transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Case Study
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#f59e0b]">
                What Schools Say About Our Work
              </h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <p className="text-lg italic mb-4">
                    "French Learning Center GH transformed our online presence. Our new website has significantly improved communication with parents and attracted more students."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#f59e0b] rounded-full flex items-center justify-center font-bold text-[#1e3a8a]">
                      DM
                    </div>
                    <div>
                      <div className="font-bold">Mr. David Mensah</div>
                      <div className="text-blue-200 text-sm">Headmaster, St. Mary's SHS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "3x", text: "Increase in online inquiries" },
                { number: "40%", text: "Reduction in phone calls" },
                { number: "2.5x", text: "More website visitors" },
                { number: "95%", text: "Parent satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-[#f59e0b] mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-4">
            Ready to Start Your School's Digital Transformation?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a powerful online presence for your institution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              href="#contact"
              className="bg-[#f59e0b] text-[#1e3a8a] px-8 py-3 rounded-lg font-bold hover:bg-[#eab308] transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
            </motion.a>
            <motion.a
              href="#web-development"
              className="border-2 border-[#1e3a8a] text-[#1e3a8a] px-8 py-3 rounded-lg font-bold hover:bg-[#1e3a8a] hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Services
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;