import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Menu, X, Home, User, Code, Briefcase, Mail, Award, Sun, Moon } from 'lucide-react'

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9, rotate: -15 }}
      className="p-2 rounded-full glass-effect"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  )
}

export default function Navigation({ currentSection, onSectionChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleSectionChange = (sectionId) => {
    onSectionChange(sectionId)
    setIsOpen(false)
  }

  if (isMobile) {
    return (
      <>
        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed top-6 right-6 z-50 glass-effect p-3 rounded-full glow-effect"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md"
            >
              <motion.nav
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 h-full w-80 glass-effect p-8 pt-20"
              >
                <div className="space-y-6">
                  {navigationItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleSectionChange(item.id)}
                        className={`w-full flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 ${
                          currentSection === item.id
                            ? 'bg-primary text-primary-foreground glow-effect'
                            : 'hover:bg-secondary/50'
                        }`}
                      >
                        <Icon size={24} />
                        <span className="text-lg font-medium">{item.label}</span>
                      </motion.button>
                    )
                  })}
                  <div className="pt-6 border-t border-border/50 flex justify-center">
                    <ThemeToggle />
                  </div>
                </div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )
  }

  // Desktop Navigation
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40"
    >
      <div className="glass-effect px-4 py-2 rounded-full">
        <div className="flex items-center space-x-1">
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  currentSection === item.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
                <span className="text-sm font-medium hidden lg:block">{item.label}</span>
                
                {currentSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary/20 rounded-full glow-effect"
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  />
                )}
              </motion.button>
            )
          })}
          <div className="border-l border-border/50 h-6 mx-2"></div>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}

