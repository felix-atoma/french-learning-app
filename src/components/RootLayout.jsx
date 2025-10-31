import React from 'react'
import Header from './EnhancedHeader'
import Footer from './Footer'
import AnimatedBackground from './AnimatedBackground'

const RootLayout = ({ children }) => {
  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>French Learning Center GH - Excellence in French Education</title>
        <meta name="description" content="Premier French language institution in Ghana offering comprehensive courses, school partnerships, and innovative learning apps. Join 10,000+ successful students." />
        <meta name="keywords" content="French courses Ghana, learn French Accra, French classes Ghana, DELF preparation, French for schools Ghana" />
        <meta property="og:title" content="French Learning Center GH" />
        <meta property="og:description" content="Excellence in French Education for Ghanaian Students" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://frenchlearningcentergh.com" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "French Learning Center GH",
            "description": "Premier French language institution in Ghana",
            "url": "https://frenchlearningcentergh.com",
            "telephone": "+233-59-1038-729",
            "email": "frenchlearningcentergh@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "GH"
            },
            "areaServed": "GH",
            "knowsAbout": [
              "French Language Education",
              "DELF/DALF Preparation",
              "GES Curriculum",
              "Language Learning Apps"
            ]
          })}
        </script>
      </head>

      <div className="min-h-screen bg-[#fefce8] relative overflow-hidden">
        <AnimatedBackground />
        <Header />
        <main className="pt-16 relative z-10">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default RootLayout