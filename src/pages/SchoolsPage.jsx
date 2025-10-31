import React from 'react'
import RootLayout from '../components/RootLayout'
import ForSchools from '../components/ForSchools'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import AIChatbot from '../components/AIChatbot'
import PrivacyBanner from '../components/PrivacyBanner'

const SchoolsPage = () => {
  return (
    <RootLayout 
      title="French Programs for Schools - French Learning Center GH"
      description="Partner with Ghana's leading French institution. School partnerships, teacher training, curriculum integration, and proven results for educational institutions."
    >
      <ForSchools />
      <Portfolio />
      <Testimonials />
      <Contact />
      <AIChatbot />
      <PrivacyBanner />
    </RootLayout>
  )
}

export default SchoolsPage