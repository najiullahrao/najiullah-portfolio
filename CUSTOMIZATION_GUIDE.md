# 3D Portfolio Customization Guide

This guide will help you customize your 3D portfolio website to match your personal brand and showcase your unique work.

## 📝 Quick Start Customization

### 1. Personal Information

Edit `src/data/portfolio.json` to update your personal details:

```json
{
  "personal": {
    "name": "Your Full Name",
    "title": "Your Professional Title",
    "tagline": "Your Catchy Tagline",
    "bio": "A brief description about yourself and your work",
    "location": "Your City, Country",
    "email": "your.email@domain.com",
    "phone": "+1 (555) 123-4567",
    "website": "https://yourwebsite.com"
  }
}
```

### 2. Social Media Links

Update your social media profiles:

```json
{
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername",
    "dribbble": "https://dribbble.com/yourusername"
  }
}
```

### 3. Skills Section

Customize your skills and proficiency levels:

```json
{
  "skills": [
    {
      "category": "Frontend Development",
      "items": ["React", "Vue.js", "Angular", "TypeScript"],
      "level": 90
    },
    {
      "category": "Backend Development", 
      "items": ["Node.js", "Python", "Java", "PostgreSQL"],
      "level": 75
    }
  ]
}
```

## 🎨 Visual Customization

### Color Scheme

Edit `src/App.css` to change the color palette:

```css
:root {
  /* Primary color (main brand color) */
  --primary: oklch(0.7 0.2 280);
  
  /* Accent color (highlights and buttons) */
  --accent: oklch(0.6 0.25 320);
  
  /* Background color */
  --background: oklch(0.05 0 0);
  
  /* Text color */
  --foreground: oklch(0.985 0 0);
}
```

### 3D Scene Customization

#### Changing 3D Object Colors

In `src/components/Scene3D.jsx`, modify the floating shapes:

```jsx
<Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
  <Box position={[-4, 2, -2]} args={[0.8, 0.8, 0.8]}>
    <meshStandardMaterial 
      color="#your-color-here" 
      metalness={0.8} 
      roughness={0.2} 
    />
  </Box>
</Float>
```

#### Adjusting Animation Speed

```jsx
// Slower rotation
groupRef.current.rotation.y = state.clock.elapsedTime * 0.05

// Faster floating
<Float speed={3} rotationIntensity={2} floatIntensity={3}>
```

#### Particle System

Customize the particle count and appearance:

```jsx
const particleCount = 200 // Increase for more particles
<pointsMaterial 
  size={0.1} 
  color="#your-color" 
  transparent 
  opacity={0.8} 
/>
```

## 📊 Content Sections

### Projects Section

Add your projects with detailed information:

```json
{
  "projects": [
    {
      "title": "Your Project Name",
      "description": "Detailed description of your project",
      "technologies": ["React", "Three.js", "Node.js"],
      "features": [
        "Key feature 1",
        "Key feature 2", 
        "Key feature 3"
      ],
      "demo_url": "https://your-demo.com",
      "github_url": "https://github.com/you/project",
      "image": "/path/to/project-image.jpg"
    }
  ]
}
```

### Experience Section

Document your work history:

```json
{
  "experience": [
    {
      "company": "Company Name",
      "position": "Your Position",
      "duration": "Start Date - End Date",
      "description": "Brief description of your role",
      "achievements": [
        "Achievement 1",
        "Achievement 2",
        "Achievement 3"
      ]
    }
  ]
}
```

### Education Section

Add your educational background:

```json
{
  "education": [
    {
      "institution": "University Name",
      "degree": "Your Degree",
      "duration": "Start Year - End Year",
      "gpa": "3.8/4.0",
      "relevant_courses": ["Course 1", "Course 2", "Course 3"]
    }
  ]
}
```

## 🎭 Animation Customization

### Loading Animation

Modify the loading screen in `src/App.jsx`:

```jsx
// Change loading duration
const timer = setTimeout(() => {
  setIsLoading(false)
}, 3000) // 3 seconds instead of 2

// Custom loading message
<div className="text-2xl font-semibold text-primary animate-pulse">
  Your Custom Loading Message...
</div>
```

### Section Transitions

Customize animation timing in section components:

```jsx
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0 } // Slower transition
  }
}
```

## 📱 Responsive Design

### Mobile Navigation

Customize mobile menu in `src/components/Navigation.jsx`:

```jsx
// Change mobile breakpoint
const checkMobile = () => {
  setIsMobile(window.innerWidth < 1024) // Tablet as mobile
}

// Customize mobile menu width
className="fixed right-0 top-0 h-full w-96 glass-effect p-8 pt-20"
```

### Mobile 3D Performance

Optimize 3D scene for mobile devices:

```jsx
// Reduce particles on mobile
const particleCount = isMobile ? 50 : 100

// Disable auto-rotation on mobile
autoRotate={!isMobile}
autoRotateSpeed={isMobile ? 0 : 0.5}
```

## 🖼️ Adding Images

### Project Images

1. Add images to `public/images/projects/`
2. Update project data:

```json
{
  "image": "/images/projects/your-project.jpg"
}
```

### Profile Picture

Add a profile section with your photo:

```jsx
<div className="w-32 h-32 rounded-full overflow-hidden">
  <img 
    src="/images/profile.jpg" 
    alt="Your Name"
    className="w-full h-full object-cover"
  />
</div>
```

## 🔧 Advanced Customization

### Adding New 3D Objects

Create custom 3D elements:

```jsx
function CustomShape() {
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 2, 8]} />
        <meshStandardMaterial color="#ff6b6b" />
      </mesh>
    </Float>
  )
}
```

### Custom Shaders

Add custom materials with shaders:

```jsx
import { shaderMaterial } from '@react-three/drei'

const CustomMaterial = shaderMaterial(
  { time: 0 },
  // Vertex shader
  `varying vec2 vUv;
   void main() {
     vUv = uv;
     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
   }`,
  // Fragment shader
  `uniform float time;
   varying vec2 vUv;
   void main() {
     gl_FragColor = vec4(sin(time + vUv.x), cos(time + vUv.y), 0.5, 1.0);
   }`
)
```

### Adding Sound Effects

Integrate audio feedback:

```jsx
import { useEffect } from 'react'

function useHoverSound() {
  useEffect(() => {
    const audio = new Audio('/sounds/hover.mp3')
    return () => audio.pause()
  }, [])
  
  const playHover = () => {
    const audio = new Audio('/sounds/hover.mp3')
    audio.play()
  }
  
  return playHover
}
```

## 🚀 Deployment Customization

### Custom Domain

After deployment, you can configure a custom domain:

1. Purchase a domain from a registrar
2. Configure DNS settings to point to your deployed URL
3. Update social media links and contact information

### SEO Optimization

Enhance SEO in `index.html`:

```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="your, keywords, here">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="/images/og-image.jpg">
```

## 💡 Tips and Best Practices

1. **Performance**: Keep 3D complexity reasonable for smooth performance
2. **Accessibility**: Ensure good color contrast and keyboard navigation
3. **Content**: Keep descriptions concise but informative
4. **Images**: Optimize images for web (WebP format recommended)
5. **Testing**: Test on various devices and browsers
6. **Updates**: Regularly update your portfolio with new projects

## 🆘 Troubleshooting

### Common Issues

**3D Scene Not Rendering:**
- Check WebGL support in browser
- Verify Three.js dependencies are installed
- Check browser console for errors

**Slow Performance:**
- Reduce particle count
- Simplify 3D geometry
- Disable shadows and complex lighting

**Mobile Issues:**
- Test responsive breakpoints
- Optimize 3D scene for mobile
- Check touch interactions

### Getting Help

If you need assistance with customization:

1. Check the browser console for error messages
2. Refer to the Three.js and React documentation
3. Create an issue in the project repository
4. Join the community discussions

---

Happy customizing! 🎨✨

