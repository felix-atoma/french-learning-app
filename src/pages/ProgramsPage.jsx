import React from 'react'
import RootLayout from '../components/RootLayout'
import Programs from '../components/Programs'
import Trial from '../components/Trial'
import Testimonials from '../components/Testimonials'
import AIChatbot from '../components/AIChatbot'
import PrivacyBanner from '../components/PrivacyBanner'

const ProgramsPage = () => {
  return (
    <RootLayout 
      title="French Language Programs - French Learning Center GH"
      description="Explore our comprehensive French courses: Beginner, Intermediate, Advanced, and DELF preparation. Flexible schedules, certified instructors, Ghanaian context."
    >
      <Programs />
      <Trial />
      <Testimonials />
      <AIChatbot />
      <PrivacyBanner />
    </RootLayout>
  )
}

export default ProgramsPage