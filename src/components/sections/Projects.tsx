'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: 'BancoDigital',
    description: 'Aplicación bancaria integral con biometría avanzada',
    category: 'Fintech',
    image: '/images/placeholder-project.jpg',
    tech: ['React Native', 'Node.js', 'AWS']
  },
  {
    id: 2,
    title: 'TravelSmart',
    description: 'Plataforma de reservas de viajes con IA predictiva',
    category: 'Turismo',
    image: '/images/placeholder-project.jpg',
    tech: ['Vue.js', 'Python', 'TensorFlow']
  },
  {
    id: 3,
    title: 'HealthTrack',
    description: 'Ecosistema para seguimiento médico y telemedicina',
    category: 'Salud',
    image: '/images/placeholder-project.jpg',
    tech: ['React', 'NextJS', 'MongoDB']
  },
  {
    id: 4,
    title: 'EcoTrack',
    description: 'Sistema de monitoreo ambiental en tiempo real',
    category: 'GreenTech',
    image: '/images/placeholder-project.jpg',
    tech: ['IoT', 'React', 'Firebase']
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const projectsContainerRef = useRef<HTMLDivElement>(null)
  
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })

  useEffect(() => {
    const section = sectionRef.current
    const projectsContainer = projectsContainerRef.current
    
    if (section && projectsContainer) {
      // Horizontal scroll para proyectos
      const projectItems = gsap.utils.toArray('.project-item')
      
      if (window.innerWidth >= 768) { // Solo en desktop
        gsap.to(projectItems, {
          xPercent: -100 * (projectItems.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: projectsContainer,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${projectsContainer.offsetWidth * 1.5}`,
          }
        })
      }
      
      // Animación de progreso al hacer scroll
      const progressBar = document.querySelector('.progress-bar')
      if (progressBar) {
        gsap.to(progressBar, {
          width: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: projectsContainer,
            scrub: 0.3,
            start: 'top top',
            end: () => `+=${projectsContainer.offsetWidth * 1.5}`,
          }
        })
      }
    }
  }, [])

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nuestros <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Proyectos</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Exploramos los límites de la tecnología para crear experiencias digitales excepcionales.
            Conoce algunos de nuestros casos de éxito.
          </p>
        </motion.div>
        
        <div className="relative mb-8">
          <div className="w-full h-1 bg-muted/20 rounded-full overflow-hidden">
            <div className="progress-bar h-full bg-gradient-to-r from-primary to-secondary w-0"></div>
          </div>
        </div>
      </div>
      
      {/* Proyectos con scroll horizontal en desktop */}
      <div 
        ref={projectsContainerRef}
        className="relative min-h-[50vh] md:min-h-[80vh] w-full"
      >
        <div className="flex flex-col md:flex-row w-full md:w-[400%]">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-item flex-shrink-0 w-full md:w-screen h-auto md:h-[80vh] px-4 py-8 md:py-0 md:px-0 flex items-center"
            >
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full max-w-6xl mx-auto h-full flex flex-col md:flex-row items-center gap-8 md:gap-16"
              >
                <div className="w-full md:w-1/2 h-64 md:h-3/4">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden cosmic-glow">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 rounded-2xl">
                      <span className="text-lg text-white/70">Imagen de {project.title}</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col">
                  <span className="text-sm font-medium text-primary mb-2">{project.category}</span>
                  <h3 className="text-2xl md:text-4xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg text-foreground/70 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-muted/20 text-foreground/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      Ver proyecto
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 text-center">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium hover:bg-primary/20 transition-colors"
        >
          Ver todos los proyectos
        </motion.a>
      </div>
    </section>
  )
}