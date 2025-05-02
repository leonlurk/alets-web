'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
    
    if (!section || !projectsContainer) return; // Salir si las refs no están listas

    // Usar matchMedia para animaciones responsivas
    const mm = gsap.matchMedia();

    mm.add({
      // Configuración para pantallas grandes (>= 768px)
      isDesktop: `(min-width: 768px)`,
      // Configuración para pantallas pequeñas (< 768px)
      isMobile: `(max-width: 767px)`,
      // Configuración para todas las pantallas (para limpieza)
      isAll: `(min-width: 0px)` 
    }, (context) => {
      // Extraer las condiciones del contexto - usar const
      const { isDesktop } = context.conditions as { isDesktop: boolean };

      const projectItems = gsap.utils.toArray('.project-item')
      const progressBar = document.querySelector('.progress-bar')

      if (isDesktop) {
        // --- Animación Scroll Horizontal (Solo Escritorio) ---
        gsap.to(projectItems, {
          xPercent: -100 * (projectItems.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: projectsContainer,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${projectsContainer.offsetWidth * (projectItems.length - 0.5)}`, // Ajuste potencial al end
            invalidateOnRefresh: true // Ayuda a recalcular en resize
          }
        });

        // --- Animación Barra Progreso (Escritorio, misma duración que scroll horizontal) ---
        if (progressBar) {
          gsap.to(progressBar, {
            width: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: projectsContainer,
              scrub: 0.3,
              start: 'top top',
              end: () => `+=${projectsContainer.offsetWidth * (projectItems.length - 0.5)}`, // Ajuste potencial al end
            }
          });
        }
      } else {
        // --- Animación Barra Progreso (Móvil, basada en altura total) ---
        // En móvil, no hay pin ni scroll horizontal, así que la barra 
        // debería progresar mientras toda la sección vertical es visible.
        if (progressBar) {
           gsap.to(progressBar, {
            width: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: projectsContainer, // O quizás 'sectionRef.current' si es más apropiado
              scrub: 0.3,
              start: 'top center+=100', // Empezar un poco después
              end: 'bottom bottom-=100' // Terminar un poco antes
            }
          });
        }
        // No aplicamos scroll horizontal ni pin en móvil
      }

      // Devolver una función de limpieza para este contexto
      // matchMedia se encarga de llamarla cuando las condiciones cambian
      return () => {
        // Esto mata TODAS las animaciones y ScrollTriggers creados DENTRO de este contexto
        gsap.killTweensOf(projectItems);
        gsap.killTweensOf(progressBar);
        // ScrollTrigger.killAll() es muy agresivo, es mejor dejar que matchMedia limpie
        // o matar triggers específicos si fuera necesario, pero mm.revert() lo hace.
      };
    });

    // Devolver una función de limpieza general para el useEffect (desmontar componente)
    return () => {
      mm.revert(); // Limpia todas las animaciones y listeners de matchMedia
    };
  }, []) // Dependencias vacías aún están bien porque matchMedia maneja los cambios

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Nuestro <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Portafolio de Innovación</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Casos de éxito que demuestran nuestra capacidad para transformar desafíos complejos
            en soluciones digitales líderes en el mercado.
          </p>
        </motion.div>
        
        <div className="relative mb-8 md:mb-0">
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <div className="progress-bar h-full bg-gradient-to-r from-primary to-secondary w-0"></div>
          </div>
        </div>
      </div>
      
      <div 
        ref={projectsContainerRef}
        className="relative min-h-[50vh] md:h-[80vh] w-full overflow-hidden"
      >
        <div className="flex flex-col md:flex-row w-full h-full">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-item flex-shrink-0 w-full md:w-full h-auto md:h-full py-12 px-6 md:py-0 md:px-16 flex items-center"
            >
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12"
              >
                <div className="w-full md:w-5/12 h-64 md:h-1/2 lg:h-2/3">
                  <div className="relative w-full h-full rounded-md overflow-hidden shadow-lg shadow-secondary/10 border border-border">
                    <div className="absolute inset-0 bg-card flex items-center justify-center 
                                      bg-[linear-gradient(hsl(var(--secondary)/0.03)_1px,transparent_1px),linear-gradient(to_right,hsl(var(--secondary)/0.03)_1px,hsl(var(--card))_1px)] 
                                      bg-[size:25px_25px]">
                      <span className="text-lg text-muted-foreground font-semibold">{project.title}</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-7/12 flex flex-col self-center md:self-auto">
                  <span className="text-sm font-medium text-secondary mb-2">{project.category}</span>
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">{project.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 rounded-sm bg-muted border border-border/50 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 text-sm border border-primary text-primary rounded-sm hover:bg-primary/10 transition-colors duration-300"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)' }}
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
          whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 text-sm border border-primary text-primary rounded-sm hover:bg-primary/10 transition-colors duration-300 font-medium"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
        >
          Ver todos los proyectos
        </motion.a>
      </div>
    </section>
  )
}