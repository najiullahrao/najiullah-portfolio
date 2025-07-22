import { motion } from 'framer-motion'
import { Card, CardContent } from '../ui/card'
import { Progress } from '../ui/progress'

export default function SkillsSection({ data }) {
  const { skills } = data

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut" }
    })
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
          <h2 className="text-5xl md:text-6xl font-bold text-glow mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="space-y-6"
            >
              <Card className="glass-effect glow-effect">
                <CardContent className="p-8">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-semibold text-primary">
                      {skillCategory.category}
                    </h3>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-accent">
                        {skillCategory.level}%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Proficiency
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="relative h-3 bg-secondary/30 rounded-full overflow-hidden">
                      <motion.div
                        variants={progressVariants}
                        custom={skillCategory.level}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        style={{
                          boxShadow: `0 0 20px ${skillCategory.level > 80 ? '#8b5cf6' : '#ec4899'}40`
                        }}
                      />
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-foreground/90 mb-3">
                      Technologies & Tools:
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                          className="flex items-center space-x-3 p-3 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-foreground/80 font-medium">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Skill Level Indicator */}
                  <div className="mt-6 pt-6 border-t border-border/30">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Skill Level:</span>
                      <div className="flex items-center space-x-2">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${
                              i < Math.floor(skillCategory.level / 20)
                                ? 'bg-primary glow-effect'
                                : 'bg-secondary/30'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-foreground/70 font-medium">
                          {skillCategory.level >= 90 ? 'Expert' :
                           skillCategory.level >= 80 ? 'Advanced' :
                           skillCategory.level >= 60 ? 'Intermediate' :
                           skillCategory.level >= 40 ? 'Beginner' : 'Learning'}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Info */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <Card className="glass-effect max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Continuous Learning
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Technology evolves rapidly, and I'm committed to staying at the forefront of innovation. 
                I regularly explore new frameworks, attend conferences, and contribute to open-source projects 
                to expand my skill set and share knowledge with the community.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {['WebGL', 'WebXR', 'AI/ML', 'Blockchain', 'Cloud Computing'].map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full text-sm font-medium border border-primary/30"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

