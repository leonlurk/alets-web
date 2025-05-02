'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    company: 'CEO, BancoDigital',
    image: '/images/placeholder-avatar.png',
    comment: 'Alets transformó por completo nuestra presencia digital. El equipo entendió perfectamente nuestras necesidades y entregó un producto que superó todas nuestras expectativas.',
  },
  {
    id: 2,
    name: 'Ana García',
    company: 'CTO, TravelSmart',
    image: '/images/placeholder-avatar.png',
    comment: 'La experiencia de trabajar con Alets fue excepcional. Su nivel técnico y capacidad para resolver problemas complejos nos permitió lanzar nuestra plataforma en tiempo récord.',
  },
  {
    id: 3,
    name: 'Javier López',
    company: 'Product Manager, HealthTrack',
    image: '/images/placeholder-avatar.png',
    comment: 'El equipo de Alets no solo desarrolló nuestra aplicación, sino que contribuyó con ideas que mejoraron significativamente la experiencia del usuario. Seguimos trabajando con ellos en nuevos proyectos.',
  },
  {
    id: 4,
    name: 'Sofía Martínez',
    company: 'Directora de Operaciones, EcoTrack',
    image: '/images/placeholder-avatar.png',
    comment: 'Elegir a Alets fue la mejor decisión para nuestro negocio. Su enfoque metodológico y la calidad de su trabajo nos permitió escalar rápidamente nuestra plataforma.',
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
    }, 6000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      id="testimonials"
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Lo que <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Dicen de Nosotros</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Estas son algunas de las opiniones de quienes han confiado en nosotros.
          </p>
        </motion.div>
        
        <div 
          ref={testimonialsRef}
          className="max-w-4xl mx-auto mb-12"
        >
          <div 
            className="relative perspective bg-card/80 backdrop-blur-md rounded-md p-8 md:p-12 border border-border shadow-lg shadow-secondary/10"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}
          >
            <div className="absolute top-4 right-4 flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-secondary" fill="currentColor"/>
              ))}
            </div>
            
            <div className="flex items-center justify-center min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTestimonial}
                  initial={{ opacity: 0, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(5px)' }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <Quote className="mx-auto mb-6 text-primary/50 h-12 w-12" strokeWidth={1.5}/>
                  <p className="text-lg md:text-xl italic mb-8 text-foreground/90">{testimonials[activeTestimonial].comment}</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonials[activeTestimonial].name}</p>
                    <p className="text-muted-foreground text-sm">{testimonials[activeTestimonial].company}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-primary scale-125' : 'bg-muted/50 hover:bg-muted'
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mt-20 opacity-60">
          {[ 'CLIENT 1', 'CLIENT 2', 'CLIENT 3', 'CLIENT 4', 'CLIENT 5', 'CLIENT 6' ].map((brand, index) => (
            <span key={index} className="text-muted-foreground font-medium text-sm tracking-widest uppercase transition-opacity hover:opacity-80">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  )
}