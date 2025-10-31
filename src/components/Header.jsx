import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3
      }
    }
  }

  const navItems = [
    { name: "About Us", href: "#about" },
    { name: "Our Programs", href: "#programs" },
    { name: "French Learning App", href: "#app" },
    { name: "For Schools", href: "#schools" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Our Team", href: "#team" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-[#1e40af]/95 backdrop-blur-md text-white shadow-lg z-50 border-b border-[#f59e0b]/20"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            {/* Logo Container - Replace with actual logo */}
            <motion.div 
              className="flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Placeholder for logo - Remove this when adding actual logo */}
              <div className="w-12 h-12 bg-[#f59e0b] rounded-lg flex items-center justify-center shadow-lg border-2 border-white">
                <span className="font-bold text-[#1e3a8a] text-xs text-center leading-tight">FLC</span>
              </div>
              
              {/* Uncomment and use this when you have the actual logo */}
              {/*
              <img 
                src="/logo.png" 
                alt="French Learning Center GH" 
                className="w-12 h-12 object-contain"
              />
              */}
            </motion.div>
            
            {/* Brand Name and Tagline */}
            <div className="flex flex-col">
              <h1 className="text-xl font-bold leading-tight">French Learning Center GH</h1>
              <p className="text-xs text-[#dbeafe] opacity-80 leading-tight">Excellence in French Education</p>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="hover:text-[#f59e0b] transition-colors relative font-medium text-sm"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f59e0b]"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div className="hidden lg:block">
            <motion.a
              href="#contact"
              className="bg-[#f59e0b] text-[#1e3a8a] px-6 py-2 rounded-lg font-bold hover:bg-[#eab308] transition-colors shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="lg:hidden p-2"
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
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden bg-[#1e3a8a]/95 mt-3 rounded-lg"
            >
              <div className="flex flex-col space-y-1 py-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="hover:text-[#f59e0b] transition-colors py-2 px-4 hover:bg-[#1e40af]/50 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                {/* Mobile CTA Button */}
                <motion.a
                  href="#contact"
                  className="mx-4 mt-4 bg-[#f59e0b] text-[#1e3a8a] py-2 rounded-lg font-bold text-center hover:bg-[#eab308] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header