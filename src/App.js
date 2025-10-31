import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EnrollmentPage from './pages/EnrollmentPage'
import ProgramsPage from './pages/ProgramsPage'
import SchoolsPage from './pages/SchoolsPage'
import WebDevelopmentPage from './pages/WebDevelopmentPage'
import BlogPage from './pages/BlogPage'
import ResourcesPage from './pages/ResourcesPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path=\"/\" element={<HomePage />} />
        <Route path=\"/enroll\" element={<EnrollmentPage />} />
        <Route path=\"/programs\" element={<ProgramsPage />} />
        <Route path=\"/schools\" element={<SchoolsPage />} />
        <Route path=\"/web-development\" element={<WebDevelopmentPage />} />
        <Route path=\"/blog\" element={<BlogPage />} />
        <Route path=\"/resources\" element={<ResourcesPage />} />
        <Route path=\"/contact\" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
