'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import SpaceModel from '@/components/animations/SpaceModel'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  
  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current
    const heading = headingRef.current
    
    if (section && text && heading) {
      // Parallax effect for hero section
      gsap.fromTo(
        section,
        { backgroundPosition: '50% 0%' },
        {
          backgroundPosition: '50% 100%',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
      
      // Text animation on scroll
      gsap.fromTo(
        heading,
        { y: 0 },
        {
          y: -100,
          opacity: 0,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '25% top',
            scrub: true,
          },
        }
      )
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[url('/images/stars-bg.jpg')] bg-cover"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-0"></div>
      
      {/* Animated spotlight effect */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        <div className="animate-spotlight absolute -left-1/2 -top-1/2 h-[200%] w-[200%] bg-gradient-to-r from-primary/5 via-primary/25 to-primary/5 opacity-0"></div>
      </div>
      
      <div 
        ref={textRef}
        className="container relative z-10 mx-auto px-4 py-32 sm:py-48 lg:py-56 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
        >
          <h1 
            ref={headingRef}
            className="tracking-tight max-w-4xl mx-auto"
          >
            <span className="block text-4xl font-bold text-foreground/80 mb-4">
              Transformamos Ideas En
            </span>
            <span className="block text-7xl sm:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent glow-text">
              Experiencias Digitales
            </span>
          </h1>
          
          <p className="mt-8 text-xl text-foreground/70 max-w-2xl mx-auto">
            Somos la agencia de desarrollo líder en Latinoamérica. Creamos soluciones digitales 
            innovadoras que transforman negocios y cautivan usuarios.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="#contact"
              className="px-8 py-3 bg-primary rounded-full text-white font-medium hover:bg-primary/90 transition-colors cosmic-glow"
            >
              Inicia tu proyecto
            </Link>
            <Link 
              href="#services"
              className="px-8 py-3 bg-background border border-border rounded-full text-foreground/90 font-medium hover:bg-muted/20 transition-colors"
            >
              Descubre nuestros servicios
            </Link>
          </div>
          
          <div className="mt-16 flex items-center justify-center gap-8 text-foreground/50">
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">300+</p>
              <p className="text-sm">Proyectos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">99%</p>
              <p className="text-sm">Satisfacción</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">24/7</p>
              <p className="text-sm">Soporte</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* 3D Space Model */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <SpaceModel />
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div 
          animate={{ 
            y: [0, 10, 0], 
            opacity: [0.2, 1, 0.2] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2 
          }}
          className="w-8 h-12 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              delay: 0.3
            }}
            className="w-1 h-3 bg-foreground/70 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  )
}