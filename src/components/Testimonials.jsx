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
    : count.toString();

  return <span ref={ref}>{displayValue}</span>;
};

// Animated Spider Web Component
const AnimatedSpiderWeb = () => {
  return (
    <div className="absolute inset-0 opacity-[0.03] overflow-hidden">
      {/* Main Web Structure */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        {/* Concentric Circles */}
        {[100, 200, 300, 400].map((size, index) => (
          <motion.div
            key={index}
            className="absolute border border-blue-300 rounded-full"
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
        {Array.from({ length: 12 }).map((_, index) => {
          const angle = (index * 30) * (Math.PI / 180);
          return (
            <motion.div
              key={index}
              className="absolute bg-blue-300 h-0.5 origin-left"
              style={{
                width: 200,
                left: '50%',
                top: '50%',
                transform: `rotate(${index * 30}deg)`,
              }}
              animate={{ scaleX: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
            />
          );
        })}

        {/* Floating Web Particles */}
        {Array.from({ length: 15 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
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
        {[50, 100, 150].map((size, index) => (
          <motion.div
            key={index}
            className="absolute border border-blue-200 rounded-full"
            style={{
              width: size,
              height: size,
              left: -size/2,
              top: -size/2,
            }}
            animate={{ opacity: [0.3, 0.1, 0.3] }}
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
        {[80, 120].map((size, index) => (
          <motion.div
            key={index}
            className="absolute border border-blue-400 rounded-full"
            style={{
              width: size,
              height: size,
              left: -size/2,
              top: -size/2,
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 5 + index * 2, repeat: Infinity }}
          />
        ))}
      </motion.div>
    </div>
  );
};

// Animated Bubble Design Component
const AnimatedBubbles = () => {
  return (
    <div className="absolute inset-0 opacity-[0.04] overflow-hidden pointer-events-none">
      {/* Large Floating Bubbles */}
      {Array.from({ length: 8 }).map((_, index) => (
        <motion.div
          key={`bubble-${index}`}
          className="absolute rounded-full bg-gradient-to-br from-blue-200 to-purple-200"
          style={{
            width: 60 + Math.random() * 80,
            height: 60 + Math.random() * 80,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Medium Bubbles */}
      {Array.from({ length: 12 }).map((_, index) => (
        <motion.div
          key={`medium-bubble-${index}`}
          className="absolute rounded-full bg-gradient-to-br from-cyan-200 to-blue-200"
          style={{
            width: 30 + Math.random() * 40,
            height: 30 + Math.random() * 40,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 30 - 15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Small Bubbles */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={`small-bubble-${index}`}
          className="absolute rounded-full bg-gradient-to-br from-green-200 to-blue-200"
          style={{
            width: 10 + Math.random() * 20,
            height: 10 + Math.random() * 20,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Bubble Clusters */}
      {Array.from({ length: 4 }).map((_, clusterIndex) => (
        <motion.div
          key={`cluster-${clusterIndex}`}
          className="absolute"
          style={{
            left: `${20 + clusterIndex * 20}%`,
            top: `${20 + clusterIndex * 15}%`,
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40 + clusterIndex * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Array.from({ length: 6 }).map((_, bubbleIndex) => (
            <motion.div
              key={`cluster-bubble-${clusterIndex}-${bubbleIndex}`}
              className="absolute rounded-full bg-gradient-to-br from-purple-200 to-pink-200"
              style={{
                width: 15 + bubbleIndex * 3,
                height: 15 + bubbleIndex * 3,
                left: Math.cos((bubbleIndex * 60) * (Math.PI / 180)) * 40,
                top: Math.sin((bubbleIndex * 60) * (Math.PI / 180)) * 40,
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + bubbleIndex * 0.5,
                repeat: Infinity,
                delay: bubbleIndex * 0.2,
              }}
            />
          ))}
        </motion.div>
      ))}

      {/* Rising Bubble Streams */}
      {Array.from({ length: 3 }).map((_, streamIndex) => (
        <div
          key={`stream-${streamIndex}`}
          className="absolute bottom-0"
          style={{
            left: `${20 + streamIndex * 30}%`,
          }}
        >
          {Array.from({ length: 8 }).map((_, bubbleIndex) => (
            <motion.div
              key={`stream-bubble-${streamIndex}-${bubbleIndex}`}
              className="absolute rounded-full bg-gradient-to-br from-blue-100 to-cyan-100"
              style={{
                width: 8 + bubbleIndex * 2,
                height: 8 + bubbleIndex * 2,
                left: Math.random() * 20 - 10,
              }}
              animate={{
                y: [0, -800],
                opacity: [0, 0.4, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: bubbleIndex * 1.5 + streamIndex * 2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const testimonials = [
    {
      name: "Kwame Asare",
      role: "Student, Age 16",
      image: "👦",
      content: "I went from failing French to scoring A1 in my WASSCE! The app made learning fun and the teachers were incredibly supportive.",
      school: "Presbyterian Boys' Senior High",
      rating: 5
    },
    {
      name: "Mrs. Abena Mensah",
      role: "French Teacher",
      image: "👩‍🏫",
      content: "The teacher dashboard has transformed how I track my students' progress. I can now identify struggling students early and provide targeted help.",
      school: "St. Mary's Senior High",
      rating: 5
    },
    {
      name: "Mr. David Osei",
      role: "Headmaster",
      image: "👨‍💼",
      content: "Partnering with French Learning Center GH has significantly improved our French department's results. Our pass rate increased from 45% to 85% in one year.",
      school: "Accra Academy",
      rating: 5
    },
    {
      name: "Ama Serwaa",
      role: "Parent",
      image: "👩",
      content: "My daughter used to dread French classes. Now she spends hours on the app voluntarily! Her confidence has grown tremendously.",
      school: "Parent, Zion Girls School",
      rating: 5
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Trained", duration: 2.5 },
    { number: "50+", label: "Partner Schools", duration: 2 },
    { number: "95%", label: "Success Rate", duration: 2.2 },
    { number: "4.9/5", label: "Student Rating", duration: 1.8 }
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      
      {/* Animated Spider Web Background */}
      <AnimatedSpiderWeb />

      {/* Animated Bubble Background */}
      <AnimatedBubbles />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-4xl opacity-10"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        ⭐
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-3xl opacity-10"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        🎓
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>💬</span>
            <span>Voices of Success</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforming <span className="text-blue-700">French Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how students, educators, and parents across Ghana are achieving remarkable results 
            with our innovative approach to French language learning.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="flex items-start space-x-6">
                {/* Avatar */}
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {testimonial.image}
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-amber-400 text-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.15 + i * 0.1 }}
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <motion.p
                    className="text-gray-700 mb-6 leading-relaxed text-lg italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  >
                    "{testimonial.content}"
                  </motion.p>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                  >
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-blue-600 text-sm font-medium">{testimonial.role}</div>
                    <div className="text-gray-500 text-sm">{testimonial.school}</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-700 via-blue-800 to-purple-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-20"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-3">
                  <AnimatedCounter value={stat.number} duration={stat.duration} />
                </div>
                <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating Achievement Badge */}
          <motion.div
            className="absolute -top-6 -right-6 bg-amber-400 text-blue-900 px-6 py-3 rounded-2xl font-bold shadow-lg rotate-12"
            animate={{ y: [0, -10, 0], rotate: [12, 15, 12] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🏆 Proven Results
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;