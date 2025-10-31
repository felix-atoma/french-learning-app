import React from 'react'
import RootLayout from '../components/RootLayout'
import EnrollmentHero from '../components/EnrollmentHero'
import Enrollment from '../components/Enrollment'
import TrustBadges from '../components/TrustBadges'
import AIChatbot from '../components/AIChatbot'
import PrivacyBanner from '../components/PrivacyBanner'

const EnrollmentPage = () => {
  return (
    <RootLayout 
      title="Enroll in French Courses - French Learning Center GH"
      description="Enroll in our comprehensive French programs. Beginner to advanced courses, DELF preparation, flexible payment plans. Start your French journey today!"
    >
      <EnrollmentHero />
      <Enrollment />
      <TrustBadges />
      <AIChatbot />
      <PrivacyBanner />
    </RootLayout>
  )
}

export default EnrollmentPage