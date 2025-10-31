// components/PrivacyBanner.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PrivacyBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    try {
      const consent = localStorage.getItem('privacyConsent');
      if (!consent) {
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.warn('localStorage not available:', error);
      setIsVisible(false);
    }
  }, [isClient]);

  const acceptPreferences = () => {
    try {
      localStorage.setItem('privacyConsent', 'accepted');
    } catch (error) {
      console.warn('Could not save preference:', error);
    } finally {
      setIsVisible(false);
    }
  };

  const essentialOnly = () => {
    try {
      localStorage.setItem('privacyConsent', 'essential');
    } catch (error) {
      console.warn('Could not save preference:', error);
    } finally {
      setIsVisible(false);
    }
  };

  if (!isClient || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-50"
      >
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-[#dbeafe] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-[#1e3a8a]">🔒</span>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-800 mb-2">Privacy Preferences</h4>
            <p className="text-sm text-gray-600 mb-4">
              We value your privacy. We use necessary cookies to make our site work and may use additional cookies to improve your experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={acceptPreferences}
                className="bg-[#1e3a8a] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1e40af] transition-colors flex-1"
              >
                Accept All
              </button>
              <button
                onClick={essentialOnly}
                className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors flex-1"
              >
                Essential Only
              </button>
            </div>
            <a href="/privacy" className="text-xs text-[#1e3a8a] hover:underline mt-3 inline-block">
              Learn More
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PrivacyBanner;