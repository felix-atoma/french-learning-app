// components/Resources.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Resources = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const [selectedType, setSelectedType] = useState('all');

  const resourceCategories = [
    {
      id: 'worksheets',
      name: 'Worksheets',
      icon: '📝',
      description: 'Printable exercises and activities',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'lesson-plans',
      name: 'Lesson Plans',
      icon: '📚',
      description: 'Structured teaching guides',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'audio',
      name: 'Audio Resources',
      icon: '🎧',
      description: 'Pronunciation and listening practice',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'videos',
      name: 'Video Lessons',
      icon: '🎬',
      description: 'Visual learning materials',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'assessments',
      name: 'Assessments',
      icon: '📊',
      description: 'Tests and evaluation tools',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'games',
      name: 'Interactive Games',
      icon: '🎮',
      description: 'Engaging learning activities',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const resources = [
    {
      id: 1,
      title: "Beginner French Vocabulary Worksheets",
      description: "20+ printable worksheets covering basic vocabulary topics for JHS students.",
      type: "worksheets",
      level: "Beginner",
      format: "PDF",
      size: "2.4 MB",
      downloads: 1247,
      free: true
    },
    {
      id: 2,
      title: "DELF A1 Speaking Practice Audio",
      description: "Authentic speaking exercises with native speaker recordings and transcripts.",
      type: "audio",
      level: "All Levels",
      format: "MP3 + PDF",
      size: "15.2 MB",
      downloads: 892,
      free: true
    },
    {
      id: 3,
      title: "Complete French Grammar Guide",
      description: "Comprehensive grammar reference with examples and exercises for teachers.",
      type: "worksheets",
      level: "Intermediate",
      format: "PDF",
      size: "8.7 MB",
      downloads: 1563,
      free: false
    },
    {
      id: 4,
      title: "French Pronunciation Video Series",
      description: "10 video lessons focusing on common pronunciation challenges for Ghanaian learners.",
      type: "videos",
      level: "Beginner",
      format: "MP4",
      size: "245 MB",
      downloads: 734,
      free: true
    },
    {
      id: 5,
      title: "Weekly Lesson Plan Template",
      description: "Structured template for planning French lessons aligned with GES curriculum.",
      type: "lesson-plans",
      level: "Teacher",
      format: "DOCX",
      size: "0.8 MB",
      downloads: 987,
      free: true
    },
    {
      id: 6,
      title: "Interactive Vocabulary Games Pack",
      description: "5 digital games for practicing French vocabulary in classroom settings.",
      type: "games",
      level: "All Levels",
      format: "ZIP",
      size: "12.3 MB",
      downloads: 645,
      free: false
    },
    {
      id: 7,
      title: "End-of-Term Assessment Papers",
      description: "Ready-to-use test papers for JHS Terms 1, 2, and 3 with answer keys.",
      type: "assessments",
      level: "JHS",
      format: "PDF",
      size: "3.2 MB",
      downloads: 1123,
      free: true
    },
    {
      id: 8,
      title: "French Cultural Activities Guide",
      description: "Cultural immersion activities and projects for deeper language understanding.",
      type: "lesson-plans",
      level: "Advanced",
      format: "PDF",
      size: "5.6 MB",
      downloads: 456,
      free: true
    }
  ];

  const filteredResources = selectedType === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === selectedType);

  const freeResources = resources.filter(resource => resource.free);
  const popularResources = [...resources].sort((a, b) => b.downloads - a.downloads).slice(0, 3);

  return (
    <section id="resources" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
            Teaching Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download high-quality French learning materials, lesson plans, and teaching aids designed specifically for Ghanaian classrooms.
          </p>
        </motion.div>

        {/* Resource Categories */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={() => setSelectedType('all')}
            className={`p-4 rounded-2xl text-center transition-all duration-300 ${
              selectedType === 'all'
                ? 'bg-[#1e3a8a] text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <div className="text-2xl mb-2">📂</div>
            <div className="font-semibold text-sm">All Resources</div>
            <div className="text-xs opacity-75">{resources.length} items</div>
          </button>

          {resourceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedType(category.id)}
              className={`p-4 rounded-2xl text-center transition-all duration-300 ${
                selectedType === category.id
                  ? 'bg-gradient-to-r text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } ${selectedType === category.id ? category.color : ''}`}
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="font-semibold text-sm">{category.name}</div>
              <div className="text-xs opacity-75">
                {resources.filter(r => r.type === category.id).length} items
              </div>
            </button>
          ))}
        </motion.div>

        {/* Popular Resources */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6 text-center">Most Popular Downloads</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {popularResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                className="bg-gradient-to-br from-[#dbeafe] to-white rounded-2xl p-6 border border-[#dbeafe] shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg">{resourceCategories.find(cat => cat.id === resource.type)?.icon}</span>
                  {resource.free ? (
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                      FREE
                    </span>
                  ) : (
                    <span className="bg-[#f59e0b] text-[#1e3a8a] text-xs font-semibold px-2 py-1 rounded-full">
                      PREMIUM
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-[#1e3a8a] mb-2 line-clamp-2">{resource.title}</h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{resource.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>{resource.level}</span>
                  <span>{resource.downloads.toLocaleString()} downloads</span>
                </div>
                <motion.button
                  className="w-full bg-[#1e3a8a] text-white py-2 rounded-lg font-semibold text-sm hover:bg-[#1e40af] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download ({resource.format})
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">
                  {resourceCategories.find(cat => cat.id === resource.type)?.icon}
                </span>
                {resource.free ? (
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                    FREE
                  </span>
                ) : (
                  <span className="bg-[#f59e0b] text-[#1e3a8a] text-xs font-semibold px-2 py-1 rounded-full">
                    PREMIUM
                  </span>
                )}
              </div>
              <h4 className="font-bold text-[#1e3a8a] mb-2 line-clamp-2 group-hover:text-[#1e40af] transition-colors">
                {resource.title}
              </h4>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{resource.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Level:</span>
                  <span className="font-semibold">{resource.level}</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Format:</span>
                  <span>{resource.format}</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Size:</span>
                  <span>{resource.size}</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Downloads:</span>
                  <span>{resource.downloads.toLocaleString()}</span>
                </div>
              </div>

              <motion.button
                className="w-full bg-[#1e3a8a] text-white py-2 rounded-lg font-semibold text-sm hover:bg-[#1e40af] transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Download</span>
                <span>↓</span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Free Resources Count */}
        <motion.div
          className="text-center bg-gradient-to-r from-[#f59e0b] to-[#eab308] rounded-2xl p-8 text-[#1e3a8a]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-2">{freeResources.length} Free Resources Available</h3>
          <p className="mb-4 opacity-90">
            Start enhancing your French teaching today with our free downloadable materials.
          </p>
          <motion.button
            className="bg-[#1e3a8a] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1e40af] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse All Free Resources
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;