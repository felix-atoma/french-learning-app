// src/services/contactService.js
import { apiService } from './api';
import config from '../config/app';

class ContactService {
  async submitContactForm(formData) {
    // Validate required fields
    const requiredFields = ['name', 'school', 'position', 'email', 'phone'];
    const missingFields = requiredFields.filter(field => !formData[field]?.trim());
    
    if (missingFields.length > 0) {
      return {
        success: false,
        error: `Missing required fields: ${missingFields.join(', ')}`
      };
    }

    // Validate email format
    if (!config.VALIDATION.EMAIL.test(formData.email)) {
      return {
        success: false,
        error: 'Please provide a valid email address'
      };
    }

    // Validate phone format
    if (!config.VALIDATION.PHONE.test(formData.phone)) {
      return {
        success: false,
        error: 'Please provide a valid phone number'
      };
    }

    return await apiService.submitContact(formData);
  }

  async getAllContacts(filters = {}) {
    // Ensure user is authenticated for protected endpoints
    if (!apiService.isAuthenticated()) {
      return {
        success: false,
        error: 'Authentication required',
        shouldLogout: true
      };
    }

    const params = {
      page: filters.page || 1,
      limit: filters.limit || config.SETTINGS.ITEMS_PER_PAGE,
      ...filters
    };

    const result = await apiService.getContacts(params);
    
    // Handle authentication errors
    if (!result.success && result.status === 401) {
      return {
        ...result,
        shouldLogout: true
      };
    }

    return result;
  }

  async getContactById(contactId) {
    if (!contactId) {
      return {
        success: false,
        error: 'Contact ID is required'
      };
    }

    // Ensure user is authenticated for protected endpoints
    if (!apiService.isAuthenticated()) {
      return {
        success: false,
        error: 'Authentication required',
        shouldLogout: true
      };
    }

    const result = await apiService.getContact(contactId);
    
    // Handle authentication errors
    if (!result.success && result.status === 401) {
      return {
        ...result,
        shouldLogout: true
      };
    }

    return result;
  }

  async updateContactStatus(contactId, updates) {
    if (!contactId) {
      return {
        success: false,
        error: 'Contact ID is required'
      };
    }

    // Ensure user is authenticated for protected endpoints
    if (!apiService.isAuthenticated()) {
      return {
        success: false,
        error: 'Authentication required',
        shouldLogout: true
      };
    }

    const validUpdates = {};
    
    // Only allow specific fields to be updated
    if (updates.status && config.STATUS_OPTIONS.some(opt => opt.value === updates.status)) {
      validUpdates.status = updates.status;
    }
    
    if (updates.adminNotes !== undefined) {
      validUpdates.adminNotes = updates.adminNotes;
    }

    if (Object.keys(validUpdates).length === 0) {
      return {
        success: false,
        error: 'No valid updates provided'
      };
    }

    const result = await apiService.updateContact(contactId, validUpdates);
    
    // Handle authentication errors
    if (!result.success && result.status === 401) {
      return {
        ...result,
        shouldLogout: true
      };
    }

    return result;
  }

  async getDashboardStats() {
    // Ensure user is authenticated for protected endpoints
    if (!apiService.isAuthenticated()) {
      return {
        success: false,
        error: 'Authentication required',
        shouldLogout: true
      };
    }

    const result = await apiService.getStats();
    
    // Handle authentication errors
    if (!result.success && result.status === 401) {
      return {
        ...result,
        shouldLogout: true
      };
    }

    return result;
  }

  // Check API health
  async checkHealth() {
    return await apiService.healthCheck();
  }

  // Search contacts with debouncing (to be used with useEffect)
  createSearchParams(searchTerm, status, page = 1) {
    const params = {
      page,
      limit: config.SETTINGS.ITEMS_PER_PAGE
    };

    if (searchTerm && searchTerm.trim()) {
      params.search = searchTerm.trim();
    }

    if (status && status !== 'all') {
      params.status = status;
    }

    return params;
  }
}

export const contactService = new ContactService();