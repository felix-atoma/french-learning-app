import React from 'react'
import Header from './EnhancedHeader'
import Footer from './Footer'
import AnimatedBackground from './AnimatedBackground'

const RootLayout = ({ children, title, description }) => {
  const defaultTitle = "French Learning Center GH - Excellence in French Education & Edutech Solutions"
  const defaultDescription = "Premier French language institution in Ghana offering comprehensive courses, school partnerships, innovative learning apps, and professional web development services for schools. Join 10,000+ successful students."

  // This will update the document title and meta tags
  React.useEffect(() => {
    document.title = title || defaultTitle
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content = description || defaultDescription
    
    // Update other meta tags as needed
    const updateMetaTag = (name, content) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`)
      if (!metaTag) {
        metaTag = document.createElement('meta')
        metaTag.name = name
        document.head.appendChild(metaTag)
      }
      metaTag.content = content
    }
    
    updateMetaTag('keywords', 'French courses Ghana, learn French Accra, French classes Ghana, DELF preparation, French for schools Ghana, school website development Ghana, edutech solutions Ghana, learning management system Ghana')
    updateMetaTag('author', 'French Learning Center GH')
  }, [title, description])

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "French Learning Center GH",
            "description": "Premier French language institution and edutech solutions provider in Ghana offering comprehensive French courses, school partnerships, innovative learning apps, and professional web development services for educational institutions.",
            "url": "https://frenchlearningcentergh.com",
            "telephone": "+233-59-1038-729",
            "email": "frenchlearningcentergh@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "GH",
              "addressRegion": "Greater Accra"
            },
            "areaServed": "GH",
            "foundingDate": "2018",
            "founder": {
              "@type": "Person",
              "name": "French Learning Center GH Team"
            },
            "numberOfEmployees": "10-50",
            "knowsAbout": [
              "French Language Education",
              "DELF/DALF Preparation",
              "GES Curriculum",
              "Language Learning Apps",
              "Educational Technology",
              "School Website Development",
              "Learning Management Systems",
              "Mobile App Development"
            ],
            "serviceType": [
              "French Language Courses",
              "School Partnerships",
              "Web Development Services",
              "Educational App Development",
              "Teacher Training"
            ],
            "offers": [
              {
                "@type": "Offer",
                "name": "Beginner French Course",
                "description": "3-month foundation French course for beginners",
                "price": "300",
                "priceCurrency": "GHS"
              },
              {
                "@type": "Offer",
                "name": "School Website Development",
                "description": "Professional website development for educational institutions",
                "price": "2500",
                "priceCurrency": "GHS"
              }
            ],
            "sameAs": [
              "https://facebook.com/frenchlearningcentergh",
              "https://instagram.com/frenchlearningcentergh",
              "https://twitter.com/frenchcentergh",
              "https://linkedin.com/company/frenchlearningcentergh"
            ]
          })
        }}
      />

      {/* Additional Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "French Learning Center GH",
            "alternateName": "FLC Ghana",
            "url": "https://frenchlearningcentergh.com",
            "logo": "https://frenchlearningcentergh.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+233-59-1038-729",
              "contactType": "customer service",
              "areaServed": "GH",
              "availableLanguage": ["en", "fr"]
            },
            "sameAs": [
              "https://facebook.com/frenchlearningcentergh",
              "https://instagram.com/frenchlearningcentergh",
              "https://twitter.com/frenchcentergh",
              "https://linkedin.com/company/frenchlearningcentergh"
            ]
          })
        }}
      />

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