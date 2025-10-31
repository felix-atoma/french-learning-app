// App.js
import React, { useState, useEffect } from 'react'
import RootLayout from './components/RootLayout'
import LoadingSpinner from './components/LoadingSpinner'
import EnhancedHeader from './components/EnhancedHeader'
import Hero from './components/Hero'
import Trial from './components/Trial'
import AboutUs from './components/AboutUs'
import TrustBadges from './components/TrustBadges'
import Programs from './components/Programs'
import AppShowcase from './components/AppShowcase'
import ForSchools from './components/ForSchools'
import WebDevelopment from './components/WebDevelopment'
import Portfolio from './components/Portfolio' // Add this import
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Blog from './components/Blog'
import Resources from './components/Resources'
import Contact from './components/Contact'
import AIChatbot from './components/AIChatbot'
import PrivacyBanner from './components/PrivacyBanner'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <RootLayout>
      <EnhancedHeader />
      <Hero />
      <Trial />
      <TrustBadges />
      <AboutUs />
      <Programs />
      <AppShowcase />
      <ForSchools />
      <WebDevelopment />
      <Portfolio /> {/* Include Portfolio component */}
      <Testimonials />
      <Team />
      <Blog />
      <Resources />
      <Contact />
      <AIChatbot />
      <PrivacyBanner />
    </RootLayout>
  )
}

export default App