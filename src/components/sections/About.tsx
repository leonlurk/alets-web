'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  
  // Framer Motion inView detection
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })
  const isTextInView = useInView(textRef, { once: true, amount: 0.5 })
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 })
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 })
  
  useEffect(() => {
    const section = sectionRef.current
    
    if (section) {
      // Create a timeline for staggered animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      })
      
      // Add animations to the timeline
      tl.fromTo(
        '.stat-item',
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.8,
          ease: 'power2.out'
        }
      )
    }
  }, [])

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Background decorative elements - Usar colores del tema */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.h2 
              ref={headingRef}
              initial={{ opacity: 0, y: 20 }}
              animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
              className="text-3xl md:text-4xl font-bold mb-8 text-foreground"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Quiénes Somos
              </span>
            </motion.h2>
            
            <motion.div 
              ref={textRef}
              initial={{ opacity: 0, y: 20 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
            >
              <p className="text-lg text-foreground/80 mb-6">
                En Alets, no solo creamos software, construimos el futuro digital de Latinoamérica. Somos la agencia líder que transforma ideas audaces en soluciones tecnológicas robustas y escalables.
              </p>
              <p className="text-lg text-foreground/80 mb-6">
                Nuestro equipo está formado por los ingenieros, diseñadores y estrategas más talentosos de la región, unidos por la pasión de superar los límites de la innovación y entregar resultados excepcionales.
              </p>
              <p className="text-lg text-foreground/80">
                Fusionamos la excelencia técnica con un diseño intuitivo y estratégico, creando productos digitales que no solo funcionan a la perfección, sino que definen el estándar de la industria e impulsan el crecimiento de nuestros clientes.
              </p>
              
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary/80 to-secondary/80"></div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-foreground/70">
                  <span className="font-semibold">+40 profesionales</span> trabajando en todo Latinoamérica
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isImageInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
            className="relative perspective"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden cosmic-glow">
              <div className="relative w-full aspect-[4/3] bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-2xl overflow-hidden border border-white/10">
                {/* Imagen placeholder - reemplazar por imagen real */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                  <p className="text-center text-white/70 text-lg">Equipo Alets</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 w-24 h-24 rounded-xl bg-gradient-to-br from-primary to-purple-800 opacity-90 shadow-lg"
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold">
                5+ Años
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-blue-700 opacity-90 shadow-lg"
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold">
                300+
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <motion.div 
          ref={statsRef}
          initial={{ opacity: 0 }}
          animate={isStatsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="stat-item p-6 bg-background border border-border/50 rounded-xl hover:border-primary/50 transition-colors duration-300">
            <div className="text-4xl font-bold text-primary mb-2">300+</div>
            <div className="text-foreground/60">Proyectos Completados</div>
          </div>
          
          <div className="stat-item p-6 bg-background border border-border/50 rounded-xl hover:border-primary/50 transition-colors duration-300">
            <div className="text-4xl font-bold text-primary mb-2">40+</div>
            <div className="text-foreground/60">Profesionales Expertos</div>
          </div>
          
          <div className="stat-item p-6 bg-background border border-border/50 rounded-xl hover:border-primary/50 transition-colors duration-300">
            <div className="text-4xl font-bold text-primary mb-2">12</div>
            <div className="text-foreground/60">Países</div>
          </div>
          
          <div className="stat-item p-6 bg-background border border-border/50 rounded-xl hover:border-primary/50 transition-colors duration-300">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-foreground/60">Clientes Satisfechos</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}