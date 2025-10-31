import React from 'react'
import RootLayout from './components/RootLayout'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Programs from './components/Programs'
import AppShowcase from './components/AppShowcase'
import ForSchools from './components/ForSchools'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
import Trial from './components/Trial'

function App() {
  return (
    <RootLayout>
      <Hero />
      <AboutUs />
      <Programs />
      <AppShowcase />
      <ForSchools />
      <Testimonials />
      <Team />
      <Trial />
      <Contact />
    </RootLayout>
  )
}

export default App