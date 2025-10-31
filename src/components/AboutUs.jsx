import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const features = [
    {
      icon: "🎯",
      title: "Our Mission",
      description: "To provide exceptional French language education that empowers Ghanaians with global communication skills and cultural understanding."
    },
    {
      icon: "👁️",
      title: "Our Vision",
      description: "To become Ghana's leading French learning institution, bridging cultural gaps and creating international opportunities."
    },
    {
      icon: "⭐",
      title: "Our Values",
      description: "Excellence, Innovation, Cultural Sensitivity, Student Success, and Community Impact."
    }
  ];

  const milestones = [
    { year: "2018", event: "Founded with 20 students" },
    { year: "2020", event: "Launched digital learning platform" },
    { year: "2022", event: "Partnered with 50+ schools" },
    { year: "2024", event: "10,000+ students trained" }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-[#dbeafe] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
            About French Learning Center GH
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading Ghana's French education revolution since 2018. We combine traditional teaching excellence with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-[#1e3a8a] mb-6">Our Story</h3>
            <p className="text-lg text-gray-600 mb-6">
              Founded by a team of passionate French educators and technology experts, French Learning Center GH emerged from a simple observation: 
              Ghanaians needed better, more accessible French education that aligns with our cultural context.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              What started as a small classroom in Accra has grown into a comprehensive learning institution serving thousands of students 
              across Ghana through both physical classes and our innovative digital platform.
            </p>
            <div className="bg-[#1e3a8a] text-white p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-4 text-[#f59e0b]">Why Choose Us?</h4>
              <ul className="space-y-2">
                <li>✅ Ghanaian-owned and operated</li>
                <li>✅ Certified French instructors</li>
                <li>✅ GES curriculum aligned</li>
                <li>✅ Proven track record of success</li>
                <li>✅ Both online and in-person classes</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-6 rounded-2xl shadow-lg border border-[#dbeafe]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-[#1e3a8a] mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-[#1e3a8a] text-center mb-12">Our Journey</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#f59e0b] text-[#1e3a8a] w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {milestone.year}
                </div>
                <p className="text-gray-700 font-medium">{milestone.event}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;