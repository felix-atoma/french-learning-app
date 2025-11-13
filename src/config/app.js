// src/config/app.js
const config = {
  // API Configuration
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  
  // Company Information
  COMPANY: {
    NAME: import.meta.env.VITE_COMPANY_NAME || 'French Learning Center Ghana',
    EMAIL: import.meta.env.VITE_EMAIL || 'frenchlearningcentergh@gmail.com',
    PHONE: import.meta.env.VITE_PHONE_NUMBER || '+233 59 1038 729',
    WHATSAPP: import.meta.env.VITE_WHATSAPP_NUMBER || '+233591038729',
  },
  
  // Default Admin Credentials
  DEFAULT_ADMIN: {
    EMAIL: import.meta.env.VITE_ADMIN_EMAIL || 'admin@frenchcenter.com',
    PASSWORD: import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'
  },
  
  // App Settings
  SETTINGS: {
    CONTACT_FORM_TIMEOUT: 86400000, // 24 hours in milliseconds
    ITEMS_PER_PAGE: 10,
    AUTO_LOGOUT_MINUTES: 60,
    DEBOUNCE_DELAY: 300,
  },
  
  // Validation Patterns
  VALIDATION: {
    EMAIL: /^\S+@\S+\.\S+$/,
    PHONE: /^\+?[\d\s-()]+$/,
    NAME: /^[a-zA-Z\s]{2,100}$/,
  },
  
  // Status Options
  STATUS_OPTIONS: [
    { value: 'new', label: 'New', color: 'blue' },
    { value: 'contacted', label: 'Contacted', color: 'yellow' },
    { value: 'in-progress', label: 'In Progress', color: 'purple' },
    { value: 'completed', label: 'Completed', color: 'green' }
  ],
  
  // Position Options
  POSITION_OPTIONS: [
    'Headteacher',
    'French Teacher',
    'Curriculum Coordinator',
    'ICT Coordinator',
    'Administrator',
    'Other'
  ],
  
  // Hero Images
  HERO_IMAGES: [
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ]
};

// Freeze the config to prevent accidental modifications
Object.freeze(config);

export default config;