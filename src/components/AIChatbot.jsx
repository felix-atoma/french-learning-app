// components/AIChatbot.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Common questions and responses
  const commonResponses = {
    greeting: "Hello! I'm the French Learning Center GH assistant. How can I help you today? 😊",
    courses: "We offer French courses for all levels: Beginner (3 months, ₵300), Intermediate (6 months, ₵550), Advanced (9 months, ₵800), and DELF/DALF Prep (3 months, ₵450).",
    pricing: "Our course fees range from ₵300 for beginners to ₵800 for advanced levels. We also offer special rates for schools and group enrollments.",
    location: "We're based in Ghana and serve students nationwide through both online and in-person classes.",
    contact: "You can reach us at:\n📧 frenchlearningcentergh@gmail.com\n📞 +233 59 1038 729\n📱 +233 24 417 3068",
    app: "Our French Learning App is designed specifically for Ghanaian students, featuring GES-aligned curriculum, interactive lessons, and teacher dashboards. It's available on both iOS and Android.",
    schools: "We partner with schools to provide comprehensive French programs including teacher training, curriculum integration, and performance tracking.",
    trial: "Yes! We offer a free 1-month trial of our app for schools. You can request it through our contact form or by calling us directly.",
    hours: "Our support team is available Monday to Friday, 8:00 AM - 6:00 PM. You can also reach us via WhatsApp for quick responses.",
    enrollment: "To enroll, you can:\n1. Call us directly\n2. Send us an email\n3. Fill out the contact form on our website\n4. Visit our center (by appointment)",
    default: "I understand you're asking about: \"{query}\". For detailed information about this, I recommend contacting our team directly at +233 59 1038 729 or emailing frenchlearningcentergh@gmail.com. They'll provide you with personalized assistance! 💫"
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 1,
          text: commonResponses.greeting,
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen]);

  const detectIntent = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return 'greeting';
    } else if (lowerMessage.includes('course') || lowerMessage.includes('program') || lowerMessage.includes('class')) {
      return 'courses';
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('fee')) {
      return 'pricing';
    } else if (lowerMessage.includes('where') || lowerMessage.includes('location') || lowerMessage.includes('address')) {
      return 'location';
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return 'contact';
    } else if (lowerMessage.includes('app') || lowerMessage.includes('application') || lowerMessage.includes('digital')) {
      return 'app';
    } else if (lowerMessage.includes('school') || lowerMessage.includes('institution') || lowerMessage.includes('partner')) {
      return 'schools';
    } else if (lowerMessage.includes('trial') || lowerMessage.includes('free') || lowerMessage.includes('demo')) {
      return 'trial';
    } else if (lowerMessage.includes('hour') || lowerMessage.includes('time') || lowerMessage.includes('available')) {
      return 'hours';
    } else if (lowerMessage.includes('enroll') || lowerMessage.includes('join') || lowerMessage.includes('register')) {
      return 'enrollment';
    } else {
      return 'default';
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const intent = detectIntent(inputMessage);
      let response = commonResponses[intent] || commonResponses.default;
      response = response.replace('{query}', inputMessage);

      const botMessage = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What courses do you offer?",
    "How much does it cost?",
    "Contact information?",
    "Tell me about the app",
    "School partnerships?"
  ];

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 w-14 h-14 bg-gradient-to-br from-[#f59e0b] to-[#eab308] text-[#1e3a8a] rounded-full shadow-2xl border-2 border-white flex items-center justify-center z-50 hover:scale-110 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat with AI Assistant"
      >
        <div className="relative">
          <span className="text-lg">🤖</span>
          {!isOpen && (
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 left-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#f59e0b] rounded-full flex items-center justify-center">
                  <span className="text-sm">🤖</span>
                </div>
                <div>
                  <h3 className="font-bold">FLC Assistant</h3>
                  <p className="text-xs opacity-80">Online • Ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-[#f59e0b] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <div
                    className={`inline-block max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-[#1e3a8a] text-white rounded-br-none'
                        : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className="text-xs opacity-60 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center space-x-2 mb-4"
                >
                  <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-sm">🤖</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-2 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-1">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInputMessage(question);
                        setTimeout(handleSendMessage, 100);
                      }}
                      className="text-xs bg-gray-100 hover:bg-[#1e3a8a] hover:text-white text-gray-700 px-2 py-1 rounded-full transition-colors duration-200 border border-gray-200"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="bg-[#1e3a8a] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#1e40af] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-2">
                Ask me about courses, pricing, or contact information! 💫
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;