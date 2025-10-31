import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const TeamMember = ({ member, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:border-educational-gold/30 transition-all duration-500 group"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -15, scale: 1.02 }}
    >
      <div className="text-center mb-8">
        <motion.div 
          className="w-40 h-40 bg-gradient-to-br from-educational-blue to-educational-navy rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl font-bold relative overflow-hidden group-hover:from-educational-gold group-hover:to-yellow-500 transition-all duration-500"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {member.name.split(' ').map(n => n[0]).join('')}
          <motion.div
            className="absolute inset-0 bg-educational-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </motion.div>
        
        <motion.h3 
          className="text-3xl font-bold text-educational-navy mb-2 group-hover:text-educational-blue transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        >
          {member.name}
        </motion.h3>
        
        <motion.p 
          className="text-educational-gold font-semibold text-lg mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        >
          {member.role}
        </motion.p>
        
        <motion.p 
          className="text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
        >
          {member.qualifications}
        </motion.p>
      </div>
      
      {/* Expertise Section */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
      >
        <h4 className="font-semibold text-educational-navy mb-4 text-lg border-b border-gray-200 pb-2">
          Areas of Expertise
        </h4>
        <ul className="space-y-3">
          {member.expertise.map((item, idx) => (
            <motion.li
              key={idx}
              className="flex items-center space-x-3 text-gray-600 group-hover:text-gray-800 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.2 + 0.6 + idx * 0.1 }}
            >
              <div className="w-2 h-2 bg-educational-gold rounded-full flex-shrink-0"></div>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      
      {/* Contact Information */}
      <motion.div 
        className="border-t border-gray-200 pt-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
      >
        <h4 className="font-semibold text-educational-navy mb-4 text-lg">
          Contact Information
        </h4>
        <div className="space-y-3">
          <motion.div 
            className="flex items-center space-x-3 group cursor-pointer"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 bg-educational-gold/20 rounded-full flex items-center justify-center text-educational-gold group-hover:bg-educational-gold group-hover:text-white transition-colors">
              📞
            </div>
            <div>
              <div className="text-sm text-gray-500">Phone</div>
              <div className="font-semibold text-educational-navy">{member.contact.phone}</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-3 group cursor-pointer"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 bg-educational-gold/20 rounded-full flex items-center justify-center text-educational-gold group-hover:bg-educational-gold group-hover:text-white transition-colors">
              ✉️
            </div>
            <div>
              <div className="text-sm text-gray-500">Email</div>
              <a 
                href={`mailto:${member.contact.email}`} 
                className="font-semibold text-educational-blue hover:text-educational-navy transition-colors"
              >
                {member.contact.email}
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Specialization Badge */}
      <motion.div
        className="absolute top-6 right-6 bg-educational-gold text-educational-navy px-3 py-1 rounded-full text-sm font-semibold"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
      >
        {member.specialization}
      </motion.div>
    </motion.div>
  )
}

const Team = () => {
  const teamMembers = [
    {
      name: "Michael Djan",
      role: "French Education Specialist & Innovator",
      qualifications: "Trained French Teacher | University of Education, Winneba | French Linguistics Specialist",
      expertise: [
        "Curriculum Development & GES Syllabus Alignment",
        "French Language Pedagogy for Ghanaian Students",
        "Business French for Corporate Executives",
        "Online & Home French Tutoring Programs",
        "French Language Assessment Design",
        "Teacher Training & Professional Development"
      ],
      contact: {
        phone: "+233 59 1038 729",
        email: "frenchlearningcentergh@gmail.com"
      },
      specialization: "Education"
    },
    {
      name: "Felix Atoma",
      role: "Technology Lead & Educational Technologist",
      qualifications: "Full-Stack Software Developer | Certified Translator | Bilingual Education Specialist",
      expertise: [
        "Educational Technology Platform Development",
        "French-English Translation & Localization",
        "Mobile App Development & UX Design",
        "Digital Learning Solution Architecture",
        "Bilingual Curriculum Integration",
        "Technical Support & System Administration"
      ],
      contact: {
        phone: "+233 24 417 3068",
        email: "felixatoma2@gmail.com"
      },
      specialization: "Technology"
    }
  ]

  return (
    <section id="team" className="py-20 bg-educational-lightBlue relative overflow-hidden">
      {/* Spider web corner designs */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L64,64 M64,0 L0,64" stroke="currentColor" strokeWidth="1" className="text-educational-blue"/>
          <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-educational-blue text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span>👥</span>
            <span>Meet The Founders</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-educational-navy mb-6">
            Passionate Educators & Innovators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team combines decades of French teaching experience with cutting-edge technology expertise to create the most effective French learning solution for Ghanaian students.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-educational-gold/20 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-educational-navy mb-6">
            Our Mission & Vision
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            To revolutionize French education in Ghana by creating confident French speakers who excel not only in examinations but also in real-world conversations, 
            thereby opening doors to international opportunities and cross-cultural understanding.
          </p>
          
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              "🎯 Exam Excellence",
              "🗣️ Conversational Fluency",
              "🌍 Cultural Understanding",
              "🚀 Future Opportunities"
            ].map((item, index) => (
              <span key={index} className="bg-educational-lightBlue text-educational-navy px-4 py-2 rounded-full font-semibold">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team