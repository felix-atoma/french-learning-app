// src/components/AdminDashboard.js
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { contactService } from '../services/contactService';
import config from '../config/app';
import { 
  formatDate, 
  getStatusColor, 
  getStatusLabel, 
  debounce,
  capitalizeWords 
} from '../utils/helpers';
import ContactDetailModal from '../components/ContactDetailModal';
import LoadingSpinner from '../components/LoadingSpinner';

const AdminDashboard = () => {
  const { admin, logout } = useAuth();
  const [contacts, setContacts] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    inProgress: 0
  });
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    status: 'all',
    search: ''
  });
  const [error, setError] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const tableRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const statCardVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // Load dashboard data
  const loadDashboardData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [statsResult, contactsResult] = await Promise.all([
        contactService.getDashboardStats(),
        contactService.getAllContacts({
          page: currentPage,
          status: filters.status !== 'all' ? filters.status : undefined,
          search: filters.search || undefined
        })
      ]);

      if (statsResult.success) {
        setStats({
          total: statsResult.data?.stats?.total || 0,
          new: statsResult.data?.stats?.new || 0,
          contacted: statsResult.data?.stats?.contacted || 0,
          inProgress: statsResult.data?.stats?.inProgress || 0
        });
      } else {
        console.error('Failed to load stats:', statsResult.error);
        setError(statsResult.error || 'Failed to load statistics');
      }

      if (contactsResult.success) {
        setContacts(contactsResult.data?.contacts || []);
        setTotalPages(contactsResult.data?.pagination?.pages || 1);
      } else {
        console.error('Failed to load contacts:', contactsResult.error);
        setError(contactsResult.error || 'Failed to load contacts');
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      setError('An unexpected error occurred while loading data');
    } finally {
      setLoading(false);
    }
  }, [currentPage, filters.status, filters.search]);

  useEffect(() => {
    loadDashboardData();
  }, [loadDashboardData]);

  // Debounced search
  const debouncedSearch = useCallback(
    debounce((searchValue) => {
      setFilters(prev => ({ ...prev, search: searchValue }));
      setCurrentPage(1);
    }, config.SETTINGS.DEBOUNCE_DELAY),
    []
  );

  const handleSearchChange = (value) => {
    debouncedSearch(value);
  };

  const handleStatusFilterChange = (value) => {
    setFilters(prev => ({ ...prev, status: value }));
    setCurrentPage(1);
  };

  const handleViewContact = async (contactId) => {
    try {
      const result = await contactService.getContactById(contactId);
      if (result.success) {
        setSelectedContact(result.data?.contact || null);
        setIsModalOpen(true);
      } else {
        console.error('Failed to load contact:', result.error);
        setError(result.error || 'Failed to load contact details');
      }
    } catch (error) {
      console.error('Error loading contact:', error);
      setError('An unexpected error occurred while loading contact');
    }
  };

  const handleUpdateContact = async (contactId, updates) => {
    setUpdating(true);
    setError(null);
    try {
      const result = await contactService.updateContactStatus(contactId, updates);
      if (result.success) {
        await loadDashboardData();
        setIsModalOpen(false);
        setSelectedContact(null);
      } else {
        console.error('Failed to update contact:', result.error);
        setError(result.error || 'Failed to update contact');
      }
    } catch (error) {
      console.error('Error updating contact:', error);
      setError('An unexpected error occurred while updating contact');
    } finally {
      setUpdating(false);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <motion.button
          key={i}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 rounded-md transition-all duration-200 ${
            currentPage === i
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:shadow-md'
          }`}
        >
          {i}
        </motion.button>
      );
    }

    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center items-center space-x-2 mt-6"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 hover:shadow-md transition-all duration-200"
        >
          Previous
        </motion.button>
        
        {pages}
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 hover:shadow-md transition-all duration-200"
        >
          Next
        </motion.button>
      </motion.div>
    );
  };

  const safeStats = {
    total: stats?.total || 0,
    new: stats?.new || 0,
    contacted: stats?.contacted || 0,
    inProgress: stats?.inProgress || 0
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
    >
      {/* Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="bg-white shadow-lg border-b"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-indigo-600 bg-clip-text text-transparent"
              >
                Admin Dashboard
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 font-medium"
              >
                {config.COMPANY.NAME}
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              <div className="text-right">
                <p className="text-gray-700 font-semibold">{admin?.name}</p>
                <p className="text-gray-500 text-sm">Administrator</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={logout}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all duration-200 font-semibold"
              >
                Logout
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
          >
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-red-500 text-xl mr-3">⚠️</span>
                  <span className="font-medium">{error}</span>
                </div>
                <button
                  onClick={() => setError(null)}
                  className="text-red-600 hover:text-red-800 font-bold text-lg"
                >
                  ×
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          {[
            { label: 'Total Submissions', value: safeStats.total, color: 'gray', icon: '📊' },
            { label: 'New', value: safeStats.new, color: 'blue', icon: '🆕' },
            { label: 'Contacted', value: safeStats.contacted, color: 'yellow', icon: '📞' },
            { label: 'In Progress', value: safeStats.inProgress, color: 'purple', icon: '⚡' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              variants={statCardVariants}
              onHoverStart={() => setHoveredCard(stat.label)}
              onHoverEnd={() => setHoveredCard(null)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 border border-gray-100 relative overflow-hidden"
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0"
                animate={{ opacity: hoveredCard === stat.label ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <motion.span 
                    className="text-2xl"
                    animate={{ rotate: hoveredCard === stat.label ? [0, -10, 10, 0] : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.icon}
                  </motion.span>
                  <motion.div
                    animate={{ scale: hoveredCard === stat.label ? 1.1 : 1 }}
                    className={`w-3 h-3 rounded-full ${
                      stat.color === 'gray' ? 'bg-gray-400' :
                      stat.color === 'blue' ? 'bg-blue-400' :
                      stat.color === 'yellow' ? 'bg-yellow-400' :
                      'bg-purple-400'
                    }`}
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-600 mb-2">{stat.label}</h3>
                <motion.p 
                  className={`text-4xl font-bold ${
                    stat.color === 'gray' ? 'text-gray-600' :
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'yellow' ? 'text-yellow-600' :
                    'text-purple-600'
                  }`}
                  animate={{ 
                    scale: hoveredCard === stat.label ? [1, 1.05, 1] : 1 
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.value}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <motion.div whileHover={{ scale: 1.01 }} whileFocus={{ scale: 1.01 }}>
                <input
                  type="text"
                  placeholder="🔍 Search by name, school, or email..."
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 shadow-sm"
                />
              </motion.div>
            </div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <select
                value={filters.status}
                onChange={(e) => handleStatusFilterChange(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 shadow-sm cursor-pointer"
              >
                <option value="all">All Status</option>
                {config.STATUS_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>
        </motion.div>

        {/* Contacts Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
        >
          {loading ? (
            <div className="flex justify-center items-center py-16">
              <LoadingSpinner size="large" text="Loading contacts..." />
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <tr>
                      {['Name', 'School', 'Position', 'Email', 'Status', 'Date', 'Actions'].map((header, index) => (
                        <motion.th 
                          key={header}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                          {header}
                        </motion.th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <AnimatePresence>
                      {contacts && contacts.length > 0 ? (
                        contacts.map((contact, index) => (
                          <motion.tr
                            key={contact._id || index}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={tableRowVariants}
                            whileHover={{ 
                              scale: 1.01,
                              backgroundColor: "rgba(249, 250, 251, 0.8)",
                              transition: { duration: 0.2 }
                            }}
                            className="border-b border-gray-100"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-semibold text-gray-900">
                                {capitalizeWords(contact.name || 'N/A')}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{contact.school || 'N/A'}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {capitalizeWords(contact.position || 'N/A')}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{contact.email || 'N/A'}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <motion.span 
                                whileHover={{ scale: 1.05 }}
                                className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(contact.status)} shadow-sm`}
                              >
                                {getStatusLabel(contact.status)}
                              </motion.span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {formatDate(contact.createdAt, { hour: undefined, minute: undefined })}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleViewContact(contact._id)}
                                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all duration-200 font-semibold"
                              >
                                View Details
                              </motion.button>
                            </td>
                          </motion.tr>
                        ))
                      ) : (
                        <motion.tr
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <td colSpan="7" className="px-6 py-16 text-center">
                            <motion.div
                              animate={{ 
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="text-6xl mb-4"
                            >
                              📭
                            </motion.div>
                            <p className="text-gray-500 text-xl font-semibold mb-2">No contacts found</p>
                            <p className="text-gray-400">
                              {filters.status !== 'all' || filters.search 
                                ? 'Try changing your filters or search terms' 
                                : 'No contact submissions yet'
                              }
                            </p>
                          </td>
                        </motion.tr>
                      )}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            </>
          )}
        </motion.div>

        {/* Pagination */}
        {renderPagination()}
      </div>

      {/* Contact Details Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <ContactDetailModal
            contact={selectedContact}
            onUpdate={handleUpdateContact}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedContact(null);
            }}
            isUpdating={updating}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AdminDashboard;