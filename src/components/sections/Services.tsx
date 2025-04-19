'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 1,
    icon: '💻',
    title: 'Desarrollo Web',
    description: 'Creamos sitios y aplicaciones web de alto rendimiento que cautivan a los usuarios y convierten visitantes en clientes.',
    technologies: ['React', 'NextJS', 'Vue', 'Node.js']
  },
  {
    id: 2,
    icon: '📱',
    title: 'Desarrollo Móvil',
    description: 'Aplicaciones nativas y multiplataforma que brindan experiencias excepcionales en iOS y Android.',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
  },
  {
    id: 3,
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Diseños centrados en el usuario que equilibran estética y funcionalidad para crear experiencias memorables.',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping']
  },
  {
    id: 4,
    icon: '🚀',
    title: 'DevOps & Cloud',
    description: 'Optimizamos el ciclo de vida del desarrollo con integraciones continuas y despliegues automatizados.',
    technologies: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes']
  },
  {
    id: 5,
    icon: '🔍',
    title: 'SEO & Marketing Digital',
    description: 'Estrategias para aumentar la visibilidad de tu negocio y atraer tráfico cualificado a tu sitio web.',
    technologies: ['Google Analytics', 'SEO', 'SEM', 'Growth Hacking']
  },
  {
    id: 6,
    icon: '🤖',
    title: 'Inteligencia Artificial',
    description: 'Soluciones basadas en IA y ML para automatizar procesos y obtener insights valiosos de tus datos.',
    technologies: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision']
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })

  // Referencias para cada servicio
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([])
  
  useEffect(() => {
    const section = sectionRef.current
    
    if (section) {
      // Animación de revelación horizontal para cada servicio
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
        }
      }).fromTo(
        '.service-card',
        { 
          x: (index) => index % 2 === 0 ? -100 : 100,
          opacity: 0,
        },
        { 
          x: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.8,
          ease: 'power2.out',
        }
      )
    }
  }, [])

  return (
    <section 
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Gradiente de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-60 h-60 rounded-full bg-primary/5 filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-secondary/5 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nuestros <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Servicios</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Ofrecemos una gama completa de soluciones digitales para impulsar tu negocio. 
            Desde el diseño hasta el despliegue, nos encargamos de todo.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              ref={el => (serviceRefs.current[index] = el)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="service-card group relative bg-background border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-background border border-border/50 text-foreground/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-primary rounded-full text-white font-medium hover:bg-primary/90 transition-colors cosmic-glow"
          >
            Consulta nuestros servicios
          </motion.a>
        </div>
      </div>
    </section>
  )
}