import { motion } from 'framer-motion'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { ExternalLink, Github, Eye, Code, Zap, Mail } from 'lucide-react'

export default function ProjectsSection({ data }) {
  const { projects } = data

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
        className="max-w-7xl mx-auto w-full"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-glow mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my most impactful and innovative work
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Card className="glass-effect glow-effect h-full overflow-hidden hover:scale-105 transition-all duration-500">
                <CardContent className="p-0">
                  {/* Project Image/Preview */}
                  <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                    
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-primary/30">
                        {index === 0 ? '🛒' : index === 1 ? '📊' : index === 2 ? '🎨' : '💼'}
                      </div>
                    </div>

                    {/* Overlay with quick actions */}
                    <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 z-20">
                      {project.demo_url && (
                        <Button
                          size="sm"
                          className="glass-effect glow-effect"
                          onClick={() => window.open(project.demo_url, '_blank')}
                        >
                          <Eye className="mr-2" size={16} />
                          Live Demo
                        </Button>
                      )}
                      {project.github_url && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="glass-effect"
                          onClick={() => window.open(project.github_url, '_blank')}
                        >
                          <Github className="mr-2" size={16} />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 space-y-6">
                    {/* Title and Description */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-primary flex items-center">
                        <Code className="mr-2" size={16} />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-secondary/50 hover:bg-secondary/70 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-primary flex items-center">
                        <Zap className="mr-2" size={16} />
                        Key Features
                      </h4>
                      <div className="space-y-2">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                            className="flex items-center space-x-2 text-sm text-foreground/70"
                          >
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                        {project.features.length > 3 && (
                          <div className="text-sm text-muted-foreground">
                            +{project.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4">
                      {project.demo_url && (
                        <Button
                          className="flex-1 glass-effect glow-effect"
                          onClick={() => window.open(project.demo_url, '_blank')}
                        >
                          <ExternalLink className="mr-2" size={16} />
                          View Project
                        </Button>
                      )}
                      {project.github_url && (
                        <Button
                          variant="outline"
                          className="glass-effect"
                          onClick={() => window.open(project.github_url, '_blank')}
                        >
                          <Github size={16} />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          {/* <Card className="glass-effect glow-effect max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-foreground/80 mb-6">
                I'm always excited to take on new challenges and create amazing digital experiences. 
                Let's discuss how we can bring your ideas to life.
              </p>
              <Button className="glass-effect glow-effect" size="lg">
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
            </CardContent>
          </Card> */}
        </motion.div>
      </motion.div>
    </div>
  )
}

