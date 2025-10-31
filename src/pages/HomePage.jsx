// HomePage.jsx
import React, { useState, useEffect } from 'react'
import RootLayout from '../components/RootLayout'
import Hero from '../components/Hero'
import TrustBadges from '../components/TrustBadges'
import AboutUs from '../components/AboutUs'
import ProgramsPreview from '../components/ProgramsPreview'
import AppShowcase from '../components/AppShowcase'
import Testimonials from '../components/Testimonials'
import AIChatbot from '../components/AIChatbot'
import PrivacyBanner from '../components/PrivacyBanner'
import LoadingSpinner from '../components/LoadingSpinner'
import Statistics from '../components/Statistics'

const HomePage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // You can also load actual data here
    const loadPageData = async () => {
      // Simulate API calls or data loading
      await new Promise(resolve => setTimeout(resolve, 1200))
      setLoading(false)
    }

    loadPageData()
  }, [])

  if (loading) {
    return (
      <RootLayout 
        title="French Learning Center GH - Premier French Education & Edutech in Ghana"
        description="Ghana's leading French language institution offering comprehensive courses, school partnerships, learning apps, and professional web development services for schools."
      >
        <LoadingSpinner />
      </RootLayout>
    )
  }

  return (
    <RootLayout 
      title="French Learning Center GH - Premier French Education & Edutech in Ghana"
      description="Ghana's leading French language institution offering comprehensive courses, school partnerships, learning apps, and professional web development services for schools."
    >
      <Hero />
      <TrustBadges />
      <AboutUs />
      <ProgramsPreview />
      <AppShowcase />
      <Testimonials />
      <Statistics />
      <AIChatbot />
      <PrivacyBanner />
    </RootLayout>
  )
}

export default HomePage