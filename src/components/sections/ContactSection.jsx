import { motion } from 'framer-motion'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'
import emailjs from 'emailjs-com'

export default function ContactSection({ data }) {
  const { personal } = data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        "service_zfd9uxr",   
        "template_19iwlcu",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "wJmrhM43FRjeLtqdb"   
      )
      .then((result) => {
        setSuccessMessage(`✅ Thank you, ${formData.name}! Your message has been sent. I will respond soon.`)
        setFormData({ name: '', email: '', subject: '', message: '' })
      },
        (error) => {
          console.error("EmailJS Error:", error)
          alert("❌ Oops! Something went wrong. Please try again.")
        }
      )
      .finally(() => setLoading(false))
  }
  // wJmrhM43FRjeLtqdb
  // "service_zfd9uxr",   // ✅ Replace with your EmailJS Service ID
  // "template_19iwlcu", 
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
          <h2 className="text-5xl md:text-6xl font-bold text-glow mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="glass-effect glow-effect">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Let's Connect
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-8">
                I'm always open to new opportunities, collaborations, or simply chatting about web and mobile development. Whether it's building full-stack apps with Next.js or crafting smooth user experiences in React Native—feel free to reach out!
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center space-x-4 p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a 
                        href={`mailto:${personal.email}`}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center space-x-4 p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <Phone className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a 
                        href={`tel:${personal.phone}`}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center space-x-4 p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground font-medium">{personal.location}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-border/30">
                  <h4 className="text-lg font-semibold text-primary mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {personal.social.github && (
                      <motion.a
                        href={personal.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 hover:glow-effect transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                    {personal.social.linkedin && (
                      <motion.a
                        href={personal.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 hover:glow-effect transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin size={20} />
                      </motion.a>
                    )}
                    {personal.social.twitter && (
                      <motion.a
                        href={personal.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 hover:glow-effect transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Twitter size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="glass-effect glow-effect">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="glass-effect"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="glass-effect"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground/80">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="glass-effect"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      required
                      className="glass-effect resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full glass-effect glow-effect"
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                  {successMessage && (
  <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center">
    {successMessage}
  </div>
)}

                </form>

                <div className="mt-6 pt-6 border-t border-border/30 text-center">
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours. Looking forward to hearing from you!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
