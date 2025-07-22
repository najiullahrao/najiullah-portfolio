import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { Button } from '../ui/button'
import Lottie from 'lottie-react'
import RobotSaldando from '../../animations/RobotSaludando.json'

export default function HomeSection({ data, onSectionChange }) {
  const { personal } = data

  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div className="text-center md:text-left space-y-8">
            {/* Name and Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-6xl md:text-7xl font-bold text-glow"
              >
                {personal.name}
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl md:text-3xl text-primary font-light"
              >
                {personal.title}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0"
              >
                {personal.tagline}
              </motion.p>
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg text-foreground/80 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            >
              {personal.bio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
            >
              <Button
                onClick={() => onSectionChange('projects')}
                className="glass-effect glow-effect px-8 py-3 text-lg"
                size="lg"
              >
                View My Work
                <ExternalLink className="ml-2" size={20} />
              </Button>
              
              <Button
                onClick={() => onSectionChange('contact')}
                variant="outline"
                className="glass-effect px-8 py-3 text-lg"
                size="lg"
              >
                Get In Touch
                <Mail className="ml-2" size={20} />
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex justify-center md:justify-start space-x-6"
            >
              {personal.social.github && (
                <motion.a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect p-3 rounded-full hover:glow-effect transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={24} />
                </motion.a>
              )}
              
              {personal.social.linkedin && (
                <motion.a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect p-3 rounded-full hover:glow-effect transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={24} />
                </motion.a>
              )}
              
              <motion.button
                onClick={() => onSectionChange('contact')}
                className="glass-effect p-3 rounded-full hover:glow-effect transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.button>
            </motion.div>
          </div>

          {/* Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-md mx-auto row-start-1 md:col-start-2"
          >
            <Lottie animationData={RobotSaldando} />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          {/* <motion.button
            onClick={() => onSectionChange('about')}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.button> */}
        </motion.div>
      </div>
    </div>
  )
}

