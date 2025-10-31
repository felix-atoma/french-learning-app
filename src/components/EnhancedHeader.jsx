import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      { name: "Beginner French", description: "3-month foundation course", href: "/programs", price: "₵300" },
      { name: "Intermediate French", description: "6-month fluency builder", href: "/programs", price: "₵550" },
      { name: "Advanced French", description: "9-month mastery program", href: "/programs", price: "₵800" },
      { name: "DELF/DALF Prep", description: "Certification training", href: "/programs", price: "₵450" },
    ]
  };

  const webDevMenu = {
    title: "Web Services",
    items: [
      { name: "School Websites", description: "Professional websites for schools", href: "/web-development" },
      { name: "Mobile Apps", description: "Parent communication apps", href: "/web-development" },
      { name: "LMS Systems", description: "Learning management platforms", href: "/web-development" },
      { name: "Our Portfolio", description: "See our school projects", href: "/web-development#portfolio" },
    ]
  };

  const resourcesMenu = {
    title: "Resources",
    items: [
      { name: "Learning App", description: "Interactive mobile platform", href: "/#app" },
      { name: "Study Materials", description: "Downloadable resources", href: "/resources" },
      { name: "Blog & Tips", description: "French learning advice", href: "/blog" },
      { name: "Success Stories", description: "Student achievements", href: "/#testimonials" },
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
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div className="flex items-center space-x-3">
              {/* Logo Image Container */}
              <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg overflow-hidden bg-white">
                {/* Replace this img tag with your actual logo */}
                <img 
                  src="/logo.jpg" // Path to your logo image in public folder
                  alt="French Learning Center GH Logo"
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    // Fallback if logo doesn't exist
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback logo - shown if image fails to load */}
                <div className="w-full h-full bg-gradient-to-br from-[#f59e0b] to-[#eab308] rounded-lg flex items-center justify-center hidden">
                  <span className="font-bold text-[#1e3a8a] text-sm">FLC</span>
                </div>
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
                  Excellence in French Education & Edutech
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: "Home", href: "/" },
              { name: "Programs", href: "/programs" },
              { name: "For Schools", href: "/schools" },
              webDevMenu,
              { name: "Blog", href: "/blog" },
              { name: "Resources", href: "/resources" },
              { name: "Contact", href: "/contact" },
            ].map((item, index) => (
              <div key={item.name || item.title} className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    to={item.href}
                    className={`font-medium transition-colors hover:text-[#f59e0b] ${
                      scrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {item.name || item.title}
                  </Link>
                ) : (
                  <span className={`font-medium cursor-pointer ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}>
                    {item.name || item.title}
                  </span>
                )}
                
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
                          <Link
                            key={subIndex}
                            to={subItem.href}
                            className="block p-3 rounded-lg hover:bg-[#dbeafe] transition-colors group"
                            onClick={() => setActiveDropdown(null)}
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
                          </Link>
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
              href="/enroll"
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
                  { name: "Home", href: "/" },
                  { name: "Programs", href: "/programs" },
                  { name: "For Schools", href: "/schools" },
                  { name: "Web Development", href: "/web-development" },
                  { name: "Blog", href: "/blog" },
                  { name: "Resources", href: "/resources" },
                  { name: "Enroll", href: "/enroll" },
                  { name: "Contact", href: "/contact" },
                ].map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block py-3 px-6 text-gray-700 hover:text-[#1e3a8a] hover:bg-[#dbeafe] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-6 pt-4 border-t border-gray-200">
                  <motion.a
                    href="/enroll"
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