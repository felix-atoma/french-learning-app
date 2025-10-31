import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace(/[^0-9]/g, ''));
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  const displayValue = value.includes('%') 
    ? `${count}%`
    : value.includes('+')
    ? `${count}+`
    : value.includes('.')
    ? `${(count / 10).toFixed(1)}`
    : count.toString();

  return <span ref={ref}>{displayValue}</span>;
};

// Animated Spider Web Component
const AnimatedSpiderWeb = () => {
  return (
    <div className="absolute inset-0 opacity-[0.08] overflow-hidden pointer-events-none">
      {/* Main Web Structure */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        {/* Concentric Circles */}
        {[150, 250, 350, 450, 550].map((size, index) => (
          <motion.div
            key={index}
            className="absolute border-2 border-blue-400 rounded-full"
            style={{
              width: size,
              height: size,
              left: -size/2,
              top: -size/2,
            }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 8 + index * 2, repeat: Infinity, delay: index * 0.5 }}
          />
        ))}

        {/* Radial Lines */}
        {Array.from({ length: 16 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-blue-400 h-1 origin-left"
            style={{
              width: 280,
              left: '50%',
              top: '50%',
              transform: `rotate(${index * 22.5}deg)`,
            }}
            animate={{ scaleX: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
          />
        ))}

        {/* Floating Web Particles */}
        {Array.from({ length: 25 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 600 - 300}px`,
              top: `${Math.random() * 600 - 300}px`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Secondary Rotating Web */}
      <motion.div
        className="absolute top-1/4 left-1/4"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        {[80, 140, 200].map((size, index) => (
          <motion.div
            key={index}
            className="absolute border-2 border-purple-400 rounded-full"
            style={{
              width: size,
              height: size,
              left: -size/2,
              top: -size/2,
            }}
            animate={{ opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 6 + index * 1.5, repeat: Infinity }}
          />
        ))}
      </motion.div>

      {/* Third Rotating Web */}
      <motion.div
        className="absolute bottom-1/4 right-1/4"
        animate={{ rotate: 180 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {[100, 160].map((size, index) => (
          <motion.div
            key={index}
            className="absolute border-2 border-indigo-400 rounded-full"
            style={{
              width: size,
              height: size,
              left: -size/2,
              top: -size/2,
            }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 5 + index * 2, repeat: Infinity }}
          />
        ))}
      </motion.div>
    </div>
  );
};

// Floating Icons Component
const FloatingIcons = () => {
  const icons = [
    { emoji: '🎯', top: '10%', left: '5%', duration: 5 },
    { emoji: '📚', top: '20%', right: '8%', duration: 6 },
    { emoji: '✨', bottom: '15%', left: '10%', duration: 4.5 },
    { emoji: '🚀', top: '60%', right: '5%', duration: 5.5 },
    { emoji: '💡', top: '40%', left: '3%', duration: 6.5 },
  ];

  return (
    <>
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-5xl opacity-10"
          style={{
            top: icon.top,
            bottom: icon.bottom,
            left: icon.left,
            right: icon.right,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {icon.emoji}
        </motion.div>
      ))}
    </>
  );
};

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const testimonials = [
    {
      name: "Kwame Asare",
      role: "WASSCE Graduate",
      image: "👦",
      content: "From struggling with basic phrases to scoring A1 in my exams! The interactive lessons and practice tests made all the difference. I never thought French could be this enjoyable.",
      school: "Presbyterian Boys' SHS",
      rating: 5,
      achievement: "A1 Grade"
    },
    {
      name: "Mrs. Abena Mensah",
      role: "French Department Head",
      image: "👩‍🏫",
      content: "The teacher dashboard revolutionized my classroom. Real-time analytics help me identify students who need extra support, and the automated grading saves me hours every week.",
      school: "St. Mary's Senior High",
      rating: 5,
      achievement: "85% Pass Rate"
    },
    {
      name: "Mr. David Osei",
      role: "School Administrator",
      image: "👨‍💼",
      content: "Our partnership transformed our French program. Student engagement skyrocketed, and our WASSCE results improved dramatically. This platform is a game-changer for Ghanaian education.",
      school: "Accra Academy",
      rating: 5,
      achievement: "40% Improvement"
    },
    {
      name: "Ama Serwaa",
      role: "Proud Parent",
      image: "👩",
      content: "My daughter's transformation has been incredible. She went from avoiding French homework to teaching me phrases at dinner! Her confidence and grades have soared beyond our expectations.",
      school: "Zion Girls School Parent",
      rating: 5,
      achievement: "Top 5 in Class"
    },
    {
      name: "Kofi Mensah",
      role: "University Student",
      image: "👨‍🎓",
      content: "I used this platform during SHS and it prepared me perfectly for university-level French. The comprehensive curriculum and engaging exercises built a solid foundation.",
      school: "University of Ghana",
      rating: 5,
      achievement: "Scholarship Winner"
    },
    {
      name: "Miss Akua Boateng",
      role: "French Tutor",
      image: "👩‍💼",
      content: "As a private tutor, this platform complements my teaching perfectly. The structured lessons and progress tracking help me deliver better results for my students.",
      school: "Private French Tutor",
      rating: 5,
      achievement: "10+ Students"
    }
  ];

  const stats = [
    { number: "15,000+", label: "Active Students", duration: 2.5 },
    { number: "120+", label: "Partner Schools", duration: 2 },
    { number: "97%", label: "Student Success Rate", duration: 2.2 },
    { number: "49", label: "Average Rating (4.9/5)", duration: 1.8 }
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      
      {/* Animated Spider Web Background */}
      <AnimatedSpiderWeb />
      
      {/* Floating Icons */}
      <FloatingIcons />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <span>💬</span>
            <span>Success Stories from Across Ghana</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Real Results, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Real Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students, teachers, and parents who are experiencing the future of French education in Ghana.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* Achievement Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                {testimonial.achievement}
              </div>

              <div className="relative z-10">
                {/* Avatar */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg mb-4"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {testimonial.image}
                </motion.div>

                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-amber-400 text-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed text-base">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-blue-600 text-sm font-medium">{testimonial.role}</div>
                  <div className="text-gray-500 text-sm">{testimonial.school}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute inset-0"
              animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
              transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          {/* Stats Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-3">Our Impact in Numbers</h3>
            <p className="text-blue-200 text-lg">Making a difference across Ghana, one student at a time</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.15 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.1 }}
                >
                  <AnimatedCounter value={stat.number} duration={stat.duration} />
                </motion.div>
                <div className="text-blue-100 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating Achievement Badges */}
          <motion.div
            className="absolute -top-6 -right-6 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-3 rounded-2xl font-bold shadow-xl rotate-12 hidden md:block"
            animate={{ y: [0, -10, 0], rotate: [12, 15, 12] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🏆 Award Winning
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-2xl font-bold shadow-xl -rotate-6 hidden md:block"
            animate={{ y: [0, 10, 0], rotate: [-6, -9, -6] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            ✨ Trusted Platform
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Success Story Today 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;