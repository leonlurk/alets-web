'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// Import Lucide icons
import { Code, Smartphone, Palette, CloudCog, Search, BrainCircuit } from 'lucide-react' 

gsap.registerPlugin(ScrollTrigger)

const services = [
  { id: 1, icon: Code, title: 'Desarrollo Web', description: 'Creamos sitios y aplicaciones web de alto rendimiento que cautivan a los usuarios y convierten visitantes en clientes.', technologies: ['React', 'NextJS', 'Vue', 'Node.js'] },
  { id: 2, icon: Smartphone, title: 'Desarrollo Móvil', description: 'Aplicaciones nativas y multiplataforma que brindan experiencias excepcionales en iOS y Android.', technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
  { id: 3, icon: Palette, title: 'UI/UX Design', description: 'Diseños centrados en el usuario que equilibran estética y funcionalidad para crear experiencias memorables.', technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'] },
  { id: 4, icon: CloudCog, title: 'DevOps & Cloud', description: 'Optimizamos el ciclo de vida del desarrollo con integraciones continuas y despliegues automatizados.', technologies: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes'] },
  { id: 5, icon: Search, title: 'SEO & Marketing Digital', description: 'Estrategias para aumentar la visibilidad de tu negocio y atraer tráfico cualificado a tu sitio web.', technologies: ['Google Analytics', 'SEO', 'SEM', 'Growth Hacking'] },
  { id: 6, icon: BrainCircuit, title: 'Inteligencia Artificial', description: 'Soluciones basadas en IA y ML para automatizar procesos y obtener insights valiosos de tus datos.', technologies: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'] },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([])
  
  useEffect(() => {
    const section = sectionRef.current
    if (section) {
      // Keep animation logic for now
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
      // className="relative py-24 md:py-32 overflow-hidden bg-background"
      className="relative overflow-hidden" // Remove padding/bg
    >
      {/* Remove decorative elements */}
      {/* <div className="absolute top-20 left-10 w-60 h-60 rounded-full bg-primary/5 filter blur-3xl"></div> */}
      {/* <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-secondary/5 filter blur-3xl"></div> */}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
             {/* Update gradient */}
            Nuestros <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Servicios de Vanguardia</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Dominamos el espectro completo de tecnologías para entregar soluciones digitales integrales y de alto impacto.
          </p>
        </motion.div>
        
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon; // Get icon component
            return (
              <motion.div
                key={service.id}
                ref={el => { serviceRefs.current[index] = el; }}
                className="service-card group relative bg-card border border-border rounded-md p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/30"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)' }} // Angled corner
                initial={{ opacity: 0 }} // Use Framer Motion initial/animate instead of GSAP for simple fade/slide?
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                // viewport={{ once: true, amount: 0.3 }} // Keep viewport if preferred
              >
                {/* Remove gradient overlay div */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div> */}
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Use Lucide Icon */}
                  <Icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5}/> 
                  <h3 className="text-xl font-semibold mb-3 text-foreground transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm flex-grow">{service.description}</p>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 rounded-sm bg-muted border border-border/50 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* Button */}
        <div className="mt-20 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px hsl(var(--primary))' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-sm border-2 border-primary hover:bg-primary/90 transition-all duration-300 shadow-md shadow-primary/30"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }} // Angled corner
          >
            Consulta nuestros servicios
          </motion.a>
        </div>
      </div>
    </section>
  )
}