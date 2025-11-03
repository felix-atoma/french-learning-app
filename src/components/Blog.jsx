// components/Blog.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Blog = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "5 Effective Strategies for Teaching French to Ghanaian Students",
      excerpt: "Discover proven teaching methods that work specifically for Ghanaian classrooms and learning styles.",
      category: "teaching",
      date: "2024-12-15",
      readTime: "5 min read",
      image: "📚",
      featured: true
    },
    {
      id: 2,
      title: "How to Prepare Your Students for DELF Exams: A Complete Guide",
      excerpt: "Step-by-step preparation strategies for DELF A1-B2 exams with Ghanaian student success stories.",
      category: "exams",
      date: "2024-12-10",
      readTime: "8 min read",
      image: "🎯",
      featured: true
    },
    {
      id: 3,
      title: "The Role of Technology in Modern Language Learning",
      excerpt: "Exploring how digital tools and apps are transforming French education in Ghana.",
      category: "technology",
      date: "2024-12-05",
      readTime: "6 min read",
      image: "💻"
    },
    {
      id: 4,
      title: "Cultural Connections: Bridging Ghana and Francophone Africa",
      excerpt: "Understanding the cultural context that makes French relevant for Ghanaian students.",
      category: "culture",
      date: "2024-11-28",
      readTime: "4 min read",
      image: "🌍"
    },
    {
      id: 5,
      title: "Common French Pronunciation Challenges for Ghanaian Speakers",
      excerpt: "Addressing specific pronunciation difficulties and practical exercises to overcome them.",
      category: "pronunciation",
      date: "2024-11-20",
      readTime: "7 min read",
      image: "🗣️"
    },
    {
      id: 6,
      title: "Success Story: How St. Mary's School Improved French Results by 80%",
      excerpt: "Case study of a Ghanaian school that transformed their French program with our methods.",
      category: "success",
      date: "2024-11-15",
      readTime: "10 min read",
      image: "🏆"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics', count: blogPosts.length },
    { id: 'teaching', name: 'Teaching Methods', count: blogPosts.filter(post => post.category === 'teaching').length },
    { id: 'exams', name: 'Exam Preparation', count: blogPosts.filter(post => post.category === 'exams').length },
    { id: 'technology', name: 'Technology', count: blogPosts.filter(post => post.category === 'technology').length },
    { id: 'culture', name: 'Culture', count: blogPosts.filter(post => post.category === 'culture').length },
    { id: 'success', name: 'Success Stories', count: blogPosts.filter(post => post.category === 'success').length }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <section id="blog" ref={sectionRef} className="bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] py-20 lg:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-20">🇫🇷</div>
        <div className="absolute top-20 right-20 text-4xl opacity-20">📚</div>
        <div className="absolute bottom-10 left-20 text-5xl opacity-20">🎓</div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-20">🇬🇭</div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6"
            >
              <span className="text-3xl">📝</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              French Learning{' '}
              <span className="bg-gradient-to-r from-[#f59e0b] to-[#eab308] bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert insights, teaching strategies, and success stories from Ghana's leading French education institution.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                className="bg-[#f59e0b] text-[#1e3a8a] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#eab308] transition-colors shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Reading
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#1e3a8a] transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Topics
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f59e0b] mb-2">{blogPosts.length}+</div>
                <div className="text-blue-100">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f59e0b] mb-2">{categories.length}</div>
                <div className="text-blue-100">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f59e0b] mb-2">1000+</div>
                <div className="text-blue-100">Readers</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-2xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>

      {/* Blog Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* Featured Posts */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-8 text-center">Featured Articles</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{post.image}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {post.readTime}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-[#1e3a8a] mb-3 group-hover:text-[#1e40af] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-GB', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </span>
                      <motion.button
                        className="text-[#f59e0b] font-semibold text-sm hover:text-[#eab308] transition-colors flex items-center space-x-1"
                        whileHover={{ x: 5 }}
                      >
                        <span>Read More</span>
                        <span>→</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-[#1e3a8a] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{post.image}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {post.readTime}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#1e3a8a] mb-2 group-hover:text-[#1e40af] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-GB', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                    <motion.button
                      className="text-[#f59e0b] font-semibold text-xs hover:text-[#eab308] transition-colors flex items-center space-x-1"
                      whileHover={{ x: 3 }}
                    >
                      <span>Read</span>
                      <span>→</span>
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] rounded-2xl p-8 text-white text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">Stay Updated with French Learning Tips</h3>
            <p className="text-[#dbeafe] mb-6 max-w-md mx-auto">
              Get weekly articles, teaching resources, and success stories delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
              />
              <motion.button
                className="bg-[#f59e0b] text-[#1e3a8a] px-6 py-3 rounded-lg font-bold hover:bg-[#eab308] transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-xs text-[#dbeafe] mt-3">
              No spam, unsubscribe at any time
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;