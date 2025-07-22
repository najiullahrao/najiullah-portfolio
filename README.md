# Interactive 3D Portfolio Website

A stunning, interactive 3D portfolio website built with React, Three.js, and modern web technologies. This project showcases a creative developer's work through immersive 3D experiences and smooth animations.

## 🌟 Features

- **Interactive 3D Scene**: Dynamic 3D background with floating geometric shapes, particles, and animated text
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Smooth Navigation**: Seamless transitions between different portfolio sections
- **Modern UI**: Glass morphism effects, glowing elements, and smooth animations
- **Editable Content**: Easy-to-modify JSON configuration for personal information
- **Performance Optimized**: Efficient 3D rendering with proper loading states

## 🚀 Live Demo

Visit the live website: [https://tkgpyzpi.manus.space](https://tkgpyzpi.manus.space)

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks and functional components
- **Three.js** - 3D graphics and WebGL rendering
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers and abstractions for Three.js
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
3d-portfolio/
├── public/
│   ├── fonts/                 # 3D text fonts
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/               # Reusable UI components
│   │   ├── sections/         # Portfolio sections
│   │   ├── Scene3D.jsx       # Main 3D scene component
│   │   └── Navigation.jsx    # Navigation component
│   ├── data/
│   │   └── portfolio.json    # Editable portfolio data
│   ├── App.jsx              # Main application component
│   ├── App.css              # Global styles and animations
│   └── main.jsx             # Application entry point
├── package.json
└── README.md
```

## 🎨 Customization

### Editing Portfolio Content

All portfolio content can be easily customized by editing the `src/data/portfolio.json` file:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "tagline": "Your Tagline",
    "bio": "Your Bio",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "Your Location",
    "website": "https://yourwebsite.com",
    "social": {
      "github": "https://github.com/yourusername",
      "linkedin": "https://linkedin.com/in/yourusername",
      "twitter": "https://twitter.com/yourusername"
    }
  },
  "skills": [...],
  "experience": [...],
  "projects": [...],
  "education": [...],
  "certifications": [...]
}
```

### Customizing Colors and Theme

The color scheme can be modified in `src/App.css`:

```css
:root {
  --primary: oklch(0.7 0.2 280);    /* Purple primary color */
  --accent: oklch(0.6 0.25 320);    /* Pink accent color */
  --background: oklch(0.05 0 0);    /* Dark background */
  /* ... other color variables */
}
```

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add the section to the navigation in `src/components/Navigation.jsx`
3. Include it in the main app routing in `src/App.jsx`

## 🚀 Development

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 3d-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
pnpm run build
```

The built files will be in the `dist/` directory.

## 📱 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

WebGL support is required for 3D features.

## 🎯 Performance Considerations

- 3D scene is optimized for smooth 60fps performance
- Lazy loading for heavy 3D assets
- Responsive design reduces complexity on mobile devices
- Efficient particle systems and geometry

## 🔧 Troubleshooting

### 3D Scene Not Loading

1. Check browser WebGL support
2. Ensure all dependencies are installed
3. Check browser console for errors

### Performance Issues

1. Reduce particle count in `Scene3D.jsx`
2. Disable auto-rotation on mobile
3. Lower 3D model complexity

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out:

- Email: alex@example.com
- GitHub: [Create an issue](https://github.com/yourusername/3d-portfolio/issues)

---

**Made with ❤️ using React, Three.js, and modern web technologies**

