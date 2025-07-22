import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'  // ✅ Added Toast
import Scene3D from './components/Scene3D'
import Navigation from './components/Navigation'
import HomeSection from './components/sections/HomeSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ExperienceSection from './components/sections/ExperienceSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'
import portfolioData from './data/portfolio.json'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for 3D assets
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <AboutSection data={portfolioData} />
      case 'skills':
        return <SkillsSection data={portfolioData} />
      case 'experience':
        return <ExperienceSection data={portfolioData} />
      case 'projects':
        return <ProjectsSection data={portfolioData} />
      case 'contact':
        return <ContactSection data={portfolioData} />
      default:
        return <HomeSection data={portfolioData} onSectionChange={setCurrentSection} />
    }
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto"></div>
          <div className="text-2xl font-semibold text-primary animate-pulse">
          Getting Things Ready...
        </div>
        <div className="text-muted-foreground">
          Your journey through my work is about to begin
        </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full min-h-screen">
      {/* ✅ Toast Notifications (Global) */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* 3D Background Scene */}
      <div className="fixed inset-0 z-0">
        <Scene3D currentSection={currentSection} />
      </div>

      {/* Navigation */}
      <Navigation
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />

      {/* Content Sections */}
      <div className={`relative z-10 ${currentSection !== 'home' ? 'pt-24 lg:pt-28' : ''}`}>
        <AnimatePresence mode="wait">
          <div key={currentSection}>{renderSection()}</div>
        </AnimatePresence>
      </div>

      {/* Gradient Overlays for better text readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40 pointer-events-none z-5"></div>
    </div>
  )
}

export default App
