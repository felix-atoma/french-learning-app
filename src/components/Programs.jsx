import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Programs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const programs = [
    {
      level: "Beginner",
      duration: "3 Months",
      price: "₵300",
      features: [
        "Basic French vocabulary",
        "Simple conversations",
        "French alphabet & pronunciation",
        "Greetings and introductions",
        "Cultural basics"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      level: "Intermediate",
      duration: "6 Months",
      price: "₵550",
      features: [
        "Advanced vocabulary",
        "Complex conversations",
        "Grammar mastery",
        "Reading comprehension",
        "Writing skills"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      level: "Advanced",
      duration: "9 Months",
      duration: "9 Months",
      price: "₵800",
      features: [
        "Fluency development",
        "Business French",
        "Academic French",
        "Professional writing",
        "Exam preparation"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      level: "DELF/DALF Prep",
      duration: "3 Months",
      price: "₵450",
      features: [
        "Exam strategies",
        "Mock tests",
        "Speaking practice",
        "Writing exercises",
        "Certification guidance"
      ],
      color: "from-red-500 to-red-600"
    }
  ];

  const specialPrograms = [
    {
      title: "School Partnerships",
      description: "Custom French programs for primary and secondary schools",
      icon: "🏫"
    },
    {
      title: "Corporate Training",
      description: "French for businesses and professionals",
      icon: "💼"
    },
    {
      title: "Summer Intensive",
      description: "Accelerated learning during holidays",
      icon: "☀️"
    },
    {
      title: "Online Classes",
      description: "Learn from anywhere in Ghana",
      icon: "💻"
    }
  ];

  return (
    <section id="programs" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
            Our French Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive French courses designed for all levels, from complete beginners to advanced speakers seeking certification.
          </p>
        </motion.div>

        {/* Main Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.level}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className={`bg-gradient-to-r ${program.color} text-white p-6 text-center`}>
                <h3 className="text-2xl font-bold mb-2">{program.level}</h3>
                <div className="text-3xl font-bold mb-2">{program.price}</div>
                <div className="text-white/80">{program.duration}</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-[#f59e0b] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="w-full bg-[#1e3a8a] text-white py-3 rounded-lg font-bold hover:bg-[#1e40af] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Programs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-[#1e3a8a] text-center mb-12">Special Programs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                className="bg-[#dbeafe] p-6 rounded-2xl text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h4 className="text-xl font-bold text-[#1e3a8a] mb-2">{program.title}</h4>
                <p className="text-gray-600">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] rounded-2xl p-8 text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Not Sure Which Program is Right for You?</h3>
          <p className="text-xl text-[#dbeafe] mb-6">Take our free placement test or schedule a consultation with our advisors.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              href="#contact"
              className="bg-[#f59e0b] text-[#1e3a8a] px-8 py-3 rounded-lg font-bold hover:bg-[#eab308] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Free Placement Test
            </motion.a>
            <motion.a
              href="#contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#1e40af] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;