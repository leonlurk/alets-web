'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 })

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Fondo y elementos decorativos */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30"></div>
      <div className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-primary/5 filter blur-3xl opacity-50"></div>
      <div className="absolute -right-40 bottom-40 w-80 h-80 rounded-full bg-secondary/5 filter blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Hablemos
            </span> de tu Proyecto
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos listos para convertir tus ideas en realidad. Cuéntanos sobre tu proyecto 
            y juntos crearemos algo extraordinario.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Ubicación
              </h3>
              <p className="text-muted-foreground pl-8">
                Oficina Principal: Ciudad de México<br />
                Sucursales: Buenos Aires, Santiago, Bogotá
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <Mail size={20} className="mt-1 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Correo Electrónico</h3>
                <p className="text-muted-foreground">
                  info@alets.com<br />
                  soporte@alets.com
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Teléfono
              </h3>
              <p className="text-muted-foreground pl-8">
                +52 (55) 1234-5678<br />
                +1 (800) 123-4567
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Horario
              </h3>
              <p className="text-muted-foreground pl-8">
                Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                Soporte 24/7 para clientes
              </p>
            </div>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Síguenos</h3>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10z" /></svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 p-8 bg-card/80 backdrop-blur-md border border-border rounded-2xl shadow-xl shadow-primary/10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                placeholder="Cuéntanos sobre tu proyecto..."
              ></textarea>
            </div>
            
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                Enviar Mensaje
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}