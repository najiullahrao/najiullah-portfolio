import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Globe, Download } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'

export default function AboutSection({ data }) {
  const { personal, education } = data

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="relative z-10 min-h-screen p-8 flex items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto w-full"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-glow mb-4">Who I Am</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know the person behind the code and creativity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio and Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Bio */}
            <Card className="glass-effect glow-effect">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">My Story</h3>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    {personal.bio}
                  </p>
                  <p>
                  With a passion for building impactful digital experiences, I specialize in crafting responsive, high-performance web and mobile applications that deliver real value to users. My journey started with traditional web development, but my curiosity for innovation led me to explore advanced frameworks, mobile development, and scalable back-end solutions.
                  </p>
                  <p>
                  When I’m not coding, I enjoy exploring emerging technologies, contributing to open-source projects, and refining my skills in modern frameworks like React, React Native, Next.js, and NestJS. I believe that combining technical expertise with a problem-solving mindset is the key to creating meaningful and user-centric software solutions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="glass-effect">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-accent" size={20} />
                    <span>{personal.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-accent" size={20} />
                    <a href={`mailto:${personal.email}`} className="hover:text-primary transition-colors">
                      {personal.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-accent" size={20} />
                    <a href={`tel:${personal.phone}`} className="hover:text-primary transition-colors">
                      {personal.phone}
                    </a>
                  </div>
                  {/* <div className="flex items-center space-x-3">
                    <Globe className="text-accent" size={20} />
                    <a href={personal.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      {personal.website}
                    </a>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Education and Resume */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Education */}
            <Card className="glass-effect">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Education</h3>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="border-l-2 border-primary/30 pl-6 pb-6 last:pb-0"
                  >
                    <div className="relative">
                      <div className="absolute -left-8 top-0 w-4 h-4 bg-primary rounded-full"></div>
                      <h4 className="text-xl font-semibold">{edu.degree}</h4>
                      <p className="text-accent font-medium">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm mb-2">{edu.duration}</p>
                      {edu.gpa && (
                        <p className="text-sm text-foreground/70 mb-2">GPA: {edu.gpa}</p>
                      )}
                      {edu.relevant_courses && (
                        <div className="mt-3">
                          <p className="text-sm font-medium mb-2">Relevant Courses:</p>
                          <div className="flex flex-wrap gap-2">
                            {edu.relevant_courses.map((course, courseIndex) => (
                              <span
                                key={courseIndex}
                                className="px-2 py-1 bg-secondary/50 rounded text-xs"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Resume Download */}
            <Card className="glass-effect glow-effect">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Download my complete resume for a detailed overview of my experience and qualifications.
                </p>
                <button
  onClick={() => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Najiullah_Resume.pdf'; // what the file will be saved as
    link.click();
  }}
  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
>
  Download Resume
</button>

              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card className="glass-effect">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Fun Facts</h3>
                <div className="space-y-3">
                <div className="flex items-center space-x-3">
    <span className="text-accent">💻</span>
    <span>Started coding full-stack apps as a teenager</span>
  </div>
  <div className="flex items-center space-x-3">
    <span className="text-accent">📱</span>
    <span>Love building sleek mobile apps with React Native</span>
  </div>
  {/* <div className="flex items-center space-x-3">
    <span className="text-accent">☕</span>
    <span>Caffeine + coding = my perfect workflow</span>
  </div> */}
  <div className="flex items-center space-x-3">
    <span className="text-accent">🚀</span>
    <span>Always exploring new web & AI technologies</span>
  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

