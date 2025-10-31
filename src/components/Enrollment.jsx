// components/Enrollment.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Enrollment = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const [selectedProgram, setSelectedProgram] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    program: '',
    schedule: '',
    experience: ''
  });

  const programs = [
    {
      id: 'beginner',
      name: 'Beginner French',
      duration: '3 Months',
      price: '₵300',
      description: 'Perfect for absolute beginners. Learn basic vocabulary, greetings, and simple conversations.',
      features: ['Basic Vocabulary', 'Simple Conversations', 'French Alphabet', 'Cultural Basics']
    },
    {
      id: 'intermediate',
      name: 'Intermediate French',
      duration: '6 Months',
      price: '₵550',
      description: 'Build fluency with advanced vocabulary, grammar, and complex conversations.',
      features: ['Advanced Vocabulary', 'Grammar Mastery', 'Reading Comprehension', 'Writing Skills']
    },
    {
      id: 'advanced',
      name: 'Advanced French',
      duration: '9 Months',
      price: '₵800',
      description: 'Achieve fluency with business French, academic writing, and professional communication.',
      features: ['Fluency Development', 'Business French', 'Academic Writing', 'Exam Preparation']
    },
    {
      id: 'delf',
      name: 'DELF/DALF Prep',
      duration: '3 Months',
      price: '₵450',
      description: 'Specialized preparation for French certification exams with mock tests and strategies.',
      features: ['Exam Strategies', 'Mock Tests', 'Speaking Practice', 'Certification Guidance']
    }
  ];

  const enrollmentMethods = [
    {
      icon: '📞',
      title: 'Call Us Directly',
      description: 'Speak with our enrollment advisor for personalized assistance',
      action: 'tel:+233591038729',
      buttonText: 'Call Now',
      color: 'bg-blue-500'
    },
    {
      icon: '💬',
      title: 'WhatsApp Enrollment',
      description: 'Quick and convenient enrollment via WhatsApp',
      action: 'https://wa.me/233591038729',
      buttonText: 'Start Chat',
      color: 'bg-green-500'
    },
    {
      icon: '📧',
      title: 'Email Registration',
      description: 'Send us your details and we\'ll get back to you promptly',
      action: 'mailto:frenchlearningcentergh@gmail.com',
      buttonText: 'Send Email',
      color: 'bg-red-500'
    },
    {
      icon: '📍',
      title: 'Visit Our Center',
      description: 'Come to our center for face-to-face consultation and registration',
      action: '#contact',
      buttonText: 'Get Directions',
      color: 'bg-purple-500'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Enrollment form submitted:', formData);
    alert('Thank you for your enrollment request! We will contact you within 24 hours to complete your registration.');
  };

  return (
    <section id="enrollment-form" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
            Complete Your Enrollment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your preferred enrollment method and start your French learning journey today.
          </p>
        </motion.div>

        {/* Program Selection */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-8 text-center">Select Your Program</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                className={`bg-white rounded-2xl shadow-lg border-2 p-6 cursor-pointer transition-all duration-300 ${
                  selectedProgram === program.id 
                    ? 'border-[#f59e0b] bg-[#fef3c7]' 
                    : 'border-gray-200 hover:shadow-xl'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProgram(program.id)}
              >
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🇫🇷</div>
                  <h4 className="font-bold text-[#1e3a8a] text-lg mb-1">{program.name}</h4>
                  <div className="text-[#f59e0b] font-bold text-xl mb-2">{program.price}</div>
                  <div className="text-sm text-gray-500">{program.duration}</div>
                </div>
                <p className="text-gray-600 text-sm mb-4 text-center">{program.description}</p>
                <ul className="space-y-1 mb-4">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-600">
                      <span className="text-[#f59e0b] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={`text-center py-1 rounded-full text-xs font-semibold ${
                  selectedProgram === program.id 
                    ? 'bg-[#1e3a8a] text-white' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {selectedProgram === program.id ? 'Selected' : 'Click to Select'}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enrollment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-8 text-center">Choose Enrollment Method</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enrollmentMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h4 className="font-bold text-[#1e3a8a] mb-2">{method.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                <motion.a
                  href={method.action}
                  className={`${method.color} text-white px-4 py-2 rounded-lg font-semibold text-sm inline-block w-full hover:opacity-90 transition-opacity`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {method.buttonText}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Enrollment Form */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] rounded-2xl p-8 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#f59e0b]">Quick Enrollment Form</h3>
              <p className="text-blue-100 mb-6">
                Prefer to fill out a form? Submit your details and we'll contact you to complete your enrollment.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full p-3 rounded-lg text-gray-800"
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg text-gray-800"
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg text-gray-800"
                  required
                  onChange={handleInputChange}
                />
                <select 
                  name="program" 
                  className="w-full p-3 rounded-lg text-gray-800"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Program</option>
                  {programs.map(program => (
                    <option key={program.id} value={program.id}>
                      {program.name} - {program.price}
                    </option>
                  ))}
                </select>
                <motion.button
                  type="submit"
                  className="w-full bg-[#f59e0b] text-[#1e3a8a] py-3 rounded-lg font-bold hover:bg-[#eab308] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Enrollment Callback
                </motion.button>
              </form>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h4 className="text-xl font-bold mb-4">Why Enroll With Us?</h4>
              <div className="space-y-3 text-left">
                {[
                  "✅ Flexible payment plans available",
                  "✅ Certified French instructors",
                  "✅ Both online and in-person classes",
                  "✅ GES curriculum aligned",
                  "✅ Proven success with 10,000+ students",
                  "✅ Cultural immersion activities"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Payment Information */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6 text-center">Payment Options</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-green-50 rounded-xl">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="font-bold text-[#1e3a8a] mb-2">Mobile Money</h4>
              <p className="text-gray-600 text-sm">MTN, Vodafone, AirtelTigo</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl mb-3">🏦</div>
              <h4 className="font-bold text-[#1e3a8a] mb-2">Bank Transfer</h4>
              <p className="text-gray-600 text-sm">All major Ghanaian banks</p>
            </div>
            <div className="p-6 bg-yellow-50 rounded-xl">
              <div className="text-3xl mb-3">💵</div>
              <h4 className="font-bold text-[#1e3a8a] mb-2">Cash Payment</h4>
              <p className="text-gray-600 text-sm">At our center location</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Enrollment;