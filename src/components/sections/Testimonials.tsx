'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    id: 1,
    name: 'Ana García',
    position: 'CEO, FinanceHub',
    comment: 'DevGenius transformó por completo nuestra presencia digital. El equipo entendió perfectamente nuestras necesidades y entregó un producto que superó todas nuestras expectativas.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    position: 'CTO, TechInnovate',
    comment: 'La experiencia de trabajar con DevGenius fue excepcional. Su nivel técnico y capacidad para resolver problemas complejos nos permitió lanzar nuestra plataforma en tiempo récord.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Lucía Martínez',
    position: 'Director de Marketing, GrowthBrand',
    comment: 'El equipo de DevGenius no solo desarrolló nuestra aplicación, sino que contribuyó con ideas que mejoraron significativamente la experiencia del usuario. Seguimos trabajando con ellos en nuevos proyectos.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Santiago Díaz',
    position: 'Fundador, EcoStartup',
    comment: 'Elegir a DevGenius fue la mejor decisión para nuestro negocio. Su enfoque metodológico y la calidad de su trabajo nos permitió escalar rápidamente nuestra plataforma.',
    rating: 5,
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })
  
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])
  
  useEffect(() => {
    const section = sectionRef.current
    
    if (section) {
      // Animación de parallax para el fondo
      gsap.fromTo(
        '.testimonial-bg-gradient',
        { y: '-20%' },
        {
          y: '20%',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }
  }, [])

  return (
    <section 
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Fondo dinámico */}
      <div className="testimonial-bg-gradient absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background"></div>
      <div className="absolute inset-0 mask-radial-faded"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lo que <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Dicen de Nosotros</span>
          </h2>
          <p className="text-lg text-foreground/70">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Estas son algunas de las opiniones de quienes han confiado en nosotros.
          </p>
        </motion.div>
        
        <div 
          ref={testimonialsRef}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="relative perspective bg-background/30 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 cosmic-glow">
            <div className="absolute top-4 right-4 flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-yellow-400" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <div className="flex items-center justify-center h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <svg 
                    className="mx-auto mb-6 text-primary/40 h-12 w-12" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg md:text-xl mb-8">{testimonials[activeTestimonial].comment}</p>
                  <div>
                    <p className="font-bold">{testimonials[activeTestimonial].name}</p>
                    <p className="text-foreground/60 text-sm">{testimonials[activeTestimonial].position}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeTestimonial ? 'bg-primary' : 'bg-foreground/20'
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {['Microsoft', 'Google', 'Amazon', 'Meta', 'Netflix', 'Spotify'].map((brand, index) => (
            <div key={index} className="text-foreground/40 font-medium text-lg">{brand}</div>
          ))}
        </div>
      </div>
    </section>
  )
}