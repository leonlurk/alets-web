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
      className="relative"
    >
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
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted/70 flex items-center justify-center overflow-hidden">
                      <div className="w-3 h-3 rounded-full bg-primary/50"></div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground/80">+40 profesionales</span> trabajando en LATAM
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
            <div className="w-full h-full rounded-md overflow-hidden shadow-lg shadow-secondary/10">
              <div className="relative w-full aspect-[4/3] bg-card rounded-md overflow-hidden border border-border">
                <div className="absolute inset-0 flex items-center justify-center 
                                  bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,hsl(var(--card))_1px)] 
                                  bg-[size:20px_20px]">
                  <p className="text-center text-muted-foreground text-lg font-semibold">Equipo Alets</p>
                </div>
              </div>
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 w-24 h-24 rounded-md bg-secondary/80 backdrop-blur-sm border border-white/10 shadow-lg p-2"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
            >
              <div className="w-full h-full flex items-center justify-center text-center text-secondary-foreground font-bold">
                5+ Años Exp.
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 w-20 h-20 rounded-md bg-muted/80 backdrop-blur-sm border border-white/10 shadow-lg p-2"
              style={{ clipPath: 'polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px)' }}
            >
              <div className="w-full h-full flex items-center justify-center text-center text-foreground font-bold">
                300+ Proyectos
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          ref={statsRef}
          initial={{ opacity: 0 }}
          animate={isStatsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { value: "300+", label: "Proyectos Completados" },
            { value: "40+", label: "Profesionales Expertos" },
            { value: "12", label: "Países" },
            { value: "98%", label: "Clientes Satisfechos" }
          ].map((stat, index) => (
             <motion.div 
               key={index}
               className="stat-item p-6 bg-card border border-border rounded-md transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/30"
               whileHover={{ y: -5, transition: { duration: 0.2 } }}
               style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
             >
               <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
               <div className="text-muted-foreground text-sm">{stat.label}</div>
             </motion.div>
           ))}
        </motion.div>
      </div>
    </section>
  )
}