// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { apiService } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize auth from localStorage and verify token
  const initializeAuth = useCallback(async () => {
    try {
      const savedAdmin = localStorage.getItem('adminData');
      
      if (apiService.isAuthenticated() && savedAdmin) {
        // Verify token is still valid
        const result = await apiService.verifyToken();
        if (result.success) {
          setAdmin(JSON.parse(savedAdmin));
          setError(null);
        } else {
          // Token is invalid, clear everything
          await logout();
        }
      } else {
        // No valid token, ensure clean state
        await logout();
      }
    } catch (error) {
      console.error('Auth initialization error:', error);
      await logout();
      setError('Failed to initialize authentication');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await apiService.login({ email, password });
      
      if (result.success) {
        const { token, data: { admin: adminData } } = result.data;
        
        // Set token in apiService
        apiService.setAuthToken(token);
        setAdmin(adminData);
        
        // Store admin data in localStorage
        localStorage.setItem('adminData', JSON.stringify(adminData));
        
        return { success: true };
      } else {
        setError(result.error || 'Login failed');
        return { success: false, error: result.error };
      }
    } catch (error) {
      setError('Network error occurred during login');
      return { success: false, error: 'Network error occurred' };
    } finally {
      setLoading(false);
    }
  };

  const logout = useCallback(async () => {
    setAdmin(null);
    setError(null);
    
    // Clear everything through apiService
    await apiService.logout();
  }, []);

  const updateAdmin = (adminData) => {
    setAdmin(adminData);
    localStorage.setItem('adminData', JSON.stringify(adminData));
  };

  const refreshSession = async () => {
    try {
      const result = await apiService.refreshToken();
      if (result.success) {
        return { success: true };
      } else {
        await logout();
        return { success: false, error: 'Session refresh failed' };
      }
    } catch (error) {
      await logout();
      return { success: false, error: 'Session refresh error' };
    }
  };

  const value = {
    admin,
    token: apiService.getAuthToken(),
    loading,
    error,
    login,
    logout,
    updateAdmin,
    refreshSession,
    isAuthenticated: apiService.isAuthenticated(),
    hasError: !!error,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};