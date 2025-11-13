// src/services/api.js
import config from '../config/app';

class ApiService {
  constructor() {
    this.baseURL = config.API_BASE_URL;
    this.authToken = null;
    
    // Initialize token from localStorage if available
    this.initializeToken();
  }

  // Initialize token from localStorage
  initializeToken() {
    if (typeof window !== 'undefined') {
      const savedToken = localStorage.getItem('adminToken');
      if (savedToken) {
        this.authToken = savedToken;
      }
    }
  }

  // Set authentication token
  setAuthToken(token) {
    this.authToken = token;
    
    // Also store in localStorage for persistence
    if (typeof window !== 'undefined') {
      if (token) {
        localStorage.setItem('adminToken', token);
      } else {
        localStorage.removeItem('adminToken');
      }
    }
  }

  // Clear authentication token
  clearAuthToken() {
    this.authToken = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminData');
    }
  }

  // Get current token
  getAuthToken() {
    return this.authToken;
  }

  // Main request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const requestConfig = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add authorization header if token exists
    if (this.authToken) {
      requestConfig.headers['Authorization'] = `Bearer ${this.authToken}`;
    }

    // Stringify body if it's an object and not FormData
    if (requestConfig.body && 
        typeof requestConfig.body === 'object' && 
        !(requestConfig.body instanceof FormData)) {
      requestConfig.body = JSON.stringify(requestConfig.body);
    }

    // Add timeout to request
    const timeout = 30000; // 30 seconds
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    requestConfig.signal = controller.signal;

    try {
      const response = await fetch(url, requestConfig);
      clearTimeout(timeoutId);

      // Handle non-JSON responses
      const contentType = response.headers.get('content-type');
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (!response.ok) {
        // Handle unauthorized access
        if (response.status === 401) {
          this.clearAuthToken();
          throw new Error('Session expired. Please login again.');
        }
        
        // Handle other HTTP errors
        const errorMessage = data.message || 
                            data.error || 
                            `HTTP error! status: ${response.status}`;
        throw new Error(errorMessage);
      }

      return { 
        success: true, 
        data,
        status: response.status,
        headers: response.headers
      };
    } catch (error) {
      clearTimeout(timeoutId);
      
      // Handle specific error types
      let errorMessage = 'Network error occurred';
      
      if (error.name === 'AbortError') {
        errorMessage = 'Request timeout. Please try again.';
      } else if (error.name === 'TypeError') {
        errorMessage = 'Network connection failed. Please check your internet connection.';
      } else {
        errorMessage = error.message || errorMessage;
      }

      console.error('API Request failed:', {
        endpoint,
        error: errorMessage,
        url
      });

      return { 
        success: false, 
        error: errorMessage,
        status: 0
      };
    }
  }

  // Health check endpoint
  async healthCheck() {
    return this.request('/health');
  }

  // Contact endpoints
  async submitContact(formData) {
    return this.request('/contact/submit', {
      method: 'POST',
      body: formData,
    });
  }

  async getContacts(params = {}) {
    const queryParams = new URLSearchParams();
    
    // Add all non-empty parameters to query string
    Object.keys(params).forEach(key => {
      if (params[key] !== '' && params[key] !== null && params[key] !== undefined) {
        queryParams.append(key, params[key]);
      }
    });
    
    const queryString = queryParams.toString();
    const endpoint = queryString ? `/contact?${queryString}` : '/contact';
    
    return this.request(endpoint);
  }

  async getContact(contactId) {
    if (!contactId) {
      return {
        success: false,
        error: 'Contact ID is required'
      };
    }
    return this.request(`/contact/${contactId}`);
  }

  async updateContact(contactId, updates) {
    if (!contactId) {
      return {
        success: false,
        error: 'Contact ID is required'
      };
    }
    return this.request(`/contact/${contactId}`, {
      method: 'PATCH',
      body: updates,
    });
  }

  async getStats() {
    return this.request('/contact/stats');
  }

  // Auth endpoints
  async login(credentials) {
    return this.request('/auth/login', {
      method: 'POST',
      body: credentials,
    });
  }

  async getCurrentAdmin() {
    return this.request('/auth/me');
  }

  // Logout (client-side only)
  async logout() {
    this.clearAuthToken();
    return { success: true, message: 'Logged out successfully' };
  }

  // Verify token validity
  async verifyToken() {
    if (!this.authToken) {
      return { success: false, error: 'No token available' };
    }

    try {
      const result = await this.getCurrentAdmin();
      return result;
    } catch (error) {
      this.clearAuthToken();
      return { success: false, error: 'Token verification failed' };
    }
  }

  // Utility method to check if user is authenticated
  isAuthenticated() {
    return !!this.authToken;
  }

  // Method to refresh token (if your backend supports token refresh)
  async refreshToken() {
    // This would typically make a request to your refresh token endpoint
    // For now, we'll just verify the current token
    return this.verifyToken();
  }

  // Batch operations (if needed in the future)
  async batchUpdateContacts(updates) {
    return this.request('/contact/batch-update', {
      method: 'PATCH',
      body: { updates },
    });
  }

  // Export contacts (if needed in the future)
  async exportContacts(format = 'json') {
    return this.request(`/contact/export?format=${format}`);
  }
}

// Create a singleton instance
export const apiService = new ApiService();

// Optional: Create a hook-like function for components
export const useApi = () => {
  return apiService;
};

// Optional: Create interceptors for request/response handling
export const setupApiInterceptors = (onUnauthorized) => {
  // Store original request method
  const originalRequest = apiService.request.bind(apiService);

  // Override request method to add interceptors
  apiService.request = async (endpoint, options = {}) => {
    try {
      const response = await originalRequest(endpoint, options);
      
      // Response interceptor
      if (!response.success && response.status === 401) {
        // Token expired or invalid
        if (onUnauthorized) {
          onUnauthorized();
        }
      }
      
      return response;
    } catch (error) {
      // Request interceptor error handling
      console.error('Request interceptor error:', error);
      throw error;
    }
  };

  return () => {
    // Restore original method if needed
    apiService.request = originalRequest;
  };
};