import React from 'react'
import RootLayout from '../components/RootLayout'
import Blog from '../components/Blog'
import AIChatbot from '../components/AIChatbot'
import PrivacyBanner from '../components/PrivacyBanner'

const BlogPage = () => {
  return (
    <RootLayout 
      title="French Learning Blog - Tips & Resources"
      description="Expert French teaching strategies, learning tips, cultural insights, and success stories from Ghana's leading French education institution."
    >
      <Blog />
      <AIChatbot />
      <PrivacyBanner />
    </RootLayout>
  )
}

export default BlogPage