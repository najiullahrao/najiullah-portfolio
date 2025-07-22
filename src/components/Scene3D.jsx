import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { 
  OrbitControls, 
  Environment, 
  Float, 
  Text,
  Center,
  Sphere,
  Box,
  Torus,
  Stars
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Floating geometric shapes
function FloatingShapes() {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Box position={[-4, 2, -2]} args={[0.8, 0.8, 0.8]}>
          <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
        </Box>
      </Float>
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere position={[4, -1, -3]} args={[0.6]}>
          <meshStandardMaterial color="#ec4899" metalness={0.9} roughness={0.1} />
        </Sphere>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2.5}>
        <Torus position={[-2, -2, -4]} args={[0.8, 0.3, 16, 32]}>
          <meshStandardMaterial color="#06b6d4" metalness={0.7} roughness={0.3} />
        </Torus>
      </Float>
      
      <Float speed={1.2} rotationIntensity={1.2} floatIntensity={1.8}>
        <Box position={[3, 3, -5]} args={[0.6, 1.2, 0.6]}>
          <meshStandardMaterial color="#f59e0b" metalness={0.6} roughness={0.4} />
        </Box>
      </Float>
    </group>
  )
}

// Animated background particles
function Particles() {
  const particlesRef = useRef()
  const particleCount = 100
  
  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20
  }
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#8b5cf6" transparent opacity={0.6} />
    </points>
  )
}

// Main text using regular Text component
function MainText({ text = "PORTFOLIO" }) {
  const textRef = useRef()
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Center>
      <Text
        ref={textRef}
        fontSize={2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {text}
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#8b5cf6"
          emissiveIntensity={0.2}
        />
      </Text>
    </Center>
  )
}

// Loading fallback
function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-2xl text-primary animate-pulse">Loading 3D Scene...</div>
    </div>
  )
}

// Main Scene3D component
export default function Scene3D({ currentSection = "home" }) {
  const getSectionText = () => {
    switch (currentSection) {
      case 'about': return 'ABOUT'
      case 'skills': return 'SKILLS'
      case 'experience': return 'EXPERIENCE'
      case 'projects': return 'PROJECTS'
      case 'contact': return 'CONTACT'
      default: return 'Portfolio'
    }
  }

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0)
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#ec4899" />
          
          {/* Environment */}
          <Environment preset="night" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          
          {/* 3D Content */}
          <MainText text={getSectionText()} />
          <FloatingShapes />
          <Particles />
          
          {/* Controls */}
          <OrbitControls 
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

