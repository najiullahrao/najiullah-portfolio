import { motion } from 'framer-motion'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Building, Calendar, Award, CheckCircle } from 'lucide-react'

export default function ExperienceSection({ data }) {
  const { experience, certifications } = data

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
          <h2 className="text-5xl md:text-6xl font-bold text-glow mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and key achievements in the tech industry
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-8">
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-semibold text-primary mb-8"
            >
              Professional Experience
            </motion.h3>
            
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <Card className="glass-effect glow-effect">
                  <CardContent className="p-8">
                    {/* Company and Position */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-semibold text-foreground mb-1">
                          {exp.position}
                        </h4>
                        <div className="flex items-center space-x-2 text-accent">
                          <Building size={18} />
                          <span className="text-lg font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground mt-2 md:mt-0">
                        <Calendar size={18} />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-4">
                      <h5 className="text-lg font-semibold text-primary flex items-center">
                        <Award className="mr-2" size={20} />
                        Key Achievements
                      </h5>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + achIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="text-accent mt-1 flex-shrink-0" size={16} />
                            <span className="text-foreground/80">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Timeline Connector */}
                    {index < experience.length - 1 && (
                      <div className="absolute -bottom-4 left-8 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent"></div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications Sidebar */}
          <div className="space-y-8">
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-semibold text-primary mb-8"
            >
              Certifications
            </motion.h3>
            
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="space-y-4"
              >
                <Card className="glass-effect">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Certification Badge */}
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center glow-effect">
                          <Award className="text-white" size={24} />
                        </div>
                      </div>

                      {/* Certification Details */}
                      <div className="text-center space-y-2">
                        <h4 className="text-lg font-semibold text-foreground">
                          {cert.name}
                        </h4>
                        <p className="text-accent font-medium">{cert.issuer}</p>
                        <p className="text-muted-foreground text-sm">{cert.date}</p>
                        {cert.credential_id && (
                          <Badge variant="outline" className="text-xs">
                            ID: {cert.credential_id}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            
          </div>
        </div>
      </motion.div>
    </div>
  )
}

