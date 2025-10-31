import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const testimonials = [
    {
      name: "Kwame Asare",
      role: "Student, Age 16",
      image: "👦",
      content: "I went from failing French to scoring A1 in my WASSCE! The app made learning fun and the teachers were incredibly supportive.",
      school: "Presbyterian Boys' Senior High"
    },
    {
      name: "Mrs. Abena Mensah",
      role: "French Teacher",
      image: "👩‍🏫",
      content: "The teacher dashboard has transformed how I track my students' progress. I can now identify struggling students early and provide targeted help.",
      school: "St. Mary's Senior High"
    },
    {
      name: "Mr. David Osei",
      role: "Headmaster",
      image: "👨‍💼",
      content: "Partnering with French Learning Center GH has significantly improved our French department's results. Our pass rate increased from 45% to 85% in one year.",
      school: "Accra Academy"
    },
    {
      name: "Ama Serwaa",
      role: "Parent",
      image: "👩",
      content: "My daughter used to dread French classes. Now she spends hours on the app voluntarily! Her confidence has grown tremendously.",
      school: "Parent, Zion Girls School"
    }
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students, teachers, and parents who have experienced the French Learning Center GH difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-gradient-to-br from-[#dbeafe] to-white rounded-2xl p-6 shadow-lg border border-[#dbeafe]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl flex-shrink-0">{testimonial.image}</div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#f59e0b]">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold text-[#1e3a8a]">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    <div className="text-gray-500 text-sm">{testimonial.school}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#f59e0b]">10,000+</div>
              <div className="text-blue-200">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#f59e0b]">50+</div>
              <div className="text-blue-200">Partner Schools</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#f59e0b]">95%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#f59e0b]">4.9/5</div>
              <div className="text-blue-200">Student Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;