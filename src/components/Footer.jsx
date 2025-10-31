import React, { useState, useEffect } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const socialMedia = [
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/frenchlearningcentergh', color: 'hover:bg-blue-500' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/frenchlearningcentergh', color: 'hover:bg-pink-500' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/frenchcentergh', color: 'hover:bg-blue-400' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/frenchlearningcentergh', color: 'hover:bg-blue-600' },
    { name: 'YouTube', icon: '📺', url: 'https://youtube.com/@frenchlearningcentergh', color: 'hover:bg-red-500' },
    { name: 'WhatsApp', icon: '💬', url: 'https://wa.me/233591038729', color: 'hover:bg-green-500' }
  ]

  return (
    <>
      {/* Scroll to Top Button - Fixed position */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-[#f59e0b] text-[#1e3a8a] rounded-full shadow-2xl border-2 border-white flex items-center justify-center transition-all duration-300 z-50 ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-10 scale-50 pointer-events-none'
        } hover:scale-110 hover:bg-[#eab308] active:scale-95`}
        aria-label="Scroll to top"
      >
        <div className="transform -translate-y-0.5">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
          </svg>
        </div>
        
        {/* Animated border effect */}
        <div className="absolute inset-0 rounded-full border-2 border-[#f59e0b] animate-ping opacity-0"></div>
      </button>

      <footer className="bg-[#1e3a8a] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 95%, #f59e0b 100%),
              linear-gradient(0deg, transparent 95%, #f59e0b 100%)
            `,
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0'
          }}></div>
          
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 49%, #f59e0b 50%, transparent 51%),
              linear-gradient(-45deg, transparent 49%, #f59e0b 50%, transparent 51%)
            `,
            backgroundSize: '40px 40px',
            opacity: 0.2
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Main Footer Content - Reduced padding */}
          <div className="py-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#f59e0b] to-[#eab308] rounded-lg flex items-center justify-center shadow-lg transform rotate-45 border border-white">
                      <span className="font-bold text-[#1e3a8a] text-xs transform -rotate-45">FLC</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-white to-[#dbeafe] bg-clip-text text-transparent">
                      French Learning Center GH
                    </h3>
                    <p className="text-[#dbeafe] text-xs">Excellence in French Education</p>
                  </div>
                </div>
                <p className="text-[#dbeafe] text-sm mb-4 leading-relaxed max-w-md border-l-2 border-[#f59e0b] pl-3">
                  Transforming French education in Ghana through innovative learning solutions.
                </p>
                
                {/* Social Media Links */}
                <div className="mb-3">
                  <h4 className="font-semibold text-sm mb-2 text-[#f59e0b]">Follow Us</h4>
                  <div className="flex flex-wrap gap-2">
                    {socialMedia.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-8 h-8 bg-[#1e40af] rounded flex items-center justify-center text-sm transition-all duration-300 ${social.color} hover:scale-110 border border-[#374151]`}
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-sm mb-3 text-[#f59e0b] relative inline-block">
                  Quick Links
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#f59e0b] to-transparent"></div>
                </h4>
                <ul className="space-y-2 text-sm">
                  {[
                    { name: "About Us", href: "#about" },
                    { name: "Programs", href: "#programs" },
                    { name: "Learning App", href: "#app" },
                    { name: "For Schools", href: "#schools" },
                    { name: "Testimonials", href: "#testimonials" },
                    { name: "Contact", href: "#contact" }
                  ].map((link, index) => (
                    <li key={index} className="group">
                      <a 
                        href={link.href} 
                        className="text-[#dbeafe] hover:text-[#f59e0b] transition-all duration-200 flex items-center text-xs"
                      >
                        <span className="w-1 h-1 bg-[#f59e0b] rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold text-sm mb-3 text-[#f59e0b] relative inline-block">
                  Contact
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#f59e0b] to-transparent"></div>
                </h4>
                <div className="space-y-2 text-sm">
                  {[
                    { icon: '📧', text: 'frenchlearningcentergh@gmail.com', href: 'mailto:frenchlearningcentergh@gmail.com' },
                    { icon: '📞', text: '+233 59 1038 729', href: 'tel:+233591038729' },
                    { icon: '📱', text: '+233 24 417 3068', href: 'tel:+233244173068' },
                    { icon: '🌍', text: 'Nationwide', href: null }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-[#1e40af] rounded flex items-center justify-center text-xs border border-[#374151]">
                        {contact.icon}
                      </div>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-[#dbeafe] text-xs hover:text-[#f59e0b] transition-colors flex-1 truncate"
                        >
                          {contact.text}
                        </a>
                      ) : (
                        <span className="text-[#dbeafe] text-xs flex-1">{contact.text}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Online Status */}
                <div className="mt-3 p-2 bg-[#1e40af] rounded border border-[#374151]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#dbeafe]">Support</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-xs">Online</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pattern Separator - Smaller */}
            <div className="my-4 flex items-center justify-center">
              <div className="flex space-x-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-0.5 h-4 bg-gradient-to-b from-transparent via-[#f59e0b] to-transparent opacity-40"
                    style={{
                      transform: `rotate(${i * 22.5}deg)`
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Bottom Bar - Compact */}
            <div className="border-t border-[#374151] pt-4">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                <div className="text-[#dbeafe] text-xs flex items-center">
                  <span className="mr-1">© {currentYear} French Learning Center GH</span>
                  <div className="flex space-x-1">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="w-0.5 h-0.5 bg-[#f59e0b] rounded-full"></div>
                    ))}
                  </div>
                </div>
                
                {/* Policy Links */}
                <div className="flex flex-wrap justify-center gap-3 text-xs text-[#dbeafe]">
                  {['Privacy', 'Terms', 'Support'].map((item, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="hover:text-[#f59e0b] transition-colors duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mission Statement - Smaller */}
              <div className="text-center mt-4 pt-3 border-t border-[#374151]">
                <p className="text-[#dbeafe] text-xs italic max-w-md mx-auto">
                  "Empowering Ghanaian students with French language skills for global opportunities."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Small decorative element */}
        <div className="absolute bottom-2 right-2 opacity-20">
          <div className="flex space-x-0.5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="w-0.5 h-3 bg-[#f59e0b] transform -skew-x-12"
              ></div>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer