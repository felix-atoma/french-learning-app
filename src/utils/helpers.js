// src/utils/helpers.js
import config from '../config/app';

export const formatDate = (dateString, options = {}) => {
  if (!dateString) return 'N/A';
  
  const defaultOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  
  try {
    return new Date(dateString).toLocaleDateString('en-GB', { ...defaultOptions, ...options });
  } catch (error) {
    console.error('Date formatting error:', error);
    return 'Invalid Date';
  }
};

export const getStatusColor = (status) => {
  const statusConfig = config.STATUS_OPTIONS.find(opt => opt.value === status);
  if (!statusConfig) return 'gray';

  const colorMap = {
    blue: 'bg-blue-100 text-blue-800 border-blue-200',
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    purple: 'bg-purple-100 text-purple-800 border-purple-200',
    green: 'bg-green-100 text-green-800 border-green-200',
    gray: 'bg-gray-100 text-gray-800 border-gray-200'
  };

  return colorMap[statusConfig.color] || colorMap.gray;
};

export const getStatusLabel = (status) => {
  const statusConfig = config.STATUS_OPTIONS.find(opt => opt.value === status);
  return statusConfig ? statusConfig.label : 'Unknown';
};

export const validateEmail = (email) => {
  return config.VALIDATION.EMAIL.test(email);
};

export const validatePhone = (phone) => {
  return config.VALIDATION.PHONE.test(phone);
};

export const validateName = (name) => {
  return config.VALIDATION.NAME.test(name);
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '');
  return cleaned;
};

export const capitalizeWords = (str) => {
  if (!str) return '';
  return str.replace(/\b\w/g, char => char.toUpperCase());
};

export const truncateText = (text, maxLength = 50) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};