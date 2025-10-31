import React from 'react'
import RootLayout from '../components/RootLayout'
import Contact from '../components/Contact'
import Team from '../components/Team'
import AIChatbot from '../components/AIChatbot'
import PrivacyBanner from '../components/PrivacyBanner'

const ContactPage = () => {
  return (
    <RootLayout 
      title="Contact French Learning Center GH - Get in Touch"
      description="Contact Ghana's leading French institution. Phone, email, WhatsApp, or visit our center. Get information about courses, school partnerships, and web development services."
    >
      <Contact />
      <Team />
      <AIChatbot />
      <PrivacyBanner />
    </RootLayout>
  )
}

export default ContactPage