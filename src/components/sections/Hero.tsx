'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center cyberpunk-hero-bg"
    >
      {/* Animated spotlight effect */}
      {/* <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden"> */}
      {/*   <div className="animate-spotlight absolute -left-1/2 -top-1/2 h-[200%] w-[200%] bg-gradient-to-r from-primary/5 via-primary/25 to-primary/5 opacity-0"></div> */}
      {/* </div> */}
      
      <div 
        ref={textRef}
        className="container relative z-10 mx-auto px-4 py-16 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
        >
          <motion.h1 
            className="tracking-tight mx-auto overflow-visible"
            style={{ y: titleY, opacity: titleOpacity }}
          >
            <span className="block text-4xl font-bold text-muted-foreground mb-4">
              Transformamos Ideas En
            </span>
            <span className="block text-7xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent display-block py-1 mb-1 !overflow-visible">
              Experiencias Digitales
            </span>
          </motion.h1>
          
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto">
            Somos la agencia de desarrollo líder en Latinoamérica. Creamos soluciones digitales 
            innovadoras que transforman negocios y cautivan usuarios.
          </p>
          
          {/* Cyberpunk Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a // Use motion.a for animation
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px hsl(var(--primary))' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-primary-foreground hover:text-primary-foreground font-semibold rounded-sm border-2 border-primary hover:bg-primary/90 transition-all duration-300 shadow-md shadow-primary/30"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }} // Angled corner
            >
              Inicia tu proyecto
            </motion.a>
            <motion.a // Use motion.a for animation
              href="#services"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px hsl(var(--border))' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-border text-muted-foreground font-medium rounded-sm hover:border-primary hover:text-primary hover:shadow-md hover:shadow-primary/30 transition-all duration-300"
              style={{ clipPath: 'polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px)' }} // Angled corner opposite
            >
              Descubre servicios
            </motion.a>
          </div>
          
          <div className="mt-16 flex items-center justify-center gap-8 text-foreground/50">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">300+</p>
              <p className="text-sm uppercase tracking-wider">Proyectos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">99%</p>
              <p className="text-sm uppercase tracking-wider">Satisfacción</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">24/7</p>
              <p className="text-sm uppercase tracking-wider">Soporte</p>
            </div>
          </div>
        </motion.div>
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