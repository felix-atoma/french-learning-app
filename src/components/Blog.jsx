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
    <section id="blog" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
            French Learning Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, teaching strategies, and success stories from Ghana's leading French education institution.
          </p>
        </motion.div>

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
    </section>
  );
};

export default Blog;