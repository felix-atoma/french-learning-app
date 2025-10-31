import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AnimatedBackground from './AnimatedBackground'

const RootLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-educational-cream relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="pt-16 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout