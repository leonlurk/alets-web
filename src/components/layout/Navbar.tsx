'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.header 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          <span className="glow-text">Alets</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            Nosotros
          </Link>
          <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
            Servicios
          </Link>
          <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
            Proyectos
          </Link>
          <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
            Testimonios
          </Link>
          <Link href="#contact" 
            className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/80 transition-colors">
            Contáctanos
          </Link>
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d={isOpen 
                ? "M6 18L18 6M6 6l12 12" 
                : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} 
            />
          </svg>
        </button>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border/50 py-4">
            <div className="container flex flex-col space-y-4">
              <Link 
                href="#about" 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors px-4 py-2"
              >
                Nosotros
              </Link>
              <Link 
                href="#services" 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors px-4 py-2"
              >
                Servicios
              </Link>
              <Link 
                href="#projects" 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors px-4 py-2"
              >
                Proyectos
              </Link>
              <Link 
                href="#testimonials" 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors px-4 py-2"
              >
                Testimonios
              </Link>
              <Link 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/80 transition-colors mx-4"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  )
}