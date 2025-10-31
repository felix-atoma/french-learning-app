import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    position: '',
    email: '',
    phone: '',
    students: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.school.trim()) newErrors.school = 'School name is required'
    if (!formData.position) newErrors.position = 'Please select your position'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after successful submission
      setFormData({
        name: '',
        school: '',
        position: '',
        email: '',
        phone: '',
        students: '',
        message: ''
      })
    }, 2000)
  }

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      details: "frenchlearningcentergh@gmail.com",
      action: "mailto:frenchlearningcentergh@gmail.com",
      description: "Send us detailed inquiries and we'll respond within 24 hours"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+233 59 1038 729 | +233 24 417 3068",
      action: "tel:+233591038729",
      description: "Available Monday to Friday, 8:00 AM - 6:00 PM"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: "Chat with our team",
      action: "https://wa.me/233591038729",
      description: "Quick responses for immediate questions and demo requests"
    }
  ]

  // Success message component
  if (isSubmitted) {
    return (
      <section id="contact" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-2xl">✓</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
              Thank You!
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We've received your free trial request and will contact you within 24 hours to discuss how our French Learning App can benefit your school.
            </p>
            <motion.button
              onClick={() => setIsSubmitted(false)}
              className="bg-[#1e3a8a] text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-[#1e40af] transition-colors shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Another Request
            </motion.button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
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
            <span>🚀</span>
            <span>Get Started Today</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
            Ready to Transform French Learning?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join the growing number of Ghanaian schools that are revolutionizing French education. 
            Start your free trial or schedule a personalized demo with our team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-[#1e3a8a] mb-8">
              Let's Start the Conversation
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you're ready to start your free trial or just want to learn more about how our app can benefit your school, 
              we're here to help every step of the way.
            </p>

            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  className="flex items-start space-x-4 p-6 bg-[#dbeafe] rounded-2xl hover:bg-[#1e40af] hover:text-white transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{method.title}</h4>
                    <p className="font-semibold text-[#1e3a8a] group-hover:text-white transition-colors">
                      {method.details}
                    </p>
                    <p className="text-sm text-gray-600 group-hover:text-[#dbeafe] transition-colors mt-1">
                      {method.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Facts */}
            <motion.div
              className="bg-[#1e3a8a] text-white rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h4 className="text-xl font-bold mb-4 text-[#f59e0b]">
                Why Schools Choose Us
              </h4>
              <div className="space-y-3">
                {[
                  "✅ 100% GES Syllabus Alignment",
                  "✅ Ghanaian Cultural Context",
                  "✅ Teacher-Friendly Platform",
                  "✅ Proven Student Results",
                  "✅ Ongoing Support & Updates"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#dbeafe] rounded-3xl p-8 shadow-xl border border-[#1e40af]/20"
          >
            <h3 className="text-3xl font-bold text-[#1e3a8a] mb-6">
              Request Free Trial
            </h3>
            <p className="text-gray-600 mb-8">
              Fill out this form and we'll get back to you within 24 hours to set up your free 1-month trial.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#1e3a8a] font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all duration-300 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label className="block text-[#1e3a8a] font-semibold mb-2">
                    School Name *
                  </label>
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all duration-300 ${
                      errors.school ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                    placeholder="Your school name"
                  />
                  {errors.school && <p className="text-red-500 text-sm mt-1">{errors.school}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#1e3a8a] font-semibold mb-2">
                    Your Position *
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all duration-300 ${
                      errors.position ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  >
                    <option value="">Select your position</option>
                    <option value="Headteacher">Headteacher</option>
                    <option value="French Teacher">French Teacher</option>
                    <option value="Curriculum Coordinator">Curriculum Coordinator</option>
                    <option value="ICT Coordinator">ICT Coordinator</option>
                    <option value="Administrator">Administrator</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
                </div>
                
                <div>
                  <label className="block text-[#1e3a8a] font-semibold mb-2">
                    Number of French Students
                  </label>
                  <input
                    type="number"
                    name="students"
                    value={formData.students}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all duration-300"
                    placeholder="Approximate number"
                    min="0"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#1e3a8a] font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                    placeholder="your.email@school.edu.gh"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label className="block text-[#1e3a8a] font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all duration-300 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                    placeholder="+233 XX XXX XXXX"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-[#1e3a8a] font-semibold mb-2">
                  Message or Specific Requirements
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your school's specific needs, challenges with French teaching, or any questions you have..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1e40af] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1e3a8a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg flex items-center justify-center"
                whileHover={isSubmitting ? {} : { scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Processing...
                  </>
                ) : (
                  '🚀 Request Free 1-Month Trial'
                )}
              </motion.button>

              <p className="text-center text-sm text-gray-500">
                By submitting this form, you agree to our terms and privacy policy. 
                We respect your data and will never share it with third parties.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Let Your Students Miss Out
          </h3>
          <p className="text-xl text-[#dbeafe] mb-8 max-w-2xl mx-auto">
            The gap between exam success and real conversational fluency is real. 
            Start bridging it today with our customized French Learning App.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#f59e0b] text-[#1e3a8a] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#eab308] transition-colors shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Free Trial
            </motion.button>
            <motion.a
              href="tel:+233591038729"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#1e40af] transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Call Now: 059 1038 729
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact