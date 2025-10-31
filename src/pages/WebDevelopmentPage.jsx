import React from 'react'
import RootLayout from '../components/RootLayout'
import WebDevelopment from '../components/WebDevelopment'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import AIChatbot from '../components/AIChatbot'
import PrivacyBanner from '../components/PrivacyBanner'

const WebDevelopmentPage = () => {
  return (
    <RootLayout 
      title="School Website Development - French Learning Center GH Edutech"
      description="Professional website development, mobile apps, and LMS systems for Ghanaian schools. Edutech solutions from Ghana's leading French institution."
    >
      <WebDevelopment />
      <Portfolio />
      <Contact />
      <AIChatbot />
      <PrivacyBanner />
    </RootLayout>
  )
}

export default WebDevelopmentPage