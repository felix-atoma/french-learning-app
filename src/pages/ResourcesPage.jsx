import React from 'react'
import RootLayout from '../components/RootLayout'
import Resources from '../components/Resources'
import AIChatbot from '../components/AIChatbot'
import PrivacyBanner from '../components/PrivacyBanner'

const ResourcesPage = () => {
  return (
    <RootLayout 
      title="French Learning Resources - Download Materials"
      description="Free and premium French learning resources: worksheets, lesson plans, audio guides, and teaching materials for students and educators in Ghana."
    >
      <Resources />
      <AIChatbot />
      <PrivacyBanner />
    </RootLayout>
  )
}

export default ResourcesPage