'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { Color, MathUtils, Mesh, Points } from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function SphereMesh({ isMobile = false }) {
  const meshRef = useRef<Mesh>(null)
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1
    }
  })
  
  return (
    <mesh ref={meshRef} scale={isMobile ? 0.8 : 1}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial 
        color={new Color('#6C00FF')} 
        emissive={new Color('#2D00AB')}
        metalness={0.7}
        roughness={0.2}
        emissiveIntensity={0.4}
      />
    </mesh>
  )
}

function GlowingRing() {
  const ringRef = useRef<Mesh>(null)
  
  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.3) * 0.1 + 0.5
      ringRef.current.rotation.x = Math.cos(clock.getElapsedTime() * 0.2) * 0.1 + 0.2
    }
  })
  
  return (
    <mesh ref={ringRef} rotation={[0.5, 0, 0.5]} position={[0, 0, 0]}>
      <torusGeometry args={[2.2, 0.2, 16, 100]} />
      <meshStandardMaterial 
        color={new Color('#00EDFF')} 
        emissive={new Color('#00EDFF')}
        emissiveIntensity={1}
        transparent
        opacity={0.7}
      />
    </mesh>
  )
}

function FloatingParticles() {
  const particlesRef = useRef<Points>(null)
  
  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1000}
          array={new Float32Array(3000).map(() => MathUtils.randFloatSpread(10))}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color={new Color('#6C00FF')} />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <SphereMesh />
      <GlowingRing />
      <FloatingParticles />
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  )
}

export default function SpaceModel() {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
      <Scene />
    </Canvas>
  )
}