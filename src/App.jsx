// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import EnrollmentPage from './pages/EnrollmentPage';
import ProgramsPage from './pages/ProgramsPage';
import SchoolsPage from './pages/SchoolsPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import BlogPage from './pages/BlogPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import LoadingSpinner from './components/LoadingSpinner';

// Protected Route Component - Only accessible when authenticated
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <LoadingSpinner fullScreen text="Checking authentication..." />;
  }
  
  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
};

// Public Route Component - Only accessible when NOT authenticated
const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <LoadingSpinner fullScreen text="Checking authentication..." />;
  }
  
  return !isAuthenticated ? children : <Navigate to="/admin/dashboard" replace />;
};

// Guest Route Component - Accessible to all users (no authentication check)
const GuestRoute = ({ children }) => {
  return children;
};

// Main App Content Component
const AppContent = () => {
  const { loading } = useAuth();

  // Show loading spinner while auth is initializing
  if (loading) {
    return <LoadingSpinner fullScreen text="Initializing application..." />;
  }

  return (
    <Routes>
      {/* Public Website Routes - Accessible to all users */}
      <Route 
        path="/" 
        element={
          <GuestRoute>
            <HomePage />
          </GuestRoute>
        } 
      />
      <Route 
        path="/enroll" 
        element={
          <GuestRoute>
            <EnrollmentPage />
          </GuestRoute>
        } 
      />
      <Route 
        path="/programs" 
        element={
          <GuestRoute>
            <ProgramsPage />
          </GuestRoute>
        } 
      />
      <Route 
        path="/schools" 
        element={
          <GuestRoute>
            <SchoolsPage />
          </GuestRoute>
        } 
      />
      <Route 
        path="/web-development" 
        element={
          <GuestRoute>
            <WebDevelopmentPage />
          </GuestRoute>
        } 
      />
      <Route 
        path="/blog" 
        element={
          <GuestRoute>
            <BlogPage />
          </GuestRoute>
        } 
      />
      <Route 
        path="/resources" 
        element={
          <GuestRoute>
            <ResourcesPage />
          </GuestRoute>
        } 
      />
      <Route 
        path="/contact" 
        element={
          <GuestRoute>
            <ContactPage />
          </GuestRoute>
        } 
      />
      
      {/* Admin Authentication Routes */}
      <Route 
        path="/admin/login" 
        element={
          <PublicRoute>
            <AdminLogin />
          </PublicRoute>
        } 
      />
      
      {/* Admin Dashboard Routes - Protected */}
      <Route 
        path="/admin/dashboard" 
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } 
      />
      
      {/* Admin Root - Redirect to dashboard if authenticated, else to login */}
      <Route 
        path="/admin" 
        element={<Navigate to="/admin/dashboard" replace />} 
      />
      
      {/* Catch-all route - Redirect to home page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

// Error Boundary Component (optional but recommended)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We're sorry, but something went wrong. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-gray-500">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-red-600 overflow-auto">
                  {this.state.error?.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main App Component
function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <div className="App">
            <AppContent />
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;