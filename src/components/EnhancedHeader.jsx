// components/EnhancedHeader.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programsMenu = {
    title: "Programs",
    items: [
      { name: "Beginner French", description: "3-month foundation course", href: "#programs", price: "₵300" },
      { name: "Intermediate French", description: "6-month fluency builder", href: "#programs", price: "₵550" },
      { name: "Advanced French", description: "9-month mastery program", href: "#programs", price: "₵800" },
      { name: "DELF/DALF Prep", description: "Certification training", href: "#programs", price: "₵450" },
    ]
  };

  const resourcesMenu = {
    title: "Resources",
    items: [
      { name: "Learning App", description: "Interactive mobile platform", href: "#app" },
      { name: "Study Materials", description: "Downloadable resources", href: "#resources" },
      { name: "Blog & Tips", description: "French learning advice", href: "#blog" },
      { name: "Success Stories", description: "Student achievements", href: "#testimonials" },
    ]
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-[#1e3a8a]/95 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#f59e0b] to-[#eab308] rounded-lg flex items-center justify-center shadow-lg">
              <span className="font-bold text-[#1e3a8a] text-sm">FLC</span>
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                scrolled ? 'text-[#1e3a8a]' : 'text-white'
              }`}>
                French Learning Center GH
              </h1>
              <p className={`text-xs transition-colors ${
                scrolled ? 'text-gray-600' : 'text-[#dbeafe]'
              }`}>
                Excellence in French Education
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              programsMenu,
              { name: "For Schools", href: "#schools" },
              resourcesMenu,
              { name: "Contact", href: "#contact" },
            ].map((item, index) => (
              <div key={item.name || item.title} className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`font-medium transition-colors hover:text-[#f59e0b] ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.name || item.title}
                </a>
                
                {/* Mega Menu */}
                <AnimatePresence>
                  {activeDropdown === item.title && item.items && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6"
                    >
                      <h4 className="font-bold text-[#1e3a8a] mb-4">{item.title}</h4>
                      <div className="space-y-3">
                        {item.items.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block p-3 rounded-lg hover:bg-[#dbeafe] transition-colors group"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="font-semibold text-gray-800 group-hover:text-[#1e3a8a]">
                                  {subItem.name}
                                </div>
                                <div className="text-sm text-gray-600 mt-1">
                                  {subItem.description}
                                </div>
                              </div>
                              {subItem.price && (
                                <div className="text-[#f59e0b] font-bold text-sm">
                                  {subItem.price}
                                </div>
                              )}
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.a
              href="#contact"
              className="bg-[#f59e0b] text-[#1e3a8a] px-6 py-2 rounded-lg font-bold hover:bg-[#eab308] transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className={`lg:hidden p-2 ${scrolled ? 'text-[#1e3a8a]' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white mt-4 rounded-2xl shadow-xl border border-gray-200"
            >
              <div className="py-4">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About", href: "#about" },
                  { name: "Programs", href: "#programs" },
                  { name: "For Schools", href: "#schools" },
                  { name: "Resources", href: "#resources" },
                  { name: "Contact", href: "#contact" },
                ].map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-3 px-6 text-gray-700 hover:text-[#1e3a8a] hover:bg-[#dbeafe] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-6 pt-4 border-t border-gray-200">
                  <motion.a
                    href="#contact"
                    className="block w-full bg-[#f59e0b] text-[#1e3a8a] py-3 rounded-lg font-bold text-center hover:bg-[#eab308] transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    Enroll Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default EnhancedHeader;